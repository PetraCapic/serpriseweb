# serprise.agency

Novi web SERPRise agencije (hrvatski jezik): AI vidljivost (LLM optimizacija) te link building i digitalni PR.

- **Frontend:** [Astro](https://astro.build) (statičan web, brz i SEO-friendly)
- **Hosting:** Netlify
- **Backend:** Supabase (upiti s kontakt forme + prijava u admin)
- **Admin:** `/admin/`: popis upita, statusi, bilješke, izvoz u CSV

## Struktura

```
src/
  lib/site.ts            podaci o firmi, izbornik, popis klijenata
  lib/supabase.ts        Supabase klijent
  components/            Header, Footer, Clients, ContactForm, Faq, Cta...
  pages/                 index, ai-vidljivost, link-building-digitalni-pr, o-nama, kontakt, hvala, pravila-privatnosti, admin
public/                  logo, favicon, og.png, robots.txt, llms.txt
supabase/migrations/     SQL za tablice i sigurnosna pravila (RLS)
netlify.toml             build, headeri, 301 preusmjeravanja sa starog weba
```

## Lokalni razvoj

Treba Node 24+.

```bash
cp .env.example .env   # upiši Supabase URL i publishable/anon ključ
npm install
npm run dev            # http://localhost:4321
```

## Postavljanje (jednokratno)

### 1. Supabase

1. Na [supabase.com](https://supabase.com) napravi novi projekt (regija: **EU**, npr. Frankfurt `eu-central-1`).
2. **SQL Editor** → zalijepi i pokreni `supabase/migrations/20261027120000_leads_and_admins.sql`.
3. **Authentication → Sign In / Providers**: isključi *Allow new users to sign up* (admin račune dodaješ ručno).
4. **Authentication → Users → Add user**: dodaj svoj e-mail i lozinku (označi *Auto confirm*).
5. U **SQL Editoru** daj tom korisniku admin prava:
   ```sql
   insert into public.admin_users (user_id)
   select id from auth.users where email = 'jure@serprise.agency';
   ```
6. **Project Settings → API**: kopiraj *Project URL* i *publishable* (anon) ključ. Nikad ne koristi `service_role` ključ na webu.

### 2. Netlify

1. **Add new site → Import from GitHub** → odaberi ovaj repozitorij. Build postavke se čitaju iz `netlify.toml`.
2. **Site configuration → Environment variables**:
   - `PUBLIC_SUPABASE_URL`
   - `PUBLIC_SUPABASE_ANON_KEY`
3. Pokreni deploy i provjeri web na `*.netlify.app` adresi (pošalji probni upit, prijavi se na `/admin/`).

### 3. Domena (selidba s Totohosta)

1. Netlify → **Domain management → Add domain** → `serprise.agency` (i `www`).
2. Ako domena ostaje registrirana kod Totohosta, u njihovom DNS-u postavi:
   - `A` zapis za `@` → `75.2.60.5` (Netlify load balancer)
   - `CNAME` za `www` → `<tvoj-site>.netlify.app`
   
   ili prebaci nameservere na Netlify DNS (Netlify će ih prikazati).
3. **Prije promjene DNS-a** prepiši MX/TXT zapise za e-mail (npr. ako je mail `jure@serprise.agency` kod Totohosta ili Google Workspacea) da e-mail nastavi raditi.
4. Netlify automatski izdaje SSL (Let's Encrypt) nakon što DNS proradi.
5. Hosting na Totohostu otkaži tek kad novi web radi i mail je provjeren.

## Uređivanje sadržaja

- Kontakt podaci, OIB, društvene mreže: `src/lib/site.ts`
- Klijenti na traci "Vjeruju nam": `clients` u `src/lib/site.ts`. Logo stavi u `public/klijenti/` i dodaj `logo: '/klijenti/ime.svg'`.
- Tekstovi usluga: `src/pages/*.astro`
