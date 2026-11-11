---
title: "301 preusmjeravanja u većem broju: kako isplanirati, postaviti i testirati stotine redirecta"
description: "Kako postaviti stotine 301 preusmjeravanja bez gubitka prometa: mapa URL-ova, postavljanje na Netlifyju, Apacheu, nginxu, Cloudflareu ili WordPressu i testiranje."
date: 2026-11-11
translation: 301-redirects-in-bulk
image: /blog/301-preusmjeravanja-masovno/naslovna.png
imageAlt: "301 preusmjeravanja u većem broju: stari URL-ovi povezani jedan na jedan s novima"
howto:
  name: "Kako postaviti 301 preusmjeravanja u većem broju"
  anchor: "korak-po-korak-masovna-301-preusmjeravanja-bez-gubitka-prometa"
  totalTime: "PT4H"
  steps:
    - "Skupite sve stare URL-ove koji nešto vrijede: crawl, sitemap, stranice iz Search Consolea, ulazne stranice iz analitike i stranice s backlinkovima."
    - "U tablici povežite svaki stari URL s najsličnijim novim URL-om, jedan na jedan, i označite URL-ove koji nemaju zamjenu."
    - "Ponavljajuće uzorke pretvorite u nekoliko pravila s uzorkom, a sve ostalo ostavite kao točna pravila."
    - "Postavite mapu na server, CDN ili CMS, s točnim pravilima iznad pravila s uzorkom."
    - "Testirajte svaki stari URL: jedan skok, status 301, konačni status 200, bez petlji."
    - "Ažurirajte interne linkove, canonical oznake i sitemap na nove URL-ove, pratite Search Console i zadržite preusmjeravanja barem godinu dana."
faq:
  - q: "Koliko je 301 preusmjeravanja previše?"
    a: "Nema kazne za velik broj preusmjeravanja. Tisuće točnih pravila nakon migracije su normalne. Problemi su lanci, petlje, spore datoteke s jako puno pravila i preusmjeravanja na stranice koje ne odgovaraju starom sadržaju."
  - q: "Mogu li sve stare URL-ove preusmjeriti na naslovnicu?"
    a: "Možete, ali ne biste trebali. Google preusmjeravanje na nepovezanu stranicu, poput naslovnice, može tretirati kao soft 404, pa se signali stare stranice ne prenose. Svaki URL preusmjerite na najsličniju stranicu, a URL-ovi bez zamjene neka vrate 404 ili 410."
  - q: "Koliko dugo držati 301 preusmjeravanja?"
    a: "Google preporučuje barem godinu dana nakon selidbe. Mi ih držimo dok god stari URL-ovi imaju posjete ili backlinkove, što za većinu webova znači zauvijek."
  - q: "301 ili 308?"
    a: "Oba su trajna preusmjeravanja i Google ih tretira jednako. 308 zadržava metodu zahtjeva (npr. POST), što je važno za API-je i forme, ne za obične stranice."
  - q: "Prenosi li 301 preusmjeravanje snagu linkova?"
    a: "Da. Google je potvrdio da trajna preusmjeravanja na serveru ne gube PageRank. Uvjet je da je odredište stvarno zamjena za staru stranicu."
sources:
  - name: "Google Search Central: Preusmjeravanja i Google pretraživanje"
    url: "https://developers.google.com/search/docs/crawling-indexing/301-redirects"
  - name: "Google Search Central: Selidba weba s promjenom URL-ova"
    url: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes"
  - name: "Netlify Docs: Redirects and rewrites"
    url: "https://docs.netlify.com/routing/redirects/"
  - name: "Apache HTTP Server: Using RewriteMap"
    url: "https://httpd.apache.org/docs/current/rewrite/rewritemap.html"
  - name: "nginx: ngx_http_map_module"
    url: "https://nginx.org/en/docs/http/ngx_http_map_module.html"
  - name: "Cloudflare Docs: Bulk Redirects"
    url: "https://developers.cloudflare.com/rules/url-forwarding/bulk-redirects/"
---

Masovna 301 preusmjeravanja su popis starih URL-ova od kojih svaki trajno vodi na najsličniji novi URL, postavljen na jednom mjestu i testiran prije objave. Kad je to dobro napravljeno, pozicije i backlinkovi prate sadržaj na novu adresu. Kad se radi na brzinu, s nekoliko općenitih pravila koja sve šalju na naslovnicu ili kategoriju, promet nestane i ne vrati se sam.

Drugi scenarij znamo iz prve ruke. Engleska verzija ovog članka bila je na našem starom WordPress webu i redovito je donosila promet iz pretrage. Kad smo serprise.agency prebacili na novi web, jedno pravilo poslalo je sve stare URL-ove bloga na popis članaka, a drugo naš vodič o expired domenama na stranicu usluge. Obje stranice izgubile su promet. Ovaj članak je popravak: [engleski original](/blog/301-redirects-in-bulk/) vratili smo na staru adresu, a sadržaj je osvježen za 2026. i preveden na hrvatski.

## Kada trebate preusmjeravanja u većem broju

Više od nekoliko preusmjeravanja trebat će vam kad:

