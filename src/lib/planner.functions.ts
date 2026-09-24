import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const PlannerInput = z.object({
  requirements: z.string().min(20).max(4000),
  sector: z.string().max(80).optional(),
  sites: z.string().max(80).optional(),
});

const SERVICE_SLUGS = [
  "integrated-fm",
  "hard-fm",
  "soft-services",
  "security-personnel",
  "security-systems",
  "water-compliance",
  "vacant-property",
  "sustainability-energy",
] as const;

const PathwaySchema = z.object({
  summary: z.string(),
  services: z.array(
    z.object({
      slug: z.enum(SERVICE_SLUGS),
      name: z.string(),
      why: z.string(),
    }),
  ),
  considerations: z.array(z.string()),
  questions: z.array(z.string()),
});

export type ServicePathway = z.infer<typeof PathwaySchema>;

const SYSTEM_PROMPT = `You are an advisor for Allied Force Group, a UK security-led integrated facilities services provider.

From the visitor's description of their estate and requirements, recommend a tailored service pathway.

Allied Force Group service families (use these exact slugs):
- integrated-fm: Integrated FM — mobilisation, helpdesk, planned and reactive works, compliance, reporting, supply-chain coordination
- hard-fm: Hard FM — mechanical, HVAC, electrical, plumbing, building fabric, fire and life-safety support, statutory compliance coordination
- soft-services: Soft services — commercial and specialist cleaning, washroom and hygiene, front of house, portering, grounds, waste
- security-personnel: Security personnel — manned guarding, mobile patrols, keyholding and alarm response, reception security, event support
- security-systems: Security systems — CCTV, access control, intruder alarms, monitoring and connected services, lone-worker systems
- water-compliance: Water compliance — Legionella risk-assessment coordination, sampling and monitoring, TMV servicing, flushing and temperature regimes, record keeping
- vacant-property: Vacant property management — inspections, security and access, utilities and compliance checks, clearance, handback preparation
- sustainability-energy: Sustainability and energy — energy review, waste reduction, sustainability planning and practical improvements

Rules, without exception:
- Recommend between 2 and 5 service families, most relevant first.
- Describe capability only. Never state or imply accreditations, certifications, SIA or ISO status, licensing standards, response times, SLAs, uptime, client names, prices, headcounts or performance metrics.
- For regulated or specialist work, say scope and delivery arrangements are confirmed following a site review.
- Write in plain British English, direct and conservative. No marketing superlatives.
- "considerations": 3-5 short practical points about access, scope, evidence or mobilisation for this kind of estate.
- "questions": 3-4 short questions Allied Force Group would ask before quoting.`;

export const recommendPathway = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => PlannerInput.parse(input))
  .handler(async ({ data }): Promise<ServicePathway> => {
    const key = process.env["LOVABLE_API_KEY"];
    if (!key) throw new Error("AI is not configured.");

    const { createOpenAI } = await import("@ai-sdk/openai");
    const { streamText, Output } = await import("ai");
    const { createLovableAiGatewayRunIdFetch } = await import(
      "./ai-gateway.server"
    );

    const runIdFetch = createLovableAiGatewayRunIdFetch();
    const lovable = createOpenAI({
      baseURL: "https://ai.gateway.lovable.dev/v1",
      apiKey: key,
      headers: {
        "Lovable-API-Key": key,
        "X-Lovable-AIG-SDK": "vercel-ai-sdk",
      },
      fetch: runIdFetch.fetch,
    });

    const detail = [
      data.sector ? `Sector: ${data.sector}` : null,
      data.sites ? `Sites in scope: ${data.sites}` : null,
      `Requirements: ${data.requirements}`,
    ]
      .filter(Boolean)
      .join("\n");

    const result = streamText({
      model: lovable.responses("openai/gpt-6-astra"),
      system: SYSTEM_PROMPT,
      prompt: detail,
      output: Output.object({ schema: PathwaySchema }),
      providerOptions: {
        openai: {
          forceReasoning: true,
          reasoningEffort: "low",
          reasoningSummary: "auto",
          store: false,
          include: ["reasoning.encrypted_content"],
        },
      },
    });

    return (await result.output) as ServicePathway;
  });
