---
title: "Does ChatGPT mention your company? A 20-question check"
description: "Free AI visibility check: 20 questions for your business, an auto-calculating table and a diagnosis. Find out if ChatGPT mentions you. About 45 minutes."
date: 2026-11-01
updated: 2026-11-01
lang: en
path: /en/blog/ai-visibility-check/
translation: provjera-ai-vidljivosti
image: /blog/ai-visibility-check/cover.png
imageAlt: "AI visibility check in 20 questions"
howto:
  name: "How to check whether ChatGPT mentions your company"
  totalTime: PT45M
  anchor: "20-questions-by-type"
  steps:
    - "Prepare ChatGPT. Open a new Temporary chat without personalisation, or use ChatGPT in a logged-out browser window. Check that the answer has sources, otherwise search did not run."
    - "Build 20 questions. Enter your service, city, region, customer type, main product, alternative, customer problem, your company and your biggest competitor. You get 20 questions of four types: recommendation, price, comparison and problem."
    - "Run each question several times. Run recommendation questions 3 to 5 times and the others twice, each time in a new temporary chat. For each run, note whether you were mentioned, which page of yours was linked, which competitors were mentioned and which pages were the sources."
    - "Calculate your share of appearances. For each question type, calculate the percentage of runs in which you were mentioned and in which your site was linked. Position in the list is not a reliable measure, because the order almost never repeats."
    - "Take the first step based on your result. If you do not appear anywhere, check whether AI can read your website. If you are mentioned without a link, create a page that directly answers that question. If AI cites a competitor's price list for price questions, publish starting prices in euros."
    - "Repeat the test every month. Once a month, on the same day, with the same questions and the same number of runs. Save each measurement under its date and track the trend."
faq:
  - q: "How often should I repeat the test?"
    a: "Once a month, on the same day of the month, with the same questions and the same number of runs. If you change the questions between measurements, you cannot compare the results. Changes on your website and on other people's pages take time to show up in answers, so measuring more often mostly shows random fluctuation."
  - q: "Why does ChatGPT give a different answer every time?"
    a: "AI tools do not return the same answer to the same question. In SparkToro and Gumshoe's research (2,961 answers, ChatGPT, Claude and Google's AI), the same list of recommended brands repeated in fewer than 1 in 100 cases, and the same list in the same order in about 1 in 1,000. That is why you measure the share of answers you appear in, not your position."
  - q: "Is a test through the API the same as in the browser?"
    a: "No. Through the API there is no memory and no account settings, you set the user's location yourself, and you can choose a different model and search settings from those the app uses. The API is good for repeatable month-to-month measurement. A manual test in the browser better shows what a customer actually sees."
  - q: "Can I run the same check in Google AI Mode, Gemini and Perplexity?"
    a: "Yes. Turn on the extra columns in the table and, for each question, note whether you were mentioned there too. Google AI Mode has worked in Croatian since October 2025. For Microsoft Copilot you do not need a manual test: the AI Performance report in Bing Webmaster Tools shows for free how many times your site was cited."
sources:
  - name: "SparkToro (Rand Fishkin, Patrick O'Donnell): New Research: AIs are highly inconsistent when recommending brands or products, January 2026. Carried out with Gumshoe.ai, which sells an AI visibility tracking tool."
    url: "https://sparktoro.com/blog/new-research-ais-are-highly-inconsistent-when-recommending-brands-or-products-marketers-should-take-care-when-tracking-ai-visibility/"
  - name: "Search Engine Land: AI recommendation lists rarely repeat: Study, 2026."
    url: "https://searchengineland.com/ai-recommendation-lists-rarely-repeat-study-468076"
  - name: "Search Engine Journal: AI Recommendations Change With Nearly Every Query: SparkToro, 30 January 2026."
    url: "https://www.searchenginejournal.com/ai-recommendations-change-with-nearly-every-query-sparktoro/566242/"
  - name: "Notebookcheck: ChatGPT Temporary chat can now use your saved memories, August 2026 (based on OpenAI release notes from 27 and 28 August 2026)."
    url: "https://www.notebookcheck.net/ChatGPT-Temporary-chat-can-now-use-your-saved-memories.1382374.0.html"
  - name: "Engadget: ChatGPT Search no longer requires an OpenAI account to use, 5 February 2025."
    url: "https://www.engadget.com/ai/chatgpt-search-no-longer-requires-an-openai-account-to-use-205538282.html"
  - name: "Search Engine Roundtable: Google AI Mode Expands To 35 New Languages & 40 Countries, 9 October 2025 (the list of languages includes Croatian)."
    url: "https://www.seroundtable.com/google-ai-mode-expands-40232.html"
  - name: "Bing Webmaster Blog: Introducing AI Performance in Bing Webmaster Tools Public Preview, 10 February 2026."
    url: "https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview"
  - name: "OpenAI API documentation: Web search, user location (user_location)"
    url: "https://developers.openai.com/api/docs/guides/tools-web-search"
  - name: "SERPRise, our test: who ChatGPT cites in Croatia (35 questions, 45 answers, OpenAI API, 30 October 2026)"
    url: "https://serprise.agency/en/blog/chatgpt-citations-croatia/"
  - name: "SERPRise, case study: AI visibility of an obituaries portal"
    url: "https://serprise.agency/en/blog/ai-visibility-case-study-obituaries/"