- **selite web** na novi CMS ili platformu i mijenja se struktura URL-ova;
- **prelazite na novu domenu** ili spajate dva weba u jedan;
- **mijenjate strukturu**, npr. kategorije, datume u URL-ovima bloga ili jezične mape;
- **spajate sadržaj**, npr. deset slabih članaka u jedan jak vodič;
- **kupujete domenu** (konkurenta, brend ili [expired domenu](/blog/expired-domene-link-building/)) i želite da se njeni linkovi računaju vašem webu.

U svim slučajevima cilj je isti: svaki stari URL koji ima posjete, pozicije ili backlinkove treba voditi na stranicu koja sada odgovara na isto pitanje.

## Korak po korak: masovna 301 preusmjeravanja bez gubitka prometa

### 1. Skupite sve stare URL-ove koji nešto vrijede

Sam crawl nije dovoljan, jer pronalazi samo stranice na koje se još interno linka. Spojite:

1. **Cijeli crawl** starog weba (Screaming Frog, Sitebulb ili sličan alat) dok je još online.
2. **XML sitemape** starog weba.
3. **Google Search Console**, izvještaje Izvedba i Stranice: svaki URL s pojavljivanjima u zadnjih 16 mjeseci.
4. **Ulazne stranice iz analitike** za zadnjih 12 mjeseci.
5. **Stranice s backlinkovima** iz Ahrefsa, Semrusha ili Majestica ("Best by links" ili "Top pages"). Te URL-ove ljudi najčešće zaborave, jer su to često stare stranice kampanja na koje više nitko interno ne linka.

Uklonite duplikate i ujednačite popis: jedan protokol, jedan host, dosljedne kose crte na kraju. Parametre uklonite, osim ako mijenjaju sadržaj.

### 2. Svaki stari URL povežite s najsličnijim novim

Popis stavite u tablicu s četiri stupca: stari URL, novi URL, status i napomena. Pravilo za novi URL je jednostavno: **stranica koja odgovara na isto pitanje**. Proizvod ide na isti proizvod, vodič na osvježeni vodič, kategorija na istu kategoriju.

Na velikim webovima prvo povežite automatski, a zatim ručno provjerite:

- povezivanje po slugu (zadnjem dijelu URL-a) s `VLOOKUP` ili `XLOOKUP`;
- povezivanje po naslovu stranice ili H1 iz oba crawla;
- za ostatak približno povezivanje (Python skripta s `rapidfuzz` ili AI asistent s oba popisa), pa provjera svakog prijedloga.

Neki stari URL-ovi neće imati zamjenu. Ne šaljite ih na naslovnicu. Google preusmjeravanje na nepovezanu stranicu može tretirati kao soft 404 i zanemariti ga, pa se signali svejedno izgube. Neka takvi URL-ovi vrate 404 ili 410, ili ih pošaljite na nadređenu kategoriju ako ona stvarno pokriva tu temu.

### 3. Uzorke pretvorite u nekoliko pravila, ostalo neka budu točna pravila

Ako promjena slijedi uzorak, jedno pravilo zamjenjuje tisuće redaka. Tipični primjeri:

- `/blog/2021/04/ime-clanka/` → `/blog/ime-clanka/`
- `/hr/kategorija/...` → `/kategorija/...`
- `http://` i `www.` → `https://` bez `www`

Sve što ne slijedi uzorak ostaje točno pravilo. **Točna pravila stavite iznad pravila s uzorkom**, jer većina sustava primijeni prvo pravilo koje odgovara. Upravo tu je pogriješila naša migracija: uzorak `/expired-domain/*` bio je ispravan za većinu starih URL-ova, ali uhvatio je i jedini vodič koji je trebao zadržati adresu.

### 4. Postavite mapu tamo gdje je najjeftinije izvršavati

Preusmjeravanja trebaju biti na serveru i trajna (301 ili 308). JavaScript i meta refresh za Google ponekad rade, ali su zadnja opcija. Evo kako ista mapa izgleda na najčešćim platformama.

**Netlify** (datoteka `_redirects` u mapi za objavu ili `netlify.toml`). Ovo koristi serprise.agency:

```
# _redirects: stari path, novi path, status
/blog/2021/04/stari-clanak/   /blog/novi-clanak/   301
/usluge/stara-usluga/*        /link-building/      301
```

```toml
[[redirects]]
  from = "/usluge/stara-usluga/*"
  to = "/link-building/"
  status = 301
```

Netlify primijeni prvo pravilo koje odgovara. Obično preusmjeravanje se ne aktivira ako na starom pathu postoji datoteka. Zato engleski original ovog članka može živjeti na staroj adresi, a općenito pravilo i dalje rješava ostatak starog bloga.

**Apache** (`.htaccess` za male mape):

```apache
Redirect 301 /stara-stranica/ https://primjer.hr/nova-stranica/
RedirectMatch 301 ^/blog/\d{4}/\d{2}/(.*)$ https://primjer.hr/blog/$1
```

