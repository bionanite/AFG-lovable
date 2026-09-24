import { VideoHero } from "@/components/site/VideoHero";
import { sectorLoops } from "@/content/pageLoops";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/site/Button";
import { getSector, sectors } from "@/content/sectors";
import { getSectorDetail } from "@/content/sectorDetail";
import { getSectorAnswer } from "@/content/sectorAnswers";
import { SectorDiagram } from "@/components/site/SectorDiagram";
import { FaqSection } from "@/components/site/FaqSection";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Reveal } from "@/components/site/Reveal";
import { serviceFamilies } from "@/content/services";
import { pageHead } from "@/lib/site";
import { breadcrumbSchema, faqSchema, scriptTag } from "@/lib/schema";

export const Route = createFileRoute("/sectors/$slug")({
  loader: ({ params }) => {
    const sector = getSector(params.slug);
    if (!sector) throw notFound();
    return { sector };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Sector not found | Allied Force Group" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { sector } = loaderData;
    const path = `/sectors/${sector.slug}`;
    const detail = getSectorAnswer(sector.slug);
    const schemas = [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Sectors", path: "/sectors" },
        { name: sector.name, path },
      ]),
    ];
    if (detail) schemas.push(faqSchema(detail.faqs));

    return {
      ...pageHead({
        path,
        title: `${sector.name} facilities and security services | Allied Force Group`,
        description: sector.line,
      }),
      scripts: [scriptTag(schemas)],
    };
  },
  notFoundComponent: SectorNotFound,
  component: SectorPage,
});

function SectorNotFound() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-[80rem] px-6 py-24">
        <h1 className="text-3xl font-bold sm:text-4xl">Sector not found</h1>
        <Link to="/sectors" className="mt-8 inline-block">
          <Button>All sectors</Button>
        </Link>
      </section>
    </SiteLayout>
  );
}

function SectorPage() {
  const { sector } = Route.useLoaderData();
  const detail = getSectorDetail(sector.slug);
  const answer = getSectorAnswer(sector.slug);
  const others = sectors.filter((s) => s.slug !== sector.slug);
  const related = sector.services
    .map((slug) => serviceFamilies.find((f) => f.slug === slug))
    .filter((f): f is NonNullable<typeof f> => Boolean(f));

  return (
    <SiteLayout>
      <VideoHero
        image={sector.image}
        alt={sector.imageAlt}
        video={sectorLoops[sector.slug]}
      >
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Sectors", path: "/sectors" },
            { name: sector.name, path: `/sectors/${sector.slug}` },
          ]}
        />
        <div className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
          {sector.number} / Sector
        </div>
        <h1 className="mt-3 max-w-[18ch] text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
          {sector.name} facilities and security services
        </h1>
        {answer ? (
          <p className="mt-5 max-w-[62ch] text-base font-medium leading-relaxed text-foreground/90">
            {answer.answer}
          </p>
        ) : null}
        <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-foreground/70">
          {sector.intro}
        </p>
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
      </VideoHero>


      <section className="mx-auto max-w-[80rem] px-6 py-20">
        <span className="eyebrow">What matters on these estates</span>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {sector.priorities.map((p) => (
            <div key={p.title} className="panel p-6">
              <h2 className="text-lg font-semibold">{p.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {detail ? (
        <>
          <section className="mx-auto max-w-[80rem] px-6 pb-4">
            <SectorDiagram
              image={detail.diagram}
              imageAlt={detail.diagramAlt}
              heading={detail.diagramHeading}
              intro={detail.diagramIntro}
              points={detail.points}
            />
          </section>

          <section className="mx-auto max-w-[80rem] px-6 py-20">
            <span className="eyebrow">How we run it</span>
            <div className="mt-8 grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="grid gap-8">
                {detail.detail.map((block) => (
                  <div key={block.heading}>
                    <h2 className="text-xl font-semibold sm:text-2xl">
                      {block.heading}
                    </h2>
                    <p className="mt-3 max-w-[64ch] text-sm leading-relaxed text-muted-foreground">
                      {block.body}
                    </p>
                  </div>
                ))}
              </div>
              <div className="panel h-fit p-6">
                <span className="eyebrow">Evidence you receive</span>
                <ul className="mt-4 grid gap-3">
                  {detail.evidence.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-signal" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </>
      ) : null}

      <section className="wash-gradient border-y border-hairline">
        <div className="mx-auto max-w-[80rem] px-6 py-16">
          <span className="eyebrow">Services we typically deliver here</span>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((family) => (
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
        </div>
      </section>

      <section className="mx-auto max-w-[80rem] px-6 py-16">
        <span className="eyebrow">Other sectors</span>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {others.map((s) => (
            <Link
              key={s.slug}
              to="/sectors/$slug"
              params={{ slug: s.slug }}
              className="panel px-4 py-2.5 text-sm font-medium transition-colors hover:border-signal"
            >
              {s.name}
            </Link>
          ))}
        </div>
      </section>

      {answer ? (
        <FaqSection
          faqs={answer.faqs}
          heading={`${sector.name} facilities questions`}
        />
      ) : null}

      <section className="deep-gradient">
        <div className="mx-auto flex max-w-[80rem] flex-col gap-6 px-6 py-16 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="max-w-[26ch] text-3xl font-bold sm:text-4xl">
            Tell us how your {sector.name.toLowerCase()} estate runs.
          </h2>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-surface-raised text-foreground shadow-none hover:brightness-100 hover:opacity-90"
            >
              Discuss your requirements
            </Button>
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
