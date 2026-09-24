# Global presence: Germany and USA

Goal: make Allied Force Group read as an international group with offices in the UK, Germany and the USA — without inventing capability claims. Placeholder addresses go in now, clearly structured so you can swap in the real details later in one file.

## What gets built

### 1. New page: Global locations (`/locations`)
- Cinematic hero in the same style as the sector pages: "One group. Three regions." with the phone and enquiry buttons.
- Three region cards — United Kingdom (headquarters), Germany, United States — each with office name, address, phone, email, and a short line on what that office covers.
- UK card links through to the existing UK coverage page and its regional pages.
- A "How we work across regions" band: one point of contact, consistent reporting and standards across sites, local delivery teams.
- Closing enquiry band.

### 2. Footer offices block
- New column in the footer listing London · Frankfurt · New York with the city, one-line address and phone under each, plus a link to the full locations page.
- The footer grid moves from four columns to five on large screens, two on tablet, stacked on mobile.

### 3. Navigation and supporting links
- "Coverage" in the main nav becomes a small dropdown: "UK coverage" and "Global locations".
- About page gains a short "Where we operate" paragraph plus links to the three offices.
- Homepage gains a compact strip under the family-of-companies section: three regions, three cities, link to locations.
- Locations page added to the sitemap page, the XML sitemap, and `llms.txt`.

### 4. Placeholder addresses (replace later)
Realistic, professional business addresses so the page looks finished:

- **United Kingdom (HQ)** — Level 18, 40 Bank Street (HQ3), London E14 5NR · 020 7183 9055 (already the real registered office)
- **Germany** — Taunusanlage 8, 60329 Frankfurt am Main · +49 69 2222 0000
- **United States** — 1330 Avenue of the Americas, Suite 23A, New York, NY 10019 · +1 212 555 0100

These are labelled in the code as placeholders and live in one file, so replacing them updates every page at once. The legal footer line stays exactly as it is — Allied Force Group Ltd remains registered in England and Wales.

## Wording rules kept
- No claims about headcount, contract numbers, certifications or clients in those countries.
- Offices are described as offices; delivery in each region is described as "confirmed following a review", matching the existing UK language.
- English only across all regions.

## Technical notes
- New `src/content/locations.ts` holding the three office records (city, country, address lines, phone, email, coverage line, placeholder flag).
- New route `src/routes/locations.tsx` using `VideoHero`/`PageHero` and existing card and `Reveal` patterns; unique `head()` metadata plus JSON-LD `Organization` with three `location` entries so search and AI engines see the international footprint.
- `SiteFooter.tsx`, `SiteHeader.tsx` (Coverage dropdown), `about.tsx`, `index.tsx`, `sitemap.tsx`, `sitemap[.]xml.tsx` and `llms[.]txt.tsx` updated to reference the new page.
