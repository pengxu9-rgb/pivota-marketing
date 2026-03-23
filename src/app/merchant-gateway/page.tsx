import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CreditCard,
  RefreshCw,
  Search,
  Store,
  Truck,
  Warehouse,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import networkFlowImage from "@/assets/network-flow.jpg";
import { buildMarketingMetadata, merchantSignupPath } from "@/lib/marketing";

export const metadata = buildMarketingMetadata({
  title: "What Is a Merchant Gateway for Agent-Native Commerce? | Pivota",
  description:
    "A merchant gateway is the execution layer between LLM or agent demand and merchant-native transactions. Pivota makes merchants more queryable across agent surfaces, routes demand into merchant-native checkout and payment flows, and writes execution state back into existing merchant systems.",
  path: "/merchant-gateway",
});

const whatPivotaDoes = [
  {
    icon: Search,
    title: "Makes catalogs queryable to LLMs and agents",
    body: "Structures product information so demand can resolve into an executable merchant path.",
  },
  {
    icon: Store,
    title: "Structures products, offers, and variants",
    body: "Turns fragmented merchant data into a cleaner execution surface for LLM and agent traffic.",
  },
  {
    icon: CreditCard,
    title: "Routes demand into merchant-native checkout",
    body: "Connects demand to merchant-controlled checkout and payment flows.",
  },
  {
    icon: RefreshCw,
    title: "Supports order authorization and write-back",
    body: "Syncs execution state back into existing merchant systems and PSP relationships.",
  },
] as const;

const whatPivotaIsNot = [
  {
    icon: Store,
    title: "Not a marketplace",
  },
  {
    icon: Warehouse,
    title: "Not an inventory holder",
  },
  {
    icon: Truck,
    title: "Not a warehousing or logistics operator",
  },
  {
    icon: CreditCard,
    title: "Not a checkout-only widget",
  },
] as const;

export default function MerchantGatewayPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="overflow-hidden">
        <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-card">
          <div className="bg-site-grid absolute inset-0 opacity-20" />
          <div className="absolute left-[8%] top-20 h-64 w-64 rounded-full bg-primary/12 blur-3xl" />
          <div className="absolute right-[10%] top-12 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

          <div className="section-padding relative">
            <div className="container-max grid gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.24em] text-primary">
                  Category definition
                </p>
                <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
                  What is a merchant gateway for{" "}
                  <span className="text-gradient-primary">agent-native commerce?</span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                  A merchant gateway is the execution layer between LLM or agent demand and
                  merchant-native transactions. Pivota makes merchants more queryable across agent
                  surfaces, routes demand into merchant-native checkout and payment flows, and
                  writes execution state back into existing merchant systems.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="btn-hero h-12 px-6 text-sm">
                    <Link href={merchantSignupPath}>
                      Merchant signup
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-12 px-6 text-sm">
                    <Link href="/how-it-works">See how it works</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="section-frame relative overflow-hidden p-3 sm:p-4">
                  <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10">
                    <Image
                      src={networkFlowImage}
                      alt="Merchant gateway network visualization"
                      priority
                      className="h-[420px] w-full object-cover sm:h-[500px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                    <div className="absolute left-6 top-6 inline-flex items-center rounded-full border border-white/10 bg-background/80 px-4 py-2 text-xs uppercase tracking-[0.22em] text-primary backdrop-blur">
                      Execution layer
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-border/70 bg-background/60 p-4">
                      <p className="text-sm font-semibold text-foreground">
                        Merchant-native transactions
                      </p>
                    </div>
                    <div className="rounded-2xl border border-border/70 bg-background/60 p-4">
                      <p className="text-sm font-semibold text-foreground">Reliable routing</p>
                    </div>
                    <div className="rounded-2xl border border-border/70 bg-background/60 p-4">
                      <p className="text-sm font-semibold text-foreground">Shared authorization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-card to-background">
          <div className="container-max">
            <div className="section-frame p-6 sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.22em] text-primary">
                    Why this layer exists
                  </p>
                  <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    Merchant execution is still fragmented.
                  </h2>
                  <p className="text-lg leading-8 text-muted-foreground">
                    LLMs and agents can generate demand, but product data, variant logic,
                    checkout, payment routing, and post-purchase state are not uniformly available
                    across agent surfaces.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border/70 bg-background/55 p-5">
                    <p className="text-sm font-semibold text-foreground">Demand generation</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      LLMs can generate intent and route users toward products.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/70 bg-background/55 p-5">
                    <p className="text-sm font-semibold text-foreground">Execution gap</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Merchants still lack a gateway that serves that demand consistently.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/70 bg-background/55 p-5 sm:col-span-2">
                    <p className="text-sm font-semibold text-foreground">
                      The missing layer is a merchant gateway that merchants and agents can
                      reliably route through.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-background to-card">
          <div className="container-max space-y-10">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm uppercase tracking-[0.22em] text-primary">What Pivota does</p>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                One gateway from fragmented demand to merchant-native transactions.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {whatPivotaDoes.map((item) => (
                <div key={item.title} className="card-feature">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-card to-background">
          <div className="container-max space-y-10">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm uppercase tracking-[0.22em] text-primary">What Pivota is not</p>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Infrastructure, not a marketplace layer.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {whatPivotaIsNot.map((item) => (
                <div key={item.title} className="section-frame p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-background to-card">
          <div className="container-max">
            <div className="section-frame px-6 py-8 sm:px-10 sm:py-10">
              <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div className="space-y-4">
                  <p className="text-lg font-semibold">
                    Pivota is the merchant gateway for agent-native commerce.
                  </p>
                  <p className="text-sm leading-7 text-muted-foreground">
                    See the execution model, the checkout layer, and the core FAQ that removes the
                    usual category confusion.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 text-sm">
                  <Link href="/how-it-works" className="text-primary hover:underline">
                    See how it works
                  </Link>
                  <Link href="/merchant-native-checkout" className="text-primary hover:underline">
                    Explore merchant-native checkout
                  </Link>
                  <Link href="/faq" className="text-primary hover:underline">
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
