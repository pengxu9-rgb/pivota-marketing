import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnswerBlock from "@/components/AnswerBlock";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import PageChrome from "@/components/PageChrome";
import QuestionAnswerList from "@/components/QuestionAnswerList";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  buildMarketingMetadata,
  coreAnswerBlock,
  faqItems,
  homepageFaqItems,
  routePaths,
} from "@/lib/marketing";
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/schema";

export const metadata = buildMarketingMetadata({
  title: "FAQ | Pivota Merchant Gateway for Agent-Native Commerce",
  description:
    "Answers about store platforms, merchant control, fallback, onboarding, execution continuity, and how Pivota helps merchants turn agent demand into completed transactions.",
  path: routePaths.faq,
});

const faqJsonLd = buildFaqJsonLd(faqItems);
const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: routePaths.home },
  { name: "FAQ", path: routePaths.faq },
]);

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd id="faq-jsonld" data={faqJsonLd} />
      <JsonLd id="faq-breadcrumb-jsonld" data={breadcrumbJsonLd} />

      <main className="overflow-hidden">
        <section className="relative bg-gradient-to-b from-background via-background to-card">
          <div className="bg-site-grid absolute inset-0 opacity-15" />

          <div className="section-padding relative">
            <div className="container-max space-y-6">
              <PageChrome
                items={[
                  { label: "Home", href: routePaths.home },
                  { label: "FAQ" },
                ]}
              />

              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Merchant and builder FAQ
                  </p>
                  <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
                    FAQ about store platforms, merchant control, and turning agent demand into transactions.
                  </h1>
                  <AnswerBlock className="max-w-3xl">
                    <p>{coreAnswerBlock[0]}</p>
                    <p className="mt-2">
                      These answers stay visible in raw HTML so merchants, builders, and LLMs can
                      inspect the objections that matter most: whether Pivota replaces a store
                      platform or storefront, whether replatforming is required, how staged rollout
                      works, and why it still matters when platform-native AI paths exist.
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
                      <Link href={routePaths.agentIntegration}>Agent Integration</Link>
                    </Button>
                  </div>
                </div>

                <div className="section-frame px-6 py-6 sm:px-7">
                  <h2 className="text-xl font-semibold tracking-tight text-foreground">
                    Why these answers stay visible
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    The highest-value questions stay expanded in the raw HTML so LLMs and human
                    readers can inspect store-platform boundaries, merchant objections, and
                    execution workflow without relying on accordion state or client-side
                    interaction.
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Visible answers
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Merchant objections answered directly.
                  </h2>
                </div>
                <QuestionAnswerList items={homepageFaqItems} columns={2} />
              </div>

              <div className="section-frame overflow-hidden px-6 py-4 sm:px-8">
                <div className="mb-2">
                  <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                    More questions
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    The full FAQ expands on store platforms, storefront boundaries, staged rollout,
                    implementation burden, fallback, conversion continuity, measurement, and agent
                    integration boundaries.
                  </p>
                </div>
                <Accordion type="single" collapsible>
                  {faqItems.map((item, index) => (
                    <AccordionItem key={item.question} value={`item-${index + 1}`}>
                      <AccordionTrigger className="text-left text-base text-foreground">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm leading-7 text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div className="flex flex-wrap gap-4 text-sm">
                <Link href={routePaths.merchantOnboarding} className="text-primary hover:underline">
                  Merchant onboarding
                </Link>
                <Link href={routePaths.agentIntegration} className="text-primary hover:underline">
                  Agent Integration
                </Link>
                <Link href={routePaths.useCases} className="text-primary hover:underline">
                  Use cases
                </Link>
                <Link href={routePaths.doINeedToRebuildMyStore} className="text-primary hover:underline">
                  Do I need to rebuild my store?
                </Link>
                <Link href={routePaths.makeProductsDiscoverable} className="text-primary hover:underline">
                  How to make products discoverable to AI shopping agents
                </Link>
                <Link href={routePaths.startBeforeMerchantNativeCheckout} className="text-primary hover:underline">
                  Can I start before merchant-native checkout?
                </Link>
                <Link href={routePaths.pivotaImplementationEffort} className="text-primary hover:underline">
                  How much implementation work is required?
                </Link>
                <Link href={routePaths.skincareBeautyMerchants} className="text-primary hover:underline">
                  Skincare & beauty merchants
                </Link>
                <Link href={routePaths.promotionReadiness} className="text-primary hover:underline">
                  Promotion readiness
                </Link>
                <Link href={routePaths.pivotaVsShopify} className="text-primary hover:underline">
                  Pivota with Shopify and other store platforms
                </Link>
                <Link href={routePaths.whatIsAgenticCommerce} className="text-primary hover:underline">
                  What is agentic commerce?
                </Link>
                <Link href={routePaths.whatIsAgentNativeCommerce} className="text-primary hover:underline">
                  What is agent-native commerce?
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
