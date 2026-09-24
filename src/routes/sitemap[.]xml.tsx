import { createFileRoute } from "@tanstack/react-router";
import { allUrls } from "@/lib/site-urls";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const body = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          ...allUrls().map((url) => {
            const lastmod = url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : "";
            return `  <url><loc>${absoluteUrl(url.path)}</loc>${lastmod}</url>`;
          }),
          "</urlset>",
          "",
        ].join("\n");

        return new Response(body, {
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600, s-maxage=86400",
          },
        });
      },
    },
  },
});
