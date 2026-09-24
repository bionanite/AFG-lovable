import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseAnon } from "../supabase";

export default defineTool({
  name: "submit_enquiry",
  title: "Send an enquiry",
  description:
    "Send an enquiry to Allied Force Group, exactly as the website contact form does. Only submit details the person has given you.",
  inputSchema: {
    name: z.string().trim().min(2).max(100).describe("Contact name."),
    email: z.string().trim().email().max(255).describe("Contact email address."),
    message: z.string().trim().min(10).max(2000).describe("What they need covering."),
    company: z.string().trim().max(120).optional().describe("Company or organisation."),
    phone: z.string().trim().max(40).optional().describe("Contact phone number."),
    service: z.string().trim().max(120).optional().describe("Service of interest."),
    sites: z.string().trim().max(120).optional().describe("Number or type of sites."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, openWorldHint: false },
  handler: async ({ name, email, message, company, phone, service, sites }) => {
    const { error } = await supabaseAnon().from("enquiries").insert({
      name,
      email,
      message,
      company: company || null,
      phone: phone || null,
      service: service || null,
      sites: sites || null,
    });
    if (error) {
      return {
        content: [
          {
            type: "text" as const,
            text: "The enquiry could not be recorded. Please call 020 7183 9055 or email sales@alliedforcegroup.com.",
          },
        ],
        isError: true,
      };
    }
    return {
      content: [
        {
          type: "text" as const,
          text: "Enquiry received. The team will be in touch; for anything urgent, call 020 7183 9055.",
        },
      ],
      structuredContent: { submitted: true },
    };
  },
});
