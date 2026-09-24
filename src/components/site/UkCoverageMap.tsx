import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { areas } from "@/content/areas";
import { cn } from "@/lib/utils";

/**
 * Stylised UK coverage map. Shapes are simplified region outlines for
 * illustration only and are not drawn to scale.
 */
const shapes: Record<string, string> = {
  scotland:
    "M230,30 L300,60 L320,140 L300,200 L255,235 L215,235 L185,190 L165,120 L190,55 Z",
  "north-east": "M255,235 L300,200 L330,250 L320,310 L270,315 L240,285 Z",
  "north-west": "M215,235 L255,235 L240,285 L250,340 L225,395 L195,380 L180,300 Z",
  yorkshire: "M270,315 L320,310 L345,340 L340,400 L285,400 L250,340 Z",
  midlands:
    "M225,395 L285,400 L340,400 L350,455 L300,490 L240,480 L215,440 Z",
  "east-of-england": "M340,400 L400,415 L425,470 L380,510 L350,455 Z",
  wales: "M215,440 L240,480 L230,530 L185,540 L160,490 L175,445 Z",
  "south-east": "M350,455 L380,510 L400,560 L355,595 L300,560 L300,505 Z",
  "south-west":
    "M230,530 L240,480 L300,505 L300,560 L250,610 L160,640 L120,620 L180,570 Z",
  "greater-london": "M318,518 L356,512 L362,546 L324,552 Z",
};

export function UkCoverageMap() {
  const [active, setActive] = useState<string>("greater-london");
  const current = areas.find((a) => a.slug === active);
  if (!current) return null;

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center">
      <div className="relative mx-auto w-full max-w-md">
        <svg
          viewBox="80 0 380 680"
          role="img"
          aria-label="Stylised map of the United Kingdom showing the regions we cover"
          className="w-full"
        >
          {[...areas]
            .sort((a, b) =>
              a.slug === "greater-london" ? 1 : b.slug === "greater-london" ? -1 : 0,
            )
            .map((area) => {
            const isActive = area.slug === active;
            return (
              <path
                key={area.slug}
                d={shapes[area.slug]}
                tabIndex={0}
                role="button"
                aria-label={`${area.name} coverage`}
                aria-pressed={isActive}
                onMouseEnter={() => setActive(area.slug)}
                onFocus={() => setActive(area.slug)}
                onClick={() => setActive(area.slug)}
                className={cn(
                  "cursor-pointer outline-none transition-[fill,stroke] duration-300",
                  isActive
                    ? "fill-signal/70 stroke-signal"
                    : "fill-surface-raised stroke-hairline hover:fill-signal/25",
                )}
                strokeWidth={1.5}
                strokeLinejoin="round"
              />
            );
          })}
        </svg>
      </div>

      <div className="panel p-7" aria-live="polite">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
          {current.number} / Region
        </div>
        <h3 className="mt-3 text-2xl font-semibold">{current.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {current.intro}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {current.places.map((place) => (
            <li
              key={place}
              className="rounded-full border border-hairline px-3 py-1 text-xs text-muted-foreground"
            >
              {place}
            </li>
          ))}
        </ul>
        <Link
          to="/areas/$slug"
          params={{ slug: current.slug }}
          className="mt-6 inline-block text-sm font-semibold text-signal"
        >
          Coverage detail →
        </Link>
      </div>
    </div>
  );
}
