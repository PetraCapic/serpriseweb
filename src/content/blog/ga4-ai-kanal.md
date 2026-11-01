---
title: "GA4 skriva više od polovice posjeta s ChatGPT-a. Jedan regex to rješava"
description: "Na hrvatskom portalu GA4 kanal AI Assistant uhvatio je 136 od 319 posjeta s AI alata. Ostale su bile u Unassigned i Referral. Regex i 7 koraka za vlastiti kanal."
date: 2026-11-01
image: /blog/ga4-ai-kanal/naslovna.png
imageAlt: "GA4 kanal za promet s ChatGPT-a i drugih AI alata"
---

GA4 ima ugrađeni kanal "AI Assistant". Na hrvatskom portalu s oko 36.000 klikova s Googlea mjesečno taj je kanal u 13 mjeseci uhvatio 136 posjeta s AI alata. Stvarno ih je bilo 319. Ostale 183 bile su raspoređene u Unassigned i Referral.

Ako gledate samo ugrađeni kanal, vidite manje od polovice. Ispod je regex koji smo koristili i koraci da isto napravite na svom GA4.

## Gdje GA4 sprema AI posjete

![Gdje GA4 sprema posjete s AI alata](/blog/ga4-ai-kanal/kanali.png)

Podaci su s portala iz našeg [case studyja o AI vidljivosti](/blog/case-study-ai-vidljivost-osmrtnice/), od 1.10.2025. do 31.10.2026.

| Izvor sesije | Sesija |
| --- | --- |
| chatgpt.com | 273 |
| perplexity i perplexity.ai | 22 |
| copilot.com | 15 |
| gemini.google.com i gemini | 8 |
| claude.ai | 1 |
| **Ukupno** | **319** |

Od 273 sesije s chatgpt.com ugrađeni kanal prepoznao je 127. Perplexity je skoro sav završio izvan kanala jer dolazi kao izvor "perplexity", bez domene.

## Vrijedi li to pratiti kad je brojka mala

319 sesija prema 386.604 s Googlea je manje od 0,1%. Ali ti posjetitelji se ponašaju drukčije:

![Angažman posjetitelja s ChatGPT-a i s Googlea](/blog/ga4-ai-kanal/angazman.png)

- stopa angažmana 58% s ChatGPT-a, 47% s Googlea
- 2,2 stranice po sesiji s ChatGPT-a, 1,5 s Googlea
- prosječno trajanje sesije praktički isto, oko 68 sekundi

Druga stvar je trend. Na istom portalu posjeti s ChatGPT-a narasli su sa 6 u prvih 19 dana listopada na 67 u zadnjih 12, nakon tehničke promjene. Taj skok vidi se samo ako AI promet imate na jednom mjestu.

## Kanal u 7 koraka

1) GA4, Admin, Data display, Channel groups.
2) "Create new channel group", ime "Default + AI". GA4 kopira sve postojeće kanale.
3) "Add new channel", ime "AI asistenti".
4) Uvjet: Session source, matches regex, i zalijepite:

```
.*(chatgpt|openai|perplexity|gemini|copilot|claude|deepseek|mistral|grok).*
```

5) Spremite kanal i povucite ga **iznad** kanala Referral. GA4 sesiju dodjeljuje prvom kanalu čiji uvjet zadovoljava. Ako vaš kanal ostane ispod Referrala, posjete s chatgpt.com i dalje se broje kao Referral.
6) Spremite grupu.
7) Reports, Acquisition, Traffic acquisition. U tablici promijenite dimenziju u "Default + AI".

Grupa kanala radi i na starim podacima, pa brojke vidite odmah, unazad.

## Dvije stvari na koje treba paziti

- **Brojka je donja granica.** Klik iz ChatGPT aplikacije na mobitelu, kopirani link ili link bez referrera dolazi kao Direct. Stvarnih AI posjeta ima više.
- **"gemini" i "copilot" mogu uhvatiti i nešto drugo.** Ako imate kampanju ili partnera s tim imenom u izvoru, regex ga treba suziti. Za većinu webova u Hrvatskoj to nije problem.

## Što dalje

Kanal pokazuje koliko ljudi dolazi s AI alata. Ne pokazuje koliko vas puta AI spomene bez klika. Za to treba ručna provjera promptovima: [Spominje li ChatGPT vašu firmu? Provjera u 20 pitanja](/blog/provjera-ai-vidljivosti/).

Sve o tome kako hrvatske tvrtke ulaze u odgovore AI alata je na [hubu o LLM vidljivosti](/blog/llm-vidljivost/). Ako želite da kanal i mjerenje postavimo mi, javite se preko stranice [AI vidljivost](/ai-vidljivost/).
