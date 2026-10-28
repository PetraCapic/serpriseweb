# serprise.agency

Novi web SERPRise agencije (hrvatski jezik): AI vidljivost (LLM optimizacija) te link building i digitalni PR.

- **Frontend:** [Astro](https://astro.build) (statičan web, brz i SEO-friendly)
- **Hosting:** Netlify
- **Backend:** Supabase, ista baza kao admin (GP Studio). Kontakt forma upisuje upit u tablicu `leads`.
- **Admin:** upiti, klijenti, ponude i računi su u GP Studiju na admin.serprise.agency (repo `serprise-gp-studio`).

## Struktura

```
src/
  lib/site.ts            podaci o firmi, izbornik, popis klijenata
  lib/supabase.ts        Supabase klijent (samo upis upita)
  components/            Header, Footer, Clients, ContactForm, Faq, Cta...
  pages/                 index, ai-vidljivost, link-building-digitalni-pr, o-nama, kontakt, hvala, pravila-privatnosti
public/                  logo, favicon, og.png, robots.txt, llms.txt
netlify.toml             build, headeri, 301 preusmjeravanja sa starog weba
```

## Lokalni razvoj

Treba Node 24+.

```bash
cp .env.example .env
npm install
npm run dev            # http://localhost:4321
```

## Postavljanje (jednokratno)

### 1. Supabase

Tablica `leads` i pravilo da web smije samo upisati upit dolaze iz migracije `drizzle/0006_poslovanje.sql` u repou
`serprise-gp-studio`. URL projekta i publishable ključ već su upisani u `netlify.toml`.

### 2. Netlify

1. **Add new site → Import from GitHub** → odaberi ovaj repozitorij. Build postavke se čitaju iz `netlify.toml`.
2. Pokreni deploy i provjeri web na `*.netlify.app` adresi (pošalji probni upit i provjeri ga u adminu pod Upiti).

### 3. Domena (selidba s Totohosta)

1. Netlify → **Domain management → Add domain** → `serprise.agency` (i `www`).
2. Ako domena ostaje registrirana kod Totohosta, u njihovom DNS-u postavi:
   - `A` zapis za `@` → `75.2.60.5` (Netlify load balancer)
   - `CNAME` za `www` → `<tvoj-site>.netlify.app`
   
   ili prebaci nameservere na Netlify DNS (Netlify će ih prikazati).
3. **Prije promjene DNS-a** prepiši MX i TXT zapise (mail je na Google Workspaceu: `aspmx.l.google.com` i `alt1–alt4`) da e-mail nastavi raditi.
4. Netlify automatski izdaje SSL (Let's Encrypt) nakon što DNS proradi.
5. Hosting na Totohostu otkaži tek kad novi web radi i mail je provjeren.

## Uređivanje sadržaja

- Kontakt podaci, OIB, društvene mreže: `src/lib/site.ts`
- Klijenti na traci "Vjeruju nam": `clients` u `src/lib/site.ts`. Logo stavi u `public/klijenti/` i dodaj `logo`, `width` i `height` (široki logotipi niži, kvadratni viši, da svi izgledaju podjednako veliki).
- Tekstovi usluga: `src/pages/*.astro`

## Katalog portala (/portali/)

Podaci su u `src/data/portali.json` (DR, organski promet, ključne riječi i referring domains iz Ahrefsa; kategorije su ručno dodijeljene u polju `c`). Cijene i kontakti portala se namjerno ne objavljuju. Upit s odabranim portalima sprema se u `leads` (usluga `link_building_pr`, `source_page` = `/portali/`), s popisom portala u poruci.

## Blog

Članci su Markdown datoteke u `src/content/blog/` (naziv datoteke = URL, npr. `google-ai-nacin.md` → `/blog/google-ai-nacin/`). Polja u zaglavlju i primjer su u `src/content/blog/_predlozak.md`; datoteke koje počinju s `_` se ne objavljuju, kao ni one s `draft: true`. Slike idu u `public/blog/`. Svaki commit na `main` Netlify automatski objavi. Poveznica „Blog“ u izborniku pojavljuje se tek kad postoji prvi objavljeni članak.
