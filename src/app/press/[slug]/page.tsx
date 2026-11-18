import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import PageChrome from "@/components/PageChrome";
import { buildMarketingMetadata, routePaths, siteUrl } from "@/lib/marketing";
import { pressArticlePath, pressArticles } from "@/lib/press";
import { buildBreadcrumbJsonLd } from "@/lib/schema";

type ArticlePageProps = { params: Promise<{ slug: string }> };

const linkClass = "text-foreground underline underline-offset-4 hover:decoration-primary";
const socialImage = "/pivota-logo.png";

export const dynamicParams = false;

export function generateStaticParams() {
  return pressArticles.map(({ slug }) => ({ slug }));
}

async function getArticle({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = pressArticles.find((item) => item.slug === slug);
  if (!article) notFound();
  return article;
}

export async function generateMetadata(props: ArticlePageProps): Promise<Metadata> {
  const article = await getArticle(props);
  const metadata = buildMarketingMetadata({
    title: `${article.title} | Pivota`,
    description: article.summary,
    path: pressArticlePath(article.slug),
    ogTitle: article.title,
    ogImage: socialImage,
  });

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime: article.dateIso,
      section: article.category,
      images: [{ url: socialImage, width: 256, height: 256, alt: "Pivota" }],
    },
    twitter: { ...metadata.twitter, card: "summary" },
  };
}

export default async function PressArticlePage(props: ArticlePageProps) {
  const article = await getArticle(props);
  const path = pressArticlePath(article.slug);
  const url = `${siteUrl}${path}`;
  const organization = { "@id": `${siteUrl}/#organization` };
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": `${url}#article`,
    url,
    mainEntityOfPage: url,
    headline: article.title,
    description: article.summary,
    inLanguage: "en",
    datePublished: article.dateIso,
    articleSection: article.category,
    author: organization,
    publisher: organization,
    citation: {
      "@type": "NewsArticle",
      url: article.url,
      publisher: { "@type": "Organization", name: article.publisher },
    },
  };

  const breadcrumbs = [
    { name: "Home", path: routePaths.home },
    { name: "Press", path: routePaths.press },
    { name: article.breadcrumbLabel, path },
  ];
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(breadcrumbs);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd id="press-article-jsonld" data={articleJsonLd} />
      <JsonLd id="press-breadcrumb-jsonld" data={breadcrumbJsonLd} />

      <main id="main-content">
        <article>
          <header className="marketing-hero relative">
            <div className="bg-site-grid absolute inset-0 opacity-15" />
            <div className="section-padding relative">
              <div className="container-max space-y-6">
                <PageChrome items={[
                  { label: "Home", href: routePaths.home },
                  { label: "Press", href: routePaths.press },
                  { label: article.breadcrumbLabel },
                ]} />
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    <time dateTime={article.dateIso}>{article.dateLabel}</time> · {article.category}
                  </p>
                  <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
                    {article.title}
                  </h1>
                  <p className="max-w-3xl text-base leading-8 text-muted-foreground">{article.summary}</p>
                  {article.sources.map((source) => (
                    <p key={source.href} className="text-sm font-semibold">
                      <a href={source.href} className={linkClass}>{source.label}</a>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </header>

          <div className="section-padding bg-gradient-to-b from-card to-background">
            <div className="container-max">
              <div className="section-frame max-w-4xl space-y-8 px-6 py-8 sm:px-10">
                <div className="space-y-4 text-base leading-8 text-muted-foreground">
                  <p className="rounded-2xl border border-border/70 bg-background/70 px-4 py-3 text-sm font-semibold leading-7 text-foreground">
                    {article.status}
                  </p>
                  {article.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>

                {article.sections.map((section) => (
                  <section key={section.heading} className="space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight">{section.heading}</h2>
                    {section.roles ? (
                      <ul className="list-disc space-y-2 pl-5 text-base leading-8 text-muted-foreground">
                        {section.roles.map(({ party, role }) => (
                          <li key={party}><strong className="text-foreground">{party}.</strong> {role}</li>
                        ))}
                      </ul>
                    ) : null}
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-8 text-muted-foreground">{paragraph}</p>
                    ))}
                  </section>
                ))}
                {article.closingStatement ? (
                  <blockquote className="border-l-2 border-primary-ink pl-5 text-base italic leading-8 text-foreground">
                    &ldquo;{article.closingStatement}&rdquo;
                  </blockquote>
                ) : null}

                <section className="space-y-3 border-t border-border/70 pt-6">
                  <h2 className="text-lg font-semibold">More about Pivota</h2>
                  <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm leading-7">
                    <li><Link href={routePaths.about} className={linkClass}>About Pivota</Link></li>
                    {article.relatedLinks.map((link) => (
                      <li key={link.href}><Link href={link.href} className={linkClass}>{link.label}</Link></li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
