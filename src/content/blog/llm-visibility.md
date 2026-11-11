---
title: "LLM Visibility: A Guide to Getting a Croatian Company into ChatGPT and Google AI Answers"
description: "What LLM visibility, GEO and AEO are, which pages AI cites for Croatian queries, the four things that decide, a quiz, a 30-day plan and a robots.txt to copy."
date: 2026-11-01
updated: 2026-11-01
lang: en
path: /en/blog/llm-visibility/
translation: llm-vidljivost
image: /blog/llm-visibility/cover.png
imageAlt: "LLM visibility for Croatian companies"
about:
  - name: "Generative engine optimization (GEO)"
    sameAs: "https://en.wikipedia.org/wiki/Generative_engine_optimization"
  - name: "LLM visibility (AI visibility)"
  - name: "ChatGPT"
    sameAs: "https://en.wikipedia.org/wiki/ChatGPT"
  - name: "Search engine optimization (SEO)"
    sameAs: "https://en.wikipedia.org/wiki/Search_engine_optimization"
hasPart:
  - chatgpt-citations-croatia
  - chatgpt-searches
  - ai-visibility-case-study-obituaries
  - croatian-news-sites-for-pr
  - ai-visibility-check
  - ga4-ai-channel
faq:
  - q: "What is GEO?"
    a: "GEO (generative engine optimization) means optimising your website so that ChatGPT, Perplexity, Gemini and Google's AI Mode mention and cite you in their answers. The term comes from research by Princeton and collaborators published at the KDD 2024 conference."
  - q: "Is GEO the same as SEO?"
    a: "No, but they overlap. AI tools with search open the pages they find in a search engine, so without basic SEO it is hard to get into the answer. GEO adds three things: AI can read the page without JavaScript, the page answers the question directly, and other sources that AI reads mention you."
  - q: "Do I need llms.txt?"
    a: "It is not a priority. Google does not use it (Gary Illyes, Google, 2025). Some AI tools read it, but there is no evidence that it brings citations. Check robots.txt first, and whether the page text is visible in the HTML."
  - q: "How long does it take for ChatGPT to start mentioning my company?"
    a: "It depends on what is missing. When the problem is technical, the change shows quickly: on a Croatian obituary site, visits from ChatGPT went from 6 in 19 days to 67 in 12 days after the content was put into the HTML. Mentions on news sites and directories take longer; expect several months and measure once a month."
  - q: "How can I measure AI visibility for free?"
    a: "Three free sources: a list of 20 questions your customers ask, put to ChatGPT once a month while you note whether you are mentioned; an AI traffic channel in GA4 (the built-in AI Assistant channel or your own regex); and the AI Performance report in Bing Webmaster Tools, which shows how often Copilot cites you."
sources:
  - name: "TechCrunch, 27 Feb 2026: ChatGPT reaches 900M weekly active users"
    url: "https://techcrunch.com/2026/02/27/chatgpt-reaches-900m-weekly-active-users"
  - name: "Search Engine Roundtable, 19 Feb 2026: Google AI Mode works in 53 new languages (list of 98 languages)"
    url: "https://www.seroundtable.com/google-expands-ai-mode-to-53-new-languages-40958.html"
  - name: "Nick Fox (Google) on X, 18 Feb 2026"
    url: "https://x.com/thefox/status/2024182498171994604"
  - name: "Vercel, 17 Dec 2024: The rise of the AI crawler"
    url: "https://vercel.com/blog/the-rise-of-the-ai-crawler"
  - name: "OpenAI: Overview of OpenAI crawlers"
    url: "https://developers.openai.com/api/docs/bots"
  - name: "Perplexity: Perplexity crawlers"
    url: "https://docs.perplexity.ai/guides/bots"
  - name: "Anthropic: Does Anthropic crawl data from the web?"
    url: "https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler"
  - name: "Google: Google-Extended (Google's common crawlers)"
    url: "https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers"
  - name: "Aggarwal et al., GEO: Generative Engine Optimization (KDD 2024)"
    url: "https://arxiv.org/abs/2311.09735"
  - name: "Ahrefs: An Analysis of AI Overview Brand Visibility Factors (75K Brands Studied)"
    url: "https://ahrefs.com/blog/ai-overview-brand-correlation/"
  - name: "SparkToro, 28 Jan 2026: AIs are highly inconsistent when recommending brands or products"
    url: "https://sparktoro.com/blog/new-research-ais-are-highly-inconsistent-when-recommending-brands-or-products-marketers-should-take-care-when-tracking-ai-visibility/"
  - name: "Bing Webmaster Blog, February 2026: Introducing AI Performance in Bing Webmaster Tools (Public Preview)"
    url: "https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview"
  - name: "Search Engine Journal: Google Analytics adds AI Assistant as default channel group"
    url: "https://www.searchenginejournal.com/google-analytics-adds-ai-assistant-as-default-channel-group/"
  - name: "Search Engine Land: Google says normal SEO works for ranking in AI Overviews and llms.txt won't be used"
    url: "https://searchengineland.com/google-says-normal-seo-works-for-ranking-in-ai-overviews-and-llms-txt-wont-be-used-459422"
