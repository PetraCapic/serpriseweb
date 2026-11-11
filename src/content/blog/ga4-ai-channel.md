---
title: "The GA4 AI Assistant channel misses AI visits. A regex that fixes it"
description: "The GA4 AI Assistant channel is not retroactive and misses Perplexity. On a Croatian site it caught 145 of 328 AI visits. Regex, 7 steps, tester and calculator."
date: 2026-11-01
updated: 2026-11-01
lang: en
path: /en/blog/ga4-ai-channel/
translation: ga4-ai-kanal
image: /blog/ga4-ai-channel/cover.png
imageAlt: "A GA4 channel for traffic from ChatGPT and other AI tools"
howto:
  name: "How to create a GA4 channel for traffic from AI tools"
  steps:
    - "In GA4, open Admin, Data display, Channel groups."
    - "Click Create new channel group and name the group Default + AI. GA4 copies all existing channels."
    - "Click Add new channel and name the channel AI assistants."
    - "Set the condition Session source, matches regex and paste the regex for AI tools."
    - "Save the channel and drag it above the Referral channel and, if the copy has one, above the AI Assistant channel."
    - "Save the channel group."
    - "In Reports, Acquisition, Traffic acquisition, switch the table dimension to Default + AI."
faq:
  - q: "Why does GA4 show less than Search Console?"
    a: "Search Console counts clicks in Google's results, while GA4 counts sessions in which the tracking code loaded. Declined cookies, blockers and several clicks within one session lower the GA4 number. The two numbers measure different things and are not supposed to match."
  - q: "Can I see which prompt the user typed?"
    a: "No. An AI tool only sends the domain or the utm_source parameter, not the text of the conversation. Bing Webmaster Tools shows grounding queries for Copilot, but those are the phrases the AI used to search for content, not the user's prompt."
  - q: "Does Google AI Mode count as AI traffic?"
    a: "No. GA4 counts visits from AI Mode and AI Overviews as google / organic, and the AI Assistant channel explicitly excludes them."
---

Since May 2026, GA4 has had a built-in "AI Assistant" channel. On the Croatian site from our [AI visibility case study](/en/blog/ai-visibility-case-study-obituaries/), that channel showed 145 visits from AI tools between 1 October 2025 and 31 October 2026. The real number was 328.

The gap has two causes: the channel is not retroactive, and it does not recognise every source. Below you will find the regex, 7 steps to your own channel and tools to check it before you save it.

## What the AI Assistant channel is

