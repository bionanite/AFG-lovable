import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/site/Button";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { glossaryTerms } from "@/content/glossary";
import { pageHead } from "@/lib/site";
import { breadcrumbSchema, scriptTag } from "@/lib/schema";

const TRAIL = [
  { name: "Home", path: "/" },
  { name: "Resources", path: "/resources" },
  { name: "FM glossary", path: "/resources/fm-glossary" },
];

export const Route = createFileRoute("/resources/fm-glossary")({
  head: () => ({
    ...pageHead({
      path: "/resources/fm-glossary",
      title: "Facilities Management Glossary | Allied Force Group",
      description:
        "Plain-English definitions of the facilities management terms used in contracts and tenders: PPM, SFG20, ACOP L8, BS 7858, CAFM, RAMS, TUPE, permit to work and more.",
    }),
    scripts: [
      scriptTag([
        breadcrumbSchema(TRAIL),
        {
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          name: "Facilities management glossary",
          hasDefinedTerm: glossaryTerms.map((term) => ({
            "@type": "DefinedTerm",
            name: term.term,
            description: term.definition,
          })),
        },
      ]),
    ],
  }),
  component: GlossaryPage,
});

function GlossaryPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Resources"
        title={
          <>
            Facilities management <span className="text-gradient">glossary</span>
          </>
        }
        intro="A facilities management glossary explaining the terms that appear in specifications, tenders and compliance records. Each definition describes what the term means in practice on an occupied site, not just what the acronym stands for."
      >
        <Link to="/contact">
          <Button size="lg">Discuss your requirements</Button>
        </Link>
      </PageHero>

      <section className="mx-auto max-w-[80rem] px-6 py-16">
        <Breadcrumbs trail={TRAIL} />

        <dl className="mt-10 grid gap-5 md:grid-cols-2">
          {glossaryTerms.map((term) => (
            <div key={term.term} className="panel p-6">
              <dt className="text-lg font-semibold leading-snug">
                {term.term}
                {term.abbreviation ? (
                  <span className="ml-2 font-mono text-[11px] uppercase tracking-[0.18em] text-signal">
                    {term.abbreviation}
                  </span>
                ) : null}
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {term.definition}
              </dd>
            </div>
          ))}
        </dl>

        <div className="panel mt-10 flex flex-col gap-5 p-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-[60ch] text-sm leading-relaxed text-muted-foreground">
            Definitions are general industry usage. The scope, frequencies and
            delivery arrangements for your own site are confirmed following a
            site review.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/resources">
              <Button variant="outline" className="w-full sm:w-auto">
                All resources
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="w-full sm:w-auto">Discuss your requirements</Button>
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
