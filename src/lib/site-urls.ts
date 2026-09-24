import { serviceFamilies } from "@/content/services";
import { sectors } from "@/content/sectors";
import { areas } from "@/content/areas";
import { policies } from "@/content/policies";
import { resources } from "@/content/resources";
import { posts } from "@/content/posts";

export type SiteUrl = { path: string; lastmod?: string | undefined };

export type UrlGroup = { heading: string; urls: { path: string; label: string }[] };

/**
 * Canonical list of public URLs, derived from the content modules so it cannot
 * drift. Redirecting, noindexed and thin routes are excluded.
 */
export function urlGroups(): UrlGroup[] {
  return [
    {
      heading: "Company",
      urls: [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/why-us", label: "Why us" },
        { path: "/case-studies", label: "Case studies" },
        { path: "/projects", label: "Projects" },
        { path: "/careers", label: "Careers" },
        { path: "/locations", label: "Global locations" },
        { path: "/contact", label: "Contact" },
      ],
    },
    {
      heading: "Services",
      urls: [
        { path: "/services", label: "All services" },
        ...serviceFamilies.map((family) => ({
          path: `/services/${family.slug}`,
          label: family.name,
        })),
      ],
    },
    {
      heading: "Sectors",
      urls: [
        { path: "/sectors", label: "All sectors" },
        ...sectors.map((sector) => ({
          path: `/sectors/${sector.slug}`,
          label: sector.name,
        })),
      ],
    },
    {
      heading: "UK coverage",
      urls: [
        { path: "/areas", label: "Coverage overview" },
        ...areas.map((area) => ({
          path: `/areas/${area.slug}`,
          label: area.name,
        })),
      ],
    },
    {
      heading: "Insights",
      urls: [
        { path: "/blog", label: "All articles" },
        ...posts.map((post) => ({
          path: `/blog/${post.slug}`,
          label: post.title,
        })),
      ],
    },
    {
      heading: "Resources",
      urls: [
        { path: "/resources", label: "All resources" },
        { path: "/resources/fm-glossary", label: "Facilities management glossary" },
        ...resources.map((resource) => ({
          path: `/resources/${resource.slug}`,
          label: resource.title,
        })),
        { path: "/service-planner", label: "Service planner" },
      ],
    },
    {
      heading: "Policies and legal",
      urls: [
        { path: "/policies", label: "Policies" },
        ...policies.map((policy) => ({
          path: `/policies/${policy.slug}`,
          label: policy.title,
        })),
        { path: "/privacy", label: "Privacy policy" },
        { path: "/terms", label: "Terms of use" },
      ],
    },
  ];
}

export function allUrls(): SiteUrl[] {
  const postDates = new Map(posts.map((post) => [`/blog/${post.slug}`, post.date]));
  return urlGroups().flatMap((group) =>
    group.urls.map((url) => ({
      path: url.path,
      lastmod: postDates.get(url.path),
    })),
  );
}
