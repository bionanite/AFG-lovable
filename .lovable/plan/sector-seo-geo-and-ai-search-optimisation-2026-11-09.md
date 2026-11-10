# Sector SEO, GEO and AI-search optimisation

## Goal
Make Allied Force Group easier to find in Google and Bing and easier to understand and cite in AI search, with distinct, useful content for all eight sectors. GEO means generative-engine optimisation; AIO here means AI-search optimisation. These share the same foundation: accessible pages, clear answers and trustworthy evidence—not special ranking tricks.

## Current position
- All eight sector pages already have individual content, answer-first introductions, four FAQs, operational detail, evidence lists, illustrations, service links and breadcrumbs. Improve this foundation rather than rebuild it.
- The fresh SEO Review confirms a reachable homepage, server-rendered content, AI-readable markdown and passing homepage metadata checks. This does not prove Google indexing or rankings, nor verify metadata on every sector page.
- Approved foundations work aligns sitemap URLs and the robots sitemap reference with `https://alliedforcegroup.com`. The reported language issue needs reconciliation: the current root shell already declares `en-GB`; confirm the rendered output rather than add a second declaration.
- Bing's verification XML currently returns HTTP 200 from the primary domain. Ownership verification still needs confirmation in Bing; a reachable file alone does not establish verified ownership.
- Existing content checks and Search Console findings were stale. Do not treat their earlier warnings as a current indexing diagnosis.

## 1. Establish a baseline and research buyer demand
- Read accessible Google Search Console data for the exact verified property covering the primary domain. Compare sector pages and queries over a recent complete period and the preceding equal period; keep low-volume results explicit.
- Check the indexed version of each sector URL where access is available; do not infer all-page indexing from homepage checks.
- Use Semrush UK data to compare candidate terms, search intent, search volume and difficulty. Inspect relevant ranking pages for missing buyer answers and the evidence AFG can add. Candidate phrases below are hypotheses, not measured demand.
- Produce an eight-row keyword map: main commercial intent, supporting questions, current target page and justified content changes. Assign one main page to each intent to avoid competing duplicates.

## 2. Optimise every existing sector page
For each sector: refine the title, description and H1 to validated buyer language; retain an immediate plain-language answer; clarify scope, exclusions and site-review requirements; strengthen sector-specific questions; link the appropriate services, existing useful guides and contact options. Preserve the current visual identity and videos.

| Sector / existing URL | Candidate search themes to validate | Distinct buyer answers to strengthen | Supporting content to assess first |
|---|---|---|---|
| Commercial — `/sectors/commercial` | Commercial facilities management; office maintenance; office security | Landlord versus tenant responsibilities, out-of-hours work, front-of-house cover, CAFM reporting | Office FM scope and handover checklist |
| Healthcare — `/sectors/healthcare` | Healthcare facilities management; healthcare cleaning; hospital security | Clinical versus non-clinical scope, cleaning specifications, escort arrangements, water hygiene evidence | Healthcare specification and evidence checklist |
| Education — `/sectors/education` | School facilities management; school maintenance; school cleaning | Holiday works, safeguarding and visitor arrangements, campus coordination, multi-site reporting | Term-time and holiday maintenance checklist |
| Logistics & Industrial — `/sectors/logistics-industrial` | Warehouse facilities management; warehouse security; industrial cleaning | Shift-aligned work, gatehouse records, loading-area maintenance, permits and RAMS | Warehouse security and maintenance scope checklist |
| Public Sector — `/sectors/public-sector` | Public sector facilities management; council building maintenance | Specification and variations, auditable records, public access, transparent social-value reporting | Estate reporting and procurement preparation checklist |
| Vacant Property — `/sectors/vacant-property` | Vacant property security; void property inspections; vacant property management | Dated condition evidence, keyholding, patrols, water systems during vacancy, handback | Vacant-property inspection and handback checklist |
| Data Centres — `/sectors/data-centres` | Data centre facilities services; data centre cleaning; data centre security | Permit-led attendance, technical cleaning methods, agreed change windows, documented sign-off | Site-readiness and controlled-attendance checklist |
| Rail — `/sectors/rail` | Rail facilities management; station cleaning; depot maintenance | Traffic hours and possessions, access and competencies, station versus depot scope, handover records | Station and depot works-planning checklist |

