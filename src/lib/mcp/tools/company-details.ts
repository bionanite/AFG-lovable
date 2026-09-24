import { defineTool } from "@lovable.dev/mcp-js";
import { SITE } from "@/lib/site";
import { legalEntityLine } from "@/content/legal";

export default defineTool({
  name: "company_details",
  title: "Company and contact details",
  description:
    "Return Allied Force Group's published contact details, positioning and the legal entity line shown on the site.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const company = {
      name: SITE.name,
      legalName: SITE.legalName,
      description: SITE.description,
      website: SITE.origin,
      phone: SITE.phoneDisplay,
      phoneE164: SITE.phoneE164,
      email: SITE.email,
      legalEntityLine,
      contactPage: `${SITE.origin}/contact`,
    };
    return {
      content: [
        {
          type: "text" as const,
          text: `${company.legalName}\n${company.description}\nPhone: ${company.phone}\nEmail: ${company.email}\nWebsite: ${company.website}\n${company.legalEntityLine}`,
        },
      ],
      structuredContent: { company },
    };
  },
});
