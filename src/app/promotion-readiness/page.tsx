import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  CreditCard,
  Percent,
  ShieldCheck,
  ShoppingCart,
  Store,
} from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import PageChrome from "@/components/PageChrome";
import QuestionAnswerList from "@/components/QuestionAnswerList";
import { Button } from "@/components/ui/button";
import { buildMarketingMetadata, routePaths } from "@/lib/marketing";
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/schema";

const promotionChecks = [
  {
    icon: Percent,
    title: "Offers and discounts",
    body: "Review visible offers, discount structures, and auto promos that may affect downstream recommendation and checkout behavior.",
  },
  {
    icon: ShieldCheck,
    title: "Eligibility conditions",
    body: "Check whether cart rules, thresholds, customer requirements, and promo logic create conflicts or ambiguity.",
  },
  {
    icon: CreditCard,
    title: "Payment incentives",
    body: "Evaluate whether card offers, wallet incentives, financing logic, or PSP-linked incentives are ready to execute cleanly.",
  },
  {
    icon: ShoppingCart,
    title: "Checkout continuity",
    body: "Check whether the final checkout path can reliably carry the right offer, payment logic, and merchant-native execution flow.",
  },
] as const;

const downstreamValueLines = [
  "Cleaner offer matching for every downstream agent call",
  "Fewer checkout failures caused by promo ambiguity or rule conflicts",
  "Better offer, payment, and execution alignment across agent surfaces",
] as const;

const offerComparison = [
  {
    title: "Visible offer",
    body: "A promotion banner, PDP badge, coupon field, or payment incentive a shopper can see on site.",
  },
  {
    title: "Executable offer",
    body: "An offer an agent can match, validate, preserve, and route through a real merchant-native checkout path.",
  },
] as const;

const promotionBlockers = [
  {
    title: "Cart threshold conflicts",
    body: "A visible discount looks simple, but the final cart threshold changes the path late in checkout.",
  },
  {
    title: "Membership-only pricing",
    body: "Public pricing and gated pricing are easy to confuse when eligibility is not exposed clearly.",
  },
  {
    title: "Wallet incentive mismatch",
    body: "A payment-linked incentive is advertised but not preserved consistently when execution starts.",
  },
  {
    title: "Shipping incentive ambiguity",
    body: "A shipping offer is visible, but the qualification logic changes across cart, region, or bundle rules.",
  },
] as const;

const merchantKeeps = [
  "Keep your storefront",
  "Keep your PSP",
  "Keep your fulfillment and customer operations",
  "Improve how agent-driven transactions execute",
] as const;

const promotionFaqItems = [
  {
    question: "Is Promotion Readiness a coupon finder?",
    answer:
      "No. Promotion Readiness is part of merchant onboarding. It helps merchants improve how offers, incentives, and checkout logic execute later through agent-driven commerce flows.",
  },
  {
    question: "Why do this during onboarding?",
    answer:
      "Because upstream cleanup improves every downstream agent call. Merchants fix offer and incentive gaps once, and later agents get a more reliable path from recommendation to checkout.",
  },
  {
    question: "What does Pivota actually check?",
    answer:
      "Pivota checks merchant offers, discounts, auto promos, eligibility conditions, payment incentives, and checkout execution continuity.",
  },
  {
    question: "Do merchants need to replatform?",
    answer:
      "No. Merchants keep their storefront, PSP, fulfillment, and customer operations. Pivota improves the path from offer logic to completed transactions across the existing stack.",
  },
  {
    question: "Why does this matter if promotions are already visible on my site?",
    answer:
      "Visible promotions are not always executable promotions. Pivota helps make sure downstream agents can match, validate, and route the right offer through a real merchant-native checkout path.",
  },
] as const;

export const metadata = buildMarketingMetadata({
  title: "Promotion Readiness | Offer Logic for AI Commerce | Pivota",
  description:
    "Pivota helps merchants fix offers, eligibility, payment incentives, and checkout behavior during onboarding so downstream agent calls get cleaner, more executable paths to transaction.",
  path: routePaths.promotionReadiness,
  ogDescription:
    "Fix promotion logic once during onboarding. Improve every downstream agent checkout path through Pivota.",
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: routePaths.home },
  { name: "Promotion readiness", path: routePaths.promotionReadiness },
]);

