---
title: "Why Write for Us No Longer Works: We Checked 172 Sites"
description: "We checked 172 sites Google shows for “write for us”: traffic, keywords, DR, traffic drops and links. Only 41 pass. How to choose a site for a link."
date: 2026-11-27
lang: en
path: /en/blog/write-for-us-guest-posts/
translation: write-for-us-link-building
image: /blog/write-for-us-guest-posts/cover.png
imageAlt: "Why Write for Us no longer works: 41 of 172 sites have traffic from their own topic"
about:
  - name: "Link building"
    sameAs: "https://en.wikipedia.org/wiki/Link_building"
  - name: "Guest blogging"
    sameAs: "https://en.wikipedia.org/wiki/Guest_blogging"
  - name: "Domain Rating"
dataset:
  name: "Write for Us sites: traffic, topic, DR and traffic drops (November 2026)"
  description: "172 domains Google (US) shows for “[niche] write for us” queries across 20 niches, with the contributor page URL, Ahrefs DR, DataForSEO organic traffic estimate, share of traffic from niche keywords, traffic drop from peak since 2024, referring domains and top keywords."
  measured: 2026-11-27
  method: "Google search (US, English) for 20 queries, first two result pages, social networks excluded. Traffic and the top 100 keywords by traffic: DataForSEO Labs (US). Share from topic: keyword match against a list of niche terms. Traffic history since January 2024 for 49 domains with DR 50+ and 1,000 to 100,000 visits. Backlinks: DataForSEO Backlinks. DR: Ahrefs."
  license: "https://creativecommons.org/licenses/by/4.0/"
  keywords: ["link building", "guest posting", "write for us", "Domain Rating", "SEO"]
  files:
    - name: "172 sites (CSV)"
      url: /data/istrazivanja/write-for-us-172-stranice.csv
howto:
  name: "How to check a site before publishing an article with a link"
  anchor: "checklist-6-checks-before-you-publish"
  steps:
    - "Check the site's organic traffic: under 100 visits a month, it passes on almost nothing."
    - "Look at the 10 to 20 keywords that bring it the most traffic and whether they match your client's topic."
    - "Look at the traffic history for the last two years and skip sites that dropped more than 50% without recovering."
    - "Compare outgoing links with incoming links and count external links per article."
    - "Check whether the page, or at least the category, where the link will sit ranks."
    - "Define the bridge: why the site's reader needs your article, and label it as sponsored."
faq:
  - q: "Does guest posting through “write for us” sites still work in 2026?"
    a: "Rarely. Of 172 sites Google shows for queries like “marketing write for us” across 20 niches, 56 have fewer than 100 visits a month, and of the 116 sites with traffic, 75 get less than 20% of it from keywords in their own topic. That leaves 41 sites, about one in four, that pass even the basic checks."
  - q: "Is a high DR enough for a good link?"
    a: "No. DR measures a site's backlinks, not its traffic or topic. In our sample, 30 of 92 sites with DR 50 or higher had fewer than 1,000 visits a month, and free subdomains on Wix or Weebly show the platform's DR (up to 94) with 0 to 12 visits."
  - q: "How can you tell a site is a link farm?"
    a: "The signals are traffic from keywords unrelated to the site's topic, a sharp traffic drop without recovery, far more outgoing than incoming links, a public price list for guest posts and “link insertions”, and accepting any topic. One signal is not a verdict; three or more together are."
  - q: "Is it allowed to pay for an article with a link?"
    a: "You can pay for a sponsored article, but the link should carry rel=\"sponsored\" or nofollow. Google's policies treat unlabelled paid links as a link scheme. Consumer protection rules in the EU and UK also require paid content to be disclosed."
  - q: "Does the site have to be in the same topic as the client?"
    a: "Not necessarily the same, but there has to be a natural bridge. An article on boat insurance on a sailing site, or on solar panels for sailboats, makes sense to the reader and to search engines; an article on payday loans on the same site does not."
sources:
  - name: "Google Search Central: Spam policies, link spam"
    url: "https://developers.google.com/search/docs/essentials/spam-policies#link-spam"
  - name: "Google Search Central: Qualify your outbound links (rel sponsored, nofollow)"
    url: "https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links"
  - name: "DataForSEO Labs API: traffic estimation, ranked keywords and traffic history"
    url: "https://docs.dataforseo.com/v3/dataforseo_labs/overview/"
  - name: "DataForSEO Backlinks API: backlinks summary"
    url: "https://docs.dataforseo.com/v3/backlinks/summary/live/"
  - name: "Ahrefs: Domain Rating (DR)"
    url: "https://ahrefs.com/website-authority-checker"
---

A guest post through a “write for us” page mostly gets you nothing today. We checked 172 sites Google shows for queries like “marketing write for us” or “health write for us”, and only 41 have traffic that comes from their own topic. The rest either have no visitors, or get them from keywords that have nothing to do with what they accept articles about. A link from such a site passes no authority to yours.

