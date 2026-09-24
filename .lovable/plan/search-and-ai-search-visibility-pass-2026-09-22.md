# Search and AI-search visibility pass

Canonical host: **https://www.alliedforcegroup.com** (apex 301s to www). Every canonical, og:url, sitemap entry and schema id uses that one host.

## Verification done first, as asked

Fetched as GPTBot, no JavaScript executed. Both the live site and this draft return the full page in the raw response:

```text
<html lang="en">
<h1 ...>Eight service families, ...</h1>
<title>Services | Integrated FM, Hard FM, Soft Services &amp; Security</title>
```

So the rendering premise holds and all prerendering work is dropped. The not-found route already returns a real HTTP 404. The only fix in that area is the language tag: `en` becomes `en-GB`.

Also confirmed: no invented statistics anywhere in this draft, and GuardianFM is currently mentioned nowhere — which is exactly the gap your item 4 identifies.

## Understood and agreed

- **Credential attribution.** No accreditation is ever attached to the Allied Force Group node. Each credential sits on the node of the entity that actually holds it (GuardianFM Ltd, CSTM Services Ltd), with Allied Force Group linked as the parent organisation. AFG will not be described as an SIA Approved Contractor anywhere, in markup or in copy.
- **Registered office vs operating base.** The registered address appears only in the legal footer line. LocalBusiness markup and any map use the real staffed operating base.
- **FAQs** are built because buyers ask those questions, not for a search feature. Markup included, no rich result expected.
- **llms.txt** is built last and delays nothing.

## Blocked until you confirm

Nothing in section 3 or later gets written until the single contact set is settled, because it has to be byte-identical in copy, footer, schema and llms.txt:

- Company name — Allied Force Group Ltd?
- Phone — one number (site currently uses 020 7183 9055; live .com shows 020 3500 1905)
- Email — one address (site uses sales@; live .com shows info@)
- Operational address — the real staffed base (live .com shows Unit A & B, Faringdon Ave, Romford RM3 8EN)
- Registered office — Level 18, 40 Bank Street (HQ3), London E14 5NR, or a correction; tell me if it is the same as the operating base

Also needed: verified founding date (CRN 09645770), headcount with its scope labelled, LinkedIn and Companies House URLs, and confirmation on whether Airport Staffing, Gardeo and Servionsoft are group-owned. They are currently shown on the homepage as group companies — if they are not owned within the group, that section needs changing too, not just the markup.

## Build order

**1. Crawler and metadata foundation**
- `robots.txt` explicitly welcoming GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended, Bingbot, CCBot; sitemap and AI files referenced.
- `sitemap.xml` generated at request time from the real route list, cached, canonical www URLs only, thin and redirecting routes excluded, accurate lastmod.
- Self-referencing canonical and og:url on every page; og:site_name, og:locale en_GB, share image where missing.
- Unique, correctly sized title and description on all 70-odd pages; duplicates fixed.
- `lang="en-GB"`, skip-to-content link, one h1 per page confirmed.

**2. Structured data** (no credential markup yet)
- Organization for Allied Force Group Ltd, with the confirmed contact set, UK area served, core competencies, and parent Property Track Investment Ltd.
- Sub-organisations: CSTM Services Ltd and GuardianFM Ltd, each as its own node ready to carry its credentials. The other three only once you confirm ownership.
- LocalBusiness on Contact, at the operating base, linked to the organisation.
- Service on each of the eight service pages; WebSite sitewide; BreadcrumbList with matching visible breadcrumbs.
- FAQPage on service and sector pages, text matching the page exactly.
- Article on insights posts — held until you assign bylines. I will send the list of thirteen posts with a suggested author type for each; Person with name and jobTitle only, no profile page.

**3. Internal linking**
- Service pages link to their sectors and back; "Related services" block on each service page; descriptive contact anchors; HTML sitemap at `/sitemap`.

**4. Answer-first content**
- A 40–60 word plain-language definition directly under the h1 on every service, sector and region page; headings phrased as buyer questions; each section self-contained and quotable with the entity named rather than "we".
- 4–6 FAQs per service and sector page.
- Key facts block on the homepage and About; confirmed items only.
- Glossary at `/resources/fm-glossary` (PPM, SFG20, ACOP L8, BS 7858, TUPE, permit to work, hard vs soft FM and the rest).
- Group structure stated in prose on About: Property Track Investment Ltd holding Allied Force Group Ltd (formerly Intrasecure Services Ltd, CRN 09645770), CSTM Services Ltd and GuardianFM Ltd, with what each does.
- Visible "Last updated" on service and insights pages, matching the schema.

**5. Performance and accessibility**
- Explicit image dimensions and responsive sizes, lazy loading below the fold, hero loaded first, fonts self-hosted instead of the external stylesheet blocking first paint.
- Contrast, focus rings, keyboard order, form labels and error associations, 44px tap targets, checked route by route.

**6. llms.txt and llms-full.txt**, generated from the content modules, linked in the footer.

**7. Redirect map**, delivered for your review before anything publishes. I will crawl the live .com, list every existing URL including `/about-me/` and the old location pages, and propose a specific target for each. Nothing bulk-redirects to the homepage; anything without a sensible equivalent is flagged for your decision rather than guessed.

## Technical notes

- Metadata stays in each route's native `head()`; no helmet library is introduced.
- JSON-LD is built by a shared helper in `src/lib/schema.ts` using linked `@id` references, injected through `head().scripts`.
- `sitemap.xml` becomes a cached server route; the static file is removed.
- Apex-to-www and the old-URL redirects are hosting-level rules applied at cutover, not app code.
- Draft throughout. Nothing publishes until you have approved the redirect map and confirmed the contact set.
