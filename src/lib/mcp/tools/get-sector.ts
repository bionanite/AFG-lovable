import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { sectors } from "@/content/sectors";
import { SITE } from "@/lib/site";

export default defineTool({
  name: "get_sector",
  title: "Get a sector",
  description:
    "Return the published detail for one sector: intro, what matters on those estates and the services typically delivered there.",
  inputSchema: {
    slug: z.string().describe(`Sector slug. One of: ${sectors.map((s) => s.slug).join(", ")}`),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const found = sectors.find((s) => s.slug === slug);
    if (!found) {
      throw new ToolError(
        `Unknown sector slug "${slug}". Use list_sectors to see the available slugs.`,
      );
    }
    const sector = {
      slug: found.slug,
      name: found.name,
      summary: found.line,
      intro: found.intro,
      url: `${SITE.origin}/sectors/${found.slug}`,
      priorities: found.priorities.map((p) => ({ title: p.title, body: p.body })),
      services: found.services.map((s) => s),
    };
    const text = [
      `${sector.name} — ${sector.url}`,
      sector.intro,
      ...sector.priorities.map((p) => `\n${p.title}: ${p.body}`),
      `\nServices typically delivered here:\n${sector.services.map((s) => `- ${s}`).join("\n")}`,
    ].join("\n");
    return { content: [{ type: "text" as const, text }], structuredContent: { sector } };
  },
});
