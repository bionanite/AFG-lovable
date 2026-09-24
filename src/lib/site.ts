/**
 * Single source of truth for canonical host and contact details (NAP).
 * These values must stay byte-identical wherever they appear: visible copy,
 * footer, JSON-LD, llms.txt.
 */
export const SITE = {
  origin: "https://www.alliedforcegroup.com",
  name: "Allied Force Group",
  legalName: "Allied Force Group Ltd",
  locale: "en_GB",
  lang: "en-GB",
  phoneDisplay: "020 7183 9055",
  phoneHref: "tel:+442071839055",
  phoneE164: "+44 20 7183 9055",
  email: "sales@alliedforcegroup.com",
  shareImage: "https://www.alliedforcegroup.com/afg-share.jpg",
  description:
    "Security-grade discipline applied to cleaning, facilities management and maintenance, delivered UK-wide under one accountable contract.",
} as const;

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE.origin}${path.startsWith("/") ? path : `/${path}`}`;
}

type HeadInput = {
  path: string;
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
};

type MetaEntry = Record<string, string>;

/**
 * Builds the full per-page head: title, description, canonical, og:* and
 * twitter:* tags. Every page uses this so no page can drift.
 */
export function pageHead({
  path,
  title,
  description,
  image,
  type = "website",
  noindex,
}: HeadInput): { meta: MetaEntry[]; links: MetaEntry[] } {
  const url = absoluteUrl(path);
  const shareImage = image ?? SITE.shareImage;

  const meta: MetaEntry[] = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:site_name", content: SITE.name },
    { property: "og:locale", content: SITE.locale },
    { property: "og:image", content: shareImage },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: shareImage },
  ];

  if (noindex) meta.push({ name: "robots", content: "noindex, follow" });

  return {
    meta,
    links: noindex ? [] : [{ rel: "canonical", href: url }],
  };
}
