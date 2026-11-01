---
title: "Claude Code u praksi: 17 dana, 86 promjena i 2,2 puta više klikova"
description: "Kako smo s Claude Codeom vodili SEO, programmatic stranice i praćenje konverzija na portalu osmrtnica.com.hr. Popis aktivnosti, alati, brojke iz Search Consolea i plan."
date: 2026-11-01
image: /blog/claude-code-case-study-osmrtnice/naslovna.png
imageAlt: "Case study: što smo s Claude Codeom napravili na portalu za osmrtnice, 2,2 puta više klikova s Googlea"
---

U 12 dana prije 19. listopada portal osmrtnica.com.hr dobio je 9.584 klika s Googlea. U 12 dana poslije dobio ih je 20.857. U istim danima prošle godine broj klikova se nije mijenjao (8.144 i 8.205).

Sve promjene na portalu od 16. listopada napravljene su u Claude Codeu: 86 spojenih pull requestova u 17 dana. U ovom članku je popis svega što smo radili, kako smo Claude Code spojili sa Search Consoleom, Google Analyticsom, Tag Managerom i Metom, što je donijelo rezultat, a što nije, i što radimo dalje.

Ako vas zanima samo dio s ChatGPT-om, on je opisan u zasebnom [case studyju o AI vidljivosti](/blog/case-study-ai-vidljivost-osmrtnice/).

## Što je Claude Code i kako ga koristimo

Claude Code je Anthropicov alat u kojem Claude radi direktno u repozitoriju projekta. Čita kod, pokreće naredbe, mijenja datoteke i otvara pull request na GitHubu. Može raditi u terminalu, u desktop aplikaciji ili u pregledniku na claude.ai/code. Mi ga koristimo u pregledniku, u oblaku, pa ništa ne ovisi o nečijem laptopu.

Naš način rada je jednostavan:

- **Jedan zadatak, jedna nit, jedan pull request.** "Dodaj raspored sprovoda za Karlovac" je jedan zadatak. Claude napravi promjenu, otvori PR, Netlify napravi pregled, a nakon spajanja promjena ide na portal.
- **Pravila projekta su u repozitoriju.** U datoteci AGENTS.md stoje pravila koja Claude mora poštovati (gdje se spremaju slike, kako se računa atribucija prodaje i slično), pa ih ne ponavljamo u svakom zadatku.
- **Ključevi su u postavkama okruženja, nikad u kodu.** Google servisni račun, Meta token i ostalo Claude čita iz varijabli okruženja.
- **Isti Claude koji mijenja kod čita i podatke.** Search Console, GA4 i Meta Ads spojeni su na isti projekt, pa odluka o promjeni i provjera rezultata idu u istoj niti.

## Polazna točka

Portal je od srpnja 2025. napravljen u Lovableu, alatu koji iz opisa radi React aplikaciju. U repozitoriju je do listopada bilo 1.562 commita Lovableovog bota. 15. listopada dodali smo Netlify konfiguraciju, tako da se portal objavljuje direktno iz GitHuba, bez Lovablea. Od tada sve radimo u Claude Codeu.

Stanje sredinom listopada:

- Od ljeta klikovi s Googlea su padali. U tjednu od 12. do 18. listopada bilo ih je 5.479, a u najboljim tjednima ljeta više od 11.000.
- Sav sadržaj crtao se u pregledniku. Crawleri koji ne pokreću JavaScript vidjeli su praznu stranicu.
- Praćenje prodaje bilo je djelomično: GA4 je od 1. do 18. listopada bilježio otprilike četvrtinu posjeta, a Meta nije dobivala događaje sa servera.

![Klikovi s Googlea po tjednu od srpnja 2025. do listopada 2026.](/blog/claude-code-case-study-osmrtnice/tjedni-klikovi.png)

## Strategija: pet smjerova

Nismo krenuli s novim tekstovima. Krenuli smo od pitanja koje stranice već dobivaju impresije i zašto ne dobivaju više klikova.

1. **Tehnički SEO:** svaka važna stranica mora u HTML-u imati sadržaj, naslov, opis, canonical i strukturirane podatke.
2. **Programmatic stranice:** portal ima tisuće stranica napravljenih iz baze (osmrtnice, gradovi, sprovodi, groblja). One donose najviše prometa, pa su prve na redu.
3. **Sadržaj:** blog i vodiči za pitanja koja ljudi imaju nakon smrti bliske osobe (obiteljska mirovina, smrt u inozemstvu, digitalna ostavština).
4. **Mjerenje:** svaki korak prodaje mora biti vidljiv u GA4 i u Meti, i to sa servera, ne samo iz preglednika.
5. **Konverzija:** jednostavnija izrada digitalnog memorijala i naplata virtualnih svijeća.

