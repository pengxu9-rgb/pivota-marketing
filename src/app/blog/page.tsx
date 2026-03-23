import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { buildMarketingMetadata } from "@/lib/marketing";

export const metadata = buildMarketingMetadata({
  title: "Blog | Pivota Merchant Gateway for Agent-Native Commerce",
  description:
    "Notes on the merchant gateway for agent-native commerce, merchant-native transactions, and the execution layer behind LLM and agent traffic.",
  path: "/blog",
});

export default async function BlogIndex() {
  const posts = await getAllPosts("en");

  return (
    <main className="container-max mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <section className="mb-12 max-w-4xl space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Pivota Blog
        </h1>
        <p className="text-lg text-muted-foreground">
          Writing about the merchant gateway for agent-native commerce, merchant-native
          transactions, and the execution layer behind LLM and agent traffic.
        </p>
        <p className="text-sm text-muted-foreground">
          Start with{" "}
          <Link href="/merchant-gateway" className="text-primary hover:underline">
            what a merchant gateway is
          </Link>
          , see{" "}
          <Link href="/how-it-works" className="text-primary hover:underline">
            how Pivota works
          </Link>
          , or review the{" "}
          <Link href="/faq" className="text-primary hover:underline">
            FAQ
          </Link>
          .
        </p>
      </section>

      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((p) => (
          <article
            key={p.slug}
            className="rounded-2xl border border-border/70 bg-card p-6 shadow-[var(--shadow-card)]"
          >
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${p.slug}`} className="hover:underline">
                {p.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-600 mb-2">
              {new Date(p.date).toLocaleDateString()} · {(p.readingMinutes ?? 3)} min read
            </p>
            <p className="text-gray-700">{p.description}</p>
            <div className="mt-4">
              {p.tags && p.tags.length > 0 && (
                <p className="mb-2 text-xs text-gray-600">
                  {p.tags.map((t) => (
                    <span key={t} className="mr-2 inline-block rounded bg-gray-100 px-2 py-0.5 text-gray-700">
                      #{t}
                    </span>
                  ))}
                </p>
              )}
              <Link href={`/blog/${p.slug}`} className="text-blue-600 hover:underline">
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
