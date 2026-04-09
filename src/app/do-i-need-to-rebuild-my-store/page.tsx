import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnswerBlock from "@/components/AnswerBlock";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import PageChrome from "@/components/PageChrome";
import QuestionAnswerList from "@/components/QuestionAnswerList";
import { Button } from "@/components/ui/button";
import { buildMarketingMetadata, routePaths } from "@/lib/marketing";
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/schema";

const summaryBullets = [
  "Pivota is not a storefront replacement.",
  "Merchants keep the store platform they already use.",
  "Many merchants start with discovery, feeds, or link-out first.",
  "Deeper merchant-native checkout can come later when readiness improves.",
] as const;

const fitItems = [
  "You want AI-agent readiness without changing store platforms.",
  "You want stronger merchant control and execution continuity.",
  "You already run on Shopify, Wix, WooCommerce, BigCommerce, or a similar stack.",
  "You want staged rollout instead of a large all-at-once migration.",
] as const;

const faqItems = [
  {
    question: "Does Pivota replace Shopify or Wix?",
    answer:
      "No. Pivota works on top of Shopify, Wix, WooCommerce, BigCommerce, and similar stacks. Merchants keep the store platform they already run.",
  },
  {
    question: "Does Pivota replace my storefront?",
    answer:
      "No. Pivota is not a storefront replacement. It adds a merchant-controlled commerce layer on top of the storefront, checkout, payment, and operations systems already in place.",
  },
  {
    question: "What stays in my stack?",
    answer:
      "Merchants keep their storefront, checkout systems, PSP relationships, fulfillment systems, and customer operations. Pivota works on top of that stack.",
  },
  {
    question: "Do I need full checkout integration on day one?",
    answer:
      "No. Many merchants start with discovery, feeds, or link-out first, then deepen into merchant-native checkout when readiness improves.",
  },
] as const;

export const metadata = buildMarketingMetadata({
  title: "Do I Need to Rebuild My Store to Use Pivota? | Pivota",
  description:
    "No. Pivota works on top of Shopify, Wix, WooCommerce, BigCommerce, and similar stacks. No replatforming is required, and merchants keep their storefront, checkout systems, PSP relationships, fulfillment stack, and customer operations.",
  path: routePaths.doINeedToRebuildMyStore,
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: routePaths.home },
  {
    name: "Do I need to rebuild my store?",
    path: routePaths.doINeedToRebuildMyStore,
  },
]);

const faqJsonLd = buildFaqJsonLd(faqItems);

export default function DoINeedToRebuildMyStorePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd id="rebuild-store-breadcrumb-jsonld" data={breadcrumbJsonLd} />
      <JsonLd id="rebuild-store-faq-jsonld" data={faqJsonLd} />

      <main className="overflow-hidden">
        <section className="relative bg-gradient-to-b from-background via-background to-card">
          <div className="bg-site-grid absolute inset-0 opacity-15" />

          <div className="section-padding relative">
            <div className="container-max space-y-6">
              <PageChrome
                items={[
                  { label: "Home", href: routePaths.home },
                  { label: "Do I need to rebuild my store?" },
                ]}
              />

              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Merchant question
                  </p>
                  <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
                    Do I need to rebuild my store to use Pivota?
                  </h1>
                  <AnswerBlock className="max-w-3xl">
                    <p>
                      No. Pivota works on top of Shopify, Wix, WooCommerce, BigCommerce, and
                      similar stacks. No replatforming is required. Merchants keep the
                      storefront, checkout systems, PSP relationships, fulfillment stack, and
                      customer operations they already run.
                    </p>
                    <p className="mt-2">
                      Pivota is a merchant gateway and commerce layer on top of the current
                      stack. The goal is better merchant control and execution continuity, not a
                      rebuild.
                    </p>
                  </AnswerBlock>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild className="btn-hero h-11 px-5 text-sm">
                      <Link href={routePaths.aiReadiness}>
                        See what to fix first
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="h-11 px-5 text-sm">
                      <Link href={routePaths.merchantOnboarding}>Merchant onboarding</Link>
                    </Button>
                  </div>
                </div>

                <div className="section-frame px-6 py-6 sm:px-7">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Summary
                  </p>
                  <div className="mt-4 grid gap-3 text-sm">
                    {summaryBullets.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-border/70 bg-background/55 px-4 py-3 text-foreground"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="section-frame px-6 py-8 sm:px-10 sm:py-10">
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Why this matters
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    The model is additive, not a platform migration.
                  </h2>
                  <p className="max-w-4xl text-sm leading-7 text-muted-foreground">
                    A common merchant objection is to assume that better AI-agent readiness means
                    changing the storefront or moving off the current commerce stack. That is not
                    how Pivota works. Pivota sits on top of existing merchant systems so
                    merchants can improve product resolution, offer logic, checkout continuity,
                    payments, and write-back without replatforming.
                  </p>
                </div>
              </div>

              <div className="section-frame px-6 py-8 sm:px-10 sm:py-10">
                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                  <div className="space-y-4">
                    <p className="text-sm uppercase tracking-[0.18em] text-primary">
                      When this is a fit
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                      Use this path when the problem is readiness, not replatforming.
                    </h2>
                    <div className="grid gap-3">
                      {fitItems.map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-border/70 bg-background/55 px-4 py-3 text-sm leading-6 text-foreground"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-sm uppercase tracking-[0.18em] text-primary">
                      When to start lighter vs deeper
                    </p>
                    <div className="grid gap-4">
                      <div className="rounded-2xl border border-border/70 bg-background/55 p-5">
                        <p className="text-sm font-semibold text-foreground">Start lighter when</p>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">
                          Catalog clarity, offer logic, discovery quality, or safer handoff need
                          work first. Discovery, feeds, and link-out are the lighter starting
                          paths.
                        </p>
                      </div>
                      <div className="rounded-2xl border border-border/70 bg-background/55 p-5">
                        <p className="text-sm font-semibold text-foreground">Go deeper when</p>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">
                          Checkout, payment, order, and webhook continuity are already in good
                          shape and the merchant is ready for stronger execution continuity
                          through merchant-native checkout.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">FAQ</p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Store rebuild boundary FAQ
                  </h2>
                </div>
                <QuestionAnswerList items={faqItems} columns={2} />
              </div>

              <div className="section-frame px-6 py-8 sm:px-10 sm:py-10">
                <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-primary">CTA</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                      Ready to see what needs to change without rebuilding your store?
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild className="btn-hero h-11 px-5 text-sm">
                      <Link href={routePaths.aiReadiness}>
                        See what to fix first
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="h-11 px-5 text-sm">
                      <Link href={routePaths.merchantOnboarding}>Merchant onboarding</Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm">
                <Link href={routePaths.faq} className="text-primary hover:underline">
                  FAQ
                </Link>
                <Link href={routePaths.pivotaVsShopify} className="text-primary hover:underline">
                  Pivota with Shopify and other store platforms
                </Link>
                <Link href={routePaths.merchantNativeCheckout} className="text-primary hover:underline">
                  Merchant-native checkout
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
