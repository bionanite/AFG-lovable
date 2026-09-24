import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "./Button";
import { serviceFamilies } from "@/content/services";
import afgLockup from "@/assets/afg-lockup-v2.png.asset.json";

const nav = [
  { label: "Sectors", to: "/sectors" },
  { label: "Why us", to: "/why-us" },
  { label: "Case studies", to: "/case-studies" },
] as const;

const coverageNav = [
  { label: "UK coverage", to: "/areas" },
  { label: "Global locations", to: "/locations" },
] as const;

const insightsNav = [
  { label: "Articles", to: "/blog" },
  { label: "Resources", to: "/resources" },
  { label: "Service planner", to: "/service-planner" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-surface-raised/90 backdrop-blur">
      <div className="mx-auto flex max-w-[80rem] items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src={afgLockup.url}
            alt="Allied Force Group"
            width={1994}
            height={789}
            className="h-11 w-auto object-contain sm:h-16 lg:h-24"
          />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground lg:flex">


          <div className="group relative">
            <Link
              to="/services"
              className="flex items-center gap-1.5 transition-colors hover:text-foreground group-hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              Services
              <span aria-hidden="true" className="text-[10px]">
                ▾
              </span>
            </Link>
            <div className="invisible absolute left-1/2 top-full z-50 w-[34rem] -translate-x-1/2 pt-4 opacity-0 transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <div className="panel grid grid-cols-2 gap-1 p-3 shadow-lg">
                {serviceFamilies.map((family) => (
                  <Link
                    key={family.slug}
                    to="/services/$slug"
                    params={{ slug: family.slug }}
                    className="rounded-lg px-3 py-2.5 transition-colors hover:bg-surface"
                  >
                    <span className="block text-sm font-semibold text-foreground">
                      {family.name}
                    </span>
                  </Link>
                ))}
                <Link
                  to="/services"
                  className="col-span-2 rounded-lg px-3 py-2.5 text-sm font-semibold text-signal transition-colors hover:bg-surface"
                >
                  View the full service catalogue →
                </Link>
              </div>
            </div>
          </div>

          {nav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}

          <div className="group relative">
            <Link
              to="/areas"
              className="flex items-center gap-1.5 transition-colors hover:text-foreground group-hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              Coverage
              <span aria-hidden="true" className="text-[10px]">
                ▾
              </span>
            </Link>
            <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-4 opacity-0 transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <div className="panel grid gap-1 p-3 shadow-lg">
                {coverageNav.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="rounded-lg px-3 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="group relative">
            <Link
              to="/blog"
              className="flex items-center gap-1.5 transition-colors hover:text-foreground group-hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              Insights
              <span aria-hidden="true" className="text-[10px]">
                ▾
              </span>
            </Link>
            <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-4 opacity-0 transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <div className="panel grid gap-1 p-3 shadow-lg">
                {insightsNav.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="rounded-lg px-3 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/contact"
            className="transition-colors hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/contact" className="hidden sm:block">
            <Button size="sm">Discuss your requirements</Button>
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-xl border border-hairline bg-surface-raised text-foreground transition-colors hover:border-signal lg:hidden"
          >
            <span className="grid gap-1.5">
              <span className="block h-0.5 w-5 rounded bg-current" />
              <span className="block h-0.5 w-5 rounded bg-current" />
              <span className="block h-0.5 w-5 rounded bg-current" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-hairline bg-surface-raised lg:hidden">
          <nav className="mx-auto grid max-w-[80rem] gap-1 px-6 py-4">
            <Link
              to="/sectors"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-medium text-foreground/85 transition-colors hover:bg-surface hover:text-foreground"
            >
              Sectors
            </Link>
            <Link
              to="/services"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-medium text-foreground/85 transition-colors hover:bg-surface hover:text-foreground"
            >
              Services
            </Link>
            <div className="grid gap-0.5 border-l border-hairline pl-3">
              {serviceFamilies.map((family) => (
                <Link
                  key={family.slug}
                  to="/services/$slug"
                  params={{ slug: family.slug }}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                >
                  {family.name}
                </Link>
              ))}
            </div>
            <div className="grid gap-0.5">
              {coverageNav.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-foreground/85 transition-colors hover:bg-surface hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            {nav
              .filter((item) => item.label !== "Sectors")
              .map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-foreground/85 transition-colors hover:bg-surface hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            <Link
              to="/blog"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-medium text-foreground/85 transition-colors hover:bg-surface hover:text-foreground"
            >
              Insights
            </Link>
            <div className="grid gap-0.5 border-l border-hairline pl-3">
              {insightsNav.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-medium text-foreground/85 transition-colors hover:bg-surface hover:text-foreground"
            >
              Contact
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2">
              <Button className="w-full" size="md">
                Discuss your requirements
              </Button>
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
