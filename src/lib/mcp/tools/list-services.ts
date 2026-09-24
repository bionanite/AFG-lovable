import { defineTool } from "@lovable.dev/mcp-js";
import { serviceFamilies } from "@/content/services";
import { SITE } from "@/lib/site";

export default defineTool({
  name: "list_services",
  title: "List service families",
  description:
    "List the eight service families Allied Force Group delivers, with a one-line summary and page URL for each.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const services = serviceFamilies.map((family) => ({
      slug: family.slug,
      name: family.name,
      summary: family.short,
      url: `${SITE.origin}/services/${family.slug}`,
    }));
    return {
      content: [
        {
          type: "text" as const,
          text: services.map((s) => `${s.name} (${s.slug}) — ${s.summary}`).join("\n"),
        },
      ],
      structuredContent: { services },
    };
  },
});
