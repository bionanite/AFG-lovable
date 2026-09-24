import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { posts } from "@/content/posts";
import { SITE } from "@/lib/site";

export default defineTool({
  name: "get_article",
  title: "Get an article",
  description:
    "Return the full published text of one article from the Insights section. Omit the slug to list the available articles.",
  inputSchema: {
    slug: z.string().optional().describe("Article slug. Omit to list all article slugs."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    if (!slug) {
      const list = posts.map((p) => ({
        slug: p.slug,
        title: p.title,
        date: p.date,
        category: p.category,
        url: `${SITE.origin}/blog/${p.slug}`,
      }));
      return {
        content: [
          {
            type: "text" as const,
            text: list.map((p) => `${p.date} — ${p.title} (${p.slug})`).join("\n"),
          },
        ],
        structuredContent: { articles: list },
      };
    }
    const post = posts.find((p) => p.slug === slug);
    if (!post) {
      throw new ToolError(
        `Unknown article slug "${slug}". Call get_article with no slug to list the available articles.`,
      );
    }
    const article = {
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      date: post.date,
      category: post.category,
      readingTime: post.readingTime,
      url: `${SITE.origin}/blog/${post.slug}`,
      body: post.body.map((paragraph) => paragraph),
    };
    return {
      content: [
        {
          type: "text" as const,
          text: `${article.title}\n${article.date} · ${article.category}\n${article.url}\n\n${article.body.join("\n\n")}`,
        },
      ],
      structuredContent: { article },
    };
  },
});
