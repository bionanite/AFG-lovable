import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Button } from "@/components/site/Button";

export const Route = createFileRoute("/ui-kit")({
  head: () => ({
    meta: [
      { title: "UI Kit | Allied Force Group Design System" },
      { name: "robots", content: "noindex, nofollow" },
      {
        name: "description",
        content:
          "The Allied Force Group design system: colour tokens, typography, buttons, badges, panels and form fields.",
      },
      { property: "og:title", content: "UI Kit | Allied Force Group Design System" },
      {
        property: "og:description",
        content:
          "Colour tokens, typography scale and core components used across the Allied Force Group site.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: UiKit,
});

const swatches = [
  { name: "Background", className: "bg-background" },
  { name: "Surface", className: "bg-surface" },
  { name: "Surface raised", className: "bg-surface-raised" },
  { name: "Signal", className: "bg-signal" },
  { name: "Muted", className: "bg-muted" },
  { name: "Destructive", className: "bg-destructive" },
];

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-hairline py-12">
      <span className="eyebrow">{title}</span>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function UiKit() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-[80rem] px-6 py-16">
        <span className="eyebrow">Design system</span>
        <h1 className="mt-3 text-5xl font-bold">Allied Force Group UI kit</h1>
        <p className="mt-4 max-w-[58ch] text-sm leading-relaxed text-muted-foreground">
          A navy command-centre palette with a single amber signal accent. Every value
          here is a design token — components never hardcode colour.
        </p>

        <Section title="Colour tokens">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {swatches.map((swatch) => (
              <div key={swatch.name} className="panel overflow-hidden">
                <div className={`h-20 w-full ${swatch.className}`} />
                <div className="p-3 text-xs text-muted-foreground">{swatch.name}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Typography">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold">Display · Archivo Bold</h2>
            <h3 className="text-2xl font-semibold">Heading · Archivo Semibold</h3>
            <p className="max-w-[60ch] text-base text-foreground/85">
              Body · Inter Regular. Used for all running copy, at a comfortable
              measure of around 60 characters per line.
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
              Mono · JetBrains Mono for eyebrows, metrics and status
            </p>
          </div>
        </Section>

        <Section title="Buttons">
          <div className="flex flex-wrap items-center gap-4">
            <Button>Signal</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
            <Button disabled>Disabled</Button>
          </div>
        </Section>

        <Section title="Badges & status">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-signal/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-signal">
              <span className="pulse-dot size-1.5 rounded-full bg-signal" />
              Live
            </span>
            <span className="rounded-lg border border-hairline px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              Sample badge
            </span>
            <span className="rounded-lg bg-destructive/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-destructive">
              Status A
            </span>
          </div>
        </Section>

        <Section title="Panels">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="panel p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Metric
              </div>
              <div className="mt-2 font-display text-3xl font-bold text-signal">
                —
              </div>
              <p className="mt-1 text-sm text-muted-foreground">PPM completion</p>
            </div>
            <div className="panel bg-surface-raised p-5">
              <h3 className="text-lg font-semibold">Raised panel</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Used for nested cards inside a surface section.
              </p>
            </div>
            <div className="panel p-5 transition-colors hover:border-signal">
              <h3 className="text-lg font-semibold">Interactive panel</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Border shifts to the signal accent on hover.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Form fields">
          <form className="grid max-w-xl gap-4" onSubmit={(e) => e.preventDefault()}>
            <label className="grid gap-2 text-sm">
              <span className="text-muted-foreground">Work email</span>
              <input
                type="email"
                placeholder="name@company.co.uk"
                className="h-11 rounded-xl border border-hairline bg-surface px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-signal"
              />
            </label>
            <label className="grid gap-2 text-sm">
              <span className="text-muted-foreground">Site brief</span>
              <textarea
                rows={3}
                placeholder="Tell us about your estate"
                className="rounded-xl border border-hairline bg-surface p-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-signal"
              />
            </label>
            <Button className="justify-self-start" type="submit">
              Send enquiry
            </Button>
          </form>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