## Popis aktivnosti po danima

![Klikovi po danu u listopadu i broj spojenih pull requestova po danu](/blog/claude-code-case-study-osmrtnice/pr-i-klikovi.png)

**16. do 18. listopada: mjerenje i prodaja**

- Prodajni lijevak memorijala šalje se u GA4 preko Tag Managera, s GA4 ecommerce događajima (begin_checkout, purchase).
- Meta Conversions API: izrada i plaćanje memorijala šalju se sa servera, uz isti event_id kao u Pixelu, da se konverzije ne broje dvaput.
- Događaji se šalju samo s produkcijske domene i samo uz pristanak na kolačiće.
- Izrada memorijala bez registracije, podsjetnik za nedovršene memorijale, prijava na newsletter na blogu i osmrtnicama.

**19. listopada: HTML za crawlere i programmatic stranice**

- Netlify edge funkcija upisuje sadržaj, naslov, opis, canonical i JSON-LD u HTML za naslovnicu, hubove, gradove, sprovode, groblja, blog, memorijale i pojedinačne osmrtnice.
- Statične stranice se pri buildu renderiraju u gotov HTML.
- Jedan URL po gradu: varijante s dijakritikom i razmacima preusmjeravaju se 301 na jedan oblik.
- Gradske stranice dobile su nadolazeće sprovode, e-mail obavijest za grad i test naslova, H1 i H2.
- Dnevni uvoz rasporeda sprovoda za Karlovac, Koprivnicu, Dubrovnik i Rijeku.

**20. do 23. listopada: interni linkovi i čišćenje**

- Svaka osmrtnica linka na svoj grad i groblje, a imena na stranicama gradova postala su pravi linkovi.
- Ispravljeni meta opisi osmrtnica i sadržaj koji je audit označio kao netočan.
- Raspored sprovoda za Varaždin, Čakovec, Veliku Goricu, Požegu i Jastrebarsko.
- robots.txt u jednoj grupi za sve crawlere, IndexNow za nove osmrtnice svaki sat, uklonjen SearchAction koji je u Ahrefsu davao 24.211 grešaka.
- Landing stranice za tri besplatna vodiča i četiri nova članka na blogu s infografikama.

**24. listopada do 1. studenog: konverzija**

- Izrada memorijala u manje koraka, e-mail na prvom ekranu.
- Naplata virtualnih svijeća (7, 14 i 30 dana), promo kodovi i popust za Svi svete.
- Praćenje plaćenih svijeća u GA4, Meti i Google Adsu.
- Statistika u adminu portala: Search Console i GA4 lijevci na jednoj stranici.

## Koje programmatic stranice smo optimizirali i što se dogodilo

![Klikovi po vrsti stranice 12 dana prije i poslije 19. listopada, uz usporedbu s istim danima 2025.](/blog/claude-code-case-study-osmrtnice/programmatic-stranice.png)

Kraj listopada je zbog Svih svetih jači period za ovu temu. Zato svaku vrstu stranice uspoređujemo s istim danima 2025. Tako se vidi koliki je dio rasta sezonski.

- **Pojedinačne osmrtnice** (/ime-prezime): s 989 na 8.414 klikova. Prošle godine u istim danima pad od 11 %. Jedna osmrtnica je zbog puno pretraga po imenu donijela 1.574 klika. Bez nje rast je i dalje oko 6,9 puta. Impresije su narasle s 18.336 na 101.446.
- **Sprovodi po gradu** (/sprovodi/grad): s 349 na 910. Prošle godine bez promjene. Ovdje smo dodali stvarne rasporede sprovoda za gradove, pa stranice imaju svježi sadržaj svaki dan.
- **Osmrtnice po gradu** (/umrli/grad): s 7.618 na 10.894, ali i prošle godine rast je bio 49 %. Ovaj rast je većinom sezonski. Ove stranice su i dalje najveći izvor prometa, pa su prve u planu.
- **Blog i groblja:** mali rast, dok su prošle godine u istim danima pale.

Broj stranica s barem jednim klikom porastao je s 959 na 3.939. Prosječna pozicija ostala je oko 6.

## Backlinkovi

Linkove nismo radili u Claude Codeu. Ahrefs je od 1. listopada zabilježio 13 novih hrvatskih domena koje linkaju na portal, među njima story.hr (DR 64), fashion.hr (DR 52), istrain.hr (DR 42), bjelovar.info (DR 39), liberoportal.hr (DR 35) i lokalne portale kao što su likemetkovic.hr, glasgrada.hr i moje-djakovo.com. Link s telegram.hr je nofollow.