Za tisuće URL-ova dugačak `.htaccess` čita se pri svakom zahtjevu. Umjesto toga koristite `RewriteMap` s tekstualnom ili DBM datotekom. `RewriteMap` se može definirati samo u konfiguraciji servera ili virtual hosta, ne u `.htaccess`.

```apache
RewriteEngine On
RewriteMap redirects "txt:/etc/apache2/redirects.txt"
RewriteCond ${redirects:%{REQUEST_URI}} !=""
RewriteRule ^ ${redirects:%{REQUEST_URI}} [R=301,L]
```

**nginx** koristi modul `map`, koji učinkovito radi i s jako velikim popisima:

```nginx
map $request_uri $new_uri {
    include /etc/nginx/redirects.map;   # reci poput: /stara-stranica/ /nova-stranica/;
}
server {
    if ($new_uri) { return 301 $new_uri; }
}
```

Ako se nginx s velikom mapom ne želi pokrenuti, povećajte `map_hash_bucket_size` ili `map_hash_max_size`.

**Cloudflare** ima Bulk Redirects: učitate CSV popis izvornih i odredišnih URL-ova i uključite ga pravilom. Preusmjeravanje se događa na rubu mreže, prije nego zahtjev dođe do vašeg servera. Zato je to dobra opcija za selidbu domene i za webove na čiji server ne možete. Broj URL-ova po popisu ovisi o paketu, pa trenutne limite provjerite u Cloudflareovoj dokumentaciji.

**WordPress**: dodatak Redirection uvozi CSV datoteku (izvor, odredište, kod). Yoast SEO Premium i Rank Math također imaju upravljanje preusmjeravanjima. Za više od nekoliko tisuća pravila prebacite ih na server ili CDN, jer upiti u bazu pri svakom zahtjevu se zbrajaju.

**Shopify i druge hostane trgovine** imaju ekran za preusmjeravanja s uvozom CSV-a. Shopify primijeni preusmjeravanje tek kad stari URL vraća 404, pa stari proizvod prvo obrišite ili ga maknite iz objave.

### 5. Testirajte svaki stari URL prije i nakon objave

Testirajte cijeli popis, ne uzorak. Tražite četiri stvari: status 301 (ne 302), točno jedan skok, konačni status 200 i ispravno odredište. Kratka skripta to radi:

```bash
while read -r url; do
  curl -s -o /dev/null -L --max-redirs 5 \
    -w "$url -> %{url_effective} | %{http_code} | skokova: %{num_redirects}\n" "$url"
done < stari-urlovi.txt
```

Sve s više od jednog skoka je lanac: prvi URL usmjerite izravno na konačno odredište. Sve što završi na 404 ili u petlji vraća se u mapu. Screaming Frog u načinu List s opcijom "Always follow redirects" daje isti izvještaj u sučelju.

### 6. Počistite i pratite

Preusmjeravanja su sigurnosna mreža, a ne nova struktura. Nakon objave:

- ažurirajte **interne linkove** tako da vode izravno na nove URL-ove;
- provjerite da **canonical, hreflang i XML sitemap** sadrže samo nove URL-ove;
- kod selidbe domene u Search Consoleu iskoristite alat **Promjena adrese**;
- **pratite** izvještaj Stranice i 404 greške u Search Consoleu svaki tjedan prva dva mjeseca, a klikove svakog starog URL-a usporedite s klikovima novog.

Google preporučuje da preusmjeravanja ostanu barem godinu dana. Mi ih držimo dok god stari URL-ovi imaju posjete ili backlinkove. Za većinu webova to znači zauvijek, jer preusmjeravanje ne košta gotovo ništa, a izgubljeni backlink ne može se kupiti natrag po istoj cijeni.

## Pet grešaka koje odnesu najviše prometa

1. **Sve na naslovnicu.** Najbrži način da migracija izgleda gotovo i najsigurniji način da izgubite stare pozicije.
2. **Preširoki uzorci.** Jedno pravilo `/*` iznad točnih pravila ih poništava. Redoslijed je važan.
3. **Lanci iz ranijih migracija.** URL preusmjeren 2019. i ponovno 2026. sada ima dva skoka. Izravnajte ih svaki put kad dodajete nova pravila.
4. **302 umjesto 301.** Mnogi dodaci i CMS-ovi zadano postave privremeno preusmjeravanje. Za trajnu selidbu koristite 301 ili 308.
5. **Zaboravljene stranice s backlinkovima.** Crawl novog weba ih nikad neće pokazati. Alat za backlinkove hoće.

## Što preusmjeravanje ne može

Preusmjeravanje prenosi signale na stranicu koju odaberete. Ne čini tu stranicu relevantnom. Ako je stari članak odgovarao na pitanje "kako postaviti masovna preusmjeravanja", a novo odredište je stranica usluge, Google će stranicu usluge rangirati za ono što ona jest, a ne za ono što je bio stari članak. Zato smo ovaj članak vratili umjesto da zadržimo preusmjeravanje.

Planirate migraciju ili ste kupili domenu i želite da se njeni linkovi računaju? Mapu preusmjeravanja možemo složiti i testirati s vama. [Javite nam se](/kontakt/) ili pogledajte kako radimo [link building i digitalni PR](/link-building-digitalni-pr/).