---

Ask ChatGPT the same question ten times and you will get ten different lists. In research by SparkToro and Gumshoe, around 600 volunteers ran the same 12 questions in ChatGPT, Claude and Google's AI, 2,961 times in total. The same list of recommendations repeated in fewer than 1 in 100 cases, and the same list in the same order in about 1 in 1,000 ([SparkToro, 2026](https://sparktoro.com/blog/new-research-ais-are-highly-inconsistent-when-recommending-brands-or-products-marketers-should-take-care-when-tracking-ai-visibility/)).

But some brands appear consistently. For headphones, the four strongest brands appeared in 55 to 77% of 994 answers, and one hospital in Los Angeles in 69 of 71 ChatGPT answers (97%). The authors' conclusion: measure **the share of answers you appear in**, not your position ([SparkToro](https://sparktoro.com/blog/new-research-ais-are-highly-inconsistent-when-recommending-brands-or-products-marketers-should-take-care-when-tracking-ai-visibility/), [Search Engine Land](https://searchengineland.com/ai-recommendation-lists-rarely-repeat-study-468076)).

This is the process we use for SERPRise and for clients, with a tool that does all the calculations for you. The generator builds 20 questions for your business, the table calculates the result, and at the end you get a diagnosis and a first step.

**How long it takes, honestly:** 20 questions × 2 runs is 40 runs, about 30 minutes. If you run the recommendation questions 3 to 5 times, as we recommend, allow about 45 minutes. That is our estimate from our own tests, including reading the sources in each answer.

## Before you start

