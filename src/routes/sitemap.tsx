import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { urlGroups } from "@/lib/site-urls";
import { pageHead } from "@/lib/site";
import { breadcrumbSchema, scriptTag } from "@/lib/schema";

const TRAIL = [
  { name: "Home", path: "/" },
  { name: "Sitemap", path: "/sitemap" },
];

export const Route = createFileRoute("/sitemap")({
  head: () => ({
    ...pageHead({
      path: "/sitemap",
      title: "Sitemap | Allied Force Group",
      description:
        "Every public page on the Allied Force Group site, grouped by section: services, sectors, UK coverage, insights, resources, policies and company pages.",
    }),
    scripts: [scriptTag(breadcrumbSchema(TRAIL))],
  }),
  component: SitemapPage,
});

function SitemapPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Sitemap"
        title={
          <>
            Every page on <span className="text-gradient">this site</span>
          </>
        }
        intro="A full index of the Allied Force Group site, grouped by section."
      />

      <section className="mx-auto max-w-[80rem] px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {urlGroups().map((group) => (
            <div key={group.heading}>
              <h2 className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
                {group.heading}
              </h2>
              <ul className="mt-4 grid gap-2.5 text-sm">
                {group.urls.map((url) => (
                  <li key={url.path}>
                    <Link
                      to={url.path}
                      className="text-foreground/80 transition-colors hover:text-signal"
                    >
                      {url.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
