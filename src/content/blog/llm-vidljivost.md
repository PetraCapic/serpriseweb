---
title: "LLM vidljivost: vodič kako hrvatska tvrtka ulazi u odgovore ChatGPT-a i Googlea"
description: "Što su LLM vidljivost, GEO i AEO, koje stranice AI citira za hrvatska pitanja, četiri stvari koje odlučuju, kviz, plan za 30 dana i robots.txt za kopiranje."
date: 2026-11-01
updated: 2026-11-01
image: /blog/llm-vidljivost/naslovna.png
imageAlt: "LLM vidljivost za hrvatske tvrtke"
about:
  - name: "Generative engine optimization (GEO)"
    sameAs: "https://en.wikipedia.org/wiki/Generative_engine_optimization"
  - name: "LLM vidljivost (AI vidljivost)"
  - name: "ChatGPT"
    sameAs: "https://en.wikipedia.org/wiki/ChatGPT"
  - name: "Optimizacija za tražilice (SEO)"
    sameAs: "https://en.wikipedia.org/wiki/Search_engine_optimization"
hasPart:
  - chatgpt-citati-hrvatska
  - chatgpt-pretrage
  - case-study-ai-vidljivost-osmrtnice
  - portali-za-pr-objave
  - provjera-ai-vidljivosti
  - ga4-ai-kanal
faq:
  - q: "Što je GEO?"
    a: "GEO (generative engine optimization) je optimizacija weba da vas ChatGPT, Perplexity, Gemini i Googleov AI način spominju i citiraju u odgovorima. Pojam dolazi iz istraživanja Princetona i suradnika objavljenog na konferenciji KDD 2024."
  - q: "Je li GEO isto što i SEO?"
    a: "Ne, ali se preklapaju. AI alati s pretragom otvaraju stranice koje nađu u tražilici, pa bez osnovnog SEO-a teško ulazite u odgovor. GEO dodaje tri stvari: da AI može pročitati stranicu bez JavaScripta, da stranica izravno odgovara na pitanje i da vas spominju drugi izvori koje AI čita."
  - q: "Treba li mi llms.txt?"
    a: "Nije prioritet. Google ga ne koristi (Gary Illyes, Google, 2025.). Neki AI alati ga čitaju, ali nema dokaza da donosi citate. Prvo provjerite robots.txt i vidi li se tekst stranice u HTML-u."
  - q: "Koliko traje da ChatGPT počne spominjati moju firmu?"
    a: "Ovisi o tome što nedostaje. Kad je problem tehnički, promjena se vidi brzo: na hrvatskom portalu za osmrtnice posjeti s ChatGPT-a narasli su sa 6 u 19 dana na 67 u 12 dana nakon što je sadržaj stavljen u HTML. Spomeni na portalima i direktorijima traju duže, računajte na nekoliko mjeseci i mjerite jednom mjesečno."
  - q: "Kako izmjeriti AI vidljivost besplatno?"
    a: "Tri besplatna izvora: popis od 20 pitanja vaših kupaca koja jednom mjesečno postavite ChatGPT-u i zabilježite jeste li spomenuti, kanal za AI promet u GA4 (ugrađeni AI Assistant ili vlastiti regex) i izvještaj AI Performance u Bing Webmaster Toolsu, koji pokazuje koliko vas citira Copilot."
