import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CreditCard,
  GitBranch,
  Network,
  RefreshCw,
  Search,
  ShieldCheck,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dashboard.jpg";
import networkFlowImage from "@/assets/network-flow.jpg";
import workflowImage from "@/assets/workflow-steps.jpg";
import { buildMarketingMetadata, defaultOgDescription, defaultOgTitle, homepageMetaDescription, homepageTitle } from "@/lib/marketing";

const heroSignals = [
  {
    title: "Merchant discovery",
    body: "Make catalogs queryable to LLMs and agents.",
  },
  {
    title: "Merchant-native checkout",
    body: "Route demand into merchant-controlled checkout and payment flows.",
  },
  {
    title: "Payment and write-back",
    body: "Sync execution state back into existing merchant systems.",
  },
] as const;

const problemPoints = [
  {
    title: "Catalog fragmentation",
    body: "Product catalogs are fragmented and not agent-ready.",
  },
  {
    title: "Surface fragmentation",
    body: "Merchants are not uniformly queryable across agent surfaces.",
  },
  {
    title: "Execution brittleness",
    body: "Checkout, payments, and post-purchase flows remain brittle for LLM- and agent-initiated transactions.",
  },
] as const;

const pillars = [
  {
    icon: Search,
    title: "Merchant discovery",
    body: "Make catalogs queryable to LLMs and agents. Structure products, offers, and variants so demand can resolve into an executable merchant path.",
  },
  {
    icon: CreditCard,
    title: "Execution rails",
    body: "Route demand into merchant-native checkout and payment flows, with order authorization and write-back that keep merchant systems in control.",
  },
  {
    icon: RefreshCw,
    title: "Unified infra",
    body: "Normalize catalogs and offers, sync payment state, route through existing PSPs, and build reliability signals over time.",
  },
] as const;

const valueSignals = [
  {
    title: "More discoverable",
    body: "Make merchant products easier for LLMs and agents to query across surfaces.",
  },
  {
    title: "More executable",
    body: "Resolve demand into merchant-native transactions instead of brittle link hops.",
  },
  {
    title: "More measurable",
    body: "Build a clearer execution trail across catalog, checkout, payment, and write-back.",
  },
] as const;

const experienceSteps = [
  {
    icon: Network,
    title: "Unified product view",
    body: "Normalize fragmented product information and variants so the best merchant path is easier to understand and act on.",
  },
  {
    icon: ShieldCheck,
    title: "Confidence layer",
    body: "Add the context needed to reduce mismatch risk before checkout.",
  },
  {
    icon: GitBranch,
    title: "Merchant-native checkout",
    body: "Use merchants’ existing payment rails and systems to improve conversion while keeping execution merchant-native.",
  },
] as const;

const adoptionSteps = [
  {
    title: "Discovery / Link-out",
    body: "Start fast, measure incrementality, and build upgrade leverage.",
  },
  {
    title: "Feeds",
    body: "Improve match accuracy, attribution, and controls.",
  },
  {
    title: "Merchant-native checkout",
    body: "Increase conversion, reduce failures, and enable reliability signals over time.",
  },
] as const;

const boundaries = [
  "No inventory",
  "No warehousing",
  "No last-mile logistics",
  "No subsidy-driven GMV",
  "No rebuilding merchant ops",
] as const;

const merchantKeeps = [
  "Storefront",
  "Fulfillment",
  "Customer operations",
  "Existing payment relationships",
] as const;

