import { groupCompanies, type GroupCompany } from "@/data/groupCompanies";

function CardBody({ company }: { company: GroupCompany }) {
  return (
    <>
      {company.featured ? (
        <span className="eyebrow">Group security arm</span>
      ) : null}
      {company.logoSrc ? (
        <img
          src={company.logoSrc}
          alt={`${company.name} logo`}
          loading="lazy"
          width={816}
          height={816}
          className="mt-4 h-12 w-12 object-contain"
        />
      ) : null}
      <h3 className="mt-3 text-lg font-semibold">{company.name}</h3>
      <p className="mt-1 text-[13px] font-medium text-signal">
        {company.descriptor}
      </p>
      {company.blurb ? (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {company.blurb}
        </p>
      ) : null}
      {company.url ? (
        <span className="mt-4 inline-block text-sm font-semibold">
          Visit site →
        </span>
      ) : null}
    </>
  );
}

export function GroupCompanies() {
  return (
    <section className="mx-auto max-w-[80rem] px-6 py-20">
      <span className="eyebrow">Our group of companies</span>
      <h2 className="mt-3 max-w-[22ch] text-3xl font-bold sm:text-4xl">
        The Allied Force Group family
      </h2>
      <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-muted-foreground">
        Allied Force Group sits alongside specialist companies working in
        security, staffing and software. Each has its own focus, set out below.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {groupCompanies.map((company) =>
          company.url ? (
            <a
              key={company.id}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${company.name} — opens in a new tab`}
              className="panel flex flex-col p-6 transition-[transform,border-color,color] hover:-translate-y-1 hover:border-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <CardBody company={company} />
            </a>
          ) : (
            <div key={company.id} className="panel flex flex-col p-6">
              <CardBody company={company} />
            </div>
          ),
        )}
      </div>
    </section>
  );
}