sources:
  - name: "TechCrunch, 27. 2. 2026.: ChatGPT reaches 900M weekly active users"
    url: "https://techcrunch.com/2026/02/27/chatgpt-reaches-900m-weekly-active-users"
  - name: "Search Engine Roundtable, 19. 2. 2026.: Google AI Mode works in 53 new languages (popis 98 jezika)"
    url: "https://www.seroundtable.com/google-expands-ai-mode-to-53-new-languages-40958.html"
  - name: "Nick Fox (Google) na X-u, 18. 2. 2026."
    url: "https://x.com/thefox/status/2024182498171994604"
  - name: "Vercel, 17. 12. 2024.: The rise of the AI crawler"
    url: "https://vercel.com/blog/the-rise-of-the-ai-crawler"
  - name: "OpenAI: Overview of OpenAI crawlers"
    url: "https://developers.openai.com/api/docs/bots"
  - name: "Perplexity: Perplexity crawlers"
    url: "https://docs.perplexity.ai/guides/bots"
  - name: "Anthropic: Does Anthropic crawl data from the web?"
    url: "https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler"
  - name: "Google: Google-Extended (Googleovi crawleri)"
    url: "https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers"
  - name: "Aggarwal i sur., GEO: Generative Engine Optimization (KDD 2024.)"
    url: "https://arxiv.org/abs/2311.09735"
  - name: "Ahrefs: An Analysis of AI Overview Brand Visibility Factors (75K Brands Studied)"
    url: "https://ahrefs.com/blog/ai-overview-brand-correlation/"
  - name: "SparkToro, 28. 1. 2026.: AIs are highly inconsistent when recommending brands or products"
    url: "https://sparktoro.com/blog/new-research-ais-are-highly-inconsistent-when-recommending-brands-or-products-marketers-should-take-care-when-tracking-ai-visibility/"
  - name: "Bing Webmaster Blog, veljača 2026.: Introducing AI Performance in Bing Webmaster Tools (Public Preview)"
    url: "https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview"
  - name: "Search Engine Journal: Google Analytics adds AI Assistant as default channel group"
    url: "https://www.searchenginejournal.com/google-analytics-adds-ai-assistant-as-default-channel-group/"
  - name: "Search Engine Land: Google says normal SEO works for ranking in AI Overviews and llms.txt won't be used"
    url: "https://searchengineland.com/google-says-normal-seo-works-for-ranking-in-ai-overviews-and-llms-txt-wont-be-used-459422"
---

<span data-term="llm-vidljivost">LLM vidljivost</span> je to koliko često vas ChatGPT, Gemini, Perplexity i Googleovi AI odgovori spominju ili linkaju kad netko pita za vašu uslugu ili proizvod. <span data-term="geo">GEO</span>, <span data-term="aeo">AEO</span>, <span data-term="ai-seo">AI SEO</span> i LLM optimizacija su različiti nazivi za isti posao: da u tim odgovorima budete vi, a ne konkurent.

Zašto baš sada i baš u Hrvatskoj? ChatGPT ima oko 900 milijuna korisnika tjedno, objavio je OpenAI u veljači 2026. ([TechCrunch](https://techcrunch.com/2026/02/27/chatgpt-reaches-900m-weekly-active-users)). Iste veljače Google je <span data-term="ai-mode">AI način</span> (AI Mode) proširio na 53 nova jezika, ukupno 98, i hrvatski je na popisu ([Search Engine Roundtable](https://www.seroundtable.com/google-expands-ai-mode-to-53-new-languages-40958.html), [Nick Fox, Google](https://x.com/thefox/status/2024182498171994604)). Vaši kupci sada dobivaju AI odgovor na hrvatskom, i u ChatGPT-u i u Googleu.

Ovaj vodič ne prepričava engleske članke. Temelji se na našim testovima na hrvatskim pitanjima: 35 pitanja i 45 odgovora ChatGPT-a o agencijama i cijenama, 12 pitanja o osmrtnicama i sprovodima te GA4 i Search Console podacima jednog hrvatskog portala. Strane studije koristimo tamo gdje potvrđuju ili objašnjavaju ono što smo vidjeli. Svaki izvor je linkan u tekstu i na [popisu izvora](#izvori) na dnu.

Ako želite odmah znati gdje ste, [riješite kviz od 10 pitanja](#kviz). Traje dvije minute.

## Kako AI odgovara na hrvatsko pitanje

Kad pitate ChatGPT nešto s uključenom pretragom, on sam napiše jednu ili više pretraga, otvori desetak stranica i od njih složi odgovor. U odgovoru navede izvore. To se zove <span data-term="grounding">grounding</span>: odgovor se temelji na stranicama koje je upravo pročitao, a ne samo na onome što je naučio u treningu. Ako vaša stranica nije među tih desetak, ne postojite.

<div data-embed="answer-flow"></div>

Tekstualno, u četiri koraka:

1) **Pitanje.** Kupac upiše pitanje, npr. "Koja agencija u Splitu radi SEO i koliko košta?"
2) **Pretraga.** ChatGPT pitanje razloži na nekoliko pretraga, dio na hrvatskom, dio na engleskom (<span data-term="fan-out">query fan-out</span>). Kako ih vidjeti u Chromeu: [Što ChatGPT stvarno pretražuje](/blog/chatgpt-pretrage/).
3) **Desetak stranica.** Otvori rezultate i pročita njihov HTML.
4) **Odgovor s izvorima.** Složi odgovor i navede izvore.

Tri stvari koje smo vidjeli u testovima:

- **Opća pitanja pretražuje na engleskom.** "Što je GEO optimizacija?" ChatGPT prevede u "Generative Engine Optimization meaning" i citira Semrush i znanstvene radove. Hrvatski članak tu teško dolazi u odgovor.
- **Čim pitanje ima grad, "Hrvatska", cijenu ili "agencija", izvori su hrvatski.** To su kupovna pitanja i tu se natječete samo s domaćim stranicama.
- **Autoritet domene gotovo ne odlučuje.** Citirane su stranice s Domain Ratingom 0 do 6. Detalji i tablica domena su u istraživanju [Koje stranice ChatGPT citira kad netko traži agenciju u Hrvatskoj](/blog/chatgpt-citati-hrvatska/).

## Četiri stvari koje odlučuju

<div data-embed="cluster-map"></div>

### 1. Može li AI uopće pročitati vašu stranicu

AI crawleri ne pokreću JavaScript. Vercel je u prosincu 2024. analizirao promet crawlera na svojoj mreži: botovi OpenAI-ja i Anthropica preuzimaju JavaScript datoteke, ali ih ne izvršavaju. Iznimke su Gemini, koji koristi Googlebotovu infrastrukturu, i AppleBot ([Vercel](https://vercel.com/blog/the-rise-of-the-ai-crawler)). Ako je vaš web napravljen u Reactu ili sličnom frameworku i sadržaj se crta tek u pregledniku, ChatGPT i Perplexity vide praznu stranicu.

Provjera traje minutu: Ctrl+U na podstranici, pa Ctrl+F za rečenicu iz teksta. Ako je nema u izvornom kodu, nema je ni za AI.

Na hrvatskom portalu za osmrtnice to je bio cijeli problem. Nakon što smo sadržaj stavili u HTML, posjeti s ChatGPT-a narasli su sa 6 u 19 dana na 67 u 12 dana. Sve promjene po danima su u [case studyju](/blog/case-study-ai-vidljivost-osmrtnice/).

Druga tehnička provjera je robots.txt. OpenAI ima tri bota i svaki radi nešto drugo ([OpenAI](https://developers.openai.com/api/docs/bots)):

| Bot | Što radi | Ako ga blokirate |
| --- | --- | --- |
| OAI-SearchBot | Indeksira stranice za pretragu u ChatGPT-u | Ne pojavljujete se u ChatGPT odgovorima s pretragom |
| GPTBot | Skuplja sadržaj za trening budućih modela | Sadržaj se ne koristi za trening. Pretraga nije pogođena. |
| ChatGPT-User | Otvara stranicu kad je korisnik zatraži u razgovoru | OpenAI kaže da se robots.txt na njega ne mora primjenjivati, jer posjet pokreće korisnik |

**Blokiranje GPTBota ne skida vas iz ChatGPT pretrage. Blokiranje OAI-SearchBota skida.** Isto vrijedi za Perplexity (PerplexityBot je za pretragu, [Perplexity](https://docs.perplexity.ai/guides/bots)) i Anthropic, gdje je ClaudeBot za trening, a Claude-SearchBot i Claude-User za pretragu i odgovore ([Anthropic](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)).

Još jedna zamka: ako bot ima svoju grupu pravila u robots.txt, za njega ne vrijedi ništa iz grupe "User-agent: \*". Gotov primjer je [niže u vodiču](#robotstxt-za-kopiranje).

### 2. Imate li stranicu koja odgovara točno na pitanje

Citirane hrvatske stranice za kupovna pitanja imale su pet zajedničkih stvari:

- naziv usluge u naslovu, istim riječima kojima kupac pita
- cijene u eurima, barem početne
- kratak odgovor na vrhu: što radite, za koga, od koliko eura
- FAQ i schema oznake
- brojke iz stvarnog projekta

Jedna stranica po usluzi. Blog članak o "trendovima" ne zamjenjuje uslužnu stranicu.

Isti smjer pokazuje i istraživanje koje je pojmu GEO dalo ime. Tim s Princetona i suradnici testirali su devet načina dorade teksta na 10.000 upita i mjerili koliko teksta izvora završi u AI odgovoru ([Aggarwal i sur., KDD 2024.](https://arxiv.org/abs/2311.09735)). Najbolje su prošli:

- **citati iz izvora** (doslovni navod stručnjaka ili dokumenta): +41 %
- **statistika** (konkretne brojke umjesto opisa): oko +33 %
- **navođenje izvora** uz tvrdnje: oko +28 %

**Keyword stuffing** (nabijanje ključnih riječi) prošao je lošije od neizmijenjenog teksta, oko −9 %. Brojke su iz tablice 1 rada, za metriku vidljivosti prilagođene poziciji u odgovoru. Zaključak za praksu: brojka iz vašeg projekta i link na izvor vrijede više od još jednog ponavljanja ključne riječi.

### 3. Spominju li vas drugi

Za pitanje "koje su najbolje agencije" ChatGPT ne citira stranicu agencije nego tuđe liste, direktorije (Clutch, trebam.hr) i stranice konferencija. Za lokalne usluge to su lokalni portali i stranice gradova.

Ahrefs je na 75.000 brendova usporedio što ide uz vidljivost u Googleovim <span data-term="ai-overview">AI pregledima</span>. Najjača veza bila je s brojem spomena brenda na webu (korelacija 0,664), a s backlinkovima znatno slabija (0,218) ([Ahrefs](https://ahrefs.com/blog/ai-overview-brand-correlation/)). Korelacija nije dokaz uzroka, ali se poklapa s onim što vidimo u hrvatskim odgovorima.

**U AI odgovorima spomen je važniji od linka.** Profil na direktoriju i jedan članak na portalu koji AI već citira često vrijede više od deset novih blog članaka na vlastitom webu. Razliku između <span data-term="citat">citata</span> i <span data-term="spomen">spomena</span> objašnjavamo u [nazivima](#nazivi-koje-ćete-sretati) niže. Popis portala s DR-om i oznakom sponzoriranog sadržaja je u članku [Hrvatski portali za PR objave](/blog/portali-za-pr-objave/).

### 4. Mjerite li

Bez mjerenja ne znate je li išta od ovoga radilo. Ali "na kojem smo mjestu u ChatGPT-u" nije dobro pitanje. SparkToro i Gumshoe pustili su iste upite kroz ChatGPT, Claude i Google AI gotovo 3.000 puta: šansa da dva odgovora daju isti popis brendova bila je manja od 1 na 100, a isti popis istim redom oko 1 na 1.000 ([SparkToro](https://sparktoro.com/blog/new-research-ais-are-highly-inconsistent-when-recommending-brands-or-products-marketers-should-take-care-when-tracking-ai-visibility/)). Pozicija je šum. Mjeri se **postotak pojavljivanja**: u koliko od N odgovora ste spomenuti.

Četiri izvora, svi besplatni:

- **Promptovi.** Popis od 20 pitanja koja postavljaju vaši kupci, upisan u ChatGPT jednom mjesečno. Gotov popis i tablica za bilježenje: [Spominje li ChatGPT vašu firmu? Provjera u 20 pitanja](/blog/provjera-ai-vidljivosti/).
- **GA4.** Google je 2026. dodao ugrađeni kanal "AI Assistant" ([Search Engine Journal](https://www.searchenginejournal.com/google-analytics-adds-ai-assistant-as-default-channel-group/)). Na portalu iz case studyja uhvatio je 136 od 319 AI posjeta, ostatak je bio u Unassigned i Referral. Naš regex i koraci: [GA4 skriva više od polovice posjeta s ChatGPT-a](/blog/ga4-ai-kanal/).
- **Bing Webmaster Tools, izvještaj AI Performance.** Od veljače 2026. besplatno pokazuje koliko puta su vaše stranice citirane u Copilotu i Bingovim AI sažecima, i za koja pitanja ([Bing Webmaster Blog](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)). To je jedini službeni izvor podataka o AI citatima koji trenutno postoji.
- **Search Console.** Ne odvaja AI promet, ali pokazuje rastu li upiti za koje već imate stranicu.

<div id="kviz"><div data-embed="quiz"></div></div>

## Plan za 30 dana

Redoslijed je bitan: nema smisla graditi spomene za stranicu koju AI ne može pročitati.

| Tjedan | Fokus | Što napraviti |
| --- | --- | --- |
| 1 | Tehnika | Ctrl+U test na 5 glavnih stranica. robots.txt: dopustiti OAI-SearchBot, PerplexityBot, Claude-SearchBot. Dodati web u Bing Webmaster Tools i uključiti IndexNow. |
| 2 | Uslužne stranice | Za svaku uslugu: naziv usluge u naslovu, početna cijena u eurima, blok "Ukratko" na vrhu, FAQ s oznakama, jedna brojka iz stvarnog projekta. |
| 3 | Spomeni | Profili na 3 do 5 direktorija koje AI citira u vašoj djelatnosti (Clutch, trebam.hr, granski imenici). Jedan članak na portalu koji AI već citira za vašu temu. |
| 4 | Mjerenje | Kanal za AI promet u GA4. 20 pitanja kupaca u ChatGPT, rezultat u tablicu: to je polazna točka. Isti test svaki mjesec, isti dan. |

Nakon 30 dana imate čitljiv web, stranicu za svako kupovno pitanje, prve spomene i broj s kojim možete usporediti sljedeći mjesec.

## robots.txt za kopiranje

Zamijenite domenu u zadnjem retku i stavite datoteku u korijen weba (vasadomena.hr/robots.txt). Pretraživački botovi su dopušteni. Odluku o botovima za trening ostavljamo vama: odkomentirajte blok ako ne želite da se vaš sadržaj koristi za trening modela. To ne utječe na pojavljivanje u odgovorima.

```
# robots.txt: AI pretraga dopuštena, trening po vašoj odluci

# Svi ostali botovi, uključujući Googlebot i Bingbot
User-agent: *
Allow: /
# Disallow: /admin/

# --- AI pretraga: ovi botovi donose citate i posjete ---
# Bot s vlastitom grupom NE čita pravila iz "User-agent: *",
# pa sve što zabranjujete gore ponovite i ovdje.

# ChatGPT pretraga
User-agent: OAI-SearchBot
Allow: /

# ChatGPT otvara stranicu na zahtjev korisnika
User-agent: ChatGPT-User
Allow: /

# Perplexity pretraga i odgovori
User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

# Claude pretraga i odgovori
User-agent: Claude-SearchBot
Allow: /

User-agent: Claude-User
Allow: /

# --- Trening modela: odluka je vaša ---
# Blokiranje NE skida vas iz ChatGPT, Claude ni Google pretrage.
# Odkomentirajte ako ne želite da se sadržaj koristi za trening.

# User-agent: GPTBot
# Disallow: /

# User-agent: ClaudeBot
# Disallow: /

# Google-Extended: trening i grounding u Gemini aplikacijama,
# ne utječe na Google pretragu
# User-agent: Google-Extended
# Disallow: /

Sitemap: https://vasadomena.hr/sitemap.xml
```

Izvori za svaki bot: [OpenAI](https://developers.openai.com/api/docs/bots), [Perplexity](https://docs.perplexity.ai/guides/bots), [Anthropic](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler), [Google](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers). Perplexity-User i ChatGPT-User pokreće korisnik, pa ih robots.txt ne mora zaustaviti. Grupe su tu da pravila budu jasna.

## Nazivi koje ćete sretati

| Naziv | Što znači u praksi |
| --- | --- |
| LLM vidljivost / AI vidljivost | Koliko vas spominju AI alati. Mjeri se postotkom pojavljivanja u odgovorima i u GA4. |
| GEO | Optimizacija za generativne tražilice (ChatGPT, Perplexity, AI Mode). |
| AEO | Optimizacija za odgovore: featured snippet, AI pregled, glasovni asistenti. |
| AI SEO | Isto kao GEO, češće se koristi u ponudama agencija. |
| AI Overview / AI pregled | Googleov sažetak iznad rezultata pretrage, s linkovima na izvore. |
| AI Mode / AI način | Googleova pretraga u obliku razgovora. Od veljače 2026. radi na hrvatskom. |
| Grounding | AI prije odgovora pretraži web i odgovor složi iz pronađenih stranica. |
| Query fan-out | AI jedno pitanje razloži na više pretraga, često i na engleskom, pa spoji rezultate. |
| Citat vs spomen | Citat je link na vašu stranicu kao izvor. Spomen je ime tvrtke u tekstu odgovora, s linkom ili bez. Za kupca je važan spomen, za promet citat. |
| llms.txt | Datoteka s opisom weba za AI. Google ga ne koristi (Gary Illyes, 2025., [Search Engine Land](https://searchengineland.com/google-says-normal-seo-works-for-ranking-in-ai-overviews-and-llms-txt-wont-be-used-459422)). Neki AI alati ga čitaju, ali nema dokaza da donosi citate. |

## Naše mjerenje

Istih 35 pitanja o SEO-u i AI vidljivosti postavljamo ChatGPT-u svaki mjesec. Na početku, 30. listopada, SERPRise se pojavio u 1 od 45 odgovora, i isto 1. studenoga. Cilj je 10 od 45 do 1. veljače 2027. Rezultate objavljujemo ovdje, i kad nisu dobri.

<div data-embed="tracker"></div>

Ako želite da isti test napravimo za vašu djelatnost, s pitanjima vaših kupaca, pogledajte uslugu [AI vidljivost](/ai-vidljivost/) ili preuzmite [besplatni vodič u 9 koraka](/vodic-llm-vidljivost/).
