---
title: "301 Redirects in Bulk: How to Plan, Implement and Test Hundreds of Redirects"
description: "How to set up 301 redirects in bulk without losing traffic: build a redirect map, implement it on Netlify, Apache, nginx, Cloudflare or WordPress, then test it."
date: 2026-11-11
lang: en
path: /blog/301-redirects-in-bulk/
translation: 301-preusmjeravanja-masovno
image: /blog/301-redirects-in-bulk/cover.png
imageAlt: "Bulk 301 redirects: old URLs mapped one to one to new URLs"
howto:
  name: "How to set up 301 redirects in bulk"
  anchor: "step-by-step-bulk-301-redirects-without-losing-traffic"
  totalTime: "PT4H"
  steps:
    - "Collect every old URL that matters: crawl, sitemap, Search Console pages, analytics landing pages and pages with backlinks."
    - "Map each old URL to the closest new URL in a spreadsheet, one to one, and mark URLs with no equivalent."
    - "Turn repeated URL patterns into a few pattern rules and keep everything else as exact rules."
    - "Implement the map on your server, CDN or CMS, with exact rules above pattern rules."
    - "Test every old URL: one hop, status 301, final status 200, no loops."
    - "Update internal links, canonicals and the sitemap to the new URLs, then monitor Search Console and keep the redirects for at least a year."
faq:
  - q: "How many 301 redirects are too many?"
    a: "There is no ranking penalty for having many redirects. Thousands of exact rules are normal after a migration. The problems are chains, loops, slow lookups in very long rule files and redirects to pages that do not match the old content."
  - q: "Can I redirect all old URLs to the homepage?"
    a: "You can, but you should not. Google can treat a redirect to an unrelated page, such as the homepage, as a soft 404, so the old page's signals are not passed on. Redirect each URL to its closest equivalent and let URLs without an equivalent return 404 or 410."
  - q: "How long should I keep 301 redirects?"
    a: "Google recommends keeping redirects for at least a year after a move. We keep them for as long as old URLs still get visits or have backlinks, which for most sites means indefinitely."
  - q: "301 or 308?"
    a: "Both are permanent redirects and Google treats them the same way. 308 keeps the request method (for example POST), which matters for APIs and forms, not for normal pages."
  - q: "Do 301 redirects pass link equity?"
    a: "Yes. Google has said that permanent server-side redirects do not lose PageRank. The condition is that the target is a real equivalent of the old page."
sources:
  - name: "Google Search Central: Redirects and Google Search"
    url: "https://developers.google.com/search/docs/crawling-indexing/301-redirects"
  - name: "Google Search Central: Site moves with URL changes"
    url: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes"
  - name: "Netlify Docs: Redirects and rewrites"
    url: "https://docs.netlify.com/routing/redirects/"
  - name: "Apache HTTP Server: Using RewriteMap"
    url: "https://httpd.apache.org/docs/current/rewrite/rewritemap.html"
  - name: "nginx: ngx_http_map_module"
    url: "https://nginx.org/en/docs/http/ngx_http_map_module.html"
  - name: "Cloudflare Docs: Bulk Redirects"
    url: "https://developers.cloudflare.com/rules/url-forwarding/bulk-redirects/"
---

A bulk 301 redirect setup is a list of old URLs, each sent permanently to the closest new URL, implemented in one place and tested before launch. Done right, rankings and backlinks follow the content to its new address. Done in a hurry, with a few wildcard rules that send everything to the homepage or a category page, the traffic disappears and does not come back on its own.

We know the second scenario first-hand. This article used to live on our old WordPress site and brought steady search traffic. When we moved serprise.agency to a new stack, a catch-all rule sent the old blog URLs to the blog index, and a second rule sent our expired domains guide to a service page. Both pages lost their traffic. The page you are reading is the fix: the original URL is back, with the content rewritten for 2026.

## When you need redirects in bulk

You need more than a handful of redirects when:

- **you migrate a site** to a new CMS or platform and the URL structure changes;
- **you move to a new domain** or merge two sites into one;
- **you restructure** categories, remove dates from blog URLs or change the language folder;
- **you consolidate content**, for example ten thin posts into one strong guide;
- **you acquire a domain** (a competitor, a brand or an [expired domain](/expired-domain/the-no-nonsense-guide-to-expired-domains-backlink-building/)) and want its links to count for your site.

In every case the goal is the same: every old URL that has visitors, rankings or backlinks should land on the page that now answers the same question.

## Step by step: bulk 301 redirects without losing traffic

### 1. Collect every old URL that matters

A crawl alone is not enough, because it only finds pages that are still linked internally. Combine:

1. **A full crawl** of the old site (Screaming Frog, Sitebulb or similar) while it is still live.
2. **The XML sitemaps** of the old site.
3. **Google Search Console**, Performance and Pages reports: every URL with impressions in the last 16 months.
4. **Analytics landing pages** for the last 12 months.
5. **Pages with backlinks** from Ahrefs, Semrush or Majestic ("Best by links" or "Top pages"). These are the URLs people forget, because they are often old campaign pages that nobody links to internally any more.

Deduplicate the list and normalise it: one protocol, one host, consistent trailing slashes. Remove query strings unless they change the content.

### 2. Map each old URL to its closest new URL

Put the list in a spreadsheet with four columns: old URL, new URL, status code and note. The rule for the new URL is simple: **the page that answers the same question**. A product goes to the same product, a guide to the updated guide, a category to the same category.

For large sites, match automatically first and review by hand afterwards:

- match on the slug (the last part of the URL) with `VLOOKUP` or `XLOOKUP`;
- match on the page title or H1 from both crawls;
- for what remains, use fuzzy matching (a Python script with `rapidfuzz`, or an AI assistant with both lists), then check every suggestion.