- **Temporary chat.** In ChatGPT, open a new chat and turn on "Temporary chat". In the web version the button is in the top right corner of an empty chat, and the interface changes often, so the icon may look different. Since 27 August 2026, a temporary chat offers a personalisation choice when you start it: leave the default, **no personalisation**, because then it does not use memory, custom instructions or add-ons ([Notebookcheck, based on OpenAI release notes](https://www.notebookcheck.net/ChatGPT-Temporary-chat-can-now-use-your-saved-memories.1382374.0.html)). If you are logged in as the owner of the company you are asking about, ChatGPT may otherwise know that from memory.
- **Alternative: a logged-out browser.** Open chatgpt.com in an incognito window, without logging in. Search in ChatGPT has worked without an account since February 2025 ([Engadget](https://www.engadget.com/ai/chatgpt-search-no-longer-requires-an-openai-account-to-use-205538282.html)). Without logging in there is no memory and no earlier conversations. Turn off your VPN so the test runs from your real location.
- **Search has to run.** The answer must have sources (links or a "Sources" button). If there are none, ChatGPT is answering from memory, and that is not a visibility test but a test of what the model learned a few months ago.
- **Write like a customer.** Not "SEO agency Zagreb" but "Recommend an SEO agency in Zagreb that also works with online shops". Customers write sentences to ChatGPT.

Note: we could not check the current ChatGPT interface live while writing this update, so the instructions about where the button is rely on the source cited. If you cannot find the button, a logged-out browser gives an equally clean test.

## How many times to run each question

- **Recommendation (questions 1 to 5): 3 to 5 runs.** This is where the lists change the most, and these questions decide whether AI will recommend you to a customer. Two runs can both miss or both hit by chance.
- **Price, comparison and problem: 2 runs.** These questions less often ask for a list of companies, so we kept two runs for them.

This is our recommendation based on the research, not a number from it. SparkToro ran each question 60 to 100 times per tool ([Search Engine Journal](https://www.searchenginejournal.com/ai-recommendations-change-with-nearly-every-query-sparktoro/566242/)), which is unrealistic for a business.

**The Croatian market.** SparkToro found that answers are more stable in narrow categories with few options, for example cloud providers for SaaS or Volvo dealers in Los Angeles, and more scattered in broad categories such as science fiction ([SparkToro](https://sparktoro.com/blog/new-research-ais-are-highly-inconsistent-when-recommending-brands-or-products-marketers-should-take-care-when-tracking-ai-visibility/)). The Croatian market was not part of the research. Local services in Croatia often have few options per city, so we expect more stable answers than for global categories, but that is our assumption, not measured data.

## 20 questions by type

<div data-embed="ai-generator"></div>

Templates for copying by hand. Replace the square brackets with your own details, worded so the sentence reads naturally. The examples are for a dental practice in Split, with the original Croatian prompt and its English meaning. The generator above also has ready-made examples for a law firm in Zagreb, a furniture webshop and holiday apartments on Hvar.

**Recommendation (5)**

1) Recommend [service] [city]. *Preporuči mi stomatologa u Splitu.* (Recommend a dentist in Split.)
2) Recommend [service] [city] for [customer type]. *Preporuči mi stomatologa u Splitu za djecu.* (Recommend a dentist in Split for children.)
3) Who in Croatia offers [main product or package]? *Tko u Hrvatskoj nudi implantat u jednom danu?* (Who in Croatia offers a same-day dental implant?)
4) I need [service] [city]. Who has good reviews?
5) What is the best choice if I need [service] [region]?

**Price (5)**

6) How much does [main product or package] cost in Croatia?
7) How much does [main product or package] cost [city]?
8) What is the average price for [main product or package]?
9) Which is better value: [main product or package] or [alternative]? *Isplati li se implantat u jednom danu ili most?* (Which is better value: a same-day implant or a bridge?)
10) Where [region] can I get [main product or package] for the lowest price?

**Comparison (5)**

11) [Your company] or [biggest competitor], which should I choose?
12) What are the alternatives to [biggest competitor]?
13) [Customer's problem]. What is better: [main product or package] or [alternative]?
14) [Your company]: what are the pros and cons?
15) What are people's experiences with [your company]?

**Problem (5)**

