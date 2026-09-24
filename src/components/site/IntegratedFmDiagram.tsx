import illustration from "@/assets/integrated-fm-illustration.png";

const spokes = [
  "Helpdesk and job logging",
  "Planned maintenance",
  "Reactive works",
  "Security",
  "Cleaning and site services",
  "Compliance and assurance",
  "Supply-chain coordination",
  "Reporting and review",
];

export function IntegratedFmDiagram() {
  return (
    <div className="panel overflow-hidden p-6 sm:p-10">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <span className="eyebrow">How it fits together</span>
          <h3 className="mt-3 max-w-[22ch] text-2xl font-bold sm:text-3xl">
            One contract, one contact, one reporting pack.
          </h3>
          <p className="mt-3 max-w-[54ch] text-sm leading-relaxed text-muted-foreground">
            Each discipline stays specialist, but scope, access and evidence are
            coordinated centrally so nothing falls between providers.
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {spokes.map((label, i) => (
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
          src={illustration}
          alt="Illustration of a building with helpdesk, maintenance, HVAC, security, cleaning, compliance, supply chain and reporting connected to it"
          loading="lazy"
          width={1536}
          height={1024}
          className="w-full rounded-lg"
        />
      </div>
    </div>
  );
}
