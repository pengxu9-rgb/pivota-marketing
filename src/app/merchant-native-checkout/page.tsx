import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CreditCard,
  RefreshCw,
  ShieldCheck,
  Store,
  Wallet,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dashboard.jpg";
import { buildMarketingMetadata, merchantSignupPath } from "@/lib/marketing";

export const metadata = buildMarketingMetadata({
  title: "Merchant-Native Checkout for LLM and Agent Traffic | Pivota",
  description:
    "Pivota helps merchants convert LLM and agent demand through merchant-native checkout and payment flows.",
  path: "/merchant-native-checkout",
});

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

      <main className="overflow-hidden">
        <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-card">
          <div className="bg-site-grid absolute inset-0 opacity-20" />
          <div className="absolute left-[8%] top-20 h-64 w-64 rounded-full bg-primary/12 blur-3xl" />
          <div className="absolute right-[10%] top-12 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

          <div className="section-padding relative">
            <div className="container-max grid gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.24em] text-primary">Checkout layer</p>
                <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
                  Merchant-native checkout for{" "}
                  <span className="text-gradient-primary">LLM and agent traffic</span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                  Pivota helps merchants convert LLM and agent demand through merchant-native
                  checkout and payment flows.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="btn-hero h-12 px-6 text-sm">
                    <Link href={merchantSignupPath}>
                      Merchant signup
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-12 px-6 text-sm">
                    <Link href="/#contact">Talk to us</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="section-frame relative overflow-hidden p-3 sm:p-4">
                  <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10">
                    <Image
                      src={heroImage}
                      alt="Merchant-native checkout dashboard"
                      priority
                      className="h-[420px] w-full object-cover sm:h-[500px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-border/70 bg-background/60 p-4">
                      <p className="text-sm font-semibold text-foreground">
                        Merchant-native checkout
                      </p>
                    </div>
                    <div className="rounded-2xl border border-border/70 bg-background/60 p-4">
                      <p className="text-sm font-semibold text-foreground">Existing PSP routing</p>
                    </div>
                    <div className="rounded-2xl border border-border/70 bg-background/60 p-4">
                      <p className="text-sm font-semibold text-foreground">Write-back</p>
                    </div>
                  </div>
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
                disconnected from merchant systems. Merchant-native checkout improves conversion
                while preserving merchant control.
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
              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.22em] text-primary">
                    What merchants keep
                  </p>
                  <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    Merchant-native means merchant-controlled.
                  </h2>
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
