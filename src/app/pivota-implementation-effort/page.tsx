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
  "No replatforming is required.",
  "Lighter starting paths are available.",
  "Effort varies by catalog, offers, checkout, and payment complexity.",
  "Staged rollout reduces pressure to do everything at once.",
  "Deeper execution comes later when readiness improves.",
] as const;

const fitItems = [
  "You are evaluating time, scope, and internal coordination.",
  "You want a realistic picture of lighter versus deeper rollout.",
  "You need a sequence that works for ecommerce, ops, and engineering together.",
  "You want the safest next move, not the biggest possible integration.",
] as const;

const faqItems = [
  {
    question: "Is Pivota plug-and-play for every merchant?",
    answer:
      "No. Effort depends on rollout stage and merchant complexity. Pivota is neither universally plug-and-play nor automatically a large integration project.",
  },
  {
    question: "What usually increases implementation effort?",
    answer:
      "Complex catalog logic, offer logic, checkout behavior, payment flows, and webhook requirements usually increase implementation effort.",
  },
  {
    question: "Can I start small and expand later?",
    answer:
      "Yes. Many merchants start with lighter paths and deepen later. That staged-rollout model is built into the way Pivota is positioned.",
  },
  {
    question: "Do I need a full engineering project before I can start?",
    answer:
      "Not always. The lighter paths focus on queryability, feeds, or safer handoff before deeper checkout, payment, order, and webhook continuity work.",
  },
] as const;

export const metadata = buildMarketingMetadata({
  title: "How Much Implementation Work Is Required to Use Pivota? | Pivota",
  description:
    "Implementation effort depends on rollout stage. Discovery, feeds, and link-out are lighter starting paths. Deeper checkout, payment, order, and webhook flows usually require more merchant-specific work.",
  path: routePaths.pivotaImplementationEffort,
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: routePaths.home },
  {
    name: "How much implementation work is required?",
    path: routePaths.pivotaImplementationEffort,
  },
]);

const faqJsonLd = buildFaqJsonLd(faqItems);

export default function PivotaImplementationEffortPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd id="implementation-effort-breadcrumb-jsonld" data={breadcrumbJsonLd} />
      <JsonLd id="implementation-effort-faq-jsonld" data={faqJsonLd} />

      <main className="overflow-hidden">
        <section className="relative bg-gradient-to-b from-background via-background to-card">
          <div className="bg-site-grid absolute inset-0 opacity-15" />

          <div className="section-padding relative">
            <div className="container-max space-y-6">
              <PageChrome
                items={[
                  { label: "Home", href: routePaths.home },
                  { label: "How much implementation work is required?" },
                ]}
              />

              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Implementation planning
                  </p>
                  <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
                    How much implementation work is required to use Pivota?
                  </h1>
                  <AnswerBlock className="max-w-3xl">
                    <p>
                      Implementation effort depends on rollout stage. Discovery, feeds, and
                      link-out are the lighter starting paths. Deeper checkout, payment, order,
                      and webhook flows usually require more merchant-specific work.
                    </p>
                    <p className="mt-2">
                      The practical answer is stage-based and merchant-specific. Lighter paths
                      focus on queryability, feeds, or safer handoff. Deeper paths touch
                      checkout, payment, order, and webhook continuity.
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
                      <Link href="/#contact">Talk to us</Link>
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
                    Merchant effort is best understood as a rollout decision, not a yes-or-no label.
                  </h2>
                  <p className="max-w-4xl text-sm leading-7 text-muted-foreground">
                    Merchants often ask whether Pivota is fully plug-and-play or automatically a
                    large integration project. The practical answer is neither. Some stages are
                    lighter and focus on queryability, feeds, or safer handoff. Deeper stages
                    require more merchant-specific work because they touch checkout, payment,
                    order, and webhook continuity.
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
                      Use this page when effort and sequence are the main concerns.
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
                          Discoverability, offer resolution, or handoff quality need work first
                          and the merchant wants the safest next move with lower implementation
                          burden.
                        </p>
                      </div>
                      <div className="rounded-2xl border border-border/70 bg-background/55 p-5">
                        <p className="text-sm font-semibold text-foreground">Go deeper when</p>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">
                          The merchant is ready for stronger continuity across checkout, payment,
                          orders, and webhooks and can support the deeper execution stage.
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
                    Implementation effort FAQ
                  </h2>
                </div>
                <QuestionAnswerList items={faqItems} columns={2} />
              </div>

              <div className="section-frame px-6 py-8 sm:px-10 sm:py-10">
                <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-primary">CTA</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                      Ready to choose the safest next rollout stage?
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
                      <Link href="/#contact">Talk to us</Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm">
                <Link href={routePaths.merchantOnboarding} className="text-primary hover:underline">
                  Merchant onboarding
                </Link>
                <Link href={routePaths.startBeforeMerchantNativeCheckout} className="text-primary hover:underline">
                  Can I start before merchant-native checkout?
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
