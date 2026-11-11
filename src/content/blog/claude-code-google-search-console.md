---
title: "Kako spojiti Claude Code s Google Search Consoleom, korak po korak"
description: "Servisni račun, jedna varijabla okruženja i Claude sam čita klikove, upite i stranice iz Search Consolea. Koraci, provjera i primjeri pitanja."
date: 2026-11-01
translation: claude-code-google-search-console-en
image: /blog/claude-code-google-search-console/naslovna.png
imageAlt: "Vodič: kako spojiti Claude Code s Google Search Consoleom"
---

Kad je Search Console spojen, Claude Code sam povuče klikove i impresije po danu, stranici ili upitu, usporedi razdoblja i odmah u kodu provjeri zašto neka stranica ne dobiva klikove. Bez izvoza u CSV i bez snimki ekrana.

Ovo je prvi od četiri vodiča uz naš [case study o Claude Codeu na portalu za osmrtnice](/blog/claude-code-case-study-osmrtnice/). Svi grafovi iz Search Consolea u tom članku napravljeni su iz podataka koje je Claude povukao na ovaj način.

## Što vam treba

- Pristup Search Consoleu s ovlastima vlasnika (Owner), da možete dodati korisnika.
- Google Cloud projekt. Besplatan je, a isti projekt koristite i za [GA4](/blog/claude-code-google-analytics-4/) i [Tag Manager](/blog/claude-code-google-tag-manager/).
- Claude Code, lokalno ili na claude.ai/code.

![Shema spajanja Claude Codea na Search Console u četiri koraka: Google Cloud, servisni račun, korisnik u Search Consoleu, varijabla okruženja](/blog/claude-code-google-search-console/gsc-shema.png)

## Korak 1: napravite servisni račun

Servisni račun je Google korisnik za programe. Claude se prijavljuje njime, a ne vašim osobnim računom.

1. Otvorite console.cloud.google.com i napravite novi projekt (ili odaberite postojeći).
2. U izborniku "APIs & Services" kliknite "Enable APIs and services" i uključite **Google Search Console API**.
3. Otvorite "IAM & Admin", pa "Service accounts" i kliknite "Create service account". Dajte mu ime, na primjer claude-reader. Uloge u Cloud projektu ne trebaju.
4. Otvorite novi servisni račun, karticu "Keys", "Add key", "Create new key", format JSON. Preuzet će se datoteka s ključem.

Datoteku s ključem nikad ne stavljajte u repozitorij. Tko ima tu datoteku, ima i pristup koji ste dali servisnom računu.

## Korak 2: dodajte servisni račun u Search Console

1. U Search Consoleu odaberite web, pa "Settings" i "Users and permissions".
2. Kliknite "Add user" i upišite e-mail servisnog računa (izgleda kao ime@projekt.iam.gserviceaccount.com).
3. Za samo čitanje podataka odaberite "Restricted". "Full" treba samo ako želite da Claude šalje sitemap ili radi druge promjene.

## Korak 3: dajte ključ Claude Codeu

Ključ pretvorite u jedan red teksta (base64), da ga lakše spremite kao varijablu:

```bash
base64 -w0 kljuc.json
```

- **Claude Code u oblaku:** u postavkama okruženja dodajte varijablu, na primjer GOOGLE_SA_KEY_B64, s tim tekstom.
- **Lokalno:** spremite je u .env datoteku koja je u .gitignore.

U pravila projekta (CLAUDE.md ili AGENTS.md) upišite jednu rečenicu: "Search Console čitaj servisnim računom iz GOOGLE_SA_KEY_B64, svojstvo https://vasweb.hr/". Tako Claude ne mora svaki put pitati.

## Korak 4: provjera

Zamolite Claudea: "Izlistaj Search Console svojstva do kojih servisni račun ima pristup." Claude će napisati kratku skriptu koja zove API i ispiše popis. Ako je vaš web na popisu, spajanje radi.

Kod nas je odgovor izgledao ovako:

```json
{ "siteUrl": "https://osmrtnica.com.hr/", "permissionLevel": "siteOwner" }
```

Ako je popis prazan, servisni račun nije dodan u pravo svojstvo. Domain svojstvo ima oblik sc-domain:vasweb.hr, a URL svojstvo https://vasweb.hr/. To su dva različita svojstva.

## Što pitati kad je spojeno

Evo kako izgleda stvarni odgovor kad Claude ima pristup. Pitanje je bilo jedna rečenica, a Claude je sam napisao upit prema API-ju za četiri razdoblja.

![Primjer odgovora u Claude Codeu: klikovi prije i poslije 19.10.2026. i isti dani 2025. za osmrtnica.com.hr](/blog/claude-code-google-search-console/gsc-odgovor.png)

- "Usporedi klikove 12 dana prije i poslije 19.10. i iste dane prošle godine." Usporedba s prošlom godinom pokazuje koliki je dio rasta sezonski.
- "Podijeli klikove po vrsti stranice prema URL-u." Kod nas: pojedinačne osmrtnice, gradovi, sprovodi, groblja, blog.
- "Nađi upite s više od 2.000 impresija na poziciji 4 do 12." To su najbrže prilike.

![Tablica upita s više od 2.000 impresija na poziciji 4 do 12 za osmrtnica.com.hr](/blog/claude-code-google-search-console/gsc-prilike.png)


U našem slučaju odgovor je bio jasan: gradske stranice su na poziciji 4 do 8 za upite s desecima tisuća impresija, a CTR je ispod 1 %. Zato su one prve u planu.

- "Nacrtaj graf klikova po tjednu od srpnja i spremi ga kao PNG za blog."

Search Console API vraća do 25.000 redova po upitu. Za velike webove Claude mora tražiti podatke u više stranica (startRow), što obično sam napravi ako mu kažete da web ima puno URL-ova. Podaci kasne dva do tri dana.

## Sljedeći korak

Isti servisni račun koristite za [Google Analytics 4](/blog/claude-code-google-analytics-4/). Treba samo uključiti još jedan API i dodati račun u GA4.
