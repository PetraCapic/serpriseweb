---
title: "Which pages ChatGPT cites when someone looks for an agency in Croatia"
description: "We asked ChatGPT 35 Croatian questions about SEO and AI visibility. Even DR 0 sites got cited. What those pages had and what to do on your own site."
date: 2026-11-01
updated: 2026-11-01
lang: en
path: /en/blog/chatgpt-citations-croatia/
translation: chatgpt-citati-hrvatska
image: /blog/chatgpt-citations-croatia/cover.png
imageAlt: "14 of 45 ChatGPT answers cite pages with a DR of 0 to 6"
dataset:
  name: "ChatGPT citations for Croatian questions about SEO and AI visibility (October 2026)"
  description: "Domains that ChatGPT with web search cited in 45 answers to 35 Croatian questions about SEO, GEO and agencies, with the number of answers citing each domain, Domain Rating (Ahrefs) and the type of page cited, plus examples of the searches ChatGPT ran."
  measured: 2026-10-30
  method: "35 questions in Croatian asked through the OpenAI API with web search (location Zagreb): 25 questions once, 10 buying questions twice, 45 answers in total. We extracted the cited URLs and the searches run from every answer, and the Ahrefs Domain Rating for every cited domain."
  license: "https://creativecommons.org/licenses/by/4.0/"
  keywords: ["ChatGPT", "AI visibility", "GEO", "LLM optimisation", "Croatia", "citations"]
  files:
    - name: "Cited domains (CSV)"
      url: /data/istrazivanja/chatgpt-citati-hrvatska-domene.csv
    - name: "Searches ChatGPT ran (CSV)"
      url: /data/istrazivanja/chatgpt-citati-hrvatska-pretrage.csv
---

Across 45 ChatGPT answers to 35 questions about SEO and AI visibility in Croatia, pages with a Domain Rating of 0 to 6 were cited in 14 answers. So domain authority is not what decides it. What decides it is how the page is written and who else writes about you.

