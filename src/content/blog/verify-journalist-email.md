---
title: "How to Verify a Journalist's Email Before You Send (and Where AI Helps or Hurts)"
description: "How to find and verify a journalist's email: newsroom address formats, verification tools with prices, the accept-all trap and how to use AI safely."
date: 2026-11-27
lang: en
path: /en/blog/verify-journalist-email/
translation: provjera-emaila-novinara
image: /blog/verify-journalist-email/cover.png
imageAlt: "Cover image for the article on verifying a journalist's email: 55 of 61 addresses use firstname.lastname"
faq:
  - q: "Can ChatGPT or Claude find a journalist's email?"
    a: "It can suggest an address but cannot verify it, because it does not talk to the mail server. In Hunter's test of 9 AI models, 76% of the addresses the models suggested were invalid. Use AI to find the author page and the address format, then check the address with a verification tool."
  - q: "What does accept-all or catch-all mean in email verification?"
    a: "The domain accepts mail for any address, so nobody outside can confirm that this particular person exists. That result is not a confirmation. Treat the address as unconfirmed and look for one the journalist has published, for example on their author page or profile."
  - q: "Can I guess a journalist's email from the newsroom format?"
    a: "You can build candidates from the format the newsroom already uses, but only send to an address a checker confirms as valid or that the journalist has published. Under the GDPR (Article 14) you must be able to say where you got the address."
  - q: "How much does email verification cost?"
    a: "In Hunter's comparison from October 2026, 100 checks cost from $0.17 (Giggal) to $1.95 (ZeroBounce): Hunter $1.23, Bouncer $0.60, Emailable $0.76, Clearout and NeverBounce $0.80, Kickbox $1.00."
sources:
  - name: "Hunter: MCP for Email Verification, 8 checkers compared (test run 8 October 2026)"
    url: "https://hunter.io/blog/mcp-email-verification/"
  - name: "Google: Email sender guidelines"
    url: "https://support.google.com/a/answer/81126?hl=en"
  - name: "Google: Spam rate in Postmaster Tools"
    url: "https://support.google.com/a/answer/14229414?hl=en"
  - name: "GDPR, Article 14 (data not obtained from the person)"
    url: "https://gdpr-info.eu/art-14-gdpr/"
  - name: "ICO: Electronic mail marketing (PECR)"
    url: "https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/electronic-and-telephone-marketing/electronic-mail-marketing/"
---

A journalist's email is usually found by reading, not guessing: the author page, the profile on X, the line under the article. When the address is not public, you can build it from the format the newsroom already uses, but you only send once a verification tool confirms it as valid. This article covers our data from a list of 199 UK journalists, a test of eight verification tools, and where AI helps and where it makes things up.

## In short

- **Look for a published address first.** Of the 199 journalists on our list, 61 had an email on their author page and 133 had a profile on X.
- **The format is predictable, the domain is not.** 55 of those 61 addresses are firstname.lastname, but journalists at the Liverpool Echo, Manchester Evening News and Birmingham Mail do not use their website's domain. They use reachplc.com.
- **AI must not be the last step.** In Hunter's test, 76% of the addresses AI models suggested were invalid.
- **Accept-all is not a confirmation.** When a domain accepts every address, no tool can confirm the person.

## Where the address is already published

Before any tool, check five places, in this order:

1. **The author page on the news site.** Click the author's name under the article. Local and tabloid sites often show the email there.
2. **The profile on X or Bluesky.** Journalists often put their address in the bio, or a note such as "DM for pitches".
3. **The end of the article.** Some sites add "Got a story? Contact…" under the piece.
4. **The newsroom contact page.** Desk addresses (news, consumer, business) live there when personal ones are not public.
5. **A journalist database** (Muck Rack, Roxhill, Cision, JournoFinder). Worth it if you pitch often; they charge an annual subscription.

When we built a list of 199 journalists covering a topic for a UK campaign, the result looked like this:

| What we found | Journalists |
|---|---|
| Email published on the author page | 61 |
| Profile on X | 133 |
| Profile on Bluesky | 13 |
| No published address, only a candidate from the newsroom format | 110 |

The difference came from the publisher, not the journalist. At the Liverpool Echo 9 of 9 journalists published their email, at the Manchester Evening News 7 of 9 and at the Express 8 of 10. At the BBC, Evening Standard, Telegraph and Independent, none did.

## Address format: how newsrooms build emails

The 61 addresses journalists published themselves show a clear pattern:

| News site | Format | Email domain |
|---|---|---|
| Liverpool Echo, Manchester Evening News, Birmingham Mail, Hull Daily Mail, Nottingham Post, Bristol Post, Express | firstname.lastname | reachplc.com |
| Mirror | firstname.lastname | reachplc.com, mirror.co.uk, and gmail.com for freelancers |
| Daily Mail | firstname.lastname | mailonline.co.uk, mailonline.com and dailymail.com |

