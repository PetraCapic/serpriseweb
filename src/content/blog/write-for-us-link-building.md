---
title: "Zašto Write for Us više ne radi: provjerili smo 172 stranice"
description: "Provjerili smo 172 stranice koje Google daje za „write for us“: promet, ključne riječi, DR, padove prometa i linkove. Samo 41 prolazi. Kako odabrati stranicu za link."
date: 2026-11-27
translation: write-for-us-guest-posts
image: /blog/write-for-us-link-building/naslovna.png
imageAlt: "Zašto Write for Us više ne radi: 41 od 172 stranice ima promet iz svoje teme"
about:
  - name: "Link building"
    sameAs: "https://en.wikipedia.org/wiki/Link_building"
  - name: "Guest blogging"
    sameAs: "https://en.wikipedia.org/wiki/Guest_blogging"
  - name: "Domain Rating"
dataset:
  name: "Write for Us stranice: promet, tema, DR i padovi prometa (studeni 2026.)"
  description: "172 domene koje Google (SAD) prikazuje za upite „[niša] write for us“ u 20 niša, s URL-om stranice za autore, Ahrefs DR-om, DataForSEO procjenom organskog prometa, udjelom prometa s ključnih riječi niše, padom prometa od vrhunca od 2024., brojem domena koje linkaju i top ključnim riječima."
  measured: 2026-11-27
  method: "Google pretraga (SAD, engleski) za 20 upita, prve dvije stranice rezultata, bez društvenih mreža. Promet i 100 ključnih riječi s najviše prometa: DataForSEO Labs (SAD). Udio iz teme: podudarnost ključnih riječi s rječnikom pojmova niše. Povijest prometa od siječnja 2024. za 49 domena s DR-om 50+ i 1.000 do 100.000 posjeta. Backlinkovi: DataForSEO Backlinks. DR: Ahrefs."
  license: "https://creativecommons.org/licenses/by/4.0/"
  keywords: ["link building", "guest posting", "write for us", "Domain Rating", "SEO"]
  files:
    - name: "172 stranice (CSV)"
      url: /data/istrazivanja/write-for-us-172-stranice.csv
howto:
  name: "Kako provjeriti stranicu prije objave članka s linkom"
  anchor: "kontrolna-lista-6-provjera-prije-objave"
  steps:
    - "Provjerite organski promet stranice: ispod 100 posjeta mjesečno stranica ne prenosi gotovo ništa."
    - "Pogledajte 10 do 20 ključnih riječi koje joj donose najviše prometa i jesu li iz teme vašeg klijenta."
    - "Pogledajte povijest prometa za zadnje dvije godine i preskočite stranice s padom većim od 50 % bez oporavka."
    - "Usporedite izlazne linkove s ulaznima i broj vanjskih linkova po članku."
    - "Provjerite rangira li stranica, ili barem kategorija, na kojoj će link stajati."
    - "Odredite spojku: zašto čitatelj te stranice treba vaš članak, i kako ga označiti kao sponzoriran."
