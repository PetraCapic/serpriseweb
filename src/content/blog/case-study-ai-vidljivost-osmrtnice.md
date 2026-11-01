---
title: "Case study: kako je portal za osmrtnice ušao u odgovore ChatGPT-a"
description: "Portal s 35.000 klikova mjesečno ChatGPT-u je slao praznu stranicu. Nakon jedne tehničke promjene posjeti s ChatGPT-a narasli su sa 6 na 67 u 12 dana."
date: 2026-11-01
image: /blog/case-study-ai-vidljivost-osmrtnice/naslovna.png
imageAlt: "Case study AI vidljivosti: portal za osmrtnice, 67 posjeta s ChatGPT-a u 12 dana"
---

U 19 dana prije promjene portal osmrtnica.com.hr dobio je 6 posjeta s ChatGPT-a. U 12 dana poslije dobio ih je 67. U istom tjednu klikovi s Googlea porasli su s 5.479 na 10.569.

Nismo pisali nove tekstove, nismo kupovali linkove i nismo mijenjali dizajn. Promijenili smo samo ono što crawleri dobiju kad otvore stranicu. Ovo je točan popis promjena, brojke iz Search Consolea, GA4, Ahrefsa i DataForSEO-a te ono što još ne znamo.

## Polazna točka: 35.000 klikova i prazan HTML

Osmrtnica.com.hr je hrvatski portal za osmrtnice, sprovode, groblja i digitalne memorijale. U listopadu je imao oko 36.000 klikova s Googlea mjesečno i prosječnu poziciju oko 6.

Stranica je napravljena u Reactu i sav sadržaj crta se u pregledniku. Kad otvorite izvorni kod bilo koje stranice, u njemu je samo prazan `<div id="root"></div>`. Google to zna pročitati jer pokreće JavaScript, iako s kašnjenjem. Bing, Ahrefs i većina AI crawlera (ChatGPT, Perplexity, Claude) JavaScript ne pokreću. Oni su na svakoj stranici vidjeli istu praznu ljusku.

Zato ChatGPT portal gotovo nije spominjao, iako je na Googleu bio na prvoj stranici za stotine upita.

## Što smo promijenili, po danima

**19. listopada: HTML za crawlere na svim važnim stranicama**

- Netlify edge funkcija prije slanja stranice upisuje naslov, opis, canonical, JSON-LD i čisti HTML sadržaj. Pokriva pojedinačne osmrtnice, osmrtnice po gradovima, sprovode, groblja i blog.
- Naslovnica, hubovi (/umrli, /sprovodi, /groblja) i stranice memorijala dobile su popis zadnjih osmrtnica, nadolazećih sprovoda i linkove na gradove direktno u HTML-u.
- Statične stranice (česta pitanja, cjenik, kontakt) renderiraju se pri buildu u headless Chromeu i spremaju kao gotovi HTML.
- Stranice sprovoda dobile su stvarne podatke: groblja u gradu i sprovode iz zadnjih 14 dana, umjesto fiksnih brojki.

**21. listopada: interni linkovi**

- Svaka osmrtnica linka na grad i groblje, a imena na stranicama gradova postala su pravi linkovi.
- Ispravljeni opisi (meta description) na osmrtnicama.

**23. listopada: čišćenje grešaka i brže indeksiranje**

- robots.txt prepisan u jednu grupu za sve crawlere. Prije su Googlebot, Bingbot i AI botovi imali svoje grupe s "Allow: /", pa za njih nisu vrijedila ni pravila koja zatvaraju privatne stranice. Sad GPTBot, OAI-SearchBot, PerplexityBot i ClaudeBot vide isto što i Google.
- Nove osmrtnice svaki sat šaljemo na IndexNow, da ih Bing i ostale tražilice koje ga podržavaju pokupe odmah.
- Uklonjen SearchAction iz schema oznaka, koji je u Ahrefsu davao 24.211 grešaka, i link s preusmjeravanjem koji je bio na oko 26.000 stranica.

Na portalu postoji i llms.txt s opisom sekcija i cijenama (digitalni memorijal 39 €, svijeće od 3,99 €). Njega ne smatramo uzrokom rasta: llms.txt je postojao i prije, kad posjeta s ChatGPT-a gotovo nije bilo.

## Rezultat 1: Google, klikovi po danu

![Klikovi s Googlea po danu u rujnu i listopadu 2026. sa skokom 19. listopada](/blog/case-study-ai-vidljivost-osmrtnice/gsc-klikovi.png)

| Tjedan | Klikovi 2026. | Isti tjedan 2025. |
| --- | --- | --- |
| 12. do 18.10. | 5.479 | 4.679 |
| 19. do 25.10. | 10.569 | 4.664 |
| 26.10. do 1.11. (do 30.10.) | 10.288 | 4.540 |

