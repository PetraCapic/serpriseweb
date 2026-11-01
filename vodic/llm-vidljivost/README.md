# Vodič "Kako povećati svoju LLM vidljivost u Hrvatskoj"

Izvor PDF-a koji se šalje preko forme na /vodic-llm-vidljivost/.

- Tekst je podijeljen u `00-head.html` do `06-kraj.html` (stil je u `00-head.html`).
- `NODE_PATH=$(npm root -g) node vodic/llm-vidljivost/build.mjs` spaja dijelove i radi `public/vodic/llm-vidljivost-hrvatska.pdf` (treba Playwright s Chromiumom).
- Pregledne slike na landing stranici (`public/vodic/*.webp`) su stranice 1, 9, 15 i 23 PDF-a.
- E-mail šalje Netlify funkcija `netlify/functions/vodic.mts` (`/api/vodic`). Treba Netlify varijable SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS (i opcionalno SMTP_FROM). Bez njih stranica odmah pokaže link na PDF.
- Izvori su u `sources.mjs`. U tekstu se citiraju kao `[@kljuc]` ili `[@kljuc1,kljuc2]`; build ih numerira redom pojavljivanja, pretvara u klikabilne brojeve i popis upisuje na mjesto `<!--IZVORI-->` u `06-kraj.html`. Nepoznat ključ prekida build.
- Oznake tvrdnji: `l-izvor` (službeni izvor ili istraživanje), `l-test` (naš test, metoda u prilogu "Kako smo mjerili"), `l-praksa` (naša preporuka).
- Radni predložak za praćenje: `public/vodic/predlozak-pracenja.csv`.
