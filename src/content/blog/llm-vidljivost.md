---
title: "LLM vidljivost: kako hrvatska tvrtka ulazi u odgovore ChatGPT-a i Googlea"
description: "Što su LLM vidljivost, GEO i AEO, koje stranice ChatGPT stvarno citira za hrvatska pitanja i četiri stvari koje odlučuju hoće li spomenuti vašu tvrtku."
date: 2026-11-01
image: /blog/llm-vidljivost/naslovna.png
imageAlt: "LLM vidljivost za hrvatske tvrtke"
---

LLM vidljivost je to koliko često vas ChatGPT, Gemini, Perplexity i Google AI pregled spominju ili linkaju kad netko pita za vašu uslugu ili proizvod. GEO (generative engine optimization), AEO (answer engine optimization), AI SEO i LLM optimizacija su različiti nazivi za isti posao: da u tim odgovorima budete vi, a ne konkurent.

Ovaj vodič ne prepričava engleske članke. Sve što piše ispod temelji se na našim testovima na hrvatskim pitanjima: 35 pitanja i 45 odgovora ChatGPT-a o agencijama i cijenama, 12 pitanja o osmrtnicama i sprovodima te GA4 i Search Console podacima jednog hrvatskog portala.

## Kako AI odgovara na hrvatsko pitanje

Kad pitate ChatGPT nešto s uključenom pretragom, on sam napiše jednu ili više pretraga, otvori desetak stranica i od njih složi odgovor. U odgovoru navede izvore. Ako vaša stranica nije među tih desetak, ne postojite.

Tri stvari koje smo vidjeli u testovima:

1) **Opća pitanja pretražuje na engleskom.** "Što je GEO optimizacija?" ChatGPT prevede u "Generative Engine Optimization meaning" i citira Semrush i znanstvene radove. Hrvatski članak tu teško dolazi u odgovor.
2) **Čim pitanje ima grad, "Hrvatska", cijenu ili "agencija", izvori su hrvatski.** To su kupovna pitanja i tu se natječete samo s domaćim stranicama.
3) **Autoritet domene gotovo ne odlučuje.** Citirane su stranice s Domain Ratingom 0 do 6. Detalji i tablica domena su u istraživanju [Koje stranice ChatGPT citira kad netko traži agenciju u Hrvatskoj](/blog/chatgpt-citati-hrvatska/).

## Četiri stvari koje odlučuju

![Kako su članci o AI vidljivosti povezani](/blog/llm-vidljivost/mapa.png)

### 1. Može li AI uopće pročitati vašu stranicu

ChatGPT, Perplexity i Claude ne pokreću JavaScript. Ako je vaš web napravljen u Reactu ili sličnom frameworku i sadržaj se crta tek u pregledniku, oni vide praznu stranicu. Provjera traje minutu: Ctrl+U na podstranici, pa Ctrl+F za rečenicu iz teksta.

Na hrvatskom portalu za osmrtnice to je bio cijeli problem. Nakon što smo sadržaj stavili u HTML, posjeti s ChatGPT-a narasli su sa 6 u 19 dana na 67 u 12 dana. Sve promjene po danima su u [case studyju](/blog/case-study-ai-vidljivost-osmrtnice/).

Druga tehnička provjera je robots.txt. Ako GPTBot, OAI-SearchBot ili PerplexityBot imaju svoju grupu pravila, za njih ne vrijedi ništa iz grupe "User-agent: *".

### 2. Imate li stranicu koja odgovara točno na pitanje

Citirane hrvatske stranice za kupovna pitanja imale su pet zajedničkih stvari:

- naziv usluge u naslovu, istim riječima kojima kupac pita
- cijene u eurima, barem početne
- kratak odgovor na vrhu: što radite, za koga, od koliko eura
- FAQ i schema oznake
- brojke iz stvarnog projekta

Jedna stranica po usluzi. Blog članak o "trendovima" ne zamjenjuje uslužnu stranicu.

Koje riječi ChatGPT stvarno pretražuje za pitanje vašeg kupca možete vidjeti sami, u Chromeu. Postupak i što iz pretraga pročitati: [Što ChatGPT stvarno pretražuje kad netko pita za vašu uslugu](/blog/chatgpt-pretrage/).

### 3. Spominju li vas drugi

Za pitanje "koje su najbolje agencije" ChatGPT ne citira stranicu agencije nego tuđe liste, direktorije (Clutch, trebam.hr) i stranice konferencija. Za lokalne usluge to su lokalni portali i stranice gradova. Profil na direktoriju i jedan članak na portalu koji AI već citira često vrijede više od deset novih blog članaka na vlastitom webu. Popis portala s DR-om i oznakom sponzoriranog sadržaja je u članku [Hrvatski portali za PR objave](/blog/portali-za-pr-objave/).

### 4. Mjerite li

Bez mjerenja ne znate je li išta od ovoga radilo. Dvije stvari, obje besplatne:

- **Promptovi.** Popis od 20 pitanja koja postavljaju vaši kupci, upisan u ChatGPT jednom mjesečno. Gotov popis i tablica za bilježenje: [Spominje li ChatGPT vašu firmu? Provjera u 20 pitanja](/blog/provjera-ai-vidljivosti/).
- **GA4.** Ugrađeni kanal "AI Assistant" na portalu iz case studyja uhvatio je 136 od 319 AI posjeta. Ostatak je bio u Unassigned i Referral. Regex i koraci: [GA4 skriva više od polovice posjeta s ChatGPT-a](/blog/ga4-ai-kanal/).

## Nazivi koje ćete sretati

| Naziv | Što znači u praksi |
| --- | --- |
| LLM vidljivost / AI vidljivost | Koliko vas spominju AI alati. Mjeri se promptovima i GA4. |
| GEO | Optimizacija za generativne tražilice (ChatGPT, Perplexity, AI Mode). |
| AEO | Optimizacija za odgovore: featured snippet, AI pregled, glasovni asistenti. |
| AI SEO | Isto kao GEO, češće se koristi u ponudama agencija. |
| llms.txt | Datoteka s opisom weba za AI. Korisna, ali sama ne donosi citate. |

## Naše mjerenje

Istih 35 pitanja o SEO-u i AI vidljivosti postavljamo ChatGPT-u prvog u mjesecu. Na početku, 30. listopada, SERPRise se pojavio u 1 od 45 odgovora. Cilj je 10 od 45 do veljače. Rezultate objavljujemo ovdje, i kad nisu dobri.

Ako želite da isti test napravimo za vašu djelatnost, s pitanjima vaših kupaca, pogledajte uslugu [AI vidljivost](/ai-vidljivost/).
