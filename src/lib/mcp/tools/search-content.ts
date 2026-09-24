import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { posts } from "@/content/posts";
import { resources } from "@/content/resources";
import { glossaryTerms } from "@/content/glossary";
import { serviceFamilies } from "@/content/services";
import { sectors } from "@/content/sectors";
import { SITE } from "@/lib/site";

type Hit = { kind: string; title: string; summary: string; url: string; haystack: string };

function corpus(): Hit[] {
  return [
    ...serviceFamilies.map((f) => ({
      kind: "service",
      title: f.name,
      summary: f.short,
      url: `${SITE.origin}/services/${f.slug}`,
      haystack: `${f.name} ${f.short} ${f.intro} ${f.groups.map((g) => `${g.title} ${g.items.join(" ")}`).join(" ")}`,
    })),
    ...sectors.map((s) => ({
      kind: "sector",
      title: s.name,
      summary: s.line,
      url: `${SITE.origin}/sectors/${s.slug}`,
      haystack: `${s.name} ${s.line} ${s.intro} ${s.services.join(" ")}`,
    })),
    ...posts.map((p) => ({
      kind: "article",
      title: p.title,
      summary: p.excerpt,
      url: `${SITE.origin}/blog/${p.slug}`,
      haystack: `${p.title} ${p.excerpt} ${p.category} ${p.body.join(" ")}`,
    })),
    ...resources.map((r) => ({
      kind: "resource",
      title: r.title,
      summary: r.summary,
      url: `${SITE.origin}/resources/${r.slug}`,
      haystack: `${r.title} ${r.kind} ${r.summary} ${r.intro} ${r.sections.map((s) => `${s.heading} ${s.items.join(" ")}`).join(" ")}`,
    })),
    ...glossaryTerms.map((t) => ({
      kind: "glossary",
      title: t.abbreviation ? `${t.term} (${t.abbreviation})` : t.term,
      summary: t.definition,
      url: `${SITE.origin}/resources/fm-glossary`,
      haystack: `${t.term} ${t.abbreviation ?? ""} ${t.definition}`,
    })),
  ];
}

export default defineTool({
  name: "search_content",
  title: "Search the site content",
  description:
    "Keyword search across published services, sectors, articles, resources and the FM glossary. Returns matching titles, summaries and page URLs.",
  inputSchema: {
    query: z.string().trim().min(2).describe("Words to search for, e.g. 'legionella' or 'CAFM'."),
    limit: z.number().int().min(1).max(25).optional().describe("Maximum results (default 8)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query, limit }) => {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    const scored = corpus()
      .map((hit) => {
        const hay = hit.haystack.toLowerCase();
        const score = terms.reduce((total, term) => total + (hay.includes(term) ? 1 : 0), 0);
        return { hit, score };
      })
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit ?? 8)
      .map(({ hit }) => ({
        kind: hit.kind,
        title: hit.title,
        summary: hit.summary,
        url: hit.url,
      }));

    return {
      content: [
        {
          type: "text" as const,
          text: scored.length
            ? scored.map((r) => `[${r.kind}] ${r.title} — ${r.summary}\n${r.url}`).join("\n\n")
            : `No published pages matched "${query}".`,
        },
      ],
      structuredContent: { results: scored },
    };
  },
});