16) [Customer's problem], what should I do? *Boli me zub iza krunice, što da radim?* (My tooth hurts under a crown, what should I do?)
17) How do I choose [service]?
18) What should I look out for when choosing [service]?
19) How long is the wait for [main product or package]?
20) Is [main product or package] worth it in my situation? [Customer's problem].

Questions 11, 14 and 15 are a reputation check. If ChatGPT writes something inaccurate about you, you will find out here rather than from a customer. What to do then is described below under "If AI says something wrong about you".

## Tracking table

Run each question in a new temporary chat. For each run, note four things. An example of two runs of the same question:

| Question | Run | Mentioned? | Linked page | Competitors | Sources |
| --- | --- | --- | --- | --- | --- |
| Preporuči mi stomatologa u Splitu (Recommend a dentist in Split) | 1 | no | | Practice X, Practice Y | Google Maps, njuskalo.hr, ordinacija-x.hr |
| Preporuči mi stomatologa u Splitu (Recommend a dentist in Split) | 2 | yes | /usluge/ | Practice X | trebam.hr, your website |

The table below already contains your questions from the generator and calculates the percentages itself. It is saved only in your browser; nobody else can see it.

<div data-embed="ai-tablica"></div>

**Other AI tools (optional).** In the table you can turn on columns for Google AI Mode, Gemini and Perplexity. Google AI Mode has worked in Croatian since October 2025 ([Search Engine Roundtable](https://www.seroundtable.com/google-ai-mode-expands-40232.html)). For Microsoft Copilot you do not need a manual test: in [Bing Webmaster Tools](https://www.bing.com/webmasters/), the **AI Performance** report shows how many times your site was cited in Copilot and Bing's AI answers, which pages and for which queries. The report has been in public preview since February 2026 ([Bing Webmaster Blog](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)), and Bing Webmaster Tools is free.

## Your result

<div data-embed="ai-rezultati"></div>

## How to read the result

- **The "Sources" column is the most important.** These are the pages AI reads for your market. If the same directory, news site or list appears in several answers, that is where you need to be. In [our test for agencies](/en/blog/chatgpt-citations-croatia/), for the question "best agencies" ChatGPT cited other people's lists and Clutch, not the agencies' own pages.
- **You are mentioned, but your page is not linked.** AI knows you from other people's sources. That is good, but you do not control what they say.
- **For price questions it cites a competitor's price list.** If you have no public prices, ChatGPT will give the customer someone else's.
- **You are nowhere, not even for the question with your company name.** Check whether AI can read your website at all: Ctrl+U on a subpage and Ctrl+F for a sentence from the text. On one Croatian site that was the whole problem, described in the [case study](/en/blog/ai-visibility-case-study-obituaries/).
- **Position in the list means nothing.** The order almost never repeats, so "third in ChatGPT" is not a measure. The measure is the share of runs in which you are mentioned.

## What to do after the test

**1. You are nowhere.** First step: check whether AI can see the text of your website. On a subpage press Ctrl+U, then Ctrl+F and search for a sentence from the text. If it is not in the source code, the page is loaded with JavaScript and AI cannot read it. That was the case on the site from the [obituaries case study](/en/blog/ai-visibility-case-study-obituaries/). If the text is there, the problem is that nobody else mentions you: start with the sources that keep coming up in your table.

**2. You are mentioned, but without a link.** First step: for the question in which you were mentioned without a link, create a page that answers it directly, with concrete numbers, prices and location in the first sentences. We showed which pages ChatGPT cites for Croatian queries in the article [who ChatGPT cites in Croatia](/en/blog/chatgpt-citations-croatia/).

**3. For price questions, a competitor's price list is cited.** First step: publish starting prices in euros ("from €450", "package from €1,200") on the service page or on a separate pricing page. It does not have to be a full price list; a range and what affects the price is enough. On top of that, if news sites and lists keep coming up in the sources, getting published on them speeds things up: [Croatian news sites for PR](/en/blog/croatian-news-sites-for-pr/).

## If AI says something wrong about you

Questions 11, 14 and 15 show what AI says about your company. If something is wrong (an old address, a service you no longer offer, a wrong price, someone else's review), look in the answer's sources for where it comes from and work through these in order:

1. **A correction on your own website.** State the correct information clearly, on a page that is easy to find (About us, Contact, a service page). If the error is common, add a sentence that corrects it directly.
2. **Directory profiles.** Update your profiles on the sites that appear as sources (business directories, news sites, classifieds), with the same name, address, phone number and description as on your website.
3. **Google Business Profile.** Check opening hours, categories, services and description. This is the profile Google shows next to your company name in search and on Maps.
4. **Reviews.** Ask satisfied customers for a review, each in the same neutral way. Reply to old negative reviews with facts. Reviews and replies to them are public and can appear among the sources of AI answers.

After making changes, wait for the next monthly measurement. Changes on other people's pages do not show up in answers straight away.

## When to repeat

Once a month, on the same day, with the same questions and the same number of runs. Changing the questions between measurements breaks the comparison. Alongside this, track real visits from AI tools in GA4: [GA4 hides more than half of the visits from ChatGPT](/en/blog/ga4-ai-channel/).

<div data-embed="ai-napredak"></div>

**How we do it at SERPRise.** The same process, only automated. We put customer questions to ChatGPT through the OpenAI API with search turned on, and we fetch Google results and AI Overview sources for Croatia through the DataForSEO API. We use the Ahrefs API for the sources that keep coming up: how much authority they have and who else has a link from them. Every client has their own live dashboard where they see these numbers over the months, together with Search Console data. For SERPRise itself we track the same thing on 35 questions, on the first of each month. The starting point is 1 of 45 answers, and we publish the numbers on our [LLM visibility hub](/en/blog/llm-visibility/), even when they are not good.

If you would like us to do this for your business, with your customers' questions, take a look at our [LLM visibility](/en/llm-visibility/) service.