---

<span data-term="llm-vidljivost">LLM visibility</span> is how often ChatGPT, Gemini, Perplexity and Google's AI answers mention or link to you when someone asks about your service or product. <span data-term="geo">GEO</span>, <span data-term="aeo">AEO</span>, <span data-term="ai-seo">AI SEO</span> and LLM optimisation are different names for the same job: making sure those answers name you, not a competitor.

Why now, and why in Croatia? ChatGPT has around 900 million weekly users, OpenAI announced in February 2026 ([TechCrunch](https://techcrunch.com/2026/02/27/chatgpt-reaches-900m-weekly-active-users)). That same February, Google expanded <span data-term="ai-mode">AI Mode</span> to 53 new languages, 98 in total, and Croatian is on the list ([Search Engine Roundtable](https://www.seroundtable.com/google-expands-ai-mode-to-53-new-languages-40958.html), [Nick Fox, Google](https://x.com/thefox/status/2024182498171994604)). Your customers now get AI answers in Croatian, both in ChatGPT and in Google.

This guide does not retell English-language articles. It is based on our own tests with Croatian queries: 35 questions and 45 ChatGPT answers about agencies and prices, 12 questions about obituaries and funerals, and GA4 and Search Console data from one Croatian website. We use international studies where they confirm or explain what we saw. Every source is linked in the text and in the [list of sources](#sources) at the bottom.

If you want to know where you stand right away, [take the 10-question quiz](#kviz). It takes two minutes.

## How AI answers a Croatian question

When you ask ChatGPT something with search switched on, it writes one or more searches itself, opens around ten pages and builds the answer from them. The answer lists its sources. This is called <span data-term="grounding">grounding</span>: the answer is based on pages it has just read, not only on what it learned in training. If your page is not among those ten or so, you do not exist.

<div data-embed="answer-flow"></div>

In text, in four steps:

1) **The question.** A customer types a question, e.g. "Koja agencija u Splitu radi SEO i koliko košta?" ("Which agency in Split does SEO and how much does it cost?")
2) **The search.** ChatGPT breaks the question down into several searches, some in Croatian, some in English (<span data-term="fan-out">query fan-out</span>). How to see them in Chrome: [What ChatGPT actually searches for](/en/blog/chatgpt-searches/).
3) **Around ten pages.** It opens the results and reads their HTML.
4) **An answer with sources.** It puts the answer together and cites its sources.

Three things we saw in our tests:

- **General questions are searched in English.** ChatGPT turns "Što je GEO optimizacija?" ("What is GEO optimisation?") into "Generative Engine Optimization meaning" and cites Semrush and academic papers. A Croatian article rarely makes it into that answer.
- **As soon as a question includes a city, "Hrvatska" (Croatia), a price or "agencija" (agency), the sources are Croatian.** These are buying questions, and here you compete only with local websites.
- **Domain authority barely matters.** Pages with a Domain Rating of 0 to 6 were cited. The details and the table of domains are in our study [Which pages ChatGPT cites when someone looks for an agency in Croatia](/en/blog/chatgpt-citations-croatia/).

## The four things that decide

<div data-embed="cluster-map"></div>

### 1. Can AI read your page at all

AI crawlers do not run JavaScript. In December 2024, Vercel analysed crawler traffic on its network: the OpenAI and Anthropic bots download JavaScript files but do not execute them. The exceptions are Gemini, which uses Googlebot's infrastructure, and AppleBot ([Vercel](https://vercel.com/blog/the-rise-of-the-ai-crawler)). If your website is built in React or a similar framework and the content is only drawn in the browser, ChatGPT and Perplexity see an empty page.

The check takes a minute: Ctrl+U on a subpage, then Ctrl+F for a sentence from the text. If it is not in the source code, it is not there for AI either.

On a Croatian obituary site, that was the whole problem. After we put the content into the HTML, visits from ChatGPT went from 6 in 19 days to 67 in 12 days. Every change, day by day, is in the [case study](/en/blog/ai-visibility-case-study-obituaries/).