- **55 of 61** addresses use firstname.lastname. Another 4 are firstname.lastname with a variation (middle name, different spelling of the first name).
- **The domain is often not the website's domain.** A Liverpool Echo journalist's address is not @liverpoolecho.co.uk but @reachplc.com, because the paper is published by Reach plc. Guess by the website's domain and you guess wrong.
- **One site can use several domains.** The Daily Mail uses three, so you only learn the right one from an address the journalist or a colleague has published.
- **Freelancers use their own addresses.** At the Mirror, one published address was on gmail.com.

**The rule for guessing:** take the format and the domain from at least two published addresses of colleagues at the same newsroom. Only then build a candidate for the journalist who has not published theirs.

<div data-embed="email-generator"></div>

## Verification: what the tool actually does

A verification tool asks the recipient's mail server whether the mailbox exists, without sending a message. The answer has five possible outcomes:

- **Valid:** the mailbox exists. Only this is safe to send to.
- **Invalid:** the mailbox does not exist. Do not send.
- **Accept all / catch-all:** the domain accepts mail for any address, so nobody outside can tell whether this person exists. It is not a confirmation, even when the tool adds a score of 73 out of 100.
- **Unknown:** the server did not answer. Unconfirmed.
- **Disposable / webmail:** a temporary address or a free service (Gmail and similar). For journalists, webmail can be real, but check it against their profile.

In October 2026 Hunter tested eight tools on 25 invented addresses at real companies, in formats such as firstname.lastname@company.com. Every address was fake, so "valid" was the only wrong answer.

| Tool | Fake addresses let through | Cost per 100 checks |
|---|---|---|
| Hunter | 0 of 25 | $1.23 |
| ZeroBounce | 0 of 25 | $1.95 |
| Giggal | 0 of 25 | $0.17 |
| Bouncer | 0 of 25 | $0.60 |
| Clearout | 0 of 25 | $0.80 |
| Emailable | 0 of 25 | $0.76 |
| NeverBounce | 0 of 10 | $0.80 |
| Kickbox | 1 of 25 | $1.00 |

Two notes on the table:

- **Hunter ran the test**, and says so in the article. It only shows whether a tool catches fake addresses, not whether it wrongly rejects real people. NeverBounce was tested on 10 addresses because its free account came with 10 checks.
- **Free "verifiers" that only check the domain** let 24 of 25 fake addresses through. They only confirm that the company has email, which an invented address at a real company always passes.

## Where AI helps and where it makes things up

AI is great for searching and poor for confirming.

**Where AI saves time:**

- It finds the author page and the journalist's last five to ten articles, so you can see whether they still cover your topic.
- It searches the web for published addresses of colleagues at the same newsroom and pulls out the format and the domain.
- It builds a list of candidate addresses and notes where each format came from.

**Where AI makes things up:**

- Ask it for someone's work email and it returns a convincing address that often does not exist. In Hunter's test of 9 models, 76% of suggested addresses were invalid.
- AI cannot talk to a mail server, so it cannot verify an address. For that it needs a connected verification tool (in Claude and ChatGPT through an MCP connector; Hunter, Giggal and Bouncer have their own).

**An instruction to paste into Claude or ChatGPT before working with addresses:**

> For every email address, give the source (the page where it is published). Mark any address you did not find published as an assumption. Treat as safe to send only an address that a verification tool has marked valid. Accept all, catch-all, risky and unknown are unconfirmed. Never suggest an address you have not checked.

## Before you send

- **Send only to a "valid" or published address.** For accept-all domains, look for an address on the author page or a desk address.
- **Record where you got the address.** Under the GDPR (Article 14), when you obtain personal data from somewhere other than the person, you must be able to tell them where it came from. Hunter lists the pages where an address is published alongside the check, so the answer to "where did you get my email?" is ready.
- **Watch spam complaints.** Google asks senders to keep the share of messages recipients report as spam below 0.1% and never let it reach 0.3%. Senders of more than 5,000 messages a day to Gmail must have SPF, DKIM and DMARC set up.
- **One bad list hurts every other email.** Bounces and spam reports lower your domain's reputation, so the next pitch, even one to a correct address, is more likely to land in spam.

## The process in seven steps

1. Find a journalist who has covered the topic in the last month.
2. Check the author page, X and the end of the article.
3. If the address is not published, find two published addresses of colleagues at the same newsroom and take the format and the domain from them.
4. Build the candidate (the tool above does it for you).
5. Check it with a verification tool.
6. Send only to "valid". Replace accept-all and unknown with a desk address or a message on X.
7. Record the source of the address in your campaign sheet.

If you would like us to build the journalist list and verify the addresses for your campaign, [get in touch](/en/contact/).
