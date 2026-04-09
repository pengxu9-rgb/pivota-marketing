import Link from "next/link";
import { ArrowRight, CreditCard, RefreshCw, ShieldCheck, Store, Wallet } from "lucide-react";
import AnswerBlock from "@/components/AnswerBlock";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import PageChrome from "@/components/PageChrome";
import { Button } from "@/components/ui/button";
import {
  buildMarketingMetadata,
  merchantSignupPath,
  routePaths,
} from "@/lib/marketing";
import { buildBreadcrumbJsonLd } from "@/lib/schema";

export const metadata = buildMarketingMetadata({
  title: "Merchant-Native Checkout | Pivota Merchant Gateway for Agent-Native Commerce",
  description:
    "Pivota helps merchants convert LLM and agent demand through merchant-native checkout and payment flows.",
  path: routePaths.merchantNativeCheckout,
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: routePaths.home },
  { name: "Merchant-native checkout", path: routePaths.merchantNativeCheckout },
]);

const supports = [
  {
    icon: CreditCard,
    title: "Merchant-native payment flows",
  },
  {
    icon: Wallet,
    title: "Existing PSP routing",
  },
  {
    icon: ShieldCheck,
    title: "Order authorization",
  },
  {
    icon: RefreshCw,
    title: "Payment-state sync",
  },
  {
    icon: Store,
    title: "Order and payment write-back",
  },
  {
    icon: ShieldCheck,
    title: "Lower mismatch risk through better execution context",
  },
] as const;

const merchantsKeep = [
  "Their storefront",
  "Their fulfillment stack",
  "Their customer operations",
  "Their existing payment relationships",
] as const;

const executionBoundaries = [
  "Pivota resolves structured commerce requests instead of forcing agents to crawl fragmented merchant pages.",
  "Merchant-native checkout begins when Pivota returns or creates an executable checkout path.",
  "Payment orchestration and payment-state sync stay connected to merchant systems after checkout begins.",
  "Order outcomes continue through merchant write-back, status sync, and event delivery after execution starts.",
] as const;

const whyItMatters = [
  {
    title: "Fragmented paths",
    body: "Agent-driven demand breaks when checkout paths are inconsistent or disconnected.",
  },
  {
    title: "Mismatch risk",
    body: "Context breaks between discovery and checkout increase failure and drop-off risk.",
  },
  {
    title: "Merchant control",
    body: "Merchant-native checkout preserves merchant systems instead of replacing them.",
  },
] as const;

export default function MerchantNativeCheckoutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd id="merchant-native-checkout-breadcrumb-jsonld" data={breadcrumbJsonLd} />

      <main className="overflow-hidden">
        <section className="relative bg-gradient-to-b from-background via-background to-card">
          <div className="bg-site-grid absolute inset-0 opacity-15" />

          <div className="section-padding relative">
            <div className="container-max space-y-6">
              <PageChrome
                items={[
                  { label: "Home", href: routePaths.home },
                  { label: "Merchant-native checkout" },
                ]}
              />

              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">Checkout layer</p>
                  <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
                    Merchant-native checkout for LLM and agent traffic
                  </h1>
                  <AnswerBlock className="max-w-3xl">
                    <p>
                      Pivota helps merchants convert LLM and agent demand through merchant-native
                      checkout and payment flows.
                    </p>
                    <p className="mt-2">
                      In agentic commerce, merchant-native checkout keeps the official checkout path
                      inside merchant-controlled systems instead of forcing merchants into a
                      separate marketplace-owned flow.
                    </p>
                  </AnswerBlock>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild className="btn-hero h-11 px-5 text-sm">
                      <Link href={merchantSignupPath}>
                        Merchant signup
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="h-11 px-5 text-sm">
                      <Link href="/#contact">Talk to us</Link>
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    "Merchant-native checkout",
                    "Existing PSP routing",
                    "Order and payment write-back",
                  ].map((item) => (
                    <div key={item} className="section-frame px-5 py-5">
                      <p className="text-sm font-semibold text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-card to-background">
          <div className="container-max space-y-10">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm uppercase tracking-[0.22em] text-primary">
                Why merchant-native checkout matters
              </p>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Conversion improves when checkout stays connected to merchant systems.
              </h2>
              <p className="text-lg leading-8 text-muted-foreground">
                Agent-driven demand breaks when checkout paths are fragmented, mismatched, or
                disconnected from merchant systems. For merchants that are ready,
                merchant-native checkout can be the day-one path and can reduce handoff and
                drop-off risk while preserving merchant control.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {whyItMatters.map((item) => (
                <div key={item.title} className="section-frame p-6">
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-background to-card">
          <div className="container-max grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.22em] text-primary">What Pivota supports</p>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                The checkout layer is part of a broader execution system.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {supports.map((item) => (
                <div key={item.title} className="card-feature">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-card to-background">
          <div className="container-max">
            <div className="section-frame px-6 py-8 sm:px-10 sm:py-10">
              <div className="space-y-5">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.22em] text-primary">
                    Execution boundaries
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Make the handoff between agent calls and merchant-native execution explicit.
                  </h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {executionBoundaries.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-border/70 bg-background/55 p-5 text-sm leading-7 text-muted-foreground"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-card to-background">
          <div className="container-max">
            <div className="section-frame px-6 py-8 sm:px-10 sm:py-10">
              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.22em] text-primary">
                    What merchants keep
                  </p>
                  <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    Merchant-native means merchant-controlled.
                  </h2>
                  <p className="text-base leading-8 text-muted-foreground">
                    Merchants keep their storefront, fulfillment stack, customer operations, and
                    existing payment relationships while Pivota connects the execution path.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {merchantsKeep.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-border/70 bg-background/55 p-5 text-sm text-muted-foreground"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-background to-card">
          <div className="container-max">
            <div className="section-frame px-6 py-8 sm:px-10 sm:py-10">
              <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Talk to us about merchant-native checkout
                </h2>
                <div className="flex flex-wrap gap-4 text-sm">
                  <Link href="/#contact" className="text-primary hover:underline">
                    Talk to us
                  </Link>
                  <Link href={routePaths.agentIntegration} className="text-primary hover:underline">
                    Agent Integration
                  </Link>
                  <Link href={routePaths.developersAuthWebhooks} className="text-primary hover:underline">
                    Auth & webhooks
                  </Link>
                  <Link href={routePaths.faq} className="text-primary hover:underline">
                    Read the FAQ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
