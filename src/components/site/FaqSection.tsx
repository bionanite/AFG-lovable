import { Reveal } from "./Reveal";

export type Faq = { question: string; answer: string };

/**
 * Visible FAQ block. The text here must match the FAQPage schema on the page
 * exactly — no schema-only content.
 */
export function FaqSection({
  faqs,
  heading = "Common questions",
}: {
  faqs: Faq[];
  heading?: string;
}) {
  return (
    <section className="wash-gradient border-y border-hairline">
      <div className="mx-auto max-w-[80rem] px-6 py-20">
        <Reveal>
          <span className="eyebrow">Questions buyers ask</span>
          <h2 className="mt-3 max-w-[24ch] text-3xl font-bold tracking-[-0.02em] sm:text-4xl">
            {heading}
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={(index % 2) * 80}>
              <div className="panel h-full p-6">
                <h3 className="text-lg font-semibold leading-snug">{faq.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
