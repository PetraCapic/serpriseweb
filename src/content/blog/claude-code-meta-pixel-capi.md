---
title: "Kako spojiti Claude Code s Meta Pixelom, Conversions API-jem i Meta Ads"
description: "Isti događaj iz preglednika i sa servera, bez duplih konverzija, i podaci o kampanjama u istom razgovoru s Claudeom. Koraci i pravila koja koristimo."
date: 2026-11-01
image: /blog/claude-code-meta-pixel-capi/naslovna.png
imageAlt: "Vodič: kako spojiti Claude Code s Meta Pixelom, Conversions API-jem i Meta Ads"
---

Meta Pixel u pregledniku izgubi dio događaja zbog blokera oglasa, odbijenih kolačića i Safarija. Conversions API (CAPI) šalje iste događaje sa servera. Kad su oba postavljena ispravno, Meta dobije više podataka za optimizaciju kampanja, a konverzije se ne broje dvaput.

Ovo je četvrti od četiri vodiča uz naš [case study o Claude Codeu na portalu za osmrtnice](/blog/claude-code-case-study-osmrtnice/).

## Tri dijela koja spajamo

1. **Meta Pixel** u pregledniku, preko Tag Managera ili direktno u kodu.
2. **Conversions API** sa servera. Kod nas su to Supabase funkcije koje se pokreću kad se napravi memorijal ili potvrdi plaćanje.
3. **Meta Ads podaci** (kampanje, potrošnja, klikovi) za Claudea, preko konektora.

## Korak 1: token za Conversions API

1. U Meta Events Manageru odaberite svoj Pixel (dataset).
2. U "Settings", odjeljak "Conversions API", kliknite "Generate access token".
3. Token spremite kao tajnu na serveru, na primjer META_CAPI_ACCESS_TOKEN. Kod nas je to tajna u Supabaseu, dostupna samo serverskim funkcijama.

Za testiranje u istom ekranu, na kartici "Test events", dobijete test kod. Spremite ga kao zasebnu varijablu, da ga možete uključiti i isključiti bez promjene koda.

## Korak 2: isti event_id u pregledniku i na serveru

Ovo je najvažnije pravilo. Ako Pixel i server pošalju isti događaj s istim imenom i istim event_id, Meta ih spoji u jedan. Ako se event_id razlikuje, konverzija se broji dvaput.

![Shema: isti StartMemorial događaj iz Meta Pixela i iz Conversions API-ja s istim event_id, Meta ga broji jednom](/blog/claude-code-meta-pixel-capi/meta-dedup.png)

Kod nas je event_id izveden iz stvarnog objekta: za početak izrade memorijala to je prefiks i ID korisnika (start_ i ID). Tako ga i preglednik i server znaju bez dogovaranja.

Pravila koja smo dali Claudeu:

- događaj kupnje (Purchase) šalje samo server, i to tek kad Stripe potvrdi plaćanje,
- serverska funkcija prima događaje samo s produkcijske domene,
- šalje se samo uz pristanak na marketinške kolačiće,
- e-mail i ime šalju se samo hashirani (SHA-256), kako Meta traži,
- ako slanje ne uspije, događaj se sprema u tablicu i šalje ponovno.

## Korak 3: provjera

1. Uključite test kod i prođite kroz kupnju ili prijavu na webu.
2. U Events Manageru, na kartici "Test events", trebate vidjeti isti događaj dvaput: jednom iz preglednika (Browser) i jednom sa servera (Server).
3. Nakon nekoliko sati, u pregledu događaja trebate vidjeti da su spojeni (deduplicirani).

Claude može napisati i malu testnu funkciju koja šalje jedan probni događaj s test kodom. Kod nas se zove test-meta-capi.

## Korak 4: Meta Ads podaci za Claudea

Za čitanje kampanja koristimo Windsor.ai konektor u Claudeu. Kad je spojen, Claude u razgovoru dobije potrošnju, klikove i konverzije po kampanji i može ih usporediti s podacima iz GA4 i Search Consolea.

Ovo je stvarni odgovor na jedno pitanje o kampanjama portala u listopadu:

![Meta kampanje portala za osmrtnice u listopadu 2026.: klikovi i cijena klika po kampanji](/blog/claude-code-meta-pixel-capi/meta-kampanje.png)

Kampanje za besplatne vodiče i e-book imaju klik oko 1 cent, a prodajne kampanje i retargeting oko 12 centi. To nije loše samo po sebi, jer prodajne kampanje ciljaju manju i topliju publiku. Ali pokazuje zašto smo vodiče koristili kao prvi korak: jeftino dovode ljude koji se onda prijave na newsletter.

Isti konektor podržava i promjene na kampanjama (na primjer pauziranje). Takve promjene Claude radi samo kad ih izričito potvrdite.

## Na što paziti

- **Ne optimizirajte kampanju na događaj koji se okida prerano.** Kod nas se StartMemorial neko vrijeme okidao na samo otvaranje forme, pa je kampanja učila na pogrešnim ljudima. Ispravak je bio u kodu: događaj se sada šalje tek nakon prve stvarne radnje u formi, a oznaka u Tag Manageru je pauzirana.
- **Standardni i prilagođeni događaji.** Uz vlastite događaje (StartMemorial) šaljemo i standardne (AddToCart, Subscribe), jer ih Meta bolje koristi za optimizaciju.
- **Testovi.** Automatski testovi na webu ne smiju slati događaje u Metu. Kod nas ih kod prepoznaje i preskače.

## Sve zajedno

Kako se Search Console, GA4, Tag Manager i Meta spajaju u jedan projekt i što je to donijelo, opisano je u [case studyju](/blog/claude-code-case-study-osmrtnice/).