Google announced the channel on 13 May 2026 and is rolling it out gradually, so some accounts do not have it yet ([PPC Land](https://ppc.land/google-analytics-adds-ai-assistant-channel-for-chatgpt-gemini-claude/), [Semrush](https://www.semrush.com/blog/ga4-adds-ai-assistant-channel/)). A session from a recognised AI assistant gets the medium `ai-assistant` and the campaign `(ai-assistant)`. Google names ChatGPT, Gemini, DeepSeek, Copilot and Grok as examples, but does not publish the full list ([Google](https://support.google.com/analytics/answer/9756891)).

**It does not apply retroactively.** We checked in our own GA4: the last chatgpt.com session in Unassigned was on 1 June 2026, the first in AI Assistant on 5 June 2026. Everything older stayed in Referral and Unassigned. A custom channel group, by contrast, also works on historical data ([Google](https://support.google.com/analytics/answer/13051316)).

**It misses Perplexity.** In our GA4, Perplexity arrives as the source "perplexity", with no domain and no medium. The built-in channel does not recognise it and sends it to Unassigned: all 8 Perplexity visits after 5 June ended up there. We also checked copilot.com: of 3 visits after the channel launched, only one was in AI Assistant and two were in Unassigned. The sample is small, but the direction is the same.

<div data-embed="ga4-kanali"></div>

Since the channel has existed, it has caught 145 of 156 AI visits, around 93%. Most of the gap to 328 is history from before June. If you compare year on year, the built-in channel will not help you.

<div data-embed="ga4-kalkulator"></div>

## Is it worth tracking when the number is small

328 AI sessions against 372,415 from google / organic is less than 0.1%. But these visitors behave differently:

<div data-embed="ga4-angazman"></div>

The second thing is the trend. Visits from chatgpt.com grew from 3 in the first 19 days of October to 78 in the last 12, after a technical change on the site. Part of the low number at the start of the month may also be a ChatGPT bug: from roughly 7 to 16 October its links carried no UTM, so some visits ended up in Direct ([PPC Land](https://ppc.land/google-gemini-drops-utm-tags-from-cited-links-after-three-weeks/)).

## The regex for your own channel

```
.*(chatgpt|openai|perplexity|gemini|copilot|claude|deepseek|mistral|grok).*
```

**The extended version** adds `meta\.ai|you\.com|phind|kagi|poe\.com`. The backslash before the dot means "exactly this domain". Without it, `you` also matches youtube.com, and `poe` matches any source containing those three letters. On our site, `meta` without `\.ai` would have pulled 672 paid sessions from Meta into the AI channel. Kagi is primarily a search engine, so add it only if you know people use its assistant.

If you have a UTM campaign or partner with "gemini" or "copilot" in the source, use the more precise patterns `gemini\.google|copilot\.(com|microsoft)`. You then lose the source "gemini" without a domain (1 visit for us). GA4 channel conditions are not case-sensitive ([Google](https://support.google.com/analytics/answer/13051316)).

<div data-embed="ga4-regex"></div>

Before you save, paste your own sources into the tester. That way you see false matches before they end up in your reports.

<div data-embed="ga4-tester"></div>

## The channel in 7 steps

1. In GA4, open Admin, Data display, Channel groups.
2. Click "Create new channel group" and name the group "Default + AI". GA4 copies all existing channels.
3. Click "Add new channel" and name the channel "AI assistants".
4. Condition: Session source, matches regex. Paste the regex above.
5. Save the channel and drag it **above** the Referral channel and, if the copy has one, above AI Assistant. GA4 assigns a session to the first channel whose condition it meets ([Google](https://support.google.com/analytics/answer/13051316)).
6. Save the group. Standard GA4 allows two custom groups.
7. Reports, Acquisition, Traffic acquisition. In the table, switch the dimension to "Default + AI".

<div data-embed="ga4-koraci"></div>

## Three things to watch out for

- **The number is a lower bound.** ChatGPT adds `utm_source` to links: to citations for some time, and to links in the "More" section since June 2025 ([PPC Land](https://ppc.land/chatgpt-adds-utm-parameters-to-more-links-for-better-analytics-tracking/)). That is why chatgpt.com shows up as the session source. A copied link has neither UTM nor referrer, so it goes to Direct, as do some clicks from mobile apps. This has been measured for Gemini's iOS app ([PPC Land](https://ppc.land/google-gemini-drops-utm-tags-from-cited-links-after-three-weeks/)).
- **"gemini" and "copilot" can catch something else.** A campaign or partner with that name in the source will end up in the AI channel. The fix is the precise patterns above.
- **Google AI Overviews and AI Mode are not the AI channel.** GA4 counts them as google / organic, and AI Assistant explicitly excludes them ([Google](https://support.google.com/analytics/answer/9756891)). In Search Console they are included in the overall search totals and the clicks cannot be separated ([Google](https://developers.google.com/search/docs/appearance/ai-features)). Since 31 August 2026, Search Console has had a report on generative AI features, but only with impressions, with no clicks and no split between AI Overviews and AI Mode ([Google](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports)).

## Which pages AI sends people to

In GA4, open Explore, Free form. Dimensions: Session source and Landing page + query string. Metrics: Sessions, Engaged sessions, Key events. Put Landing page in rows and Session source in columns. Filter: Session source, matches regex, the same regex.

You get a list of the pages AI tools recommend. Update those pages first, because AI already trusts their content.

## Conversions from AI traffic

In Admin, Data display, Events, click the star next to the event that means an enquiry or a purchase, and it becomes a key event ([Google](https://support.google.com/analytics/answer/13128484)). Then, in Traffic acquisition with the "Default + AI" dimension, choose that event in the Key events column and compare the "Session key event rate" for AI assistants and Organic Search.

On our site, ChatGPT delivered 6 key events from 282 sessions, Google 191 from 372,415. The sample is too small for a conclusion, but the difference is worth tracking month by month.

## An "AI sessions per week" chart in Looker Studio

We do not have a public template, but the chart takes five minutes. In Looker Studio, create a new report with Google Analytics as the data source and your property. Add a Time series, the dimension Date with the type ISO Year Week and the metric Sessions. Add a filter: Include, Session source, RegExp Match, the same regex. If you set Session source as the breakdown dimension, each AI tool gets its own line.

## Citations without a click: Copilot

Since 10 February 2026, Bing Webmaster Tools has had AI Performance, in public preview. It shows how many times your pages were cited in Copilot and Bing's AI summaries, which pages, and the grounding queries, the phrases the AI used to search for content. There are no clicks ([Bing](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)). It is the only free tool that shows the number of citations and the queries. Search Console only shows impressions in Google's AI features.

There is no such tool for ChatGPT. You need a manual check with prompts: [Does ChatGPT mention your company? A 20-question check](/en/blog/ai-visibility-check/).

## FAQ

### Why does GA4 show less than Search Console?

Search Console counts clicks in Google's results, while GA4 counts sessions in which the tracking code loaded. Declined cookies, blockers and several clicks within one session lower the GA4 number ([Bounteous](https://www.bounteous.com/insights/2015/08/05/google-search-console-vs-google-analytics-why-clicks-dont-match-sessions/)). The two numbers measure different things and are not supposed to match.

### Can I see which prompt the user typed?

No. An AI tool only sends the domain or `utm_source`, not the text of the conversation. Bing Webmaster Tools shows grounding queries for Copilot, but those are the phrases the AI used to search for content, not the user's prompt ([Bing](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)).

### Does Google AI Mode count as AI traffic?

No. GA4 counts visits from AI Mode and AI Overviews as google / organic, and the AI Assistant channel explicitly excludes them ([Google](https://support.google.com/analytics/answer/9756891)).

## What next

For us, this regex is not a separate report. Every client has their own live dashboard into which we pull GA4 and Search Console, along with data from the DataForSEO and Ahrefs APIs. That way AI visits sit in the same place as rankings and links, and it is immediately clear whether a jump came from a new citation or from a change in measurement.

Everything about how Croatian companies get into AI tools' answers is on our [LLM visibility hub](/en/blog/llm-visibility/). If you would like us to set up the channel and the measurement for you, get in touch via the [LLM visibility](/en/llm-visibility/) page.

## Sources

- Our data: GA4 of the osmrtnica.com.hr site (a Croatian obituaries portal), 1 October 2025 – 31 October 2026, pulled on 1 November 2026.
- Google Analytics Help: [Traffic-source dimensions](https://support.google.com/analytics/answer/9756891) (definition of the AI Assistant channel)
- Google Analytics Help: [Custom channel groups](https://support.google.com/analytics/answer/13051316)
- Google Analytics Help: [Mark events as key events](https://support.google.com/analytics/answer/13128484)
- PPC Land: [Google Analytics adds AI Assistant channel](https://ppc.land/google-analytics-adds-ai-assistant-channel-for-chatgpt-gemini-claude/), 14 May 2026.
- Semrush: [GA4 adds AI Assistant channel](https://www.semrush.com/blog/ga4-adds-ai-assistant-channel/), 20 May 2026.
- PPC Land: [ChatGPT adds UTM parameters to more links](https://ppc.land/chatgpt-adds-utm-parameters-to-more-links-for-better-analytics-tracking/), 16 June 2025.
- PPC Land: [Google Gemini drops UTM tags from cited links](https://ppc.land/google-gemini-drops-utm-tags-from-cited-links-after-three-weeks/), 1 November 2026.
- Google Search Central: [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- Google Search Central: [Search Generative AI performance reports](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports), 3 June 2026.
- Bing Webmaster Blog: [AI Performance in Bing Webmaster Tools](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview), 10 February 2026.
- Bounteous: [Search Console vs. Google Analytics](https://www.bounteous.com/insights/2015/08/05/google-search-console-vs-google-analytics-why-clicks-dont-match-sessions/)
