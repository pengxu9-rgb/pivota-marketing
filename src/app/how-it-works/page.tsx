import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Boxes, CreditCard, RefreshCw, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import workflowImage from "@/assets/workflow-steps.jpg";
import { buildMarketingMetadata, merchantSignupPath } from "@/lib/marketing";

export const metadata = buildMarketingMetadata({
  title: "How Pivota Works | Merchant Gateway for LLM and Agent Transactions",
  description:
    "Pivota connects agent-native demand to merchant-native execution through a shared gateway across catalog, checkout, payment, and post-purchase systems.",
  path: "/how-it-works",
});

const steps = [
  {
    icon: Search,
    title: "Make catalogs queryable",
    body: "Pivota structures product catalogs, offers, and variants so LLMs and agents can resolve user intent into an executable merchant path.",
  },
  {
    icon: CreditCard,
    title: "Route into merchant-native execution",
    body: "Pivota connects agent traffic to merchant-native checkout and payment flows instead of forcing merchants into a separate commerce stack.",
  },
  {
    icon: RefreshCw,
    title: "Write execution state back",
    body: "Orders, authorizations, and payment status sync back into merchant systems so merchants stay in control of storefront, fulfillment, and customer operations.",
  },
  {
    icon: BarChart3,
    title: "Improve reliability over time",
    body: "Normalization, payment-state sync, and execution outcomes create a compounding reliability layer across LLM surfaces.",
  },
] as const;

const layers = [
  {
    icon: Boxes,
    title: "Catalog normalization",
    body: "Structure products, offers, and variants for agent-native demand.",
  },
  {
    icon: CreditCard,
    title: "Merchant-native checkout",
    body: "Keep transaction execution inside merchant systems and payment relationships.",
  },
  {
    icon: RefreshCw,
    title: "Reliability signals",
    body: "Turn execution outcomes into a compounding confidence layer over time.",
  },
] as const;

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="overflow-hidden">
        <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-card">
          <div className="bg-site-grid absolute inset-0 opacity-20" />
          <div className="absolute left-[8%] top-20 h-64 w-64 rounded-full bg-primary/12 blur-3xl" />
          <div className="absolute right-[10%] top-12 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

          <div className="section-padding relative">
            <div className="container-max grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.24em] text-primary">
                  Execution model
                </p>
                <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
                  How <span className="text-gradient-primary">Pivota works</span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                  Pivota connects agent-native demand to merchant-native execution through a shared
                  gateway across catalog, checkout, payment, and post-purchase systems.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="btn-hero h-12 px-6 text-sm">
                    <Link href={merchantSignupPath}>
                      Merchant signup
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-12 px-6 text-sm">
                    <Link href="/merchant-native-checkout">See the checkout layer</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="section-frame relative overflow-hidden p-3 sm:p-4">
                  <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10">
                    <Image
                      src={workflowImage}
                      alt="Pivota execution workflow"
                      priority
                      className="h-[420px] w-full object-cover sm:h-[500px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    {[
                      { title: "Queryable catalogs", label: "Step 1" },
                      { title: "Merchant-native checkout", label: "Step 2" },
                      { title: "Write-back", label: "Step 3" },
                    ].map((step) => (
                      <div
                        key={step.title}
                        className="rounded-2xl border border-border/70 bg-background/60 p-4"
                      >
                        <p className="text-xs uppercase tracking-[0.18em] text-primary">{step.label}</p>
                        <p className="mt-2 text-sm font-semibold text-foreground">{step.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-card to-background">
          <div className="container-max space-y-10">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm uppercase tracking-[0.22em] text-primary">Step by step</p>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Four steps from queryability to reliable execution.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {steps.map((step, index) => (
                <div key={step.title} className="card-feature">
                  <div className="mb-5 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-semibold text-primary-foreground">
                      {index + 1}
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                      <step.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-background to-card">
          <div className="container-max">
            <div className="section-frame px-6 py-8 sm:px-10 sm:py-10">
              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.22em] text-primary">
                    Compounding layer
                  </p>
                  <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    Reliability improves as execution stays connected.
                  </h2>
                  <p className="text-lg leading-8 text-muted-foreground">
                    Normalization, payment-state sync, and execution outcomes create a compounding
                    reliability layer across LLM surfaces.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {layers.map((layer) => (
                    <div
                      key={layer.title}
                      className="rounded-2xl border border-border/70 bg-background/55 p-5"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                        <layer.icon className="h-6 w-6" />
                      </div>
                      <p className="text-sm font-semibold text-foreground">{layer.title}</p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{layer.body}</p>
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
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <Link href="/merchant-gateway" className="text-primary hover:underline">
                  Read the merchant gateway definition
                </Link>
                <Link href="/merchant-native-checkout" className="text-primary hover:underline">
                  See the checkout layer
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
