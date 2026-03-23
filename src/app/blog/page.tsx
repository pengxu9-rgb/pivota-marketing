import Link from "next/link";
import AnswerBlock from "@/components/AnswerBlock";
import PageChrome from "@/components/PageChrome";
import { getAllPosts } from "@/lib/blog";
import {
  buildMarketingMetadata,
  demotedBlogSlugs,
  routePaths,
} from "@/lib/marketing";

export const metadata = buildMarketingMetadata({
  title: "Blog | Pivota Merchant Gateway for Agent-Native Commerce",
  description:
    "Notes on the merchant gateway for agent-native commerce, merchant-native transactions, and the execution layer behind LLM and agent traffic.",
  path: routePaths.blog,
});

export default async function BlogIndex() {
  const posts = (await getAllPosts("en")).filter(
    (post) => !demotedBlogSlugs.includes(post.slug as (typeof demotedBlogSlugs)[number]),
  );

  return (
    <main className="relative bg-gradient-to-b from-background via-background to-card">
      <div className="bg-site-grid absolute inset-0 opacity-15" />

      <div className="section-padding relative">
        <div className="container-max space-y-6">
          <PageChrome
            items={[
              { label: "Home", href: routePaths.home },
              { label: "Blog" },
            ]}
          />

          <section className="max-w-4xl space-y-5">
            <p className="text-sm uppercase tracking-[0.18em] text-primary">Blog</p>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Pivota Blog
            </h1>
            <AnswerBlock className="max-w-3xl">
              <p>
                Notes on the merchant gateway for agent-native commerce, merchant-native
                transactions, and the execution layer behind LLM and agent traffic.
              </p>
            </AnswerBlock>
            <p className="text-sm text-muted-foreground">
              Start with{" "}
              <Link href={routePaths.merchantGateway} className="text-primary hover:underline">
                what a merchant gateway is
              </Link>
              , see{" "}
              <Link href={routePaths.howPivotaWorks} className="text-primary hover:underline">
                how Pivota works
              </Link>
              , or review the{" "}
              <Link href={routePaths.faq} className="text-primary hover:underline">
                FAQ
              </Link>
              .
            </p>
          </section>

          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((p) => (
              <article key={p.slug} className="section-frame px-6 py-6 sm:px-7">
                <h2 className="text-2xl font-semibold tracking-tight">
                  <Link href={`/blog/${p.slug}`} className="hover:underline">
                    {p.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {new Date(p.date).toLocaleDateString()} · {(p.readingMinutes ?? 3)} min read
                </p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{p.description}</p>
                {p.tags && p.tags.length > 0 ? (
                  <p className="mt-4 text-xs text-muted-foreground">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="mr-2 inline-block rounded bg-background/70 px-2 py-0.5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </p>
                ) : null}
                <Link
                  href={`/blog/${p.slug}`}
                  className="mt-4 inline-block text-sm text-primary hover:underline"
                >
                  Read more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
