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
  "Staged rollout is normal.",
  "Discovery, feeds, and link-out are valid starting paths.",
  "Some merchants are ready to start deeper earlier.",
  "Merchant-native checkout stays in merchant-controlled systems.",
  "It does not mean every agent surface runs fully in-chat checkout.",
] as const;

const fitItems = [
  "You want to start improving AI-agent readiness without waiting for the deepest integration stage.",
  "You need to clean up catalog, offer, or measurement gaps first.",
  "You want to see where continuity breaks before committing to deeper checkout work.",
  "You want a safer staged rollout across merchant systems.",
] as const;

const faqItems = [
  {
    question: "Does starting lighter mean lower value?",
    answer:
      "No. Lighter paths can still improve discoverability, product resolution, offer matching, and handoff quality before deeper checkout execution.",
  },
  {
    question: "Can some merchants start with merchant-native checkout on day one?",
    answer:
      "Yes. Some merchants are already ready for the deeper path when checkout, payment, order, and execution continuity are already in good shape.",
  },
  {
    question: "Does merchant-native checkout mean every flow is fully inside chat?",
    answer:
      "No. Merchant-native checkout means the path stays in merchant-controlled systems. Some surfaces may still use link-out or another merchant-controlled handoff.",
  },
  {
    question: "Can I deepen later?",
    answer:
      "Yes. That is the intended staged-rollout model. Many merchants start lighter and deepen when readiness improves.",
  },
] as const;

export const metadata = buildMarketingMetadata({
  title: "Can I Start Before Merchant-Native Checkout? | Pivota",
  description:
    "Yes. Many merchants start with discovery, feeds, or link-out before deeper merchant-native checkout. Pivota supports staged rollout based on merchant readiness.",
  path: routePaths.startBeforeMerchantNativeCheckout,
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: routePaths.home },
  {
    name: "Can I start before merchant-native checkout?",
    path: routePaths.startBeforeMerchantNativeCheckout,
  },
]);

const faqJsonLd = buildFaqJsonLd(faqItems);

export default function StartBeforeMerchantNativeCheckoutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd id="start-before-checkout-breadcrumb-jsonld" data={breadcrumbJsonLd} />
      <JsonLd id="start-before-checkout-faq-jsonld" data={faqJsonLd} />

      <main className="overflow-hidden">
        <section className="relative bg-gradient-to-b from-background via-background to-card">
          <div className="bg-site-grid absolute inset-0 opacity-15" />

          <div className="section-padding relative">
            <div className="container-max space-y-6">
              <PageChrome
                items={[
                  { label: "Home", href: routePaths.home },
                  { label: "Can I start before merchant-native checkout?" },
                ]}
              />

              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Rollout boundary
                  </p>
                  <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
                    Can I start before merchant-native checkout?
                  </h1>
                  <AnswerBlock className="max-w-3xl">
                    <p>
                      Yes. Many merchants start with discovery, feeds, or link-out before deeper
                      merchant-native checkout. Merchant-native checkout is a deeper rollout stage
                      when checkout, payment, order, and webhook continuity are ready.
                    </p>
                    <p className="mt-2">
                      Merchants do not need the deepest integration on day one. The right start
                      depends on catalog clarity, offer logic, checkout readiness, payment
                      continuity, and operational confidence.
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
                      <Link href={routePaths.merchantNativeCheckout}>Merchant-native checkout</Link>
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
                    The deepest path is not the only valid starting point.
                  </h2>
                  <p className="max-w-4xl text-sm leading-7 text-muted-foreground">
                    A common misread is that merchants must begin with the deepest integration
                    stage on day one. In practice, many merchants first need cleaner discovery,
                    better offer resolution, or safer handoff into merchant systems before they
                    deepen into merchant-native checkout. Pivota supports that staged rollout.
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
                      Use this page when rollout sequence is the main question.
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
                          Catalog clarity, offer logic, recommendation quality, or measurement are
                          the first gaps to fix. Discovery, feeds, and link-out are valid starting
                          points.
                        </p>
                      </div>
                      <div className="rounded-2xl border border-border/70 bg-background/55 p-5">
                        <p className="text-sm font-semibold text-foreground">Go deeper when</p>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">
                          Checkout, payment, order, and webhook continuity are already in good
                          shape and the merchant wants stronger merchant-controlled execution
                          continuity earlier.
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
                    Rollout timing FAQ
                  </h2>
                </div>
                <QuestionAnswerList items={faqItems} columns={2} />
              </div>

              <div className="section-frame px-6 py-8 sm:px-10 sm:py-10">
                <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-primary">CTA</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                      Ready to decide whether lighter rollout or deeper checkout is the next move?
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
                      <Link href={routePaths.merchantNativeCheckout}>Merchant-native checkout</Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm">
                <Link href={routePaths.merchantOnboarding} className="text-primary hover:underline">
                  Merchant onboarding
                </Link>
                <Link href={routePaths.faq} className="text-primary hover:underline">
                  FAQ
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
