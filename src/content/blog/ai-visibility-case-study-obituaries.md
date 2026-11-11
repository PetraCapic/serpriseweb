---
title: "Case Study: How an Obituary Site Got Into ChatGPT's Answers"
description: "AI visibility case study: a site with 35,000 monthly clicks was serving ChatGPT an empty page. After one technical change, ChatGPT visits rose from 6 to 67 in 12 days."
date: 2026-11-01
updated: 2026-11-06
lang: en
path: /en/blog/ai-visibility-case-study-obituaries/
translation: case-study-ai-vidljivost-osmrtnice
image: /blog/ai-visibility-case-study-obituaries/cover.png
imageAlt: "AI visibility case study: an obituary site, 67 visits from ChatGPT in 12 days"
---

In the 19 days before the change, osmrtnica.com.hr got 6 visits from ChatGPT. In the 12 days after, it got 67. In the same week, clicks from Google rose from 5,479 to 10,569.

We did not write new content and we did not change the design. The main change was what crawlers receive when they open a page. Over the same period the site was also getting links from Croatian news sites (link building and PR articles), so we do not attribute the growth to a single change. Below is the exact list of changes, the figures from Search Console, GA4, Ahrefs and DataForSEO, and what we still do not know.

## Starting point: 35,000 clicks and empty HTML

Osmrtnica.com.hr is a Croatian site for obituaries, funerals, cemeteries and digital memorials. In October it had around 36,000 clicks a month from Google and an average position of around 6.

The site is built in React and all content is drawn in the browser. If you open the source code of any page, all it contains is an empty `<div id="root"></div>`. Google can read it because it runs JavaScript, albeit with a delay. Bing, Ahrefs and most AI crawlers (ChatGPT, Perplexity, Claude) do not run JavaScript. On every page they saw the same empty shell.

That is why ChatGPT barely mentioned the site, even though it was on Google's first page for hundreds of queries.

## What we changed, day by day

**19 October: HTML for crawlers on all important pages**

- A Netlify edge function writes the title, description, canonical, JSON-LD and clean HTML content into the page before it is sent. It covers individual obituaries, obituaries by city, funerals, cemeteries and the blog.
- The homepage, the hubs (/umrli, /sprovodi, /groblja, i.e. deaths, funerals, cemeteries) and the memorial pages got a list of the latest obituaries, upcoming funerals and links to cities directly in the HTML.
- Static pages (FAQ, pricing, contact) are rendered at build time in headless Chrome and saved as finished HTML.
- Funeral pages got real data: cemeteries in the city and funerals from the last 14 days, instead of fixed numbers.

**21 October: internal links**

- Every obituary links to its city and cemetery, and the names on city pages became real links.
- Meta descriptions on obituaries were fixed.

**23 October: cleaning up errors and faster indexing**

- robots.txt was rewritten as a single group for all crawlers. Before, Googlebot, Bingbot and the AI bots each had their own group with "Allow: /", so even the rules blocking private pages did not apply to them. Now GPTBot, OAI-SearchBot, PerplexityBot and ClaudeBot see the same as Google.
- Every hour we send new obituaries to IndexNow, so Bing and the other search engines that support it pick them up straight away.
- We removed the SearchAction from the schema markup, which was causing 24,211 errors in Ahrefs, and a redirecting link that was on around 26,000 pages.

The site also has an llms.txt with a description of its sections and prices (digital memorial €39, candles from €3.99). We do not consider it a cause of the growth: llms.txt existed before too, when there were almost no visits from ChatGPT.

## Result 1: Google, clicks per day

![Clicks from Google per day in September and October 2026, with a jump on 19 October](/blog/case-study-ai-vidljivost-osmrtnice/gsc-klikovi.png)

| Week | Clicks 2026 | Same week 2025 |
| --- | --- | --- |
| 12 to 18 Oct | 5,479 | 4,679 |
| 19 to 25 Oct | 10,569 | 4,664 |
| 26 Oct to 1 Nov (to 30 Oct) | 10,288 | 4,540 |

The end of October is usually a stronger period for this topic because of All Saints' Day. That is why we compared the same weeks last year: in 2025 there was no jump at all. Position stayed around 6, and impressions rose from 318,721 to 388,159 a week. The number of pages that get any clicks at all is growing.

![Clicks by page type before and after the change](/blog/case-study-ai-vidljivost-osmrtnice/stranice.png)

Individual obituaries had the biggest jump: from 1,238 clicks in 14 days to 8,449 in 12 days. The number of pages with at least one click rose from 3,305 to 15,881.

During that period one obituary had a lot of searches by name and brought around 1,300 clicks. Even with it removed, individual obituaries have around 5.8 times more clicks than before.

## Result 2: ChatGPT, visits per day

![Visits from ChatGPT per day, September and October 2026](/blog/case-study-ai-vidljivost-osmrtnice/chatgpt-sesije.png)

In GA4, source chatgpt.com:

- 1 to 19 October: 6 sessions
- 20 to 31 October: 67 sessions

People from ChatGPT land on city pages (/umrli/kastela, /umrli/rijeka, /umrli/omis), on the funerals hub and on individual obituaries. These are exactly the pages that were empty to crawlers until 19 October.

In absolute terms this is still small compared with Google. But a visitor from ChatGPT views 2.2 pages per session, while a visitor from Google views 1.5. We describe how to track these visits in GA4 in the article [GA4 hides more than half of your ChatGPT visits](/en/blog/ga4-ai-channel/).

## Result 3: a test in ChatGPT and Google's AI Overview

On 1 November we asked ChatGPT (via the API, with web search and the location set to Zagreb) 12 questions that families and relatives ask.

![Results of the 12 questions in ChatGPT](/blog/case-study-ai-vidljivost-osmrtnice/ai-test.png)

The site was mentioned in 5 of the 12 answers, and in 3 it was a linked source. For "Sprovodi danas Rijeka" (funerals today Rijeka) it was the only source. For the digital memorial, ChatGPT linked to the memorial page itself. It was not cited for questions about Zagreb, Split, Zadar and Šibenik, where ChatGPT uses local news sites and city cemetery websites.

The same day we checked Google's AI Overview for 10 queries via DataForSEO. The site was cited for 3: "osmrtnice šibenik" (obituaries Šibenik), "digitalni memorijal" (digital memorial) and "virtualna svijeća" (virtual candle). Ahrefs records 59 citations of the site in Google AI Overviews, across 40 different pages.

## What we still do not know

- We have no measurement of ChatGPT citations before the change. Before 19 October we only have GA4 visits, and they suggest there were almost no citations.
- Ahrefs still estimates a drop in organic traffic (27,047 in the last week of October). Ahrefs calculates traffic from positions and search volumes and lags behind reality, while Search Console shows actual clicks.
- Only two weeks have passed. We are repeating the same test on 1 December and will add the results to this article.

## How to check whether your site has the same problem

1) Open any subpage, right-click, "View page source" (Ctrl+U).
2) Press Ctrl+F and search for a sentence from the main text of the page.
3) If it is not in the source code, AI crawlers see that page as empty. This most often happens with sites built in React, Vue, Angular and some site builders.
4) In robots.txt, check whether GPTBot, OAI-SearchBot or PerplexityBot have their own group. If they do, the rules in the "User-agent: *" group do not apply to them.
5) In GA4, create a channel for AI traffic and note how many visits from ChatGPT you have today. That is your baseline.

If you cannot find your text in the source code, get in touch via our [AI visibility](/en/llm-visibility/) page. Our [LLM visibility hub](/en/blog/llm-visibility/) has all our tests for the Croatian market.
