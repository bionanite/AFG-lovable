import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/site/Button";
import { Reveal } from "@/components/site/Reveal";
import { locations } from "@/content/locations";
import { SITE, absoluteUrl } from "@/lib/site";

const title = "Global locations | Allied Force Group";
const description =
  "Allied Force Group offices in London, Frankfurt and New York. One group, one point of contact, with delivery arrangements confirmed for each site following a review.";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: "Global locations | Allied Force Group" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: absoluteUrl("/locations") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/locations") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: SITE.name,
          legalName: SITE.legalName,
          url: SITE.origin,
          email: SITE.email,
          telephone: SITE.phoneE164,
          location: locations.map((office) => ({
            "@type": "Place",
            name: office.label,
            telephone: office.phoneDisplay,
            address: {
              "@type": "PostalAddress",
              streetAddress: office.addressLines.join(", "),
              addressLocality: office.city,
              addressRegion: office.region,
              postalCode: office.postalCode,
              addressCountry: office.countryCode,
            },
          })),
        }),
      },
    ],
  }),
  component: LocationsPage,
});

const principles = [
  {
    tag: "01",
    title: "One point of contact",
    copy: "Whichever region a site sits in, the contract is managed through a single named contact rather than a chain of local suppliers.",
  },
  {
    tag: "02",
    title: "Consistent standards",
    copy: "The same written scope, safe systems of work and reporting format apply across every site we support, in every region.",
  },
  {
    tag: "03",
    title: "Local delivery teams",
    copy: "Attendance is delivered by teams working to local licensing, screening and employment requirements for the country concerned.",
  },
  {
    tag: "04",
    title: "One reporting line",
    copy: "Planned work, reactive attendance and compliance records are reported in one place so an estate can be reviewed as a whole.",
  },
];

function LocationsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Global locations"
        title={
          <>
            One group. <span className="text-gradient">Three regions.</span>
          </>
        }
        intro="Allied Force Group is headquartered in London, with offices in Frankfurt and New York. Scope, attendance patterns and local delivery arrangements are confirmed for your sites following a review."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/contact">
            <Button size="lg" className="w-full sm:w-auto">
              Discuss your requirements
            </Button>
          </Link>
          <a href={SITE.phoneHref}>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Call {SITE.phoneDisplay}
            </Button>
          </a>
        </div>
      </PageHero>

      <section className="mx-auto max-w-[80rem] px-6 py-20">
        <div className="grid gap-5 lg:grid-cols-3">
          {locations.map((office, index) => (
            <Reveal key={office.slug} delay={index * 90}>
              <div className="panel flex h-full flex-col p-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
                  {String(index + 1).padStart(2, "0")} / {office.country}
                </div>
                <h2 className="mt-3 text-xl font-semibold">{office.city}</h2>
                <p className="mt-1 text-[13px] font-medium text-signal">
                  {office.role}
                </p>
                <address className="mt-4 not-italic text-sm leading-relaxed text-muted-foreground">
                  {office.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  <span className="block">{office.postalCode}</span>
                  <span className="block">{office.country}</span>
                </address>
                <div className="mt-4 grid gap-1 text-sm">
                  <a
                    href={office.phoneHref}
                    className="font-semibold text-foreground transition-colors hover:text-signal"
                  >
                    {office.phoneDisplay}
                  </a>
                  <a
                    href={`mailto:${office.email}`}
                    className="break-all text-foreground/80 transition-colors hover:text-signal"
                  >
                    {office.email}
                  </a>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {office.coverage}
                </p>
                <div className="mt-auto pt-5">
                  {office.slug === "london" ? (
                    <Link
                      to="/areas"
                      className="text-sm font-semibold text-signal transition-colors hover:text-foreground"
                    >
                      UK regional coverage →
                    </Link>
                  ) : (
                    <Link
                      to="/contact"
                      className="text-sm font-semibold text-signal transition-colors hover:text-foreground"
                    >
                      Enquire about this region →
                    </Link>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wash-gradient border-y border-hairline">
        <div className="mx-auto max-w-[80rem] px-6 py-20">
          <Reveal>
            <span className="eyebrow">How we work across regions</span>
            <h2 className="mt-3 max-w-[24ch] text-3xl font-bold sm:text-4xl">
              The same contract discipline in every office
            </h2>
            <p className="mt-4 max-w-[60ch] text-sm leading-relaxed text-muted-foreground">
              Multi-region estates are run from one contract structure, with
              local teams delivering to the standards and licensing that apply
              in each country.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {principles.map((item, index) => (
              <Reveal key={item.tag} delay={index * 80}>
                <div className="panel h-full p-7">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
                    {item.tag}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="deep-gradient">
        <div className="mx-auto flex max-w-[80rem] flex-col gap-6 px-6 py-16 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="max-w-[26ch] text-3xl font-bold sm:text-4xl">
            Sites in more than one country?
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
