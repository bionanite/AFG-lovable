export function SectorDiagram({
  image,
  imageAlt,
  heading,
  intro,
  points,
}: {
  image: string;
  imageAlt: string;
  heading: string;
  intro: string;
  points: string[];
}) {
  return (
    <div className="panel overflow-hidden p-6 sm:p-10">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <span className="eyebrow">How it fits together</span>
          <h2 className="mt-3 max-w-[24ch] text-2xl font-bold sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-3 max-w-[54ch] text-sm leading-relaxed text-muted-foreground">
            {intro}
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {points.map((label, i) => (
              <li
                key={label}
                className="flex items-center gap-2.5 rounded-md border border-hairline bg-surface-raised px-3 py-2.5 text-xs font-semibold leading-snug"
              >
                <span className="font-mono text-[10px] tracking-[0.18em] text-signal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          width={1536}
          height={1024}
          className="w-full rounded-lg"
        />
      </div>
    </div>
  );
}