We build more than 2,000 links a year for clients and keep tracking which of them move rankings and visibility in ChatGPT and Google's AI answers. This research is an attempt to show in numbers what we see in practice.

## Summary

- **Traffic:** 56 of 172 sites have fewer than 100 organic visits a month, and 96 have fewer than 1,000.
- **Topic:** of 116 sites with at least 100 visits, 75 get less than 20% of their traffic from keywords in their niche.
- **DR:** 30 of 92 sites with DR 50 or higher have fewer than 1,000 visits. Free subdomains on Wix and Weebly show DR 94 with less than one visit a month.
- **Drops:** of 49 sites with DR 50+ and 1,000 to 100,000 visits, 36 fell more than 50% from their peak, and 16 more than 80%.
- **What passes:** 41 sites, about one in four.

## How we measured

In November 2026 we searched Google (US, English) for 20 queries like “[niche] write for us”: marketing, technology, health, finance, travel, home improvement, business, lifestyle, fitness, SEO, crypto, parenting, food, fashion, education, real estate, pets, software, small business and digital marketing. From the first two result pages we took 172 distinct domains, excluding social networks.

For each domain we pulled:

- **organic traffic** (DataForSEO estimate for the US),
- **the 100 keywords bringing it the most traffic**, from which we calculated the share of traffic from keywords related to the niche the site asks articles for,
- **DR** from Ahrefs,
- **traffic history** since January 2024 (for 49 sites with DR 50+ and 1,000 to 100,000 visits),
- **a backlinks summary** (DataForSEO Backlinks: referring domains, outgoing links, spam score).

Traffic estimates are not the site's Google Analytics data but the tool's model. They are good enough to compare sites with each other; for an exact visit count, ask the owner.

