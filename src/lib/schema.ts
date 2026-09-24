import { SITE, absoluteUrl } from "./site";

/**
 * JSON-LD builders. Entities are linked by @id rather than duplicated.
 *
 * Credential rule: accreditations are NEVER attached to the Allied Force Group
 * node. Each credential belongs on the node of the legal entity that actually
 * holds it (CSTM Services Ltd, GuardianFM Ltd), with Allied Force Group linked
 * as parentOrganization. No credential markup is emitted until the issuing
 * body, certificate number, holding entity and expiry date are confirmed.
 */

export const ORG_ID = `${SITE.origin}/#organization`;
export const WEBSITE_ID = `${SITE.origin}/#website`;

type Json = Record<string, unknown>;

export function scriptTag(data: Json | Json[]) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(data),
  };
}

export function organizationSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    additionalType: "https://schema.org/ProfessionalService",
    "@id": ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    alternateName: "AFG",
    url: SITE.origin,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/favicon.png"),
    },
    image: SITE.shareImage,
    description: SITE.description,
    telephone: SITE.phoneE164,
    email: SITE.email,
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    knowsAbout: [
      "Integrated facilities management",
      "Hard facilities management",
      "Soft services and commercial cleaning",
      "Manned guarding and security personnel",
      "Security systems, CCTV and access control",
      "Water hygiene and Legionella compliance",
      "Vacant property management",
      "Sustainability and energy management",
      "Planned preventative maintenance",
      "Statutory compliance and logbooks",
    ],
    subOrganization: [
      {
        "@type": "Organization",
        "@id": `${SITE.origin}/#cstm-services`,
        name: "CSTM Services Ltd",
        description:
          "Security delivery business responsible for manned guarding, patrols and keyholding under Allied Force Group contracts.",
        parentOrganization: { "@id": ORG_ID },
      },
      {
        "@type": "Organization",
        "@id": `${SITE.origin}/#guardianfm`,
        name: "GuardianFM Ltd",
        description:
          "Group entity holding facilities management accreditations, framework places and legacy contracts.",
        parentOrganization: { "@id": ORG_ID },
      },
    ],
  };
}

export function websiteSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE.origin,
    name: SITE.name,
    inLanguage: "en-GB",
    publisher: { "@id": ORG_ID },
  };
}

export function breadcrumbSchema(
  trail: { name: string; path: string }[],
): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
  offerings: string[];
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    serviceType: input.name,
    url: absoluteUrl(input.path),
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "United Kingdom" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${input.name} offerings`,
      itemListElement: input.offerings.map((offering) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: offering },
      })),
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function articleSchema(input: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.headline,
    description: input.description,
    url: absoluteUrl(input.path),
    mainEntityOfPage: absoluteUrl(input.path),
    image: SITE.shareImage,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-GB",
  };
}
