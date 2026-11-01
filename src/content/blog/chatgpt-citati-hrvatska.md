---
title: "Koje stranice ChatGPT citira kad netko traži agenciju u Hrvatskoj"
description: "Postavili smo ChatGPT-u 35 hrvatskih pitanja o SEO-u i AI vidljivosti. Citirane su i stranice s DR 0. Evo što su imale i što napraviti na svom webu."
date: 2026-11-01
updated: 2026-11-01
image: /blog/chatgpt-citati-hrvatska/naslovna.png
imageAlt: "14 od 45 ChatGPT odgovora citira stranice s DR 0 do 6"
dataset:
  name: "ChatGPT citati za hrvatska pitanja o SEO-u i AI vidljivosti (listopad 2026.)"
  description: "Domene koje je ChatGPT s web pretragom citirao u 45 odgovora na 35 hrvatskih pitanja o SEO-u, GEO optimizaciji i agencijama, s brojem odgovora u kojima je domena citirana, Domain Ratingom (Ahrefs) i vrstom citirane stranice, te primjeri pretraga koje je ChatGPT pokrenuo."
  measured: 2026-10-30
  method: "35 pitanja na hrvatskom postavljeno preko OpenAI API-ja s web pretragom (lokacija Zagreb): 25 pitanja jednom, 10 kupovnih dvaput, ukupno 45 odgovora. Iz svakog odgovora izvučeni su citirani URL-ovi i pokrenute pretrage, a za svaku citiranu domenu Domain Rating iz Ahrefsa."
  license: "https://creativecommons.org/licenses/by/4.0/"
  keywords: ["ChatGPT", "AI vidljivost", "GEO", "LLM optimizacija", "Hrvatska", "citati"]
  files:
    - name: "Citirane domene (CSV)"
      url: /data/istrazivanja/chatgpt-citati-hrvatska-domene.csv
    - name: "Pretrage koje je ChatGPT pokrenuo (CSV)"
      url: /data/istrazivanja/chatgpt-citati-hrvatska-pretrage.csv
---

Od 45 ChatGPT odgovora na 35 pitanja o SEO-u i AI vidljivosti u Hrvatskoj, stranice s Domain Ratingom od 0 do 6 citirane su u 14 odgovora. Autoritet domene zato nije presudan. Presudno je kako je stranica napisana i tko još o vama piše.