You can browse and filter all 172 sites, with the URLs we looked at and the numbers for each, [further down](#all-172-sites).

## 1. Most sites have no traffic

![Funnel: 172 sites, 116 with at least 100 visits, 41 with at least 20% of traffic from their niche](/blog/write-for-us-guest-posts/funnel.png)

The median in the sample is about 540 organic visits a month. A third of the sites have fewer than 100. Such a site sends you neither visitors nor authority, because it has no authority Google recognises through traffic in the first place.

These are not only small sites. “Write for us” queries are a market now: sites rank for them on purpose because that is how they find buyers. In our sample, two sites get 40% or more of their traffic from queries like “write for us technology” and “websites accepting guest posts”.

## 2. DR says nothing about traffic

![Table: sites with high DR whose traffic comes from unrelated keywords](/blog/write-for-us-guest-posts/dr-vs-traffic.png)

DR (Domain Rating) measures how strong a domain's backlinks are. It does not measure whether the site has visitors or what they come for. That is why DR is the easiest metric to inflate and the most common one on link price lists.

Three patterns we saw:

- **Free subdomains.** A page on a Wix, Weebly or WordPress.com subdomain shows the platform's DR in Ahrefs' free check. The sample has seven such “write for us” pages with DR 68 to 94 and 0 to 12 visits a month.
- **High DR, traffic from another topic.** softwaresuggest.com (DR 78) accepts articles about software, yet of its top 100 keywords by traffic only about 1% of the traffic comes from software topics; the strongest are “fastpeoplesearch” and “google lens”. technology.org (DR 74) gets most of its traffic from questions like “how many cups are in a litre”.
- **High DR, traffic from songs.** gigwise.com (DR 71) has a dedicated page asking for food articles and gets most of its traffic from song lyrics.

Of 82 sites with DR 50+ and at least 100 visits, 52 get less than 20% of their traffic from their niche.

## 3. Traffic has to come from your topic's keywords

A link passes authority when Google sees it on a page that is relevant to the topic it links to and that ranks for that topic. A site whose traffic comes from a unit converter tells Google nothing about whether your client is a good source on accounting software.

How to check in 5 minutes:

1. In Ahrefs or Semrush, open **Organic keywords** for the domain and sort by traffic.
2. Look at the top 20 keywords. If more than half are unrelated to the topic you are buying the link for, the site is not for you.
3. Look at **Top pages**. If 50% or more of the traffic comes from one page, the domain's authority depends on that page, not on the category your article will go into. That was the case for 21 of 116 sites in the sample.

## 4. A site that loses traffic loses what it would pass on to you

![Chart: organic traffic of three sites with DR 62 to 75 fell 92 to 96% from 2024 to 2026](/blog/write-for-us-guest-posts/traffic-drop.png)

DR changes slowly, while traffic can collapse within months of a Google update. A DR 74 site that lost 92% of its traffic still looks strong in a link seller's spreadsheet.

Of the 49 sites with DR 50+ and 1,000 to 100,000 visits whose history we pulled since January 2024, 36 fell more than 50% from their peak and 16 more than 80%. Examples: nichepursuits.com (DR 74) from 163,674 to 13,286, exercise.com (DR 75) from 113,020 to 7,996, mindmajix.com (DR 62) from 40,784 to 1,587.

Part of the decline is a general trend, because AI answers in Google reduce clicks for almost everyone. But a 90% drop without recovery is not a trend; it is a sign that Google no longer trusts the site the way it did. Our rule: we skip sites with a drop of more than 50% in the last 12 months unless traffic has at least partly come back.

## 5. Outgoing versus incoming links

A link farm sells links, so it has far more going out than coming in. Two examples from the sample:

- **vocalmagazine.co.uk** (DR 36) publishes a price list on its site: guest post $50, “link insertion” $40, “grey niche” guest post $100. According to DataForSEO, 10 domains link to it, while its 547 pages carry 1,842 outgoing external links.
- **forums.hostsearch.com** (DR 68) has a spam score of 44 and more than 840,000 external links.

How to check: in Ahrefs, compare **Linked domains** (how many domains the site links to) with **Referring domains** (how many domains link to it). If a site links to many more domains than link to it, on topics unrelated to each other (casino, crypto, loans and gardening on the same site), that is the pattern of selling links. Open a few recent articles too: if each has 2 to 3 commercial links to different companies, the article was written for the links, not the reader.

## 6. “Write for us” is a sales page now

On many sites, “write for us” is no longer an invitation to authors but a price list. coinranking.com states that all guest posts are paid placements and that prices start at $149. financely.io asks $80 per article. Sites that genuinely select authors (HuffPost, Parents, Edutopia, Buffer) appear in the same results with programmes for experts and journalists, not SEO links, and mostly turn such pitches down.

Paying is not the problem in itself. The problem is paying a site with no traffic from your topic, with an unlabelled link, so you take the risk without the benefit.

## What we do instead

We pay for client links, and we say so openly. Paying for placement is faster and simpler than spending months negotiating a “free” guest post that ends up having a price anyway. The difference is in what we pay for:

- **a site with traffic from relevant keywords**, not DR,
- **a placement labelled as sponsored** (rel="sponsored"), in line with Google's policies,
- **an article that is useful to that site's readers**, because Google keeps such an article indexed, and AI tools can read and cite it.

We have not yet found reliable public data on how the “sponsored” label affects whether AI cites a placement; more on that in [Digital PR for AI visibility](/en/blog/digital-pr-ai-visibility/). For the Croatian market we measured traffic, DR and sponsored labelling for [335 news sites](/en/blog/croatian-news-sites-for-pr/).

## The topic does not have to match, but there has to be a bridge

The site has to be relevant, but “relevant” does not mean “same industry”. AI is now very good at finding a natural link between two topics that look unrelated at first sight, and that is one of its most useful uses in link building.

Example: a sailing site. From our list of Croatian publishers, nauticka-patrola.hr has about 571 organic visits a month and publishes sponsored articles. What would make sense there for clients outside sailing:

| Client | Bridge | Article title |
|---|---|---|
| Insurance | A boat is an asset that needs insuring | “What boat hull insurance does not cover: 5 real cases” |
| Solar panels | Power at anchor | “How much power a sailboat needs for a week at anchor” |
| Accounting software | Charter is a VAT business | “VAT on boat charter: how a charter company keeps its books” |
| Pharmacy | Seasickness | “Seasickness: what actually helps and what is a myth” |
| Food and drink | Provisioning on board | “What to bring sailing when there is no fridge” |

The prompt we use: “This is a [topic] site and these are its most read articles: [list]. The client is [industry]. Suggest 5 topics this site's readers would actually read, where the client is a natural example, not an ad.” We then check the answer against the keywords the site already ranks for.

The bridge has limits. An article on payday loans on a sailing site has no bridge for the reader or for Google.

## Check a site before you buy a link

Enter the numbers from Ahrefs, Semrush or DataForSEO for the site you are considering. The tool uses the same thresholds as the checklist below.

<div data-embed="wfu-provjera"></div>

## Checklist: 6 checks before you publish

1. **Traffic.** We skip sites under 100 organic visits a month, unless the site is highly specialised and the only one on the topic.
2. **Keywords.** Of the top 20 keywords by traffic, at least half must be from a topic related to the client.
3. **Traffic history.** A drop of more than 50% in the last 12 months without recovery means no.
4. **Links out and in.** Far more outgoing than incoming domains, and 2 to 3 commercial links per article, means no.
5. **The page the link sits on.** The category or section the article goes into must have its own traffic or at least be linked from the homepage.
6. **Bridge and label.** We know why the site's reader needs the article, and the link is labelled as sponsored.

Of 172 “write for us” sites, 41 passed the first two checks. The other four would bring that number down further.

## All 172 sites

Every site from the research, with a link to the “write for us” page we looked at, DR, traffic estimate, share of traffic from the topic and traffic drop. Sites marked “passes” have at least 100 visits and at least 20% of traffic from their niche; that does not yet make them good for a link, only that they passed the first two checks.

<div data-embed="wfu-podaci"></div>
