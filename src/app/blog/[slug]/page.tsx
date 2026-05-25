import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { getPostBySlug } from "@/lib/blog";
import { demotedBlogSlugs } from "@/lib/marketing";

type ParamsPromise = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: ParamsPromise): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug("en", slug);
  if (!post) return { title: "Not found" };
  const isDemoted = demotedBlogSlugs.includes(slug as (typeof demotedBlogSlugs)[number]);
  return {
    title: post.title,
    description: post.description,
    robots: isDemoted ? { index: false, follow: true } : undefined,
    alternates: {
      canonical: `/blog/${post.slug}`,
      languages: { en: `/blog/${post.slug}`, "x-default": `/blog/${post.slug}` },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.ogImage ? [{ url: post.ogImage, width: 1200, height: 630 }] : undefined,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: ParamsPromise) {
  const { slug } = await params;
  const post = await getPostBySlug("en", slug);
  if (!post) return <main className="container-max py-16">Not found</main>;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: "Pivota", logo: { "@type": "ImageObject", url: "/favicon.ico" } },
    image: post.ogImage ? [post.ogImage] : undefined,
  } as const;

  return (
    <main className="container-max mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd id="article-jsonld" data={jsonLd} />
      <article className="prose prose-neutral max-w-3xl rounded-lg border border-border/70 bg-card/80 p-6 shadow-[0_18px_44px_-32px_rgba(34,25,14,0.36)] prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary prose-code:rounded prose-code:bg-background/80 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-foreground prose-pre:border prose-pre:border-border/70 prose-pre:bg-background/80 prose-pre:text-foreground sm:p-8">
        <h1>{post.title}</h1>
        <p className="text-sm text-muted-foreground">
          {new Date(post.date).toLocaleDateString()} · {(post.readingMinutes ?? 3)} min read
        </p>
        {post.tags && post.tags.length > 0 && (
          <p className="mt-2 text-xs text-muted-foreground">
            {post.tags.map((t) => (
              <span key={t} className="mr-2 inline-block rounded border border-border/70 bg-background/70 px-2 py-0.5 text-muted-foreground">#{t}</span>
            ))}
          </p>
        )}
        <div className="mt-6" dangerouslySetInnerHTML={{ __html: post.body }} />
      </article>
    </main>
  );
}
