import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { serviceFamilies, getServiceFamily } from "@/content/services";
import { SITE } from "@/lib/site";

export default defineTool({
  name: "get_service",
  title: "Get a service family",
  description:
    "Return the full published detail for one service family: intro, grouped scope items and page URL.",
  inputSchema: {
    slug: z
      .string()
      .describe(`Service family slug. One of: ${serviceFamilies.map((f) => f.slug).join(", ")}`),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const family = getServiceFamily(slug);
    if (!family) {
      throw new ToolError(
        `Unknown service slug "${slug}". Use list_services to see the available slugs.`,
      );
    }
    const service = {
      slug: family.slug,
      name: family.name,
      summary: family.short,
      intro: family.intro,
      url: `${SITE.origin}/services/${family.slug}`,
      groups: family.groups.map((group) => ({
        title: group.title,
        items: group.items.map((item) => item),
      })),
      note: family.note ?? null,
    };
    const text = [
      `${service.name} — ${service.url}`,
      service.intro,
      ...service.groups.map(
        (group) => `\n${group.title}:\n${group.items.map((i) => `- ${i}`).join("\n")}`,
      ),
      service.note ?? "",
    ]
      .filter(Boolean)
      .join("\n");
    return { content: [{ type: "text" as const, text }], structuredContent: { service } };
  },
});
