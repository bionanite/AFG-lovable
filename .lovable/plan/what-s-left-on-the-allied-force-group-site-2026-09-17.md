# What's left on the Allied Force Group site

## 1. Enquiry email alerts (needs you)
Every enquiry is already saved in the database with date, contact details and
service interest. Sending a copy to sales@alliedforcegroup.com still needs
alliedforcegroup.com verified for sending. Once you complete that setup, the
notification gets wired into the enquiry submission and tested with a live send.

## 2. Real case study details (needs you)
The four case studies use realistic placeholder client names, locations and
quotes. Send the real ones and they get swapped in, with a note removed that
flags them as illustrative.

## 3. Share image for links
When the site is shared on WhatsApp, LinkedIn or X there is currently no preview
image. Add a branded 1200x630 image (AFG logo on navy) and reference it as the
page preview image on the main pages.

## 4. Resources hub
A downloads section matching the competitor: short guides and checklists
(mobilisation checklist, site audit checklist, water compliance record sheet,
security handover sheet) as a hub page plus individual pages, linked from the
menu and footer.

## 5. More articles
Six articles now against roughly nineteen on the competitor. Add another six to
eight on practical topics: planned maintenance, statutory compliance, keyholding
and alarm response, cleaning specifications, waste and sustainability, front of
house.

## 6. Final checks before publishing
Phone-sized run through every new page, a check that every page has its own
title and description, and a link check across the sitemap.

## Technical notes
- Email: wire the send into `submitEnquiry` in `src/lib/enquiries.functions.ts`
  after the insert; failures must not block the saved enquiry or the success state.
- Share image: generate to `src/assets`, host at an absolute URL, then add
  `og:image` / `twitter:image` in each content route's `head()` (never `__root`).
- Resources: `src/content/resources.ts` + `src/routes/resources.index.tsx` and
  `resources.$slug.tsx`, following the policies pattern.
- Articles: extend `src/content/posts.ts`; add the new URLs to `public/sitemap.xml`.

Nothing here publishes the site — it stays a draft until you say otherwise.
