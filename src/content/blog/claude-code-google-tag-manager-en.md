---
title: "How to Connect Claude Code to Google Tag Manager, Step by Step"
description: "Connect Claude Code to Google Tag Manager so it changes the event code and the tags in one task. Permissions, steps and the 9 container versions we published."
date: 2026-11-01
lang: en
path: /en/blog/claude-code-google-tag-manager/
translation: claude-code-google-tag-manager
image: /blog/claude-code-google-tag-manager/cover.png
imageAlt: "Guide: how to connect Claude Code to Google Tag Manager"
---

The most common problem with conversion tracking is a mismatch between the code and Tag Manager. A developer changes a form, and the tag in Tag Manager is still waiting for the old event. When Claude Code has access to both the code and Tag Manager, it changes both in the same task.

This is the third of four guides that accompany our [case study on Claude Code on an obituary portal](/en/blog/claude-code-case-study-obituaries/). You use the service account from the [Search Console guide](/en/blog/claude-code-google-search-console/) here too.

## Step 1: enable the Tag Manager API

In the service account's Google Cloud project, under "APIs & Services", enable the **Tag Manager API**.

## Step 2: add the service account to Tag Manager

1. In Tag Manager, open "Admin", then "User Management" at account level.
2. Add the service account's email.
3. Choose the container permission:
   - **Read** if Claude only reads the settings,
   - **Edit** if it prepares changes in a workspace,
   - **Publish** if it may also publish a version.

We use Publish, with one rule: Claude publishes every version with a name and a description, and only after the code change has been merged.

## Step 3: agree how events are sent

The code pushes events to the dataLayer, and Tag Manager reads them and forwards them to GA4, Meta and Google Ads. On the obituary portal it looks like this:

```js
window.dataLayer.push({ ecommerce: null });
window.dataLayer.push({
  event: 'begin_checkout',
  ecommerce: { currency: 'EUR', value: 39, items: [{ item_id: 'digitalni-memorijal' }] }
});
```

In Tag Manager, each such event has a "Custom Event" trigger and a tag that forwards it. For groups of events we use one trigger with a regex, so a new event from the same group does not need a new tag.

![Event flow from dataLayer.push in the code, through a trigger in Tag Manager, to the GA4 and Google Ads tags, with the real names from the container](/blog/claude-code-google-tag-manager/gtm-tok.png)

## Step 4: how Claude changes the container

Through the API, Claude does the same as you would in the interface:

1. creates a workspace,
2. adds or changes tags, triggers and variables,
3. creates a version with a name and a description,
4. publishes it.

Since 16 October, 9 versions have been published on the portal this way:

![Version history of the Tag Manager container from v7 to v15 with dates and descriptions](/blog/claude-code-google-tag-manager/gtm-verzije.png)

The descriptions matter. When someone asks in a month why the conversions differ, the version history says what was changed and why.

## What to watch out for

- **Duplicate events.** If the same event is sent by both the code and a tag in Tag Manager, it will be counted twice. This happened to us with Meta StartMemorial: we paused the tag, brought it back because the campaign was optimising for it, then paused it again once the code started sending the correct event.
- **Review before publishing.** For bigger changes, ask Claude to create a version without publishing it, then check it in Preview mode.
- **Cookie consent.** Tags must respect consent. In our setup the code does not push events without consent, so Tag Manager has nothing to send.

## Next step

Meta events are sent from both the browser and the server. How to connect them without duplicate conversions is described in the [guide to Meta Pixel, Conversions API and Meta Ads](/en/blog/claude-code-meta-pixel-capi/).