SERPRise se u tih 45 odgovora pojavio jednom, i to preko starog URL-a koji više ni ne postoji. Zato smo napravili ovo istraživanje: da vidimo što točno ChatGPT uzima kao izvor kad netko u Hrvatskoj traži agenciju, cijenu ili savjet. Zašto je to važno: ChatGPT ima oko 900 milijuna korisnika tjedno, prema podatku koji je OpenAI objavio u veljači 2026. ([OpenAI](https://openai.com/index/scaling-ai-for-everyone/), [TechCrunch](https://techcrunch.com/2026/02/27/chatgpt-reaches-900m-weekly-active-users/)) [1]

## Kako smo testirali

- 35 pitanja na hrvatskom, onako kako ih piše vlasnik firme ili marketing voditelj.
- 25 pitanja postavljeno jednom, 10 kupovnih ("koja je najbolja agencija", "koliko košta") dvaput. Ukupno 45 odgovora.
- ChatGPT s uključenom web pretragom, lokacija Zagreb, 30. listopada 2026.
- Iz svakog odgovora izvukli smo sve citirane URL-ove i pretrage koje je ChatGPT pokrenuo.
- Za svaku citiranu domenu provjerili smo Domain Rating u Ahrefsu.

NAPOMENA: testirali smo preko OpenAI API-ja, koji nije 100% isti kao ChatGPT u pregledniku. Brojke pokazuju smjer, ne točnu sliku. Isti test ponovili smo 1. studenog: na vrhu su opet bile većinom iste domene, a SERPRise je opet bio u 1 od 45 odgovora.

Zašto brojimo u koliko odgovora se domena pojavila, a ne na kojem je mjestu: AI odgovori se stalno mijenjaju. U istraživanju SparkToroa i Gumshoea 600 volontera pokrenulo je 12 istih pitanja u ChatGPT-u, Claudeu i Googleovom AI-ju ukupno 2.961 put. Šansa da AI dvaput da isti popis brendova bila je manja od 1 na 100, a isti popis istim redom manja od 1 na 1.000. ([SparkToro, siječanj 2026.](https://sparktoro.com/blog/new-research-ais-are-highly-inconsistent-when-recommending-brands-or-products-marketers-should-take-care-when-tracking-ai-visibility/), [Search Engine Land](https://searchengineland.com/ai-recommendation-lists-rarely-repeat-study-468076)) [2] Zato je pozicija u jednom odgovoru šum, a postotak odgovora u kojima se pojavljujete stvarna mjera.

## Nalaz 1: opća pitanja ChatGPT pretražuje na engleskom

Kad pitanje nema lokalni dio, ChatGPT ga prevede i pretražuje na engleskom. Onda citira engleske izvore: Semrush, OpenAI dokumentaciju, Google blog, znanstvene radove.

<div data-embed="citati-flip"></div>

| Pitanje na hrvatskom | Što je ChatGPT stvarno pretražio |
| --- | --- |
| Što je GEO optimizacija i kako se radi? | Generative Engine Optimization meaning |
| Što je llms.txt i trebam li ga na svojoj web stranici? | llms.txt file what is llms.txt |
| Kako pratiti promet s ChatGPT-a u Google Analyticsu 4? | track ChatGPT traffic Google Analytics 4 UTM |
| Treba li blokirati GPTBot u robots.txt? | Should I block GPTBot in robots.txt OpenAI guidance |
| Je li SEO mrtav zbog umjetne inteligencije? | Is SEO dead because of AI 2026 expert opinions |

Što to znači: hrvatski blog tipa "Što je GEO optimizacija" teško će postati izvor u ChatGPT-u, koliko god bio dobar. Može donijeti promet s Googlea, ali za AI citat se natječe s cijelim engleskim internetom. Kako sami vidjeti te pretrage za svoja pitanja, objašnjavamo u članku [Što ChatGPT stvarno pretražuje kad netko pita za vašu uslugu](/blog/chatgpt-pretrage/).

## Nalaz 2: čim pitanje ima "Hrvatska", "Zagreb" ili "cijena", izvori su hrvatski

Za pitanja kao što su "Preporuči mi SEO agenciju u Zagrebu koja radi i optimizaciju za ChatGPT" ili "Koliko košta GEO optimizacija u Hrvatskoj" ChatGPT pretražuje na hrvatskom i citira hrvatske stranice. A to su upravo pitanja koja postavlja netko tko želi kupiti uslugu.

Najčešće citirane domene u 45 odgovora:

<div data-embed="citati-tablica"></div>

| Domena | Odgovora u kojima je citirana | DR | Vrsta stranice | Što je citirano |
| --- | --- | --- | --- | --- |
| [slade.hr](https://slade.hr/) | 6 | 26 | Naslovnica | Naslovnica agencije |
| [clutch.co](https://clutch.co/) | 6 | 91 | Direktorij | Direktorij agencija za Hrvatsku i Zagreb |
| [digiadria.hr](https://digiadria.hr/) | 5 | 33 | Uslužna stranica | Uslužna stranica za AEO |
| [glarodigital.com.hr](https://glarodigital.com.hr/) | 5 | 0 | Uslužna stranica | Uslužna stranica za AI optimizaciju |
| [linkgrid.hr](https://linkgrid.hr/) | 5 | 0 | O nama | Stranica "O nama" |
| [digitalmatrix.hr](https://digitalmatrix.hr/) | 4 | 4,5 | Cjenik | Javni cjenik |
| [assemblio.hr](https://assemblio.hr/) | 4 | 16 | Lista | Lista "Top 5 SEO agencija u Hrvatskoj" |
| [tsunami-digital.com](https://tsunami-digital.com/) | 4 | 29 | Uslužna stranica | Uslužna stranica za SEO i GEO |
| [igrow.at](https://igrow.at/) | 4 | 39 | Case study | Case study s "Croatia" u URL-u |

Podaci iz tablice su slobodni za korištenje uz navođenje izvora (CC BY 4.0): [citirane domene (CSV)](/data/istrazivanja/chatgpt-citati-hrvatska-domene.csv) i [pretrage koje je ChatGPT pokrenuo (CSV)](/data/istrazivanja/chatgpt-citati-hrvatska-pretrage.csv).

<div data-embed="leaderboard"></div>

<div data-embed="citati-donut"></div>

Primijetite: među najčešće citiranim domenama nema niti jednog blog članka. Citirane su uslužne stranice, cjenici, liste agencija i direktoriji.

## Nalaz 3: DR gotovo ne odlučuje

[Glaro Digital](https://glarodigital.com.hr/) i [LinkGrid](https://linkgrid.hr/) imaju DR 0, a citirani su po 5 puta. [Digital Matrix](https://digitalmatrix.hr/) ima DR 4,5 i četiri citata za pitanje o cijeni. Lista na tako.hr ima DR 6 i citirana je dvaput. Clutch s DR 91 citiran je 6 puta, samo jednom više od dvije domene s DR 0.

<div data-embed="citati-scatter"></div>

Na Googleu za "seo agencija" u top 10 stoje domene s DR 4 do 31. Na hrvatskom tržištu, i na Googleu i u ChatGPT-u, prepreka nije autoritet. Prepreka je što većina agencija nema stranicu koja izravno odgovara na pitanje.

Isti smjer pokazuje i velika analiza na drugom alatu. Ahrefs je na 75.000 brendova (svibanj 2025.) usporedio što je povezano s time koliko se brend spominje u Googleovim AI pregledima (AI Overviews). Najjača veza je broj spomena brenda na webu (korelacija 0,664), zatim brendirani anchor tekstovi (0,527) i broj pretraga imena brenda (0,392). Domain Rating ima 0,326, a broj backlinkova 0,218. ([Ahrefs](https://ahrefs.com/blog/ai-overview-brand-correlation/)) [3] To su korelacije, ne dokaz uzroka: brendovi o kojima se puno piše obično imaju i više linkova i veći DR. Ali poruka je ista kao u našem testu: važnije je koliko i gdje se o vama piše nego sam autoritet domene.

## Što su citirane stranice imale

Rastavili smo 19 citiranih stranica. Ponavljalo se pet stvari:

1) Naziv usluge u naslovu, točno onim riječima kojima se pita. "Vidljivost u ChatGPT-u i AI tražilicama", "AI SEO i GEO", "SEO i AI optimizacija".
2) Cijene u eurima. [Digital Matrix](https://digitalmatrix.hr/) ima javni cjenik s više od 50 iznosa i on je glavni izvor za svako pitanje o cijeni. [DigiAdria](https://digiadria.hr/) ima sekciju "Početne cijene".
3) Kratak odgovor na vrhu. [Tsunami Digital](https://tsunami-digital.com/) ima blok "Ukratko", DigiAdria "Što dobivate i je li ovo za vas".
4) FAQ i schema. Većina ima FAQPage, a uslužne stranice i Service schemu s cijenom (Offer).
5) Brojke iz stvarnog projekta. Skyzone opisuje klijenta "od dna druge stranice do AI preporuke u tri mjeseca", [iGrow](https://igrow.at/), agencija iz Austrije, citiran je za Hrvatsku preko case studyja s Hrvatskom u naslovu.

To se slaže s jedinim većim kontroliranim pokusom na ovu temu. Istraživači s Princetona i suradnici (rad "GEO: Generative Engine Optimization", konferencija KDD 2024.) mijenjali su tekst stranica i mjerili koliko ga generativna tražilica koristi u odgovoru. Najbolje su prošle tri male izmjene: dodavanje citata iz vjerodostojnih izvora (vidljivost oko 41% veća od početne), dodavanje statistika (oko 33%) i navođenje izvora (oko 28%). Gomilanje ključnih riječi, klasični SEO trik, vidljivost je smanjilo, za oko 9%. ([Aggarwal i sur., arXiv 2311.09735](https://arxiv.org/abs/2311.09735), tablica 1) [4] Pokus je rađen na istraživačkom modelu tražilice, a na Perplexityju su razlike bile manje, pa su to smjerovi, ne zajamčeni postoci.

Šesta stvar nije na vašem webu: pitanje "koje su najbolje agencije" ChatGPT ne rješava stranicom agencije nego tuđim listama (assemblio.hr, tako.hr), direktorijima (Clutch, The Manifest, trebam.hr) i stranicama konferencija (Croatia SEO Summit).

<div data-embed="citati-samoprocjena"></div>

## Što napraviti ovaj tjedan

1) Upišite u ChatGPT 5 pitanja koja postavlja vaš kupac, s gradom ili "Hrvatska" u pitanju. Zapišite koje stranice citira.
2) Ako nemate uslužnu stranicu čiji naslov sadrži riječi iz tih pitanja, napravite je. Jedna stranica po usluzi.
3) Stavite barem početne cijene u eurima. Ako ih nemate javno, ChatGPT će za vaše tržište citirati tuđi cjenik.
4) Dodajte na vrh blok od 3 rečenice: što radite, za koga, od koliko eura. Predložak je odmah ispod.
5) Otvorite profil na Clutchu i trebam.hr i zamolite 3 klijenta za recenziju. Ti izvori se citiraju čak i kad vaš web nije.

### Predložak bloka "Ukratko"

Tri rečenice, ispod naslova, prije svega ostalog:

> **Ukratko:** [Što radimo, istim riječima kojima kupac pita]. [Za koga, s mjestom ili vrstom klijenta]. [Od koliko eura, i što je uključeno].

Primjer za agenciju (iznos je ilustrativan):

> **Ukratko:** Radimo SEO i optimizaciju za ChatGPT, da vašu tvrtku preporučuju Google i AI tražilice. Radimo s malim i srednjim tvrtkama u Hrvatskoj koje prodaju usluge. Mjesečna suradnja počinje od 600 € i uključuje uslužne stranice, praćenje u ChatGPT-u i izvještaj.

Primjer za stomatologa (iznos je ilustrativan):

> **Ukratko:** Ugrađujemo zubne implantate u ordinaciji u Splitu, s pregledom i 3D snimkom isti dan. Najčešće nam dolaze pacijenti kojima nedostaje jedan ili više zuba, i gosti iz inozemstva. Implantat s krunicom stoji od 950 €, a prvi pregled je 40 €.

Upišite svoje stvarne cijene. Ako cijena ovisi o projektu, napišite početnu ("od") i o čemu ovisi.

### Service schema s cijenom u eurima

Na uslužnu stranicu, uz FAQPage, dodajte i opis usluge s cijenom. Zamijenite podatke u uglatim dijelovima svojima i provjerite kod u [Googleovom alatu za provjeru strukturiranih podataka](https://search.google.com/test/rich-results) ili na [validator.schema.org](https://validator.schema.org/).

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SEO i optimizacija za ChatGPT",
  "serviceType": "SEO optimizacija",
  "description": "Uslužne stranice, praćenje u ChatGPT-u i mjesečni izvještaj za tvrtke u Hrvatskoj.",
  "url": "https://www.vasadomena.hr/seo-optimizacija/",
  "areaServed": { "@type": "Country", "name": "Hrvatska" },
  "provider": {
    "@type": "Organization",
    "name": "Vaša Tvrtka d.o.o.",
    "url": "https://www.vasadomena.hr/"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "EUR",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": 600,
      "priceCurrency": "EUR",
      "unitText": "mjesečno",
      "valueAddedTaxIncluded": false
    },
    "url": "https://www.vasadomena.hr/seo-optimizacija/#cijene"
  }
}
</script>
```

Cijena u schemi mora biti ista kao cijena u tekstu stranice.

### Liste i direktoriji koji su se pojavili u odgovorima

Za pitanje "koja je najbolja agencija" ovi izvori se citiraju umjesto stranica agencija. Ulazak u svaki je posao od jednog popodneva do nekoliko tjedana.

- **[Clutch](https://clutch.co/)**: osnovni profil agencije je besplatan, a poredak na listama za Hrvatsku i Zagreb ovisi o recenzijama klijenata. Otvorite profil i zamolite klijente za recenziju. ([Clutch](https://clutch.co/get-listed)) [5]
- **[The Manifest](https://themanifest.com/)**: sestrinski portal Clutcha. Podaci i recenzije dolaze s Clutch profila, pa nema zasebne prijave. ([Clutch Help Center](https://help.clutch.co/knowledge/what-is-the-manifest)) [6]
- **[trebam.hr](https://trebam.hr/)**: registrirate se kao izvođač, odaberete usluge i područje rada i plaćate po upitu klijenta, bez ugovora. Recenzije skupljate od klijenata s kojima ste dogovorili posao. ([trebam.hr](https://trebam.hr/pridruzi-se)) [7]
- **[assemblio.hr](https://assemblio.hr/)**: urednička lista "Top 5 SEO agencija u Hrvatskoj". Mjesto se ne kupuje prijavom: javite se uredništvu s konkretnim podacima (cijene, case study, recenzije) koje mogu provjeriti.
- **[tako.hr](https://tako.hr/)**: također urednička lista agencija. Isti pristup kao za assemblio: pošaljite provjerljive podatke i ponudite ih kao materijal za ažuriranje liste.
- **[Croatia SEO Summit](https://croatiaseosummit.com/)**: ChatGPT je citirao stranice konferencije, na kojima su navedeni predavači i partneri. Ulazi se predavanjem ili partnerstvom; prijavu organizatorima pošaljite nekoliko mjeseci prije konferencije (2026. je bila 11. i 12. lipnja u Šibeniku). ([Yoast](https://yoast.com/about-us/events/croatia-seo-summit-2026/)) [8]

## Ponavljamo test svaki mjesec

Istih 35 pitanja postavljamo ChatGPT-u prvog dana u mjesecu i bilježimo tko je citiran. Polazna točka za SERPRise je 1 od 45 odgovora (30. listopada), a mjerenje 1. studenog dalo je isti rezultat. Cilj je 10 od 45 do veljače 2027. Sljedeće mjerenje je 1. prosinca.

Od sljedećeg mjerenja test proširujemo na još dva alata, da rezultat ne ovisi samo o ChatGPT-u:

- **Google AI Mode**, koji radi i na hrvatskom. Google trenutačno navodi 98 jezika na kojima je AI Mode dostupan, među njima hrvatski. ([Google pomoć](https://support.google.com/websearch/answer/16011537), [Search Engine Roundtable](https://www.seroundtable.com/google-expands-ai-mode-to-53-new-languages-40958.html)) [9]
- **Perplexity**, koji uz svaki odgovor prikazuje izvore, pa se citati mogu brojati na isti način.

Što iz ovoga slijedi za vašu stranicu objašnjavamo u vodiču [LLM vidljivost: kako hrvatska tvrtka ulazi u odgovore ChatGPT-a i Googlea](/blog/llm-vidljivost/), a sami se možete provjeriti s [20 pitanja za ChatGPT](/blog/provjera-ai-vidljivosti/).

Ako želite da isti test napravimo za vašu djelatnost, s pitanjima koja postavljaju vaši kupci, javite se preko stranice [AI vidljivost](/ai-vidljivost/) ili [kontakt forme](/kontakt/). Dobit ćete popis stranica koje ChatGPT citira umjesto vas.

## Izvori

Vlastiti podaci: mjerenje SERPRise, 30. listopada i 1. studenog 2026., 45 odgovora ChatGPT-a preko OpenAI API-ja s web pretragom. Podaci za preuzimanje: [domene (CSV)](/data/istrazivanja/chatgpt-citati-hrvatska-domene.csv), [pretrage (CSV)](/data/istrazivanja/chatgpt-citati-hrvatska-pretrage.csv), licenca [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.hr).

1. OpenAI, "Scaling AI for everyone", 27. veljače 2026., [openai.com/index/scaling-ai-for-everyone](https://openai.com/index/scaling-ai-for-everyone/); izvještaj: TechCrunch, "ChatGPT reaches 900M weekly active users", 27. veljače 2026., [techcrunch.com](https://techcrunch.com/2026/02/27/chatgpt-reaches-900m-weekly-active-users/).
2. Rand Fishkin (SparkToro) i Patrick O'Donnell (Gumshoe), "NEW Research: AIs are highly inconsistent when recommending brands or products", 27. siječnja 2026., podaci prikupljeni u studenom i prosincu 2025., [sparktoro.com](https://sparktoro.com/blog/new-research-ais-are-highly-inconsistent-when-recommending-brands-or-products-marketers-should-take-care-when-tracking-ai-visibility/); izvještaj: [Search Engine Land](https://searchengineland.com/ai-recommendation-lists-rarely-repeat-study-468076).
3. Louise Linehan i Xibeijia Guan, Ahrefs, analiza 75.000 brendova i spomena u Google AI pregledima (Spearmanova korelacija), 26. svibnja 2025., [ahrefs.com/blog/ai-overview-brand-correlation](https://ahrefs.com/blog/ai-overview-brand-correlation/).
4. Pranjal Aggarwal, Vishvak Murahari, Tanmay Rajpurohit, Ashwin Kalyan, Karthik Narasimhan, Ameet Deshpande, "GEO: Generative Engine Optimization", KDD 2024, [arxiv.org/abs/2311.09735](https://arxiv.org/abs/2311.09735). Postoci su izračunati iz tablice 1 (Position-Adjusted Word Count: bez izmjena 19,5; citati 27,8; statistike 25,9; navođenje izvora 24,9; gomilanje ključnih riječi 17,8).
5. Clutch, "Get listed", [clutch.co/get-listed](https://clutch.co/get-listed).
6. Clutch Help Center, "What is The Manifest?", [help.clutch.co](https://help.clutch.co/knowledge/what-is-the-manifest).
7. trebam.hr, "Pridruži se", [trebam.hr/pridruzi-se](https://trebam.hr/pridruzi-se).
8. Yoast, "Croatia SEO Summit 2026", [yoast.com](https://yoast.com/about-us/events/croatia-seo-summit-2026/).
9. Google, "AI Mode", popis podržanih jezika, [support.google.com/websearch/answer/16011537](https://support.google.com/websearch/answer/16011537); Search Engine Roundtable, "Google AI Mode Works In 53 New Languages", 19. veljače 2026., [seroundtable.com](https://www.seroundtable.com/google-expands-ai-mode-to-53-new-languages-40958.html).
