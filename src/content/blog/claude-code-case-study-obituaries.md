---
title: "Claude Code in Practice: 17 Days, 86 Changes and 2.2 Times More Clicks"
description: "Claude Code case study: how we ran SEO, programmatic pages and conversion tracking on osmrtnica.com.hr. Activities, tools, Search Console figures and the plan."
date: 2026-11-01
lang: en
path: /en/blog/claude-code-case-study-obituaries/
translation: claude-code-case-study-osmrtnice
image: /blog/claude-code-case-study-obituaries/cover.png
imageAlt: "Case study: what we built with Claude Code on an obituary site, 2.2 times more clicks from Google"
---

In the 12 days before 19 October, osmrtnica.com.hr got 9,584 clicks from Google. In the 12 days after, it got 20,857. On the same days last year, the number of clicks did not change (8,144 and 8,205).

Every change to the site since 16 October was made in Claude Code: 86 merged pull requests in 17 days. This article lists everything we did, how we connected Claude Code to Search Console, Google Analytics, Tag Manager and Meta, what delivered results and what did not, and what we are doing next.

If you are only interested in the ChatGPT part, it is covered in a separate [AI visibility case study](/en/blog/ai-visibility-case-study-obituaries/).

## What Claude Code is and how we use it

Claude Code is Anthropic's tool in which Claude works directly in a project's repository. It reads code, runs commands, changes files and opens pull requests on GitHub. It can run in the terminal, in the desktop app or in the browser at claude.ai/code. We use it in the browser, in the cloud, so nothing depends on anyone's laptop.

Our way of working is simple:

- **One task, one thread, one pull request.** "Add the funeral schedule for Karlovac" is one task. Claude makes the change and opens a PR, Netlify builds a preview, and after the merge the change goes live on the site.
- **Project rules live in the repository.** The AGENTS.md file holds the rules Claude must follow (where images are stored, how sales attribution is calculated and so on), so we do not repeat them in every task.
- **Keys live in the environment settings, never in the code.** Claude reads the Google service account, the Meta token and the rest from environment variables.
- **The same Claude that changes the code also reads the data.** Search Console, GA4 and Meta Ads are connected to the same project, so the decision to make a change and checking its result happen in the same thread.

## Starting point

Since July 2025 the site had been built in Lovable, a tool that creates a React app from a description. By October the repository had 1,562 commits from Lovable's bot. On 15 October we added a Netlify configuration so the site deploys straight from GitHub, without Lovable. Since then we have done everything in Claude Code.

The situation in mid-October:

- Clicks from Google had been falling since the summer. In the week of 12 to 18 October there were 5,479, while the best weeks of the summer had more than 11,000.
- All content was drawn in the browser. Crawlers that do not run JavaScript saw an empty page.
- Sales tracking was partial: from 1 to 18 October GA4 recorded roughly a quarter of visits, and Meta was not receiving events from the server.

![Clicks from Google per week from July 2025 to October 2026](/blog/claude-code-case-study-osmrtnice/tjedni-klikovi.png)

## Strategy: five directions

We did not start with new content. We started with the question of which pages already get impressions and why they do not get more clicks.