export const metadata = buildMarketingMetadata({
  title: homepageTitle,
  description: homepageMetaDescription,
  path: "/",
  ogTitle: defaultOgTitle,
  ogDescription: defaultOgDescription,
});

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="overflow-hidden">
        <section
          id="home"
          className="relative overflow-hidden bg-gradient-to-b from-background via-background to-card pt-6 sm:pt-10"
        >
          <div className="bg-site-grid absolute inset-0 opacity-20" />
          <div className="absolute left-[6%] top-24 h-64 w-64 rounded-full bg-primary/12 blur-3xl" />
          <div className="absolute right-[8%] top-12 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

          <div className="section-padding relative">
            <div className="container-max grid gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm uppercase tracking-[0.24em] text-primary">
                  Agent-native commerce infrastructure
                </div>

                <div className="space-y-5">
                  <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                    The merchant gateway for{" "}
                    <span className="text-gradient-primary">agent-native commerce.</span>
                  </h1>
                  <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
                    Turn LLM and agent traffic into merchant-native transactions across catalog,
                    checkout, payment, and post-purchase systems.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button asChild className="btn-hero h-12 px-6 text-sm">
                    <Link href="/#contact">
                      Talk to us
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-12 px-6 text-sm">
                    <Link href="/how-it-works">See how it works</Link>
                  </Button>
                </div>

                <p className="max-w-3xl text-sm text-muted-foreground">
                  Built for merchants that want LLM and agent demand to route into merchant-native
                  execution.
                </p>

                <div className="grid gap-4 sm:grid-cols-3">
                  {heroSignals.map((signal) => (
                    <div
                      key={signal.title}
                      className="rounded-2xl border border-border/70 bg-card/70 p-5 backdrop-blur"
                    >
                      <p className="text-sm font-semibold text-foreground">{signal.title}</p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{signal.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative lg:pl-6">
                <div className="absolute -left-10 top-12 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
                <div className="absolute -right-6 bottom-10 h-32 w-32 rounded-full bg-accent/20 blur-3xl" />

                <div className="section-frame relative overflow-hidden p-3 sm:p-4">
                  <div className="absolute left-6 top-6 z-10 inline-flex items-center rounded-full border border-white/10 bg-background/80 px-4 py-2 text-xs uppercase tracking-[0.22em] text-primary backdrop-blur">
                    Execution layer
                  </div>

                  <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10">
                    <Image
                      src={heroImage}
                      alt="Pivota execution dashboard visualizing merchant-native commerce flows"
                      priority
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 grid gap-3 p-6 sm:grid-cols-2 sm:p-8">
                      <div className="rounded-2xl border border-white/10 bg-background/80 p-4 backdrop-blur">
                        <p className="text-xs uppercase tracking-[0.2em] text-primary">
                          Merchant-native transactions
                        </p>
                        <p className="mt-2 text-sm text-foreground">
                          A shared gateway across catalog, checkout, payment, and post-purchase
                          systems.
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-background/80 p-4 backdrop-blur">
                        <p className="text-xs uppercase tracking-[0.2em] text-primary">
                          LLM and agent traffic
                        </p>
                        <p className="mt-2 text-sm text-foreground">
                          Route demand into merchant systems without rebuilding the merchant stack.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-3 top-20 hidden w-56 rounded-2xl border border-primary/25 bg-card/90 p-4 shadow-[var(--shadow-neon)] backdrop-blur lg:block">
                  <p className="text-sm font-semibold text-foreground">Merchant gateway</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    One gateway from fragmented demand to merchant-native transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding relative bg-gradient-to-b from-card to-background">
          <div className="container-max grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.22em] text-primary">
                Why this layer exists
              </p>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                LLMs can generate demand. Merchants still lack a gateway to serve it.
              </h2>
              <p className="text-lg leading-8 text-muted-foreground">
                Product catalogs are fragmented and not agent-ready. Merchants are not uniformly
                queryable across agent surfaces. Checkout, payments, and post-purchase flows remain
                brittle for LLM- and agent-initiated transactions.
              </p>
              <p className="text-base leading-7 text-foreground/90">
                The missing layer is a merchant gateway that LLMs and agents can reliably route
                through.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/merchant-gateway" className="text-primary hover:underline">
                  What is a merchant gateway?
                </Link>
                <Link href="/faq" className="text-primary hover:underline">
                  Read the FAQ
                </Link>
              </div>
            </div>

            <div className="section-frame overflow-hidden">
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[260px] overflow-hidden">
                  <Image
                    src={networkFlowImage}
                    alt="Network flow visual showing structured commerce execution"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/25 to-transparent" />
                </div>
                <div className="grid gap-4 p-6 sm:p-8">
                  {problemPoints.map((point) => (
                    <div
                      key={point.title}
                      className="rounded-2xl border border-border/70 bg-background/55 p-5"
                    >
                      <p className="text-sm font-semibold text-foreground">{point.title}</p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{point.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-background to-card">
          <div className="container-max space-y-10">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm uppercase tracking-[0.22em] text-primary">Core system</p>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                One gateway across discovery, execution, and payment.
              </h2>
              <p className="text-lg leading-8 text-muted-foreground">
                Pivota connects agent-native demand to merchant-native execution through a shared
                authorization and orchestration layer.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="card-feature relative overflow-hidden">
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
                  <div className="relative">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                      <pillar.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-semibold">{pillar.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">{pillar.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-card to-background">
          <div className="container-max">
            <div className="section-frame relative overflow-hidden px-6 py-8 sm:px-10 sm:py-10">
              <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-primary/10 to-transparent" />
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.22em] text-primary">
                    Merchant value
                  </p>
                  <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    More discoverable. More executable. More measurable.
                  </h2>
                  <p className="text-lg leading-8 text-muted-foreground">
                    Pivota helps merchants turn LLM and agent traffic into merchant-native
                    transactions while preserving their existing storefront, fulfillment, and
                    customer operations.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  {valueSignals.map((signal) => (
                    <div
                      key={signal.title}
                      className="rounded-2xl border border-border/70 bg-background/60 p-5"
                    >
                      <p className="text-sm font-semibold text-foreground">{signal.title}</p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{signal.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-background to-card">
          <div className="container-max grid gap-16 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.22em] text-primary">
                Unified commerce experience
              </p>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                From fragmented shopping to confident, merchant-native execution.
              </h2>
              <p className="text-lg leading-8 text-muted-foreground">
                Pivota helps turn fragmented product information and agent demand into a clearer,
                lower-risk path to merchant-native checkout.
              </p>

              <div className="space-y-7">
                {experienceSteps.map((step, index) => (
                  <div key={step.title} className="flex gap-5">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-semibold text-primary-foreground shadow-[var(--shadow-neon)]">
                        {index + 1}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <step.icon className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-sm leading-7 text-muted-foreground">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/merchant-native-checkout" className="text-primary hover:underline">
                  Explore merchant-native checkout
                </Link>
                <Link href="/how-it-works" className="text-primary hover:underline">
                  See the full execution model
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-8 h-24 w-24 rounded-full bg-primary/18 blur-3xl" />
              <div className="absolute -right-8 bottom-10 h-28 w-28 rounded-full bg-accent/16 blur-3xl" />

              <div className="section-frame relative overflow-hidden p-3 sm:p-4">
                <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10">
                  <Image
                    src={workflowImage}
                    alt="Merchant-native commerce workflow visual"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/55 to-transparent" />
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {experienceSteps.map((step) => (
                    <div
                      key={step.title}
                      className="rounded-2xl border border-border/70 bg-background/60 p-4"
                    >
                      <p className="text-sm font-semibold text-foreground">{step.title}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -left-4 bottom-10 hidden w-56 rounded-2xl border border-primary/20 bg-card/90 p-4 backdrop-blur lg:block">
                <p className="text-sm font-semibold text-foreground">Lower mismatch risk</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Add the context needed before checkout while keeping merchant systems in control.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-card to-background">
          <div className="container-max space-y-10">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <p className="text-sm uppercase tracking-[0.22em] text-primary">Adoption path</p>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                A realistic path from discovery to merchant-native checkout.
              </h2>
            </div>

            <div className="relative grid gap-6 lg:grid-cols-3">
              <div className="absolute left-[16%] right-[16%] top-16 hidden h-px bg-gradient-to-r from-primary/0 via-primary/40 to-accent/0 lg:block" />
              {adoptionSteps.map((step, index) => (
                <div key={step.title} className="section-frame relative p-6 sm:p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/12 text-sm font-semibold text-primary">
                    {index + 1}
                  </div>
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">Stage {index + 1}</p>
                  <h3 className="mt-3 text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-background to-card">
          <div className="container-max grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.22em] text-primary">Boundaries</p>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Built on top of merchant systems, not in place of them.
              </h2>
              <p className="text-lg leading-8 text-muted-foreground">
                Merchants keep their storefront, fulfillment, and customer operations. Pivota
                writes orders and payment state back into existing systems.
              </p>
              <p className="text-base leading-7 text-foreground/90">
                Pivota is not a marketplace. It is the merchant gateway that routes agent-native
                demand into merchant-native transactions.
              </p>
            </div>

            <div className="section-frame p-6 sm:p-8">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-primary">
                  What merchants keep
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {merchantKeeps.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-border/70 bg-background/55 px-4 py-3 text-sm text-foreground"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm uppercase tracking-[0.18em] text-primary">
                  What Pivota does not do
                </p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {boundaries.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-border/70 bg-background/55 px-4 py-3 text-sm text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
