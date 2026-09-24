import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/site/Button";
import { areas, getArea } from "@/content/areas";
import { serviceFamilies } from "@/content/services";

import { pageHead } from "@/lib/site";
import { breadcrumbSchema, scriptTag } from "@/lib/schema";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const Route = createFileRoute("/areas/$slug")({
  loader: ({ params }) => {
    const area = getArea(params.slug);
    if (!area) throw notFound();
    return { area };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Area not found | Allied Force Group" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { area } = loaderData;
    const path = `/areas/${area.slug}`;
    return {
      ...pageHead({
        path,
        title: `${area.name} | Allied Force Group`,
        description: area.line,
        type: "website",
      }),
      scripts: [
        scriptTag([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "UK coverage", path: "/areas" },
            { name: area.name, path },
          ]),
        ]),
      ],
    };
  },
  notFoundComponent: AreaNotFound,
  component: AreaPage,
});

function AreaNotFound() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-[80rem] px-6 py-24">
        <h1 className="text-3xl font-bold sm:text-4xl">Area not found</h1>
        <Link to="/areas" className="mt-8 inline-block">
          <Button>All coverage areas</Button>
        </Link>
      </section>
    </SiteLayout>
  );
}

function AreaPage() {
  const { area } = Route.useLoaderData();
  const others = areas.filter((a) => a.slug !== area.slug);

  return (
    <SiteLayout>
      <section className="wash-gradient border-b border-hairline">
        <div className="mx-auto max-w-[80rem] px-6 py-16 lg:py-20">
          <Breadcrumbs
            trail={[
              { name: "Home", path: "/" },
              { name: "UK coverage", path: "/areas" },
              { name: area.name, path: `/areas/${area.slug}` },
            ]}
          />
          <div className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
            {area.number} / Region
          </div>
          <h1 className="mt-3 max-w-[22ch] text-4xl font-bold leading-[1.05] sm:text-5xl">
            {area.name}
          </h1>
          <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-muted-foreground">
            {area.intro}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {area.places.map((place) => (
              <span
                key={place}
                className="rounded-full border border-hairline bg-surface-raised px-3.5 py-1.5 text-xs font-medium text-foreground/80"
              >
                {place}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Discuss your requirements
              </Button>
            </Link>
            <a href="tel:+442071839055">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Call 020 7183 9055
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[80rem] px-6 py-20">
        <span className="eyebrow">Services available in the {area.name}</span>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {serviceFamilies.map((family) => (
            <Link
              key={family.slug}
              to="/services/$slug"
              params={{ slug: family.slug }}
              className="panel p-5 transition-colors hover:border-signal"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {family.number}
              </div>
              <div className="mt-2 text-base font-semibold">{family.name}</div>
            </Link>
          ))}
        </div>
        <p className="panel mt-6 p-5 text-sm leading-relaxed text-muted-foreground">
          Coverage, attendance patterns and travel arrangements for your specific
          sites are confirmed in writing following a site review.
        </p>
      </section>

      <section className="wash-gradient border-y border-hairline">
        <div className="mx-auto max-w-[80rem] px-6 py-16">
          <span className="eyebrow">Other regions</span>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {others.map((a) => (
              <Link
                key={a.slug}
                to="/areas/$slug"
                params={{ slug: a.slug }}
                className="panel px-4 py-2.5 text-sm font-medium transition-colors hover:border-signal"
              >
                {a.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
