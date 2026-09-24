import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/site/Button";
import { getPost, posts, formatDate } from "@/content/posts";

import { pageHead } from "@/lib/site";
import { breadcrumbSchema, scriptTag, articleSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article not found | Allied Force Group" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const path = `/blog/${loaderData.slug}`;
    return {
      ...pageHead({
        path,
        title: `${loaderData.title} | Allied Force Group`,
        description: loaderData.excerpt,
        type: "article",
      }),
      scripts: [
        scriptTag([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/blog" },
            { name: loaderData.title, path },
          ]),
        articleSchema({
          headline: loaderData.title,
          description: loaderData.excerpt,
          path,
          datePublished: loaderData.date,
        }),
        ]),
      ],
    };
  },
  notFoundComponent: PostNotFound,
  component: PostPage,
});

function PostNotFound() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-[80rem] px-6 py-28 text-center">
        <h1 className="text-3xl font-bold">Article not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          This piece may have been moved or retired.
        </p>
        <div className="mt-7">
          <Link to="/blog">
            <Button>Back to insights</Button>
          </Link>
        </div>
      </div>
    </SiteLayout>
  );
}

function PostPage() {
  const post = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <SiteLayout>
      <article>
        <header className="wash-gradient border-b border-hairline">
          <div className="mx-auto max-w-[52rem] px-6 py-16 lg:py-20">
            <Breadcrumbs
              trail={[
                { name: "Home", path: "/" },
                { name: "Insights", path: "/blog" },
                { name: post.title, path: `/blog/${post.slug}` },
              ]}
            />
            <div className="eyebrow mt-6">{post.category}</div>
            <h1 className="mt-4 text-4xl font-bold leading-[1.08] sm:text-5xl">
              {post.title}
            </h1>
            <div className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              {formatDate(post.date)} · {post.readingTime}
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-[52rem] px-6 py-16">
          <p className="text-lg leading-relaxed text-foreground/90">
            {post.excerpt}
          </p>
          <div className="mt-8 grid gap-6">
            {post.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-base leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      <section className="wash-gradient border-t border-hairline">
        <div className="mx-auto max-w-[80rem] px-6 py-16">
          <span className="eyebrow">More insights</span>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                to="/blog/$slug"
                params={{ slug: item.slug }}
                className="panel p-6 transition-colors hover:border-signal"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
                  {item.category}
                </div>
                <h3 className="mt-3 text-base font-semibold leading-snug">
                  {item.title}
                </h3>
                <div className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  {formatDate(item.date)}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
