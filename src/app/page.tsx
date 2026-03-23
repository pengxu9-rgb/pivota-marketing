import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { buildMarketingMetadata, defaultOgDescription, defaultOgTitle, homepageMetaDescription, homepageTitle } from "@/lib/marketing";

const pillars = [
  {
    title: "Merchant discovery",
    body: "Make catalogs queryable to LLMs and agents. Structure products, offers, and variants so demand can resolve into an executable merchant path.",
  },
  {
    title: "Execution rails",
    body: "Route demand into merchant-native checkout and payment flows, with order authorization and write-back that keep merchant systems in control.",
  },
  {
    title: "Unified infra",
    body: "Normalize catalogs and offers, sync payment state, route through existing PSPs, and build reliability signals over time.",
  },
] as const;

const experienceColumns = [
  {
    title: "Unified product view",
    body: "Normalize fragmented product information and variants so the best merchant path is easier to understand and act on.",
  },
  {
    title: "Confidence layer",
    body: "Add the context needed to reduce mismatch risk before checkout.",
  },
  {
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

      <main>
        <section id="home" className="section-padding bg-gradient-to-b from-background to-card">
          <div className="container-max grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.26em] text-primary">
                Agent-native commerce infrastructure
              </p>
              <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                The merchant gateway for agent-native commerce.
              </h1>
              <p className="max-w-3xl text-lg text-muted-foreground sm:text-xl">
                Turn LLM and agent traffic into merchant-native transactions across catalog,
                checkout, payment, and post-purchase systems.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="btn-hero">
                  <Link href="/#contact">Talk to us</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/how-it-works">See how it works</Link>
                </Button>
              </div>
              <p className="max-w-3xl text-sm text-muted-foreground">
                Built for merchants that want LLM and agent demand to route into merchant-native
                execution.
              </p>
            </div>

            <div className="card-gradient space-y-6">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.22em] text-primary">Execution layer</p>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  One gateway from fragmented demand to merchant-native transactions.
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-border/70 bg-background/60 p-4">
                  <p className="text-sm font-semibold text-foreground">Merchant discovery</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Queryable products, offers, and variants for LLM surfaces.
                  </p>
                </div>
                <div className="rounded-xl border border-border/70 bg-background/60 p-4">
                  <p className="text-sm font-semibold text-foreground">
                    Merchant-native checkout
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Merchant-native checkout and payment flows through existing systems.
                  </p>
                </div>
                <div className="rounded-xl border border-border/70 bg-background/60 p-4">
                  <p className="text-sm font-semibold text-foreground">Payment and write-back</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Order authorization, payment-state sync, and post-purchase continuity.
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Pivota is the merchant gateway for agent-native commerce and the execution layer
                for LLM- and agent-initiated transactions.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-card to-background">
          <div className="container-max max-w-4xl space-y-4">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              LLMs can generate demand. Merchants still lack a gateway to serve it.
            </h2>
            <p className="text-lg text-muted-foreground">
              Product catalogs are fragmented and not agent-ready. Merchants are not uniformly
              queryable across agent surfaces. Checkout, payments, and post-purchase flows remain
              brittle for LLM- and agent-initiated transactions.
            </p>
            <p className="text-sm text-muted-foreground">
              The missing layer is a merchant gateway that LLMs and agents can reliably route
              through. Read more on{" "}
              <Link href="/merchant-gateway" className="text-primary hover:underline">
                what a merchant gateway is
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-background to-card">
          <div className="container-max space-y-10">
            <div className="space-y-4 text-center">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                One gateway across discovery, execution, and payment.
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="card-gradient">
                  <h3 className="text-xl font-semibold">{pillar.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{pillar.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-card to-background">
          <div className="container-max max-w-4xl space-y-4">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              More discoverable. More executable. More measurable.
            </h2>
            <p className="text-lg text-muted-foreground">
              Pivota helps merchants turn LLM and agent traffic into merchant-native transactions
              while preserving their existing storefront, fulfillment, and customer operations.
            </p>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-background to-card">
          <div className="container-max space-y-10">
            <div className="space-y-4 text-center">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                From fragmented shopping to confident, merchant-native execution.
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                Pivota helps turn fragmented product information and agent demand into a clearer,
                lower-risk path to merchant-native checkout.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {experienceColumns.map((column) => (
                <div key={column.title} className="rounded-2xl border border-border/70 bg-card p-6 shadow-[var(--shadow-card)]">
                  <h3 className="text-xl font-semibold">{column.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{column.body}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-muted-foreground">
              See the deeper explanation of{" "}
              <Link href="/merchant-native-checkout" className="text-primary hover:underline">
                merchant-native checkout
              </Link>{" "}
              and how it fits into the full execution model.
            </p>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-card to-background">
          <div className="container-max space-y-10">
            <div className="space-y-4 text-center">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                A realistic path from discovery to merchant-native checkout.
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {adoptionSteps.map((step, index) => (
                <div key={step.title} className="card-gradient">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                    Stage {index + 1}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-background to-card">
          <div className="container-max grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Built on top of merchant systems, not in place of them.
              </h2>
              <p className="text-lg text-muted-foreground">
                Merchants keep their storefront, fulfillment, and customer operations. Pivota
                writes orders and payment state back into existing systems.
              </p>
              <p className="text-sm text-muted-foreground">
                Pivota is not a marketplace. It is the merchant gateway that routes agent-native
                demand into merchant-native transactions.
              </p>
            </div>

            <div className="card-gradient">
              <ul className="space-y-3 text-sm text-muted-foreground">
                {boundaries.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