Kraj listopada je zbog Svih svetih inače jači period za ovu temu. Zato smo usporedili iste tjedne prošle godine: 2025. nije bilo nikakvog skoka. Pozicija je ostala oko 6, a impresije su porasle s 318.721 na 388.159 tjedno. Raste broj stranica koje uopće dobivaju klikove.

![Klikovi po vrsti stranice prije i poslije promjene](/blog/case-study-ai-vidljivost-osmrtnice/stranice.png)

Najveći skok imaju pojedinačne osmrtnice: s 1.238 klikova u 14 dana na 8.449 u 12 dana. Broj stranica s barem jednim klikom porastao je s 3.305 na 15.881.

Jedna osmrtnica u tom je razdoblju imala puno pretraga po imenu i donijela oko 1.300 klikova. I kad nju izbacimo, pojedinačne osmrtnice imaju oko 5,8 puta više klikova nego prije.

## Rezultat 2: ChatGPT, posjeti po danu

![Posjeti s ChatGPT-a po danu, rujan i listopad 2026.](/blog/case-study-ai-vidljivost-osmrtnice/chatgpt-sesije.png)

U GA4, izvor chatgpt.com:

- 1. do 19. listopada: 6 sesija
- 20. do 31. listopada: 67 sesija

Ljudi s ChatGPT-a dolaze na stranice gradova (/umrli/kastela, /umrli/rijeka, /umrli/omis), na hub sprovoda i na pojedinačne osmrtnice. To su upravo stranice koje su do 19.10. crawlerima bile prazne.

U apsolutnim brojkama to je i dalje malo u odnosu na Google. Ali posjetitelj s ChatGPT-a pregleda 2,2 stranice po sesiji, a posjetitelj s Googlea 1,5. Kako pratiti te posjete u GA4 opisali smo u članku [GA4 skriva više od polovice posjeta s ChatGPT-a](/blog/ga4-ai-kanal/).

## Rezultat 3: test u ChatGPT-u i Google AI pregledu

Prvog studenog postavili smo ChatGPT-u (preko API-ja, s web pretragom i lokacijom Zagreb) 12 pitanja koja postavljaju obitelji i rodbina.

![Rezultati 12 pitanja u ChatGPT-u](/blog/case-study-ai-vidljivost-osmrtnice/ai-test.png)

Portal je spomenut u 5 od 12 odgovora, a u 3 je izvor s linkom. Za "Sprovodi danas Rijeka" bio je jedini izvor. Za digitalni memorijal ChatGPT je linkao baš stranicu memorijala. Nije citiran za pitanja o Zagrebu, Splitu, Zadru i Šibeniku, gdje ChatGPT uzima lokalne portale i stranice gradskih groblja.

Isti dan provjerili smo Google AI pregled za 10 upita preko DataForSEO-a. Portal je citiran za 3: "osmrtnice šibenik", "digitalni memorijal" i "virtualna svijeća". Ahrefs bilježi 59 citata portala u Google AI pregledima, na 40 različitih stranica.

## Što još ne znamo

- Nemamo mjerenje citata u ChatGPT-u prije promjene. Prije 19.10. imamo samo GA4 posjete, a one govore da citata gotovo nije bilo.
- Ahrefs i dalje procjenjuje pad organskog prometa (27.047 u zadnjem tjednu listopada). Ahrefs promet računa iz pozicija i volumena i kasni za stvarnim stanjem, a Search Console pokazuje stvarne klikove.
- Prošla su tek dva tjedna. Isti test ponavljamo 1. prosinca i rezultate dodajemo u ovaj članak.

## Kako provjeriti ima li vaš web isti problem

1) Otvorite bilo koju podstranicu, desni klik, "Prikaži izvorni kod stranice" (Ctrl+U).
2) Pritisnite Ctrl+F i potražite rečenicu iz glavnog teksta stranice.
3) Ako je nema u izvornom kodu, AI crawleri tu stranicu vide praznu. To se najčešće događa sa stranicama napravljenima u Reactu, Vueu, Angularu i s nekim builderima.
4) U robots.txt provjerite imaju li GPTBot, OAI-SearchBot ili PerplexityBot svoju grupu. Ako imaju, pravila iz grupe "User-agent: *" za njih ne vrijede.
5) U GA4 napravite kanal za AI promet i zabilježite koliko posjeta s ChatGPT-a imate danas. To je vaša polazna točka.

Ako u izvornom kodu ne nađete svoj tekst, javite nam se preko stranice [AI vidljivost](/ai-vidljivost/). Na [hubu o LLM vidljivosti](/blog/llm-vidljivost/) su svi naši testovi za hrvatsko tržište.