const faqJsonLd = buildFaqJsonLd(promotionFaqItems);

export default function PromotionReadinessPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd id="promotion-readiness-breadcrumb-jsonld" data={breadcrumbJsonLd} />
      <JsonLd id="promotion-readiness-faq-jsonld" data={faqJsonLd} />

      <main className="overflow-hidden">
        <section className="relative bg-gradient-to-b from-background via-background to-card">
          <div className="bg-site-grid absolute inset-0 opacity-15" />

          <div className="section-padding relative">
            <div className="container-max space-y-6">
              <PageChrome
                items={[
                  { label: "Home", href: routePaths.home },
                  { label: "Promotion readiness" },
                ]}
              />

              <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Promotion readiness
                  </p>
                  <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
                    Fix offer logic before agent traffic hits checkout.
                  </h1>
                  <div className="section-frame max-w-3xl px-6 py-6 sm:px-7">
                    <p className="text-sm leading-7 text-muted-foreground">
                      During onboarding, Pivota checks your discounts, auto promos, eligibility
                      rules, payment incentives, and checkout behavior to spot what may block the
                      path from recommendation to transaction.
                    </p>
                    <p className="mt-3 text-sm leading-7 text-foreground/90">
                      The result is a cleaner offer, price, and checkout path that external LLMs
                      and agents can call without guessing across fragmented merchant logic.
                    </p>
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
                  <div className="flex flex-wrap gap-4 text-sm">
                    <Link href={routePaths.agentIntegration} className="text-primary hover:underline">
                      Agent integration
                    </Link>
                    <Link href={routePaths.useCases} className="text-primary hover:underline">
                      Use cases
                    </Link>
                    <Link href="/#contact" className="text-primary hover:underline">
                      Talk to us
                    </Link>
                  </div>
                </div>

                <div className="section-frame px-6 py-6 sm:px-7">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Why this belongs in onboarding
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                    Promotion readiness is part of onboarding, not a standalone coupon feature.
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    Pivota evaluates and tightens promotion logic upstream so later agent calls do
                    not need to search across banners, coupon fields, payment incentives, and
                    checkout rules to find a real transaction path.
                  </p>
                  <div className="mt-5 space-y-3">
                    {[
                      "Connect your store through the existing merchant onboarding flow",
                      "Spot likely blockers before they affect live agent-driven transactions",
                      "Improve every later offer, price, and checkout path through the same gateway",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-border/70 bg-background/55 px-4 py-3"
                      >
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <p className="text-sm leading-6 text-foreground/90">{item}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="section-frame px-6 py-6 sm:px-7">
                <div className="grid gap-4 lg:grid-cols-[1fr_1fr] lg:items-start">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-primary">
                      Why this matters
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                      Visible offers are not the same as executable offers.
                    </h2>
                  </div>
                  <div className="space-y-3 text-sm leading-7 text-muted-foreground">
                    <p>
                      Many merchants already have discounts, bundles, payment incentives, and auto
                      promos on site. But external agents still struggle to determine which offer
                      applies, whether the shopper is eligible, how a payment incentive changes the
                      final path, or whether checkout will actually resolve correctly.
                    </p>
                    <p className="text-foreground/90">
                      If an agent has to search banners, coupon logic, payment rules, and checkout
                      behavior across many places, the path breaks before conversion.
                    </p>
                    <p>
                      Promotion Readiness helps merchants clean that up upstream, so downstream
                      agent calls have a more reliable path to execution and a cleaner path to
                      transaction.
                    </p>
                  </div>
                </div>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {offerComparison.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-border/70 bg-background/55 px-4 py-4">
                      <p className="text-sm font-semibold text-foreground">{item.title}</p>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    What Pivota checks during onboarding
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Promotion logic that most often blocks downstream execution
                  </h2>
                  <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
                    Promotion Readiness is part of merchant onboarding and the agent-to-order path.
                    Pivota does not just surface offers. It checks the parts of merchant logic that
                    most often block downstream execution and conversion.
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {promotionChecks.map((item) => (
                    <article key={item.title} className="section-frame px-5 py-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.body}</p>
                    </article>
                  ))}
                </div>
                <p className="text-sm leading-7 text-muted-foreground">
                  The goal is not a certification. It is a practical way to find likely blockers
                  and improve what agents can execute later.
                </p>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Common promotion blockers
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    The problems that make visible offers hard to execute
                  </h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {promotionBlockers.map((item) => (
                    <article key={item.title} className="section-frame px-5 py-5">
                      <h3 className="text-lg font-semibold tracking-tight text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.body}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="section-frame px-6 py-6 sm:px-7">
                <div className="grid gap-5 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
                  <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.18em] text-primary">
                      Downstream value
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                      Optimize upstream. Improve every downstream agent call.
                    </h2>
                    <p className="text-sm leading-7 text-muted-foreground">
                      Later, when external LLMs, personal agents, messaging-based assistants, or
                      branded agent experiences call into Pivota, they do not need to guess which
                      promotion might work or assemble checkout logic from scattered merchant
                      systems.
                    </p>
                    <p className="text-sm leading-7 text-foreground/90">
                      Instead, they receive a cleaner, better-matched, more executable offer,
                      price, and checkout path through Pivota.
                    </p>
                    <p className="text-sm leading-7 text-muted-foreground">
                      That makes promotion readiness more than a coupon feature. It becomes part of
                      the merchant-native commerce layer that downstream agents rely on.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {downstreamValueLines.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-border/70 bg-background/55 px-4 py-4"
                      >
                        <div className="flex items-start gap-3">
                          <Bot className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <p className="text-sm leading-6 text-foreground/90">{item}</p>
                        </div>
                      </div>
                    ))}
                    <div className="rounded-2xl border border-primary/20 bg-primary/8 px-4 py-4 text-sm leading-7 text-foreground">
                      Optimize once at onboarding. Improve every later agent checkout path.
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-frame px-6 py-6 sm:px-7">
                <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-primary">
                      What merchants keep
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                      No replatforming required
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      Pivota works with the merchant stack you already have, whether it runs on
                      Shopify, Wix, WooCommerce, BigCommerce, or another setup. Merchants keep
                      their storefront, PSP, fulfillment systems, and customer operations.
                    </p>
                    <p className="mt-3 text-sm leading-7 text-foreground/90">
                      Promotion Readiness improves how offers, incentives, and checkout logic
                      resolve across that existing stack. Then Pivota exposes a more reliable path
                      for downstream agent calls.
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {merchantKeeps.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-border/70 bg-background/55 px-4 py-3 text-sm text-foreground"
                      >
                        <div className="flex items-start gap-3">
                          <Store className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{item}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">FAQ</p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">FAQ</h2>
                </div>
                <QuestionAnswerList items={promotionFaqItems} columns={2} />
              </div>

              <div className="section-frame px-6 py-6 sm:px-7">
                <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.18em] text-primary">Final CTA</p>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                      See what may be blocking your downstream agent checkout paths
                    </h2>
                    <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
                      Connect your store and let Pivota identify likely offer, payment, and
                      checkout issues before they affect real agent-driven transactions.
                    </p>
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
                <Link href={routePaths.aiReadiness} className="text-primary hover:underline">
                  See what to fix first
                </Link>
                <Link href={routePaths.merchantOnboarding} className="text-primary hover:underline">
                  Merchant onboarding
                </Link>
                <Link href={routePaths.agentIntegration} className="text-primary hover:underline">
                  Agent integration
                </Link>
                <Link href={routePaths.useCases} className="text-primary hover:underline">
                  Use cases
                </Link>
                <Link href={routePaths.howPivotaWorks} className="text-primary hover:underline">
                  How Pivota works
                </Link>
                <Link href={routePaths.faq} className="text-primary hover:underline">
                  FAQ
                </Link>
                <Link href="/#contact" className="text-primary hover:underline">
                  Talk to us
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
