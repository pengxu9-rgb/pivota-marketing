import { CheckCircle2, ChevronRight, SearchCheck, Sparkles, Wrench } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnswerBlock from "@/components/AnswerBlock";
import AiReadinessHeroActions from "@/components/AiReadinessHeroActions";
import TrackedMerchantCtaLink from "@/components/TrackedMerchantCtaLink";
import { appendSearchParamRecordToPath, type SearchParamRecord } from "@/lib/merchant-signup";
import {
  aiReadinessMetaDescription,
  aiReadinessSignupPath,
  aiReadinessTitle,
  buildMarketingMetadata,
  routePaths,
} from "@/lib/marketing";

const readinessAreas = [
  {
    title: "LLM / Agent Readiness Analysis",
    body: "Understand how ready your catalog, checkout, and payment stack are for AI-driven commerce.",
    icon: Sparkles,
  },
  {
    title: "Clear Issue Breakdown",
    body: "See exact issues across product data, variants, checkout, and payments.",
    icon: SearchCheck,
  },
  {
    title: "Optimization Plan",
    body: "Get a prioritized action plan to improve discoverability, execution, and measurement.",
    icon: Wrench,
  },
  {
    title: "Recommended Activation Path",
    body: "Know whether to start with link-out, feeds, or merchant-native checkout.",
    icon: CheckCircle2,
  },
] as const;

const pressurePoints = [
  "Catalogs are hard for AI to understand",
  "Product and variant data is inconsistent",
  "Checkout and payments are not agent-ready",
  "Merchants lack a clear path to activation and measurement",
] as const;

const steps = [
  {
    title: "Connect your store",
    body: "Sign up and connect your store platform and payment setup.",
  },
  {
    title: "Get your analysis",
    body: "Pivota evaluates your catalog structure, offers, variants, checkout flow, and payment readiness.",
  },
  {
    title: "Follow your optimization plan",
    body: "Receive a practical action plan to start capturing traffic and conversions from LLMs and Agents.",
  },
] as const;

export const metadata = buildMarketingMetadata({
  title: aiReadinessTitle,
  description: aiReadinessMetaDescription,
  path: routePaths.aiReadiness,
});

type AiReadinessPageProps = {
  searchParams?: Promise<SearchParamRecord>;
};

export default async function AiReadinessPage({ searchParams }: AiReadinessPageProps) {
  const resolvedSearchParams = (await searchParams) ?? {};
  const signupHref = appendSearchParamRecordToPath(aiReadinessSignupPath, resolvedSearchParams);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="overflow-hidden">
        <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-card pt-2 sm:pt-3">
          <div className="bg-site-grid absolute inset-0 opacity-20" />
          <div className="absolute left-[10%] top-10 h-52 w-52 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute right-[10%] top-10 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />

          <div className="section-padding relative">
            <div className="container-max">
              <div className="section-frame overflow-hidden p-6 sm:p-8 lg:p-10">
                <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                  <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
                      <Sparkles className="h-3.5 w-3.5" />
                      Free readiness analysis after store connection
                    </div>

                    <div className="space-y-3">
                      <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        Make your store ready for LLMs and Agents
                      </h1>
                      <AnswerBlock className="max-w-3xl">
                        <p>
                          Connect your store to Pivota and get a free readiness analysis of your
                          catalog, checkout, and payment setup for AI-driven commerce.
                        </p>
                        <p className="mt-2">
                          Receive a clear optimization plan to help you acquire customers from LLMs
                          and Agents.
                        </p>
                      </AnswerBlock>
                    </div>

                    <AiReadinessHeroActions signupHref={signupHref} />

                    <p className="text-sm leading-7 text-muted-foreground">
                      No replatforming. Keep your storefront, PSP, fulfillment, and operations.
                    </p>

                    <div className="rounded-2xl border border-border/70 bg-background/50 px-4 py-4 text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">What happens next:</span>{" "}
                      Sign up → Connect your store → Get your readiness analysis → Receive your
                      action plan
                    </div>
                  </div>

                  <div className="card-gradient p-6 sm:p-7">
                    <p className="text-sm uppercase tracking-[0.18em] text-primary">
                      Merchant outcome
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                      A faster path to acquiring customers from LLMs and Agents
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      This promotion is built for merchants that want a clear starting point before
                      moving deeper into merchant-native checkout and execution.
                    </p>

                    <div className="mt-6 space-y-3">
                      {[
                        "Connect your store through the existing merchant signup flow",
                        "Get a readiness analysis across catalog, checkout, and payments",
                        "Leave with a practical activation path instead of a vague audit score",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background/55 px-4 py-3"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <p className="text-sm leading-6 text-foreground/90">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-card to-background">
          <div className="container-max grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.18em] text-primary">Why merchants need this now</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                AI shopping traffic is growing. Most stores still aren&apos;t ready.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground">
                Merchants want demand from LLMs and Agents, but most stores are not structured for
                AI-driven discovery and conversion.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {pressurePoints.map((item) => (
                <div key={item} className="section-frame px-5 py-5">
                  <p className="text-sm leading-7 text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-background to-card">
          <div className="container-max space-y-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.18em] text-primary">
                What the readiness analysis covers
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                What you get after connecting your store
              </h2>
              <p className="max-w-3xl text-base leading-8 text-muted-foreground">
                The goal is not a generic scorecard. It is a clear merchant action plan grounded in
                catalog structure, checkout readiness, and payment execution.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {readinessAreas.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="section-frame px-6 py-6">
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold tracking-tight text-foreground">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section-padding bg-gradient-to-b from-card to-background">
          <div className="container-max space-y-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.18em] text-primary">How it works</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                From connection to action in 3 steps
              </h2>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {steps.map((step, index) => (
                <article key={step.title} className="section-frame px-6 py-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-semibold text-primary">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-background to-card">
          <div className="container-max">
            <div className="section-frame overflow-hidden p-6 sm:p-8 lg:p-10">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">Final CTA</p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    See how ready your store is for AI commerce
                  </h2>
                  <p className="max-w-3xl text-base leading-8 text-muted-foreground">
                    Connect your store and get a free LLM/Agent readiness analysis with a clear
                    optimization plan.
                  </p>
                </div>

                <TrackedMerchantCtaLink
                  href={signupHref}
                  eventName="ai_readiness_final_cta_click"
                  page={routePaths.aiReadiness}
                  placement="final_cta"
                  className="btn-hero h-11 px-5 text-sm"
                >
                  Get your readiness analysis
                  <ChevronRight className="h-4 w-4" />
                </TrackedMerchantCtaLink>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link href={routePaths.howPivotaWorks} className="inline-flex items-center text-primary hover:underline">
                How Pivota works
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
              <Link
                href={routePaths.merchantNativeCheckout}
                className="inline-flex items-center text-primary hover:underline"
              >
                Merchant-native checkout
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
              <Link href={routePaths.faq} className="inline-flex items-center text-primary hover:underline">
                FAQ
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
