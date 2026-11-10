import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/site/Button";
import { getResource, resources } from "@/content/resources";
import { sectors } from "@/content/sectors";
import { sectorSearch } from "@/content/sectorSearch";

import { pageHead } from "@/lib/site";
import { breadcrumbSchema, scriptTag } from "@/lib/schema";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const Route = createFileRoute("/resources/$slug")({
  loader: ({ params }) => {
    const resource = getResource(params.slug);
    if (!resource) throw notFound();
    return { resource };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Resource not found | Allied Force Group" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { resource } = loaderData;
    const path = `/resources/${resource.slug}`;
    return {
      ...pageHead({
        path,
        title: `${resource.title} | Allied Force Group`,
        description: resource.summary,
        type: "website",
      }),
      scripts: [
        scriptTag([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
            { name: resource.title, path },
          ]),
        ]),
      ],
    };
  },
  notFoundComponent: ResourceNotFound,
  component: ResourcePage,
});

function ResourceNotFound() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-[80rem] px-6 py-24">
        <h1 className="text-3xl font-bold sm:text-4xl">Resource not found</h1>
        <Link to="/resources" className="mt-8 inline-block">
          <Button>All resources</Button>
        </Link>
      </section>
    </SiteLayout>
  );
}

function ResourcePage() {
  const { resource } = Route.useLoaderData();
  const others = resources.filter((r) => r.slug !== resource.slug);
  const relatedSectors = sectors.filter((sector) => sectorSearch[sector.slug]?.resources.includes(resource.slug));

  return (
    <SiteLayout>
      <section className="wash-gradient border-b border-hairline">
        <div className="mx-auto max-w-[80rem] px-6 py-16 lg:py-20">
          <Breadcrumbs
            trail={[
              { name: "Home", path: "/" },
              { name: "Resources", path: "/resources" },
              { name: resource.title, path: `/resources/${resource.slug}` },
            ]}
          />
          <div className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
            {resource.number} / {resource.kind}
          </div>
          <h1 className="mt-3 max-w-[22ch] text-4xl font-bold leading-[1.05] sm:text-5xl">
            {resource.title}
          </h1>
          <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-muted-foreground">
            {resource.intro}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[56rem] px-6 py-16">
        <div className="grid gap-5">
          {resource.sections.map((section) => (
            <div key={section.heading} className="panel p-7">
              <h2 className="text-lg font-semibold">{section.heading}</h2>
              <ul className="mt-4 grid gap-2.5">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-signal" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {resource.note ? (
          <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
            {resource.note}
          </p>
        ) : null}
      </section>

      <section className="wash-gradient border-y border-hairline">
        <div className="mx-auto max-w-[80rem] px-6 py-16">
          <h2 className="text-xl font-semibold">Relevant sectors</h2>
          <div className="mt-5 mb-10 flex flex-wrap gap-2.5">
            {relatedSectors.map((sector) => (
              <Link key={sector.slug} to="/sectors/$slug" params={{ slug: sector.slug }} className="panel px-4 py-2.5 text-sm font-medium transition-colors hover:border-signal">{sector.name}</Link>
            ))}
          </div>
          <span className="eyebrow">More resources</span>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {others.map((r) => (
              <Link
                key={r.slug}
                to="/resources/$slug"
                params={{ slug: r.slug }}
                className="panel px-4 py-2.5 text-sm font-medium transition-colors hover:border-signal"
              >
                {r.title}
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact">
              <Button size="lg">Discuss your requirements</Button>
            </Link>
            <a href="tel:+442071839055">
              <Button size="lg" variant="outline">
                Call 020 7183 9055
              </Button>
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