Utjecaj linkova ne možemo odvojiti od utjecaja tehničkih promjena. Skok 19. listopada dogodio se isti dan kad je sadržaj stavljen u HTML, a linkovi su stizali postupno kroz cijeli mjesec. Zato rast ne pripisujemo linkovima.

## Praćenje konverzija, sve preko Claude Codea

Ovo je dio koji se najviše isplatio, iako se ne vidi u grafu klikova.

- **Kod:** Claude je u aplikaciju dodao događaje za svaki korak (pretraga osobe, odabir osobe, početak izrade, plaćanje) i šalje ih u dataLayer.
- **Tag Manager:** od 16. listopada objavljeno je 9 verzija spremnika. Svaka ima opis što mijenja, na primjer "Pauziran Meta StartMemorial (okidao na otvaranje forme; event sada šalje kod nakon odabira osobe)".
- **GA4:** ključni događaji (memorial_started, obituary_memorial_click) postavljeni su preko API-ja, a izvještaje Claude čita sam.
- **Meta:** isti događaji idu iz preglednika (Pixel) i sa servera (Conversions API), s istim event_id. Kampanje optimiziraju na stvarne korake prodaje.

Kako to postaviti na svom webu, korak po korak, opisali smo u četiri zasebna vodiča:

1. [Claude Code i Google Search Console](/blog/claude-code-google-search-console/)
2. [Claude Code i Google Analytics 4](/blog/claude-code-google-analytics-4/)
3. [Claude Code i Google Tag Manager](/blog/claude-code-google-tag-manager/)
4. [Claude Code, Meta Pixel, Conversions API i Meta Ads](/blog/claude-code-meta-pixel-capi/)

## Kako sve spojiti u jedan projekt

![Shema: Claude Code povezan s GitHubom, Netlifyjem, Supabaseom, Search Consoleom, GA4, Tag Managerom, Meta Pixelom i Meta Ads](/blog/claude-code-case-study-osmrtnice/jedan-projekt.png)

1. **Kod na GitHubu,** objava iz glavne grane (kod nas Netlify). Bez toga Claude ne može raditi promjene koje se mjere.
2. **Jedan Google servisni račun** za Search Console, GA4 i Tag Manager. Ključ ide u varijablu okruženja, a e-mail servisnog računa dodajete kao korisnika u svaki alat.
3. **Meta token** za Conversions API kao tajna na serveru (kod nas Supabase), a podaci o kampanjama preko konektora.
4. **Pravila u repozitoriju** (AGENTS.md ili CLAUDE.md): što se smije, gdje su podaci, kako se imenuju događaji.
5. **Pregled prije spajanja.** Svaka promjena je pull request s pregledom na Netlifyju. Promjene u bazi i plaćanju potvrđuje čovjek.

## Koje mogućnosti to otvara

- **Od podatka do promjene u istom razgovoru.** Na primjer: Claude u Search Consoleu vidi da stranice sprovoda imaju impresije bez klikova, u kodu nađe zašto, napravi promjenu i za tjedan dana provjeri rezultat.
- **Brzina.** 86 promjena u 17 dana, s opisom svake. Za isto bi trebao programer, analitičar i netko tko zna Tag Manager.
- **Mjerenje koje se ne kvari.** Kad se promijeni forma, Claude u istom PR-u promijeni i događaj u kodu i oznaku u Tag Manageru.

Što treba znati: Claude griješi. Imali smo dupli događaj u Meti koji se okidao na otvaranje forme i tri puta smo mijenjali istu oznaku u Tag Manageru dok nije bila ispravna. Zato svaka promjena ide kroz pull request i zato pristup alatima dajemo samo onoliko koliko treba.

## Što radimo dalje

- **Gradske stranice (/umrli/grad).** Za upite s najviše impresija portal je na poziciji 5 do 8: "osmrtnice" (33.387 impresija u 12 dana, pozicija 7,6), "umrli metković" (9.984, pozicija 5,3), "osmrtnice osijek" (7.314, pozicija 7,2). Test naslova na tim stranicama traje od 19. listopada.
- **Rasporedi sprovoda za još gradova.** Stranice sprovoda rasle su upravo tamo gdje smo dodali stvarne podatke.
- **ChatGPT i Google AI pregled.** Isti test kao u [case studyju o AI vidljivosti](/blog/case-study-ai-vidljivost-osmrtnice/) ponavljamo 1. prosinca.
- **Prodaja.** Sada kad je mjerenje postavljeno, pratimo koliko memorijala i svijeća donosi koja vrsta stranice.

Ovaj članak dopunjavamo kad budemo imali podatke za cijeli studeni.

Ako želite isto na svom webu, javite nam se preko stranice [AI vidljivost](/ai-vidljivost/).