SERPRise showed up once in those 45 answers, and through an old URL that no longer even exists. That is why we ran this study: to see exactly what ChatGPT uses as a source when someone in Croatia is looking for an agency, a price or advice. Why it matters: ChatGPT has around 900 million weekly users, according to figures OpenAI published in February 2026. ([OpenAI](https://openai.com/index/scaling-ai-for-everyone/), [TechCrunch](https://techcrunch.com/2026/02/27/chatgpt-reaches-900m-weekly-active-users/)) [1]

## How we tested

- 35 questions in Croatian, written the way a business owner or marketing manager would type them.
- 25 questions asked once, 10 buying questions ("which is the best agency", "how much does it cost") asked twice. 45 answers in total.
- ChatGPT with web search switched on, location Zagreb, 30 October 2026.
- From every answer we extracted all cited URLs and the searches ChatGPT ran.
- For every cited domain we checked the Domain Rating in Ahrefs.

NOTE: we tested through the OpenAI API, which is not 100% the same as ChatGPT in the browser. The numbers show a direction, not an exact picture. We repeated the same test on 1 November: the top was again mostly the same domains, and SERPRise was again in 1 of 45 answers.

Why we count how many answers a domain appeared in, not its position: AI answers change all the time. In a study by SparkToro and Gumshoe, 600 volunteers ran the same 12 questions in ChatGPT, Claude and Google's AI a total of 2,961 times. The chance of the AI giving the same list of brands twice was less than 1 in 100, and the same list in the same order less than 1 in 1,000. ([SparkToro, January 2026](https://sparktoro.com/blog/new-research-ais-are-highly-inconsistent-when-recommending-brands-or-products-marketers-should-take-care-when-tracking-ai-visibility/), [Search Engine Land](https://searchengineland.com/ai-recommendation-lists-rarely-repeat-study-468076)) [2] So a position in a single answer is noise, and the share of answers you appear in is the real measure.

## Finding 1: ChatGPT searches general questions in English

When a question has no local element, ChatGPT translates it and searches in English. Then it cites English sources: Semrush, OpenAI documentation, the Google blog, academic papers.

<div data-embed="citati-flip"></div>

| Question in Croatian | What ChatGPT actually searched |
| --- | --- |
| Što je GEO optimizacija i kako se radi? (What is GEO and how do you do it?) | Generative Engine Optimization meaning |
| Što je llms.txt i trebam li ga na svojoj web stranici? (What is llms.txt and do I need it on my website?) | llms.txt file what is llms.txt |
| Kako pratiti promet s ChatGPT-a u Google Analyticsu 4? (How do I track ChatGPT traffic in Google Analytics 4?) | track ChatGPT traffic Google Analytics 4 UTM |
| Treba li blokirati GPTBot u robots.txt? (Should I block GPTBot in robots.txt?) | Should I block GPTBot in robots.txt OpenAI guidance |
| Je li SEO mrtav zbog umjetne inteligencije? (Is SEO dead because of AI?) | Is SEO dead because of AI 2026 expert opinions |

What this means: a Croatian blog post along the lines of "What is GEO" will struggle to become a source in ChatGPT, however good it is. It can bring traffic from Google, but for an AI citation it competes with the entire English-speaking internet. How to see these searches for your own questions is explained in [What ChatGPT actually searches when someone asks about your service](/en/blog/chatgpt-searches/).

## Finding 2: as soon as a question includes "Croatia", "Zagreb" or "price", the sources are Croatian

For questions such as "Preporuči mi SEO agenciju u Zagrebu koja radi i optimizaciju za ChatGPT" (recommend an SEO agency in Zagreb that also does ChatGPT optimisation) or "Koliko košta GEO optimizacija u Hrvatskoj" (how much does GEO cost in Croatia), ChatGPT searches in Croatian and cites Croatian pages. And those are exactly the questions asked by someone who wants to buy the service.

The most frequently cited domains across the 45 answers:

<div data-embed="citati-tablica"></div>

| Domain | Answers citing it | DR | Page type | What was cited |
| --- | --- | --- | --- | --- |
| [slade.hr](https://slade.hr/) | 6 | 26 | Homepage | The agency's homepage |
| [clutch.co](https://clutch.co/) | 6 | 91 | Directory | Agency directory for Croatia and Zagreb |
| [digiadria.hr](https://digiadria.hr/) | 5 | 33 | Service page | Service page for AEO |
| [glarodigital.com.hr](https://glarodigital.com.hr/) | 5 | 0 | Service page | Service page for AI optimisation |
| [linkgrid.hr](https://linkgrid.hr/) | 5 | 0 | About us | "About us" page |
| [digitalmatrix.hr](https://digitalmatrix.hr/) | 4 | 4.5 | Price list | Public price list |
| [assemblio.hr](https://assemblio.hr/) | 4 | 16 | List | "Top 5 SEO agencies in Croatia" list |
| [tsunami-digital.com](https://tsunami-digital.com/) | 4 | 29 | Service page | Service page for SEO and GEO |
| [igrow.at](https://igrow.at/) | 4 | 39 | Case study | Case study with "Croatia" in the URL |

The data in the table is free to use with attribution (CC BY 4.0): [cited domains (CSV)](/data/istrazivanja/chatgpt-citati-hrvatska-domene.csv) and [searches ChatGPT ran (CSV)](/data/istrazivanja/chatgpt-citati-hrvatska-pretrage.csv).

<div data-embed="leaderboard"></div>

<div data-embed="citati-donut"></div>

Notice: there is not a single blog post among the most frequently cited domains. What got cited were service pages, price lists, agency lists and directories.

## Finding 3: DR barely matters

[Glaro Digital](https://glarodigital.com.hr/) and [LinkGrid](https://linkgrid.hr/) have a DR of 0 and were cited 5 times each. [Digital Matrix](https://digitalmatrix.hr/) has a DR of 4.5 and four citations for a question about price. The list on tako.hr has a DR of 6 and was cited twice. Clutch, with a DR of 91, was cited 6 times, just once more than two domains with a DR of 0.

<div data-embed="citati-scatter"></div>

On Google, the top 10 for "seo agencija" (SEO agency) are domains with a DR of 4 to 31. In the Croatian market, on Google and in ChatGPT alike, authority is not the barrier. The barrier is that most agencies do not have a page that answers the question directly.

A large analysis using a different tool points the same way. Across 75,000 brands (May 2025), Ahrefs compared what is linked to how often a brand is mentioned in Google's AI Overviews. The strongest link is the number of brand mentions on the web (correlation 0.664), followed by branded anchor text (0.527) and branded search volume (0.392). Domain Rating comes in at 0.326 and the number of backlinks at 0.218. ([Ahrefs](https://ahrefs.com/blog/ai-overview-brand-correlation/)) [3] These are correlations, not proof of cause: brands that get written about a lot usually also have more links and a higher DR. But the message is the same as in our test: how much and where people write about you matters more than domain authority itself.

## What the cited pages had

We took apart 19 cited pages. Five things kept coming up:

1) The service name in the title, in exactly the words people ask with. "Visibility in ChatGPT and AI search engines", "AI SEO and GEO", "SEO and AI optimisation".
2) Prices in euros. [Digital Matrix](https://digitalmatrix.hr/) has a public price list with more than 50 figures, and it is the main source for every question about price. [DigiAdria](https://digiadria.hr/) has a "Starting prices" section.
3) A short answer at the top. [Tsunami Digital](https://tsunami-digital.com/) has a "Summary" block, DigiAdria has "What you get and is this for you".
4) FAQ and schema. Most have FAQPage, and the service pages also have Service schema with a price (Offer).
5) Numbers from a real project. Skyzone describes a client going "from the bottom of page two to an AI recommendation in three months", and [iGrow](https://igrow.at/), an agency from Austria, is cited for Croatia through a case study with Croatia in the title.

This matches the only larger controlled experiment on the subject. Researchers from Princeton and their co-authors (the paper "GEO: Generative Engine Optimization", KDD 2024 conference) changed the text of pages and measured how much a generative search engine used it in its answer. Three small changes performed best: adding quotations from credible sources (visibility around 41% higher than the baseline), adding statistics (around 33%) and citing sources (around 28%). Keyword stuffing, the classic SEO trick, reduced visibility, by around 9%. ([Aggarwal et al., arXiv 2311.09735](https://arxiv.org/abs/2311.09735), table 1) [4] The experiment was run on a research search engine model, and on Perplexity the differences were smaller, so these are directions, not guaranteed percentages.

The sixth thing is not on your website: ChatGPT does not answer "which are the best agencies" with an agency's own page, but with other people's lists (assemblio.hr, tako.hr), directories (Clutch, The Manifest, trebam.hr) and conference pages (Croatia SEO Summit).

<div data-embed="citati-samoprocjena"></div>

## What to do this week

1) Type 5 questions your customers ask into ChatGPT, with a city or "Croatia" in the question. Write down which pages it cites.
2) If you do not have a service page whose title contains the words from those questions, create one. One page per service.
3) Publish at least starting prices in euros. If you do not have them public, ChatGPT will cite someone else's price list for your market.
4) Add a 3-sentence block at the top: what you do, for whom, and from how many euros. The template is right below.
5) Open a profile on Clutch and trebam.hr and ask 3 clients for a review. These sources get cited even when your website does not.

### Template for the "Summary" block

Three sentences, below the heading, before anything else:

> **Summary:** [What we do, in the same words the customer asks with]. [For whom, with a location or type of client]. [From how many euros, and what is included].

Example for an agency (the amount is illustrative):

> **Summary:** We do SEO and ChatGPT optimisation, so that Google and AI search engines recommend your business. We work with small and medium-sized companies in Croatia that sell services. Monthly retainers start at €600 and include service pages, ChatGPT tracking and a report.

Example for a dentist (the amount is illustrative):

> **Summary:** We place dental implants at our practice in Split, with an examination and 3D scan on the same day. Most of our patients are missing one or more teeth, and many are visitors from abroad. An implant with a crown costs €950, and the first examination is €40.

Use your real prices. If the price depends on the project, give a starting price ("from") and say what it depends on.

### Service schema with a price in euros

On the service page, next to FAQPage, add a description of the service with a price. Replace the placeholder values with your own and check the code in [Google's Rich Results Test](https://search.google.com/test/rich-results) or at [validator.schema.org](https://validator.schema.org/).

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SEO and ChatGPT optimisation",
  "serviceType": "SEO",
  "description": "Service pages, ChatGPT tracking and a monthly report for companies in Croatia.",
  "url": "https://www.yourdomain.com/seo/",
  "areaServed": { "@type": "Country", "name": "Croatia" },
  "provider": {
    "@type": "Organization",
    "name": "Your Company Ltd",
    "url": "https://www.yourdomain.com/"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "EUR",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": 600,
      "priceCurrency": "EUR",
      "unitText": "per month",
      "valueAddedTaxIncluded": false
    },
    "url": "https://www.yourdomain.com/seo/#pricing"
  }
}
</script>
```

The price in the schema must match the price in the text of the page.

### Lists and directories that came up in the answers

For the question "which is the best agency", these sources are cited instead of agency pages. Getting into each one takes anything from an afternoon to a few weeks.

- **[Clutch](https://clutch.co/)**: a basic agency profile is free, and the ranking on the lists for Croatia and Zagreb depends on client reviews. Open a profile and ask your clients for reviews. ([Clutch](https://clutch.co/get-listed)) [5]
- **[The Manifest](https://themanifest.com/)**: Clutch's sister site. Data and reviews come from the Clutch profile, so there is no separate sign-up. ([Clutch Help Center](https://help.clutch.co/knowledge/what-is-the-manifest)) [6]
- **[trebam.hr](https://trebam.hr/)** (a Croatian marketplace for hiring service providers): you register as a provider, choose your services and area, and pay per client enquiry, with no contract. You collect reviews from clients you agreed work with. ([trebam.hr](https://trebam.hr/pridruzi-se)) [7]
- **[assemblio.hr](https://assemblio.hr/)**: an editorial list, "Top 5 SEO agencies in Croatia". You cannot buy a place by signing up: contact the editors with concrete information (prices, case study, reviews) that they can verify.
- **[tako.hr](https://tako.hr/)**: also an editorial list of agencies. Same approach as for assemblio: send verifiable information and offer it as material for updating the list.
- **[Croatia SEO Summit](https://croatiaseosummit.com/)**: ChatGPT cited the conference pages, which list the speakers and partners. You get in as a speaker or partner; send your application to the organisers a few months before the conference (in 2026 it took place on 11 and 12 June in Šibenik). ([Yoast](https://yoast.com/about-us/events/croatia-seo-summit-2026/)) [8]

## We repeat the test every month

We ask ChatGPT the same 35 questions on the first day of every month and record who gets cited. We do the same for clients, with their customers' questions: the answers are collected automatically, the Domain Rating and backlinks of the cited pages come from the Ahrefs API, and Google rankings from DataForSEO. Each client sees the results in their own live dashboard, so a change shows up as soon as it happens, not only in the monthly report. The starting point for SERPRise is 1 of 45 answers (30 October), and the 1 November measurement gave the same result. The goal is 10 of 45 by February 2027. The next measurement is on 1 December.

<div data-embed="tracker"></div>

From the next measurement onwards we are extending the test to two more tools, so the result does not depend on ChatGPT alone:

- **Google AI Mode**, which also works in Croatian. Google currently lists 98 languages in which AI Mode is available, Croatian among them. ([Google Help](https://support.google.com/websearch/answer/16011537), [Search Engine Roundtable](https://www.seroundtable.com/google-expands-ai-mode-to-53-new-languages-40958.html)) [9]
- **Perplexity**, which shows the sources with every answer, so citations can be counted the same way.

What this means for your website is explained in the guide [LLM visibility: how a Croatian company gets into ChatGPT and Google answers](/en/blog/llm-visibility/), and you can check yourself with [20 questions for ChatGPT](/en/blog/ai-visibility-check/).

If you would like us to run the same test for your industry, with the questions your customers ask, get in touch through the [LLM visibility](/en/llm-visibility/) page or the [contact form](/en/contact/). You will get a list of the pages ChatGPT cites instead of you.

## Sources

Our own data: SERPRise measurement, 30 October and 1 November 2026, 45 ChatGPT answers through the OpenAI API with web search. Data to download: [domains (CSV)](/data/istrazivanja/chatgpt-citati-hrvatska-domene.csv), [searches (CSV)](/data/istrazivanja/chatgpt-citati-hrvatska-pretrage.csv), licence [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

1. OpenAI, "Scaling AI for everyone", 27 February 2026, [openai.com/index/scaling-ai-for-everyone](https://openai.com/index/scaling-ai-for-everyone/); report: TechCrunch, "ChatGPT reaches 900M weekly active users", 27 February 2026, [techcrunch.com](https://techcrunch.com/2026/02/27/chatgpt-reaches-900m-weekly-active-users/).
2. Rand Fishkin (SparkToro) and Patrick O'Donnell (Gumshoe), "NEW Research: AIs are highly inconsistent when recommending brands or products", 27 January 2026, data collected in November and December 2025, [sparktoro.com](https://sparktoro.com/blog/new-research-ais-are-highly-inconsistent-when-recommending-brands-or-products-marketers-should-take-care-when-tracking-ai-visibility/); report: [Search Engine Land](https://searchengineland.com/ai-recommendation-lists-rarely-repeat-study-468076).
3. Louise Linehan and Xibeijia Guan, Ahrefs, analysis of 75,000 brands and their mentions in Google AI Overviews (Spearman correlation), 26 May 2025, [ahrefs.com/blog/ai-overview-brand-correlation](https://ahrefs.com/blog/ai-overview-brand-correlation/).
4. Pranjal Aggarwal, Vishvak Murahari, Tanmay Rajpurohit, Ashwin Kalyan, Karthik Narasimhan, Ameet Deshpande, "GEO: Generative Engine Optimization", KDD 2024, [arxiv.org/abs/2311.09735](https://arxiv.org/abs/2311.09735). Percentages calculated from table 1 (Position-Adjusted Word Count: no changes 19.5; quotations 27.8; statistics 25.9; citing sources 24.9; keyword stuffing 17.8).
5. Clutch, "Get listed", [clutch.co/get-listed](https://clutch.co/get-listed).
6. Clutch Help Center, "What is The Manifest?", [help.clutch.co](https://help.clutch.co/knowledge/what-is-the-manifest).
7. trebam.hr, "Pridruži se" (Join), [trebam.hr/pridruzi-se](https://trebam.hr/pridruzi-se).
8. Yoast, "Croatia SEO Summit 2026", [yoast.com](https://yoast.com/about-us/events/croatia-seo-summit-2026/).
9. Google, "AI Mode", list of supported languages, [support.google.com/websearch/answer/16011537](https://support.google.com/websearch/answer/16011537); Search Engine Roundtable, "Google AI Mode Works In 53 New Languages", 19 February 2026, [seroundtable.com](https://www.seroundtable.com/google-expands-ai-mode-to-53-new-languages-40958.html).
