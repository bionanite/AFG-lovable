import type { ReactNode } from "react";
import { Reveal } from "@/components/site/Reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <section className="wash-gradient relative overflow-hidden border-b border-hairline">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-32 size-[28rem] rounded-full opacity-[0.18] blur-3xl"
        style={{ background: "var(--gradient-brand, var(--color-signal))" }}
      />
      <div className="relative mx-auto max-w-[80rem] px-6 py-20 lg:py-28">
        <Reveal as="span" className="eyebrow inline-flex items-center gap-2">
          <span className="pulse-dot size-1.5 rounded-full bg-signal" />
          {eyebrow}
        </Reveal>
        <Reveal delay={90}>
          <h1 className="mt-5 max-w-[20ch] text-4xl font-bold leading-[1.02] tracking-[-0.02em] sm:text-5xl lg:text-[4rem]">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={170}>
          <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
            {intro}
          </p>
        </Reveal>
        {children ? (
          <Reveal delay={250} className="mt-9">
            {children}
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
