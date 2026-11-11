---
title: "GA4 kanal AI Assistant ne vidi sve AI posjete. Regex koji to popravlja"
description: "GA4 kanal AI Assistant ne radi unatrag i propušta Perplexity. Na hrvatskom portalu uhvatio je 145 od 328 AI posjeta. Regex, 7 koraka, tester i kalkulator."
date: 2026-11-01
updated: 2026-11-01
translation: ga4-ai-channel
image: /blog/ga4-ai-kanal/naslovna.png
imageAlt: "GA4 kanal za promet s ChatGPT-a i drugih AI alata"
howto:
  name: "Kako u GA4 napraviti kanal za promet s AI alata"
  steps:
    - "U GA4 otvorite Admin, Data display, Channel groups."
    - "Kliknite Create new channel group i nazovite grupu Default + AI. GA4 kopira sve postojeće kanale."
    - "Kliknite Add new channel i nazovite kanal AI asistenti."
    - "Postavite uvjet Session source, matches regex i zalijepite regex za AI alate."
    - "Spremite kanal i povucite ga iznad kanala Referral, a ako ga kopija ima, i iznad kanala AI Assistant."
    - "Spremite grupu kanala."
    - "U Reports, Acquisition, Traffic acquisition promijenite dimenziju tablice u Default + AI."
faq:
  - q: "Zašto GA4 pokazuje manje od Search Consolea?"
    a: "Search Console broji klikove u Googleovim rezultatima, a GA4 sesije u kojima se učitao kod za mjerenje. Odbijeni kolačići, blokatori i više klikova unutar jedne sesije smanjuju GA4 brojku. Dvije brojke mjere različite stvari i ne trebaju se poklapati."
  - q: "Mogu li vidjeti koji je prompt korisnik upisao?"
    a: "Ne. AI alat šalje samo domenu ili parametar utm_source, ne tekst razgovora. Bing Webmaster Tools za Copilot prikazuje grounding upite, ali to su fraze kojima je AI tražio sadržaj, ne prompt korisnika."
  - q: "Broji li se Google AI Mode kao AI promet?"
    a: "Ne. GA4 posjete iz AI Modea i AI pregleda broji kao google / organic, a kanal AI Assistant ih izričito isključuje."
---

GA4 od svibnja 2026. ima ugrađeni kanal "AI Assistant". Na hrvatskom portalu iz našeg [case studyja o AI vidljivosti](/blog/case-study-ai-vidljivost-osmrtnice/) taj je kanal od 1.10.2025. do 31.10.2026. pokazao 145 posjeta s AI alata. Stvarno ih je bilo 328.

Razlika ima dva uzroka: kanal ne radi unatrag i ne prepoznaje sve izvore. Ispod su regex, 7 koraka do vlastitog kanala i alati da ga provjerite prije spremanja.

## Što je kanal AI Assistant

