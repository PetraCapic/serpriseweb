---
title: "Kako spojiti Claude Code s Google Analyticsom 4, korak po korak"
description: "Isti servisni račun kao za Search Console: Claude čita GA4 izvještaje, provjerava lijevke i postavlja ključne događaje. Koraci, ovlasti i česte greške."
date: 2026-11-01
image: /blog/claude-code-google-analytics-4/naslovna.png
imageAlt: "Vodič: kako spojiti Claude Code s Google Analyticsom 4"
---

GA4 spojen s Claude Codeom znači dvije stvari. Claude čita izvještaje (sesije po izvoru, događaje, prodaju) i u istom razgovoru mijenja kod koji te događaje šalje. Kad se promijeni forma ili koraci kupnje, praćenje se promijeni u istom pull requestu.

Ovo je drugi od četiri vodiča uz naš [case study o Claude Codeu na portalu za osmrtnice](/blog/claude-code-case-study-osmrtnice/). Prvi korak, servisni račun, opisan je u [vodiču za Search Console](/blog/claude-code-google-search-console/).

## Korak 1: uključite GA4 API-je

U istom Google Cloud projektu, u "APIs & Services", uključite:

- **Google Analytics Data API** za čitanje izvještaja,
- **Google Analytics Admin API** ako želite da Claude vidi svojstva i postavlja ključne događaje.

## Korak 2: dodajte servisni račun u GA4

1. U GA4 otvorite "Admin", pa "Property access management" (ili "Account access management" za cijeli račun).
2. Kliknite plus, "Add users" i upišite e-mail servisnog računa.
3. Uloga "Viewer" je dovoljna za čitanje. "Editor" treba ako Claude postavlja ključne događaje ili prilagođene dimenzije.

Na portalu za osmrtnice servisni račun ima Editor ulogu. Claude je 16. listopada preko Admin API-ja označio memorial_started i obituary_memorial_click kao ključne događaje, odmah nakon što ih je dodao u kod.

## Korak 3: ID svojstva

Izvještaji se traže po ID-u svojstva (broj, ne G-XXXX oznaka mjerenja). Najlakše je pitati Claudea: "Izlistaj GA4 račune i svojstva do kojih servisni račun ima pristup." Dobiveni broj upišite u pravila projekta ili u varijablu okruženja, na primjer GA4_PROPERTY_ID.

## Korak 4: kako slati događaje iz koda

GA4 događaje šaljemo preko Tag Managera, ne direktno. Kod samo gura događaj u dataLayer, a Tag Manager ga prosljeđuje u GA4. Za prodaju koristimo GA4 ecommerce nazive (begin_checkout, purchase), da se prihod vidi u standardnim izvještajima.

Pravila koja smo dali Claudeu, i koja preporučujemo:

- događaji se šalju samo s produkcijske domene, da testovi i pregledi ne kvare podatke,
- samo uz pristanak na analitičke kolačiće,
- purchase ima transaction_id, da GA4 ne broji istu kupnju dvaput,
- prije svakog ecommerce događaja ecommerce objekt se očisti, da vrijednosti ne prelaze s jednog događaja na drugi.

Kako se postavljaju oznake u Tag Manageru, opisano je u [vodiču za Tag Manager](/blog/claude-code-google-tag-manager/).

## Što pitati kad je spojeno

- "Koliko je sesija s chatgpt.com bilo po danu u listopadu?"
- "Prikaži lijevak: pretraga osobe, odabir osobe, početak izrade, plaćanje."
- "Usporedi GA4 sesije s klikovima iz Search Consolea po danu i reci gdje se ne slažu."

Zadnje pitanje nam je otkrilo da je GA4 od 1. do 18. listopada bilježio otprilike četvrtinu posjeta, iako su klikovi u Search Consoleu bili normalni. Taj period smo u statistici označili kao neusporediv.

## Česte greške

- **"User does not have sufficient permissions"**: servisni račun nije dodan u svojstvo ili je dodan u drugo svojstvo.
- **API nije uključen**: greška spominje "has not been used in project". Uključite API u istom projektu u kojem je servisni račun.
- **Promet s AI alata**: GA4 ga djelomično svrstava u Referral i Unassigned. Rješenje je u članku [GA4 skriva više od polovice posjeta s ChatGPT-a](/blog/ga4-ai-kanal/).
