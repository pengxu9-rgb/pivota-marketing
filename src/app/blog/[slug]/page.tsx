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
    <main className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <JsonLd id="article-jsonld" data={jsonLd} />
      <article className="prose max-w-3xl bg-white text-black rounded-xl p-6 sm:p-8 shadow prose-headings:text-black prose-p:text-black prose-li:text-black prose-strong:text-black prose-a:text-blue-600 prose-code:text-black prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-100 prose-pre:text-gray-900 prose-pre:border prose-pre:border-gray-200">
        <h1>{post.title}</h1>
        <p className="text-sm text-gray-600">
          {new Date(post.date).toLocaleDateString()} · {(post.readingMinutes ?? 3)} min read
        </p>
        {post.tags && post.tags.length > 0 && (
          <p className="mt-2 text-xs text-gray-600">
            {post.tags.map((t) => (
              <span key={t} className="inline-block mr-2 px-2 py-0.5 rounded bg-gray-100 text-gray-700">#{t}</span>
            ))}
          </p>
        )}
        <div className="mt-6" dangerouslySetInnerHTML={{ __html: post.body }} />
      </article>
    </main>
  );
}