1. **Technical SEO:** every important page must have its content, title, description, canonical and structured data in the HTML.
2. **Programmatic pages:** the site has thousands of pages generated from the database (obituaries, cities, funerals, cemeteries). They bring the most traffic, so they come first.
3. **Content:** a blog and guides for the questions people have after the death of someone close (survivor's pension, death abroad, digital legacy).
4. **Measurement:** every step of the sale must be visible in GA4 and in Meta, sent from the server, not just from the browser.
5. **Conversion:** simpler creation of digital memorials and payment for virtual candles.

## Activities, day by day

![Clicks per day in October and the number of merged pull requests per day](/blog/claude-code-case-study-osmrtnice/pr-i-klikovi.png)

**16 to 18 October: measurement and sales**

- The memorial sales funnel is sent to GA4 via Tag Manager, with GA4 ecommerce events (begin_checkout, purchase).
- Meta Conversions API: memorial creation and payment are sent from the server, with the same event_id as in the Pixel, so conversions are not counted twice.
- Events are sent only from the production domain and only with cookie consent.
- Memorial creation without registration, a reminder for unfinished memorials, newsletter sign-up on the blog and on obituaries.

**19 October: HTML for crawlers and programmatic pages**

- A Netlify edge function writes the content, title, description, canonical and JSON-LD into the HTML for the homepage, hubs, cities, funerals, cemeteries, blog, memorials and individual obituaries.
- Static pages are rendered into finished HTML at build time.
- One URL per city: variants with diacritics and spaces 301-redirect to a single form.
- City pages got upcoming funerals, an email alert for the city and a test of titles, H1s and H2s.
- A daily import of funeral schedules for Karlovac, Koprivnica, Dubrovnik and Rijeka.

**20 to 23 October: internal links and clean-up**

- Every obituary links to its city and cemetery, and the names on city pages became real links.
- Fixed obituary meta descriptions and content that the audit flagged as inaccurate.
- Funeral schedules for Varaždin, Čakovec, Velika Gorica, Požega and Jastrebarsko.
- robots.txt as a single group for all crawlers, IndexNow for new obituaries every hour, and removal of the SearchAction that was causing 24,211 errors in Ahrefs.
- Landing pages for three free guides and four new blog articles with infographics.

**24 October to 1 November: conversion**

- Memorial creation in fewer steps, with email on the first screen.
- Payment for virtual candles (7, 14 and 30 days), promo codes and an All Saints' Day discount.
- Tracking of paid candles in GA4, Meta and Google Ads.
- Statistics in the site's admin: Search Console and GA4 funnels on one page.

## Which programmatic pages we optimised and what happened

![Clicks by page type 12 days before and after 19 October, compared with the same days in 2025](/blog/claude-code-case-study-osmrtnice/programmatic-stranice.png)

The end of October is a stronger period for this topic because of All Saints' Day. That is why we compare each page type with the same days in 2025. This shows how much of the growth is seasonal.

- **Individual obituaries** (/first-last-name): from 989 to 8,414 clicks. On the same days last year, a drop of 11%. One obituary brought 1,574 clicks because of a lot of searches by name. Without it, growth is still around 6.9 times. Impressions rose from 18,336 to 101,446.
- **Funerals by city** (/sprovodi/city): from 349 to 910. No change last year. This is where we added real funeral schedules for cities, so the pages have fresh content every day.
- **Obituaries by city** (/umrli/city): from 7,618 to 10,894, but last year there was growth of 49% too. This growth is mostly seasonal. These pages are still the biggest source of traffic, so they come first in the plan.
- **Blog and cemeteries:** slight growth, whereas on the same days last year they fell.

The number of pages with at least one click rose from 959 to 3,939. The average position stayed around 6.

## Backlinks

We did not do link building in Claude Code. Since 1 October Ahrefs has recorded 13 new Croatian domains linking to the site, among them story.hr (DR 64), fashion.hr (DR 52), istrain.hr (DR 42), bjelovar.info (DR 39), liberoportal.hr (DR 35) and local news sites such as likemetkovic.hr, glasgrada.hr and moje-djakovo.com. The link from telegram.hr is nofollow.

We cannot separate the effect of the links from the effect of the technical changes. The jump on 19 October happened on the same day the content was put into the HTML, while the links arrived gradually throughout the month. That is why we do not attribute the growth to the links.

## Conversion tracking, all through Claude Code

This is the part that paid off most, even though it does not show in the clicks graph.

- **Code:** Claude added events to the app for every step (searching for a person, selecting a person, starting creation, payment) and sends them to the dataLayer.
- **Tag Manager:** since 16 October, 9 container versions have been published. Each has a description of what it changes, for example "Pauziran Meta StartMemorial (okidao na otvaranje forme; event sada šalje kod nakon odabira osobe)" (Paused Meta StartMemorial: it fired when the form opened; the event is now sent by the code after a person is selected).
- **GA4:** key events (memorial_started, obituary_memorial_click) were set up via the API, and Claude reads the reports itself.
- **Meta:** the same events go from the browser (Pixel) and from the server (Conversions API), with the same event_id. Campaigns optimise for real steps of the sale.

We describe how to set this up on your own site, step by step, in four separate guides:

1. [Claude Code and Google Search Console](/en/blog/claude-code-google-search-console/)
2. [Claude Code and Google Analytics 4](/en/blog/claude-code-google-analytics-4/)
3. [Claude Code and Google Tag Manager](/en/blog/claude-code-google-tag-manager/)
4. [Claude Code, Meta Pixel, Conversions API and Meta Ads](/en/blog/claude-code-meta-pixel-capi/)

## How to connect everything into one project

![Diagram: Claude Code connected to GitHub, Netlify, Supabase, Search Console, GA4, Tag Manager, Meta Pixel and Meta Ads](/blog/claude-code-case-study-osmrtnice/jedan-projekt.png)

1. **Code on GitHub,** deployed from the main branch (Netlify, in our case). Without this, Claude cannot make changes that can be measured.
2. **One Google service account** for Search Console, GA4 and Tag Manager. The key goes into an environment variable, and you add the service account's email as a user in each tool.
3. **A Meta token** for the Conversions API as a secret on the server (Supabase, in our case), and campaign data through a connector.
4. **Rules in the repository** (AGENTS.md or CLAUDE.md): what is allowed, where the data is, how events are named.
5. **Review before merging.** Every change is a pull request with a preview on Netlify. Changes to the database and payments are approved by a human.

## What this makes possible

- **From data to change in the same conversation.** For example: Claude sees in Search Console that funeral pages have impressions but no clicks, finds out why in the code, makes the change and checks the result a week later.
- **Speed.** 86 changes in 17 days, each with a description. The same would take a developer, an analyst and someone who knows Tag Manager.
- **Measurement that does not break.** When a form changes, Claude changes both the event in the code and the tag in Tag Manager in the same PR.

What you need to know: Claude makes mistakes. We had a duplicate event in Meta that fired when the form opened, and we changed the same tag in Tag Manager three times before it was right. That is why every change goes through a pull request and why we give access to tools only as far as needed.

## What we are doing next

- **City pages (/umrli/city).** For the queries with the most impressions, the site ranks between positions 5 and 8: "osmrtnice" (obituaries; 33,387 impressions in 12 days, position 7.6), "umrli metković" (deaths Metković; 9,984, position 5.3), "osmrtnice osijek" (obituaries Osijek; 7,314, position 7.2). A title test on these pages has been running since 19 October.
- **Funeral schedules for more cities.** Funeral pages grew precisely where we added real data.
- **ChatGPT and Google's AI Overview.** We are repeating the same test as in the [AI visibility case study](/en/blog/ai-visibility-case-study-obituaries/) on 1 December.
- **Sales.** Now that measurement is in place, we track how many memorials and candles each page type brings.

We will update this article once we have data for the whole of November.

If you want the same for your site, get in touch via our [AI visibility](/en/llm-visibility/) page.