The second technical check is robots.txt. OpenAI has three bots, and each does something different ([OpenAI](https://developers.openai.com/api/docs/bots)):

| Bot | What it does | If you block it |
| --- | --- | --- |
| OAI-SearchBot | Indexes pages for search in ChatGPT | You do not appear in ChatGPT answers that use search |
| GPTBot | Collects content to train future models | Your content is not used for training. Search is not affected. |
| ChatGPT-User | Opens a page when a user asks for it in a conversation | OpenAI says robots.txt may not apply to it, because the visit is initiated by the user |

**Blocking GPTBot does not remove you from ChatGPT search. Blocking OAI-SearchBot does.** The same applies to Perplexity (PerplexityBot is for search, [Perplexity](https://docs.perplexity.ai/guides/bots)) and Anthropic, where ClaudeBot is for training, while Claude-SearchBot and Claude-User are for search and answers ([Anthropic](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)).

One more trap: if a bot has its own group of rules in robots.txt, nothing from the "User-agent: \*" group applies to it. A ready-made example is [further down in this guide](#robotstxt-to-copy).

### 2. Do you have a page that answers the exact question

The Croatian pages cited for buying questions had five things in common:

- the name of the service in the title, in the same words the customer uses
- prices in euros, at least starting prices
- a short answer at the top: what you do, for whom, from how many euros
- an FAQ and schema markup
- figures from a real project

One page per service. A blog post about "trends" does not replace a service page.

The research that gave GEO its name points the same way. A team from Princeton and collaborators tested nine ways of editing text on 10,000 queries and measured how much of a source's text ended up in the AI answer ([Aggarwal et al., KDD 2024](https://arxiv.org/abs/2311.09735)). The best performers were:

- **quotations from sources** (a verbatim quote from an expert or document): +41%
- **statistics** (concrete figures instead of descriptions): about +33%
- **citing sources** alongside claims: about +28%

**Keyword stuffing** did worse than unedited text, about −9%. The figures are from Table 1 of the paper, for the visibility metric adjusted for position in the answer. The practical takeaway: a figure from your own project and a link to a source are worth more than one more repetition of the keyword.

You can see for yourself, in Chrome, which words ChatGPT actually searches for when your customer asks a question. The method and what to read from the searches: [Method: how to see what ChatGPT searches for](/en/blog/chatgpt-searches/).

### 3. Do others mention you

For a question such as "which are the best agencies", ChatGPT does not cite an agency's own page but other people's lists, directories (Clutch, trebam.hr, a Croatian services directory) and conference websites. For local services, these are local news sites and city websites.

Ahrefs compared what goes with visibility in Google's <span data-term="ai-overview">AI Overviews</span> across 75,000 brands. The strongest link was with the number of brand mentions on the web (a correlation of 0.664), and a much weaker one with backlinks (0.218) ([Ahrefs](https://ahrefs.com/blog/ai-overview-brand-correlation/)). Correlation is not proof of cause, but it matches what we see in Croatian answers.

**In AI answers, a mention matters more than a link.** A directory profile and one article on a news site that AI already cites are often worth more than ten new blog posts on your own website. We explain the difference between a <span data-term="citat">citation</span> and a <span data-term="spomen">mention</span> under [terms](#terms-you-will-come-across) below. A list of news sites with DR and sponsored content labelling is in the article [Croatian news sites for PR articles](/en/blog/croatian-news-sites-for-pr/).

### 4. Are you measuring

Without measurement you do not know whether any of this worked. But "what position are we in ChatGPT" is not a good question. SparkToro and Gumshoe ran the same prompts through ChatGPT, Claude and Google AI almost 3,000 times: the chance of two answers giving the same list of brands was less than 1 in 100, and the same list in the same order about 1 in 1,000 ([SparkToro](https://sparktoro.com/blog/new-research-ais-are-highly-inconsistent-when-recommending-brands-or-products-marketers-should-take-care-when-tracking-ai-visibility/)). Position is noise. What you measure is the **share of appearances**: in how many of N answers you are mentioned.

Four sources, all free:

- **Prompts.** A list of 20 questions your customers ask, typed into ChatGPT once a month. A ready-made list and a tracking sheet: [Does ChatGPT mention your company? A 20-question check](/en/blog/ai-visibility-check/).
- **GA4.** In 2026, Google added a built-in "AI Assistant" channel ([Search Engine Journal](https://www.searchenginejournal.com/google-analytics-adds-ai-assistant-as-default-channel-group/)). On the website from the case study, it caught 136 of 319 AI visits; the rest were in Unassigned and Referral. Our regex and the steps: [GA4 hides more than half of your visits from ChatGPT](/en/blog/ga4-ai-channel/).
- **Bing Webmaster Tools, AI Performance report.** Since February 2026 it shows, for free, how many times your pages were cited in Copilot and Bing's AI summaries, and for which questions ([Bing Webmaster Blog](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)). It is the only official source of AI citation data that currently exists.
- **Search Console.** It does not separate AI traffic, but it shows whether queries you already have a page for are growing.

This is how it works for us: every client has their own live dashboard that brings together the monthly question test, AI traffic from GA4 and Search Console data. We pull Google rankings and AI Overviews through the DataForSEO API, and mentions and links through the Ahrefs API, so you can see how the numbers change after every change to the website.

<div id="kviz"><div data-embed="quiz"></div></div>

## A 30-day plan

The order matters: there is no point building mentions for a page that AI cannot read.

| Week | Focus | What to do |
| --- | --- | --- |
| 1 | Technical | Ctrl+U test on your 5 main pages. robots.txt: allow OAI-SearchBot, PerplexityBot, Claude-SearchBot. Add the website to Bing Webmaster Tools and switch on IndexNow. |
| 2 | Service pages | For each service: the service name in the title, a starting price in euros, an "In short" block at the top, an FAQ with markup, one figure from a real project. |
| 3 | Mentions | Profiles on 3 to 5 directories that AI cites in your industry (Clutch, trebam.hr, industry directories). One article on a news site that AI already cites for your topic. |
| 4 | Measurement | An AI traffic channel in GA4. 20 customer questions in ChatGPT, results in a spreadsheet: that is your baseline. The same test every month, on the same day. |

After 30 days you have a readable website, a page for every buying question, your first mentions and a number to compare next month against.

## robots.txt to copy

Replace the domain in the last line and put the file in the root of your website (yourdomain.com/robots.txt). Search bots are allowed. We leave the decision on training bots to you: uncomment the block if you do not want your content used to train models. It does not affect whether you appear in answers.

```
# robots.txt: AI search allowed, training is your call

# All other bots, including Googlebot and Bingbot
User-agent: *
Allow: /
# Disallow: /admin/

# --- AI search: these bots bring citations and visits ---
# A bot with its own group does NOT read the rules from "User-agent: *",
# so repeat anything you disallow above here too.

# ChatGPT search
User-agent: OAI-SearchBot
Allow: /

# ChatGPT opens a page at the user's request
User-agent: ChatGPT-User
Allow: /

# Perplexity search and answers
User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

# Claude search and answers
User-agent: Claude-SearchBot
Allow: /

User-agent: Claude-User
Allow: /

# --- Model training: your decision ---
# Blocking does NOT remove you from ChatGPT, Claude or Google search.
# Uncomment if you do not want your content used for training.

# User-agent: GPTBot
# Disallow: /

# User-agent: ClaudeBot
# Disallow: /

# Google-Extended: training and grounding in Gemini apps,
# does not affect Google Search
# User-agent: Google-Extended
# Disallow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

Sources for each bot: [OpenAI](https://developers.openai.com/api/docs/bots), [Perplexity](https://docs.perplexity.ai/guides/bots), [Anthropic](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler), [Google](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers). Perplexity-User and ChatGPT-User are triggered by the user, so robots.txt does not have to stop them. The groups are there to make the rules clear.

## Terms you will come across

| Term | What it means in practice |
| --- | --- |
| LLM visibility / AI visibility | How much AI tools mention you. Measured by your share of appearances in answers and in GA4. |
| GEO | Optimisation for generative search engines (ChatGPT, Perplexity, AI Mode). |
| AEO | Optimisation for answers: featured snippets, AI Overviews, voice assistants. |
| AI SEO | The same as GEO; used more often in agency proposals. |
| AI Overview | Google's summary above the search results, with links to sources. |
| AI Mode | Google search in the form of a conversation. Available in Croatian since February 2026. |
| Grounding | Before answering, AI searches the web and builds the answer from the pages it finds. |
| Query fan-out | AI breaks one question into several searches, often in English too, then combines the results. |
| Citation vs mention | A citation is a link to your page as a source. A mention is your company name in the text of the answer, with or without a link. For the customer, the mention matters; for traffic, the citation. |
| llms.txt | A file describing your website for AI. Google does not use it (Gary Illyes, 2025, [Search Engine Land](https://searchengineland.com/google-says-normal-seo-works-for-ranking-in-ai-overviews-and-llms-txt-wont-be-used-459422)). Some AI tools read it, but there is no evidence that it brings citations. |

## Our own measurement

We run the same process on ourselves. Every month we put the same 35 questions about SEO and AI visibility to ChatGPT, through the OpenAI API with web search. At the start, on 30 October, SERPRise appeared in 1 of 45 answers, and the same on 1 November. The goal is 10 of 45 by 1 February 2027. We publish the results here, even when they are not good.

<div data-embed="tracker"></div>

If you would like us to run the same test for your industry, with your customers' questions, take a look at our [AI visibility](/en/llm-visibility/) service or download the [free 9-step guide](/vodic-llm-vidljivost/) (in Croatian).