faq:
  - q: "Radi li guest posting preko „write for us“ stranica u 2026.?"
    a: "Rijetko. Od 172 stranice koje Google daje za upite tipa „marketing write for us“ u 20 niša, 56 ima manje od 100 posjeta mjesečno, a od 116 stranica s prometom 75 dobiva manje od 20 % prometa s ključnih riječi svoje teme. Ostaje 41 stranica, oko jedna od četiri, koja prolazi i osnovne provjere."
  - q: "Je li visok DR dovoljan za dobar link?"
    a: "Nije. DR mjeri backlinkove stranice, ne njezin promet ni temu. U našem uzorku 30 od 92 stranice s DR-om 50 ili više imalo je manje od 1.000 posjeta mjesečno, a besplatni poddomeni na Wixu ili Weeblyju preuzimaju DR platforme (do 94) uz 0 do 12 posjeta."
  - q: "Kako znati je li stranica link farma?"
    a: "Signali su: promet s ključnih riječi koje nemaju veze s temom stranice, nagli pad prometa bez oporavka, puno više izlaznih nego ulaznih linkova, javni cjenik za guest postove i „link insertion“ te prihvaćanje bilo koje teme. Jedan signal nije presuda, tri ili više zajedno jesu."
  - q: "Smije li se platiti objava članka s linkom?"
    a: "Smije se platiti sponzorirani članak, ali link treba označiti atributom rel=\"sponsored\" ili nofollow. Googleova pravila plaćene linkove bez oznake smatraju shemom linkova. Oznaka „sponzorirano“ na plaćenoj objavi u Hrvatskoj je i zakonska obveza."
  - q: "Mora li stranica biti iz iste teme kao klijent?"
    a: "Ne nužno iste, ali mora postojati prirodna spojka. Članak o osiguranju plovila na nautičkom portalu ili o solarnim panelima za jedrilice ima smisla i za čitatelja i za tražilicu; članak o kreditima na istom portalu nema."
sources:
  - name: "Google Search Central: Pravila o spamu, linkovi (link spam)"
    url: "https://developers.google.com/search/docs/essentials/spam-policies#link-spam"
  - name: "Google Search Central: Označavanje izlaznih linkova (rel sponsored, nofollow)"
    url: "https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links"
  - name: "DataForSEO Labs API: procjena prometa, rangirane ključne riječi i povijest prometa"
    url: "https://docs.dataforseo.com/v3/dataforseo_labs/overview/"
  - name: "DataForSEO Backlinks API: sažetak backlinkova"
    url: "https://docs.dataforseo.com/v3/backlinks/summary/live/"
  - name: "Ahrefs: Domain Rating (DR)"
    url: "https://ahrefs.com/website-authority-checker"
---

Guest post preko „write for us“ stranice danas većinom ne donosi ništa. Provjerili smo 172 stranice koje Google prikazuje za upite poput „marketing write for us“ ili „health write for us“ i samo 41 ima promet koji dolazi iz njezine vlastite teme. Ostale ili nemaju posjetitelje, ili ih imaju s ključnih riječi koje nemaju veze s onim o čemu primaju članke. Takav link vašem webu ne prenosi autoritet.

Godišnje napravimo više od 2.000 linkova za klijente i stalno pratimo koji od njih pomaknu pozicije i vidljivost u ChatGPT-u i Googleovim AI odgovorima. Ovo istraživanje je pokušaj da to što vidimo u praksi pokažemo brojkama.

## Ukratko

- **Promet:** 56 od 172 stranice ima manje od 100 organskih posjeta mjesečno, a 96 manje od 1.000.
- **Tema:** od 116 stranica s barem 100 posjeta, 75 dobiva manje od 20 % prometa s ključnih riječi svoje niše.
- **DR:** 30 od 92 stranice s DR-om 50 ili više ima manje od 1.000 posjeta. Besplatni poddomeni na Wixu i Weeblyju pokazuju DR 94 uz manje od jednog posjeta mjesečno.
- **Padovi:** od 49 stranica s DR-om 50+ i 1.000 do 100.000 posjeta, 36 je palo više od 50 % u odnosu na svoj vrhunac, a 16 više od 80 %.
- **Što prolazi:** 41 stranica, oko jedna od četiri.

## Kako smo mjerili

U studenom 2026. pretražili smo Google (SAD, engleski) za 20 upita tipa „[niša] write for us“: marketing, tehnologija, zdravlje, financije, putovanja, dom, biznis, lifestyle, fitness, SEO, kripto, roditeljstvo, hrana, moda, obrazovanje, nekretnine, ljubimci, softver, mali biznis i digitalni marketing. S prve dvije stranice rezultata uzeli smo 172 različite domene, bez društvenih mreža.

Za svaku domenu uzeli smo:

