import { VideoHero } from "@/components/site/VideoHero";
import { serviceLoops } from "@/content/pageLoops";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/site/Button";
import { getServiceFamily, serviceFamilies } from "@/content/services";
import { getServiceAnswer } from "@/content/serviceAnswers";
import { sectors } from "@/content/sectors";
import { IntegratedFmDiagram } from "@/components/site/IntegratedFmDiagram";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Reveal } from "@/components/site/Reveal";
import { FaqSection } from "@/components/site/FaqSection";
import { pageHead } from "@/lib/site";
import { breadcrumbSchema, faqSchema, scriptTag, serviceSchema } from "@/lib/schema";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const family = getServiceFamily(params.slug);
    if (!family) throw notFound();
    return { family };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Service not found | Allied Force Group" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { family } = loaderData;
    const path = `/services/${family.slug}`;
    const detail = getServiceAnswer(family.slug);
    const offerings = family.groups.flatMap((group) => group.items);

    const schemas = [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: family.name, path },
      ]),
      serviceSchema({
        name: family.name,
        description: detail?.answer ?? family.short,
        path,
        offerings,
      }),
    ];
    if (detail) schemas.push(faqSchema(detail.faqs));

    return {
      ...pageHead({
        path,
        title: `${family.name} | Allied Force Group`,
        description: family.short,
      }),
      scripts: [scriptTag(schemas)],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServiceFamilyPage,
});

function ServiceNotFound() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-[80rem] px-6 py-24">
        <h1 className="text-3xl font-bold sm:text-4xl">Service not found</h1>
        <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-muted-foreground">
          That service page does not exist. See the full service catalogue
          instead.
        </p>
        <Link to="/services" className="mt-8 inline-block">
          <Button>All services</Button>
        </Link>
      </section>
    </SiteLayout>
  );
}

function ServiceFamilyPage() {
  const { family } = Route.useLoaderData();
  const others = serviceFamilies.filter((f) => f.slug !== family.slug);
  const detail = getServiceAnswer(family.slug);
  const relatedSectors = sectors.filter((sector) =>
    sector.services.includes(family.slug),
  );

  return (
    <SiteLayout>
      <VideoHero
        image={family.image}
        alt={family.imageAlt}
        video={serviceLoops[family.slug]}
      >
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: family.name, path: `/services/${family.slug}` },
          ]}
        />
        <div className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
          {family.number} / Service family
        </div>
        <h1 className="mt-3 max-w-[18ch] text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
          {family.name}
        </h1>
        {detail ? (
          <p className="mt-5 max-w-[62ch] text-base font-medium leading-relaxed text-foreground/90">
            {detail.answer}
          </p>
        ) : null}
        <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-foreground/70">
          {family.intro}
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
        <span className="eyebrow">What is included</span>
        <h2 className="mt-3 max-w-[24ch] text-3xl font-bold sm:text-4xl">
          Scope of {family.name.toLowerCase()}
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {family.groups.map((group) => (
            <div key={group.title} className="panel p-6">
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <ul className="mt-4 grid gap-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-foreground/85">
                    <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded bg-signal text-[10px] font-bold text-signal-foreground">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {family.note ? (
          <p className="panel mt-6 p-5 text-sm leading-relaxed text-muted-foreground">
            {family.note}
          </p>
        ) : null}
      </section>

      {family.slug === "integrated-fm" ? (
        <section className="mx-auto max-w-[80rem] px-6 pb-20">
          <IntegratedFmDiagram />
        </section>
      ) : null}

      {detail ? (
        <FaqSection faqs={detail.faqs} heading={`${family.name} questions`} />
      ) : null}

      {relatedSectors.length > 0 ? (
        <section className="mx-auto max-w-[80rem] px-6 pb-4">
          <span className="eyebrow">Sectors where this applies</span>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {relatedSectors.map((sector) => (
              <Link
                key={sector.slug}
                to="/sectors/$slug"
                params={{ slug: sector.slug }}
                className="panel px-4 py-2.5 text-sm font-medium transition-colors hover:border-signal"
              >
                {sector.name}
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section className="wash-gradient border-y border-hairline">
        <div className="mx-auto max-w-[80rem] px-6 py-16">
          <span className="eyebrow">Related services</span>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((item) => (
              <Link
                key={item.slug}
                to="/services/$slug"
                params={{ slug: item.slug }}
                className="panel p-5 transition-colors hover:border-signal"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {item.number}
                </div>
                <div className="mt-2 text-base font-semibold">{item.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-[80rem] flex-col gap-6 px-6 py-16 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="max-w-[26ch] text-3xl font-bold sm:text-4xl">
            Talk through {family.name.toLowerCase()} for your estate.
          </h2>
          <p className="mt-3 max-w-[54ch] text-sm leading-relaxed text-muted-foreground">
            Send your requirements through the enquiry form, or call
            <a
              href="tel:+442071839055"
              className="font-semibold text-signal transition-colors hover:text-foreground"
            >
              {" "}
              020 7183 9055
            </a>{" "}
            or email{" "}
            <a
              href="mailto:sales@alliedforcegroup.com"
              className="font-semibold text-signal transition-colors hover:text-foreground"
            >
              sales@alliedforcegroup.com
            </a>
            .
          </p>
        </div>
        <Link to="/contact">
          <Button size="lg">Discuss your requirements</Button>
        </Link>
      </section>
    </SiteLayout>
  );
}
