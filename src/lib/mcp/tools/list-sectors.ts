import { defineTool } from "@lovable.dev/mcp-js";
import { sectors } from "@/content/sectors";
import { SITE } from "@/lib/site";

export default defineTool({
  name: "list_sectors",
  title: "List sectors served",
  description:
    "List the sectors Allied Force Group works in, with a one-line summary and page URL for each.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = sectors.map((sector) => ({
      slug: sector.slug,
      name: sector.name,
      summary: sector.line,
      url: `${SITE.origin}/sectors/${sector.slug}`,
    }));
    return {
      content: [
        {
          type: "text" as const,
          text: items.map((s) => `${s.name} (${s.slug}) — ${s.summary}`).join("\n"),
        },
      ],
      structuredContent: { sectors: items },
    };
  },
});
