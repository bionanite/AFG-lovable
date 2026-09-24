import { Link } from "@tanstack/react-router";

export type Crumb = { name: string; path: string };

/** Visible breadcrumb trail, matching the BreadcrumbList schema on the page. */
export function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="font-mono text-[10px] uppercase tracking-[0.18em]">
      <ol className="flex flex-wrap items-center gap-2 text-muted-foreground">
        {trail.map((crumb, index) => {
          const isLast = index === trail.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="text-foreground/80">
                  {crumb.name}
                </span>
              ) : (
                <>
                  <Link
                    to={crumb.path}
                    className="transition-colors hover:text-signal"
                  >
                    {crumb.name}
                  </Link>
                  <span aria-hidden="true">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
