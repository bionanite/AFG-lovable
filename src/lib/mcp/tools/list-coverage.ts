import { defineTool } from "@lovable.dev/mcp-js";
import { areas } from "@/content/areas";
import { SITE } from "@/lib/site";

export default defineTool({
  name: "list_coverage_areas",
  title: "List UK coverage areas",
  description:
    "List the UK regions covered, with the main centres named on each region page. Actual coverage for a given site is confirmed following a site review.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = areas.map((area) => ({
      slug: area.slug,
      name: area.name,
      summary: area.line,
      places: area.places.map((p) => p),
      url: `${SITE.origin}/areas/${area.slug}`,
    }));
    return {
      content: [
        {
          type: "text" as const,
          text: items
            .map((a) => `${a.name} (${a.slug}) — ${a.summary} Centres: ${a.places.join(", ")}.`)
            .join("\n"),
        },
      ],
      structuredContent: { areas: items },
    };
  },
});
