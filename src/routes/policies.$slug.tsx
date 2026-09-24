import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/site/Button";
import { getPolicy, policies } from "@/content/policies";
import { legalEntityLine } from "@/content/legal";

import { pageHead } from "@/lib/site";
import { breadcrumbSchema, scriptTag } from "@/lib/schema";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const Route = createFileRoute("/policies/$slug")({
  loader: ({ params }) => {
    const policy = getPolicy(params.slug);
    if (!policy) throw notFound();
    return { policy };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Policy not found | Allied Force Group" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { policy } = loaderData;
    const path = `/policies/${policy.slug}`;
    return {
      ...pageHead({
        path,
        title: `${policy.title} | Allied Force Group`,
        description: policy.summary,
        type: "website",
      }),
      scripts: [
        scriptTag([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Policies", path: "/policies" },
            { name: policy.title, path },
          ]),
        ]),
      ],
    };
  },
  notFoundComponent: PolicyNotFound,
  component: PolicyPage,
});

function PolicyNotFound() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-[80rem] px-6 py-24">
        <h1 className="text-3xl font-bold sm:text-4xl">Policy not found</h1>
        <Link to="/policies" className="mt-8 inline-block">
          <Button>All policies</Button>
        </Link>
      </section>
    </SiteLayout>
  );
}

function PolicyPage() {
  const { policy } = Route.useLoaderData();
  const others = policies.filter((p) => p.slug !== policy.slug);

  return (
    <SiteLayout>
      <section className="wash-gradient border-b border-hairline">
        <div className="mx-auto max-w-[80rem] px-6 py-16 lg:py-20">
          <Breadcrumbs
            trail={[
              { name: "Home", path: "/" },
              { name: "Policies", path: "/policies" },
              { name: policy.title, path: `/policies/${policy.slug}` },
            ]}
          />
          <div className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
            {policy.number} / Policy
          </div>
          <h1 className="mt-3 max-w-[22ch] text-4xl font-bold leading-[1.05] sm:text-5xl">
            {policy.title}
          </h1>
          <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-muted-foreground">
            {policy.summary}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[52rem] px-6 py-16">
        <div className="grid gap-8">
          {policy.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl font-semibold">{section.heading}</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {section.body}
              </p>
            </div>
          ))}
        </div>
        <p className="panel mt-10 p-5 text-xs leading-relaxed text-muted-foreground">
          {legalEntityLine}
        </p>
      </section>

      <section className="wash-gradient border-y border-hairline">
        <div className="mx-auto max-w-[80rem] px-6 py-16">
          <span className="eyebrow">Other policies</span>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {others.map((p) => (
              <Link
                key={p.slug}
                to="/policies/$slug"
                params={{ slug: p.slug }}
                className="panel px-4 py-2.5 text-sm font-medium transition-colors hover:border-signal"
              >
                {p.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