Google je kanal objavio 13. svibnja 2026. i uvodi ga postupno, pa ga neki računi još nemaju ([PPC Land](https://ppc.land/google-analytics-adds-ai-assistant-channel-for-chatgpt-gemini-claude/), [Semrush](https://www.semrush.com/blog/ga4-adds-ai-assistant-channel/)). Sesija s prepoznatog AI asistenta dobije medium `ai-assistant` i kampanju `(ai-assistant)`. Google kao primjere navodi ChatGPT, Gemini, DeepSeek, Copilot i Grok, a cijeli popis ne objavljuje ([Google](https://support.google.com/analytics/answer/9756891)).

**Ne primjenjuje se unatrag.** Provjerili smo na vlastitom GA4: zadnja sesija s chatgpt.com u Unassigned bila je 1.6.2026., prva u AI Assistant 5.6.2026. Sve starije ostalo je u Referral i Unassigned. Vlastita grupa kanala, za razliku od toga, radi i na starim podacima ([Google](https://support.google.com/analytics/answer/13051316)).

**Propušta Perplexity.** Perplexity u našem GA4 dolazi kao izvor "perplexity", bez domene i bez mediuma. Ugrađeni kanal ga ne prepoznaje i šalje ga u Unassigned: svih 8 posjeta s Perplexityja nakon 5.6. završilo je tamo. Provjerili smo i copilot.com: od 3 posjeta nakon uvođenja kanala samo je jedan bio u AI Assistant, dva u Unassigned. Uzorak je mali, ali smjer je isti.

<div data-embed="ga4-kanali"></div>

Otkad kanal postoji, uhvatio je 145 od 156 AI posjeta, oko 93%. Veći dio razlike do 328 je povijest prije lipnja. Ako uspoređujete godinu s godinom, ugrađeni kanal vam za to ne pomaže.

<div data-embed="ga4-kalkulator"></div>

## Vrijedi li to pratiti kad je brojka mala

328 AI sesija prema 372.415 iz google / organic je manje od 0,1%. Ali ti se posjetitelji ponašaju drukčije:

<div data-embed="ga4-angazman"></div>

Druga stvar je trend. Posjeti s chatgpt.com narasli su s 3 u prvih 19 dana listopada na 78 u zadnjih 12, nakon tehničke promjene na portalu. Dio niske brojke na početku mjeseca može biti i greška ChatGPT-a: otprilike od 7. do 16. listopada linkovi nisu nosili UTM, pa je dio posjeta završio u Direct ([PPC Land](https://ppc.land/google-gemini-drops-utm-tags-from-cited-links-after-three-weeks/)).

## Regex za vlastiti kanal

```
.*(chatgpt|openai|perplexity|gemini|copilot|claude|deepseek|mistral|grok).*
```

**Proširena verzija** dodaje `meta\.ai|you\.com|phind|kagi|poe\.com`. Kosa crta ispred točke znači "točno ova domena". Bez nje `you` hvata i youtube.com, a `poe` svaki izvor u kojem se ta tri slova pojave. Na našem portalu `meta` bez `\.ai` povukao bi u AI kanal 672 plaćene sesije s Mete. Kagi je prije svega tražilica, pa ga dodajte samo ako znate da ljudi koriste njegov asistent.

Ako imate UTM kampanju ili partnera s "gemini" ili "copilot" u izvoru, koristite preciznije uzorke `gemini\.google|copilot\.(com|microsoft)`. Tada gubite izvor "gemini" bez domene (kod nas 1 posjet). GA4 kod kanala ne razlikuje velika i mala slova ([Google](https://support.google.com/analytics/answer/13051316)).

<div data-embed="ga4-regex"></div>

Prije spremanja zalijepite svoje izvore u tester. Tako lažne pogotke vidite prije nego što završe u izvještajima.

<div data-embed="ga4-tester"></div>

## Kanal u 7 koraka

1. U GA4 otvorite Admin, Data display, Channel groups.
2. Kliknite "Create new channel group" i nazovite grupu "Default + AI". GA4 kopira sve postojeće kanale.
3. Kliknite "Add new channel" i nazovite kanal "AI asistenti".
4. Uvjet: Session source, matches regex. Zalijepite regex iznad.
5. Spremite kanal i povucite ga **iznad** kanala Referral, a ako ga kopija ima, i iznad AI Assistant. GA4 sesiju daje prvom kanalu čiji uvjet zadovoljava ([Google](https://support.google.com/analytics/answer/13051316)).
6. Spremite grupu. Standardni GA4 dopušta dvije vlastite grupe.
7. Reports, Acquisition, Traffic acquisition. U tablici promijenite dimenziju u "Default + AI".

<div data-embed="ga4-koraci"></div>

## Tri stvari na koje treba paziti

- **Brojka je donja granica.** ChatGPT linkovima dodaje `utm_source`: citatima od ranije, a linkovima u sekciji "More" od lipnja 2025. ([PPC Land](https://ppc.land/chatgpt-adds-utm-parameters-to-more-links-for-better-analytics-tracking/)). Zato se chatgpt.com vidi kao izvor sesije. Kopirani link nema ni UTM ni referrer pa ide u Direct, kao i dio klikova iz mobilnih aplikacija. Za Geminijevu iOS aplikaciju to je izmjereno ([PPC Land](https://ppc.land/google-gemini-drops-utm-tags-from-cited-links-after-three-weeks/)).
- **"gemini" i "copilot" mogu uhvatiti nešto drugo.** Kampanja ili partner s tim imenom u izvoru završit će u AI kanalu. Rješenje su precizni uzorci iznad.
- **Google AI pregledi i AI Mode nisu AI kanal.** GA4 ih broji kao google / organic, a AI Assistant ih izričito isključuje ([Google](https://support.google.com/analytics/answer/9756891)). U Search Consoleu su uključeni u ukupne brojke pretrage i klikovi se ne mogu izdvojiti ([Google](https://developers.google.com/search/docs/appearance/ai-features)). Od 31.8.2026. Search Console ima izvještaj o generativnim AI značajkama, ali samo s prikazivanjima, bez klikova i bez podjele na AI preglede i AI Mode ([Google](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports)).

## Koje stranice AI šalje ljudima

U GA4 otvorite Explore, Free form. Dimenzije: Session source i Landing page + query string. Metrike: Sessions, Engaged sessions, Key events. Landing page stavite u redove, Session source u stupce. Filter: Session source, matches regex, isti regex.

Dobijete popis stranica koje AI alati preporučuju. Te stranice ažurirajte prve, jer AI već vjeruje njihovom sadržaju.

## Konverzije iz AI prometa

U Admin, Data display, Events kliknite zvjezdicu uz događaj koji znači upit ili kupnju i postaje key event ([Google](https://support.google.com/analytics/answer/13128484)). Zatim u Traffic acquisition, uz dimenziju "Default + AI", u stupcu Key events odaberite taj događaj i usporedite "Session key event rate" za AI asistente i Organic Search.

Na našem portalu ChatGPT je dao 6 key eventa na 282 sesije, Google 191 na 372.415. Uzorak je premalen za zaključak, ali razliku vrijedi pratiti iz mjeseca u mjesec.

## Graf "AI sesije po tjednu" u Looker Studiju

Javni predložak nemamo, ali graf je gotov za pet minuta. U Looker Studiju napravite novi izvještaj s izvorom Google Analytics i svojim propertyjem. Dodajte Time series, dimenziju Date s tipom ISO Year Week i metriku Sessions. Dodajte filter: Include, Session source, RegExp Match, isti regex. Ako kao breakdown dimenziju stavite Session source, svaki AI alat dobije svoju liniju.

## Citati bez klika: Copilot

Bing Webmaster Tools od 10.2.2026. ima AI Performance, u javnom pregledu. Prikazuje koliko puta su vaše stranice citirane u Copilotu i Bingovim AI sažecima, koje stranice i grounding upite, fraze kojima je AI tražio sadržaj. Klikova nema ([Bing](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)). To je jedini besplatni alat koji pokazuje broj citata i upite. Search Console pokazuje samo prikazivanja u Googleovim AI značajkama.

Za ChatGPT takvog alata nema. Treba ručna provjera promptovima: [Spominje li ChatGPT vašu firmu? Provjera u 20 pitanja](/blog/provjera-ai-vidljivosti/).

## Česta pitanja

### Zašto GA4 pokazuje manje od Search Consolea?

Search Console broji klikove u Googleovim rezultatima, a GA4 sesije u kojima se učitao kod za mjerenje. Odbijeni kolačići, blokatori i više klikova unutar jedne sesije smanjuju GA4 brojku ([Bounteous](https://www.bounteous.com/insights/2015/08/05/google-search-console-vs-google-analytics-why-clicks-dont-match-sessions/)). Dvije brojke mjere različite stvari i ne trebaju se poklapati.

### Mogu li vidjeti koji je prompt korisnik upisao?

Ne. AI alat šalje samo domenu ili `utm_source`, ne tekst razgovora. Bing Webmaster Tools za Copilot prikazuje grounding upite, ali to su fraze kojima je AI tražio sadržaj, ne prompt korisnika ([Bing](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)).

### Broji li se Google AI Mode kao AI promet?

Ne. GA4 posjete iz AI Modea i AI pregleda broji kao google / organic, a kanal AI Assistant ih izričito isključuje ([Google](https://support.google.com/analytics/answer/9756891)).

## Što dalje

Kod nas taj regex nije zaseban izvještaj. Svaki klijent ima vlastiti live dashboard u koji povlačimo GA4 i Search Console, a uz njih podatke iz DataForSEO i Ahrefs API-ja. Tako se AI posjeti vide na istom mjestu kao pozicije i linkovi, i odmah je jasno je li skok došao od novog citata ili od promjene u mjerenju.

Sve o tome kako hrvatske tvrtke ulaze u odgovore AI alata je na [hubu o LLM vidljivosti](/blog/llm-vidljivost/). Ako želite da kanal i mjerenje postavimo mi, javite se preko stranice [AI vidljivost](/ai-vidljivost/).

## Izvori

- Naši podaci: GA4 portala osmrtnica.com.hr, 1.10.2025. – 31.10.2026., povučeno 1.11.2026.
- Google Analytics pomoć: [Traffic-source dimensions](https://support.google.com/analytics/answer/9756891) (definicija kanala AI Assistant)
- Google Analytics pomoć: [Custom channel groups](https://support.google.com/analytics/answer/13051316)
- Google Analytics pomoć: [Mark events as key events](https://support.google.com/analytics/answer/13128484)
- PPC Land: [Google Analytics adds AI Assistant channel](https://ppc.land/google-analytics-adds-ai-assistant-channel-for-chatgpt-gemini-claude/), 14.5.2026.
- Semrush: [GA4 adds AI Assistant channel](https://www.semrush.com/blog/ga4-adds-ai-assistant-channel/), 20.5.2026.
- PPC Land: [ChatGPT adds UTM parameters to more links](https://ppc.land/chatgpt-adds-utm-parameters-to-more-links-for-better-analytics-tracking/), 16.6.2025.
- PPC Land: [Google Gemini drops UTM tags from cited links](https://ppc.land/google-gemini-drops-utm-tags-from-cited-links-after-three-weeks/), 1.11.2026.
- Google Search Central: [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- Google Search Central: [Search Generative AI performance reports](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports), 3.6.2026.
- Bing Webmaster Blog: [AI Performance in Bing Webmaster Tools](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview), 10.2.2026.
- Bounteous: [Search Console vs. Google Analytics](https://www.bounteous.com/insights/2015/08/05/google-search-console-vs-google-analytics-why-clicks-dont-match-sessions/)