Review and improve existing resources before creating new ones. Create a supporting page only after research shows a distinct useful purpose; link it both ways with its sector page. No eight-page batch of near-identical articles or location doorway pages.

## 3. Make answers trustworthy for Google and AI search
- Keep answers concise but substantive: what the service includes, what affects scope or cost, how mobilisation works and what records the client receives. Never invent prices or response times.
- Explain industry terms such as CAFM, PPM, SFG20 and RAMS where relevant, linking the existing glossary instead of repeating jargon.
- Check safety and regulatory guidance against authoritative sources such as HSE and relevant sector bodies; distinguish general guidance from AFG's actual capabilities. Add source links where they substantiate a claim.
- Add named expert reviewers and meaningful review dates only when real reviewers are supplied and a review has happened. Add verified case-study links, approved testimonials and credentials only when available.
- Keep company, provider and office identities consistent. Preserve the London trading address separately from the registered office. Do not use Germany/USA placeholder details to support local-business claims or international landing pages.
- Existing FAQs remain useful content; valid FAQ schema can remain, but it is not a promise of rich results or AI citations. Existing AI-readable markdown is already a strength. Do not add a new `llms.txt` implementation; changes to the existing files require explicit approval.
- Keep the MCP endpoint protected; public discovery never requires weakening access controls.

## 4. Technical details
- Preserve TanStack route-level `head()` and the shared metadata helper. Validate unique title, description, Open Graph title/description, page type, Twitter card and self-referencing canonical on all eight sector pages.
- Review the shared generic social-image fallback: use the actual meaningful page image in a share-sized absolute rendition when appropriate, otherwise omit image tags; never imply an unrelated image represents the sector.
- Retain Organization/WebSite and BreadcrumbList relationships. Where justified, describe the sector page as a WebPage connected to the provider and relevant service entities. Do not label a sector as a certified specialist or add credentials/LocalBusiness claims without evidence.
- Preserve the existing sitemap generator and verify all eight slugs are included once under the primary origin. Keep lastmod only where its source is an authoritative page-specific content date; omit generation-time or build-time values.
- Check apex/www behaviour before any redirect change. Do not change DNS, international URLs or crawler access as a side effect.
- Verify sector content is visible in server HTML without waiting for video or animation; check crawlability, invalid-slug 404s, links, mobile readability and schema validity.
- Measure image/video impact on load time and layout stability. Preserve posters, reduced-motion behaviour and below-the-fold loading; prioritise Core Web Vitals fixes based on measured evidence, not cosmetic changes.
- Add small tests for URL inclusion and content/metadata mapping where applicable; run relevant existing tests and check every sector page on desktop/mobile.

## 5. Delivery sequence and success checks
1. **Baseline and keyword map:** confirm search access, review the eight pages and agree researched target intents.
2. **Shared foundations:** finish approved domain consistency work and verify language, sitemap coverage, metadata and schema patterns.
3. **Sector content:** implement Data Centres and Rail first to reflect the stated specialisms, then Commercial, Logistics, Healthcare, Education, Public Sector and Vacant Property. Research can adjust effort, not invent capability claims.
4. **Supporting resources and proof:** improve existing guides, then create only justified new resources; add owner-approved real evidence when supplied.
5. **Validate and publish:** inspect all eight pages, test links and enquiry journeys, review generated search information, then request publication approval. Changes reach the live site only after publication.
6. **Measure after publication:** review sector impressions, clicks, queries and enquiries after about 4–6 weeks, comparing like-for-like periods. Record repeatable AI answer/citation spot checks with their date and prompts; treat them as qualitative samples, not guaranteed or comprehensive visibility.

Completion means all eight pages have distinct researched intent, useful scoped answers, valid metadata, working service/resource/contact links and verified crawlable content. Success is improving qualified sector enquiries, not simply adding text or schema.

## Owner inputs and limits
Keyword research and safe page improvements can proceed without invented proof. Verified client stories, quotations, certificates, named reviewers and real overseas office details remain owner-supplied inputs; omit unsupported material until provided. No ranking, AI citation, uptime, accreditation or response-time guarantees. No scheduled SEO dashboard, new connector feature, DNS changes or bulk content campaign is included in this plan.