Some old URLs will have no equivalent. Do not send them to the homepage. Google can treat a redirect to an unrelated page as a soft 404 and ignore it, so the signals are lost anyway. Let those URLs return 404 or 410, or send them to the closest parent category if it really covers the topic.

### 3. Turn patterns into a few rules, keep the rest exact

If the change follows a pattern, one rule can replace thousands of lines. Typical examples:

- `/blog/2021/04/post-name/` → `/blog/post-name/`
- `/en/category/...` → `/category/...`
- `http://` and `www.` → `https://` without `www`

Everything that does not follow a pattern stays as an exact rule. Put **exact rules above pattern rules**, because most systems apply the first rule that matches. This is exactly where our own migration went wrong: the pattern `/expired-domain/*` was correct for most old URLs, but it also caught the one guide that should have kept its address.

### 4. Implement the map where it is cheapest to run

Redirects should be server-side and permanent (301 or 308). JavaScript and meta refresh redirects work for Google in some cases, but they are a last resort. Here is how the same map looks on the most common platforms.

**Netlify** (`_redirects` file in the publish folder, or `netlify.toml`). This is what serprise.agency uses:

```
# _redirects: old path, new path, status
/blog/2021/04/old-post/   /blog/new-post/   301
/services/old-service/*   /link-building/   301
```

```toml
[[redirects]]
  from = "/services/old-service/*"
  to = "/link-building/"
  status = 301
```

Netlify applies the first matching rule. A normal redirect does not fire if a file exists at the old path, which is how this page can live at its old URL while the wildcard rule still handles the rest of the old blog.

**Apache** (`.htaccess` for small maps):

```apache
Redirect 301 /old-page/ https://example.com/new-page/
RedirectMatch 301 ^/blog/\d{4}/\d{2}/(.*)$ https://example.com/blog/$1
```

For thousands of URLs, a long `.htaccess` is read on every request. Use `RewriteMap` with a text or DBM file instead. Note that `RewriteMap` can only be declared in the server or virtual host configuration, not in `.htaccess`.

```apache
RewriteEngine On
RewriteMap redirects "txt:/etc/apache2/redirects.txt"
RewriteCond ${redirects:%{REQUEST_URI}} !=""
RewriteRule ^ ${redirects:%{REQUEST_URI}} [R=301,L]
```

**nginx** uses the `map` module, which handles very large lists efficiently:

```nginx
map $request_uri $new_uri {
    include /etc/nginx/redirects.map;   # lines like: /old-page/ /new-page/;
}
server {
    if ($new_uri) { return 301 $new_uri; }
}
```

If nginx refuses to start with a large map, increase `map_hash_bucket_size` or `map_hash_max_size`.

**Cloudflare** has Bulk Redirects: you upload a CSV list of source and target URLs and enable it with a rule. The redirect happens at the edge, before the request reaches your server, which makes it a good option for domain moves and for sites where you cannot touch the server. The number of URLs per list depends on your plan, so check the current limits in the Cloudflare docs before you plan around it.

**WordPress**: the Redirection plugin imports a CSV file (source, target, code). Yoast SEO Premium and Rank Math have redirect managers too. For more than a few thousand rules, move them to the server or CDN, because database lookups on every request add up.

**Shopify and other hosted shops** have a URL redirects screen with CSV import. Shopify only applies a redirect when the old URL returns 404, so delete or unpublish the old product first.

### 5. Test every old URL before and after launch

Test the whole list, not a sample. You are looking for four things: status 301 (not 302), exactly one hop, a final status of 200 and the right target. A short script does it:

```bash
while read -r url; do
  curl -s -o /dev/null -L --max-redirs 5 \
    -w "$url -> %{url_effective} | %{http_code} | hops: %{num_redirects}\n" "$url"
done < old-urls.txt
```

Anything with more than one hop is a chain: point the first URL straight at the final target. Anything that ends in 404 or loops goes back to the map. Screaming Frog's list mode with "Always follow redirects" gives the same report with a UI.

### 6. Clean up and monitor

Redirects are a safety net, not the new structure. After launch:

- update **internal links** to point at the new URLs directly;
- make sure **canonicals, hreflang and the XML sitemap** contain only new URLs;
- for a domain move, use the **Change of address** tool in Search Console;
- **monitor** the Pages report and 404s in Search Console every week for the first two months, and compare clicks per old URL with its new URL.

Google recommends keeping redirects for at least a year. We keep them as long as old URLs still get visits or have backlinks. For most sites that means forever, because a redirect costs almost nothing and a lost backlink cannot be bought back at the same price.

## The five mistakes that cost the most traffic

1. **Everything to the homepage.** The fastest way to make a migration look done and the surest way to lose the old rankings.
2. **Wildcards that are too wide.** One `/*` rule placed above your exact rules overrides them. Order matters.
3. **Chains from earlier migrations.** A URL redirected in 2019 and again in 2026 now takes two hops. Flatten them every time you add new rules.
4. **302 instead of 301.** Many plugins and CMSs default to a temporary redirect. For a permanent move, use 301 or 308.
5. **Forgetting pages with backlinks.** A crawl of the new site will never show them. Your backlink tool will.

## What redirects cannot do

A redirect moves signals to the page you choose. It does not make that page relevant. If the old article answered "how to set up bulk redirects" and the new target is a service page, Google will rank the service page for what it is, not for what the old article was. That is why we brought this article back instead of keeping the redirect.

If you are planning a migration or bought a domain and want its links to count, we can map and test the redirects with you. [Get in touch](/en/contact/) or see how we approach [link building](/en/link-building/).