- **organski promet** (procjena DataForSEO za SAD),
- **100 ključnih riječi koje joj donose najviše prometa**, iz kojih smo izračunali udio prometa s ključnih riječi vezanih uz nišu za koju stranica traži članke,
- **DR** iz Ahrefsa,
- **povijest prometa** od siječnja 2024. (za 49 stranica s DR-om 50+ i 1.000 do 100.000 posjeta),
- **sažetak backlinkova** (DataForSEO Backlinks: domene koje linkaju, izlazni linkovi, spam score).

Procjene prometa nisu podaci iz Google Analyticsa stranice, nego model alata. Za usporedbu stranica međusobno su dovoljno dobre; za točan broj posjeta treba pitati vlasnika.

Svih 172 stranice, s URL-ovima koje smo gledali i brojkama za svaku, možete pregledati i filtrirati [niže u članku](#svih-172-stranice).

## 1. Većina stranica nema promet

![Lijevak: 172 stranice, 116 s barem 100 posjeta, 41 s barem 20 % prometa iz svoje niše](/blog/write-for-us-link-building/lijevak.png)

Medijan u uzorku je oko 540 organskih posjeta mjesečno. Trećina stranica ima manje od 100. Takva stranica vam ne šalje ni posjetitelje ni autoritet, jer ni sama nema autoritet koji bi Google prepoznao kroz promet.

To nisu samo male stranice. Upiti „write for us“ danas su tržište: stranice namjerno rangiraju za njih jer tako pronalaze kupce. U našem uzorku dvije stranice dobivaju 40 % i više svog prometa upravo od upita poput „write for us technology“ i „websites accepting guest posts“.

## 2. DR ne govori ništa o prometu

![Tablica: stranice s visokim DR-om kojima promet dolazi s nepovezanih ključnih riječi](/blog/write-for-us-link-building/dr-promet.png)

DR (Domain Rating) mjeri koliko jake backlinkove domena ima. Ne mjeri ima li stranica posjetitelje i o čemu ih ima. Zato je DR najlakša metrika za „napuhati“ i najčešća metrika na cjenicima linkova.

Tri obrasca koja smo vidjeli:

- **Besplatni poddomeni.** Stranica na Wixu, Weeblyju ili WordPress.com poddomeni u Ahrefsovoj besplatnoj provjeri pokazuje DR platforme. U uzorku je sedam takvih „write for us“ stranica s DR-om 68 do 94 i 0 do 12 posjeta mjesečno.
- **Visok DR, promet iz druge teme.** softwaresuggest.com (DR 78) prima članke o softveru, a od 100 ključnih riječi s najviše prometa samo oko 1 % prometa dolazi iz softverske teme; najjače su „fastpeoplesearch“ i „google lens“. technology.org (DR 74) najviše prometa dobiva od pitanja poput „how many cups are in a litre“.
- **Visok DR, promet od pjesama.** gigwise.com (DR 71) ima posebnu stranicu na kojoj traži članke o hrani, a najviše prometa dobiva od tekstova pjesama.

Od 82 stranice s DR-om 50+ i barem 100 posjeta, 52 dobivaju manje od 20 % prometa iz svoje niše.

## 3. Promet mora doći s ključnih riječi vaše teme

Link prenosi autoritet kad ga Google vidi na stranici koja je relevantna za temu na koju linka i koja za tu temu rangira. Stranica s prometom od kalkulatora za pretvaranje jedinica ne govori Googleu ništa o tome je li vaš klijent dobar izvor za računovodstveni softver.

Kako provjeriti u 5 minuta:

1. U Ahrefsu ili Semrushu otvorite **Organic keywords** za domenu i poredajte po prometu.
2. Pogledajte prvih 20 ključnih riječi. Ako je više od pola nepovezano s temom zbog koje kupujete link, stranica nije za vas.
3. Pogledajte **Top pages**. Ako 50 % ili više prometa dolazi s jedne stranice, autoritet domene ovisi o toj jednoj stranici, ne o kategoriji u koju će ići vaš članak. Tako je bilo kod 21 od 116 stranica u uzorku.

## 4. Stranica koja gubi promet gubi i ono što bi vam prenijela

![Grafikon: organski promet tri stranice s DR-om 62 do 75 pao je 92 do 96 % od 2024. do 2026.](/blog/write-for-us-link-building/pad-prometa.png)

DR se mijenja sporo, a promet se može srušiti u nekoliko mjeseci nakon Googleovog ažuriranja. Stranica s DR-om 74 koja je izgubila 92 % prometa i dalje izgleda jako u tablici prodavača linkova.

Od 49 stranica s DR-om 50+ i 1.000 do 100.000 posjeta, kojima smo gledali povijest od siječnja 2024., 36 je palo više od 50 % u odnosu na svoj vrhunac, a 16 više od 80 %. Primjeri: nichepursuits.com (DR 74) sa 163.674 na 13.286, exercise.com (DR 75) sa 113.020 na 7.996, mindmajix.com (DR 62) s 40.784 na 1.587.

Dio pada je opći trend, jer AI odgovori u Googleu smanjuju klikove gotovo svima. Ali pad od 90 % bez oporavka nije trend, nego signal da Google stranici više ne vjeruje kao prije. Pravilo koje koristimo: preskačemo stranice s padom većim od 50 % u zadnjih 12 mjeseci ako se promet nije barem djelomično vratio.

## 5. Omjer izlaznih i ulaznih linkova

Link farma prodaje linkove, pa ih ima puno više prema van nego prema sebi. Dva primjera iz uzorka:

- **vocalmagazine.co.uk** (DR 36) na svojoj stranici objavljuje cjenik: guest post 50 $, „link insertion“ 40 $, „grey niche“ guest post 100 $. Prema DataForSEO-u na nju linka 10 domena, a s 547 njezinih stranica izlazi 1.842 vanjskih linkova.
- **forums.hostsearch.com** (DR 68) ima spam score 44 i više od 840.000 vanjskih linkova.

Kako provjeriti: u Ahrefsu usporedite **Linked domains** (na koliko domena stranica linka) i **Referring domains** (koliko domena linka na nju). Ako stranica linka na mnogo više domena nego što ih linka na nju, i to na teme koje nemaju veze jedna s drugom (kasino, kriptovalute, krediti i vrtlarstvo na istoj stranici), to je obrazac prodaje linkova. Otvorite i nekoliko zadnjih članaka: ako svaki ima 2 do 3 komercijalna linka na različite tvrtke, članak je napisan zbog linkova, ne zbog čitatelja.

## 6. „Write for us“ je danas prodajna stranica

Na mnogim stranicama „write for us“ više nije poziv autorima, nego cjenik. coinranking.com izričito piše da su svi guest postovi plaćeni i da cijene kreću od 149 $. financely.io traži 80 $ po članku. Stranice koje stvarno biraju autore (HuffPost, Parents, Edutopia, Buffer) u istim rezultatima imaju programe za stručnjake i novinare, ne za SEO linkove, i takve pitcheve uglavnom odbijaju.

Plaćanje nije problem samo po sebi. Problem je što platite stranicu koja nema promet iz vaše teme, a link nije označen, pa riskirate i bez koristi.

## Što radimo umjesto toga

Linkove za klijente plaćamo, i to otvoreno govorimo. Platiti objavu je brže i jednostavnije nego mjesecima pregovarati za „besplatan“ guest post koji na kraju ionako ima cijenu. Razlika je u tome što plaćamo:

- **stranicu s prometom s relevantnih ključnih riječi**, ne DR,
- **objavu označenu kao sponzorirana** (rel="sponsored"), u skladu s Googleovim pravilima,
- **članak koji ima vrijednost za čitatelja tog portala**, jer takav članak Google zadrži u indeksu, a AI alati ga mogu pročitati i citirati.

Kako oznaka „sponzorirano“ utječe na to hoće li AI citirati objavu, pouzdan javni podatak još nismo pronašli; više o tome u članku [Digitalni PR za AI vidljivost](/blog/digitalni-pr-ai-vidljivost/). Za hrvatsko tržište izmjerili smo promet, DR i oznaku sponzoriranog sadržaja za [335 portala](/blog/portali-za-pr-objave/).

## Tema ne mora biti ista, ali mora postojati spojka

Stranica mora biti tematski relevantna, ali „relevantno“ ne znači „ista djelatnost“. AI danas jako dobro pronalazi prirodnu vezu između dviju tema koje na prvi pogled nemaju veze, i to je jedna od najkorisnijih primjena AI-ja u link buildingu.

Primjer: nautički portal. Iz naše liste portala, nauticka-patrola.hr ima oko 571 organski posjet mjesečno i objavljuje sponzorirane članke. Što bi na njemu imalo smisla za klijente koji nisu iz nautike:

| Klijent | Spojka | Naslov članka |
|---|---|---|
| Osiguranje | Plovilo je imovina koju treba osigurati | „Što kasko plovila ne pokriva: 5 situacija iz prakse“ |
| Solarni paneli | Struja na sidru | „Koliko struje treba jedrilici za tjedan na sidru“ |
| Računovodstveni softver | Charter je posao s PDV-om | „PDV na najam plovila: kako charter vodi knjige“ |
| Ljekarna | Morska bolest | „Morska bolest: što stvarno pomaže, a što je mit“ |
| Hrana i piće | Opskrba na brodu | „Što ponijeti na jedrenje kad nema hladnjaka“ |

Prompt koji koristimo: „Ovo je portal [tema] i ovo su njegovi najčitaniji članci: [popis]. Klijent je [djelatnost]. Predloži 5 tema koje bi čitatelj ovog portala stvarno pročitao, a u kojima je klijent prirodan primjer, ne reklama.“ Odgovor zatim provjerimo prema ključnim riječima za koje portal već rangira.

Spojka ima granicu. Članak o brzim kreditima na nautičkom portalu nema spojku ni za čitatelja ni za Google.

## Provjerite stranicu prije kupnje linka

Upišite brojke iz Ahrefsa, Semrusha ili DataForSEO-a za stranicu koju razmatrate. Alat koristi iste pragove kao kontrolna lista ispod.

<div data-embed="wfu-provjera"></div>

## Kontrolna lista: 6 provjera prije objave

1. **Promet.** Ispod 100 organskih posjeta mjesečno preskačemo, osim ako je stranica izrazito nišna i jedina u temi.
2. **Ključne riječi.** Od 20 ključnih riječi s najviše prometa, barem pola mora biti iz teme vezane uz klijenta.
3. **Povijest prometa.** Pad veći od 50 % u zadnjih 12 mjeseci bez oporavka znači ne.
4. **Linkovi van i unutra.** Puno više izlaznih nego ulaznih domena i 2 do 3 komercijalna linka po članku znači ne.
5. **Stranica na kojoj link stoji.** Kategorija ili rubrika u koju ide članak mora imati vlastiti promet ili barem biti povezana s naslovnice.
6. **Spojka i oznaka.** Znamo zašto čitatelj tog portala treba članak, a link je označen kao sponzoriran.

Kod 172 „write for us“ stranice, prve dvije provjere prošla je 41. Ostale četiri smanjile bi taj broj još više.

## Svih 172 stranice

Sve stranice iz istraživanja, s linkom na „write for us“ stranicu koju smo gledali, DR-om, procjenom prometa, udjelom prometa iz teme i padom prometa. Stranice označene s „prolazi“ imaju barem 100 posjeta i barem 20 % prometa iz svoje niše; to još ne znači da su dobre za link, nego samo da su prošle prve dvije provjere.

<div data-embed="wfu-podaci"></div>
