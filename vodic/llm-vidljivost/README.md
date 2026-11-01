# Vodič "Kako povećati svoju LLM vidljivost u Hrvatskoj"

Izvor PDF-a koji se šalje preko forme na /vodic-llm-vidljivost/.

- Tekst je podijeljen u `00-head.html` do `06-kraj.html` (stil je u `00-head.html`).
- `node vodic/llm-vidljivost/build.mjs` spaja dijelove i radi `public/vodic/llm-vidljivost-hrvatska.pdf` (treba Playwright s Chromiumom).
- Pregledne slike na landing stranici (`public/vodic/*.webp`) su stranice 1, 9, 14 i 21 PDF-a.
- E-mail šalje Netlify funkcija `netlify/functions/vodic.mts` (`/api/vodic`). Treba Netlify varijable SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS (i opcionalno SMTP_FROM). Bez njih stranica odmah pokaže link na PDF.
