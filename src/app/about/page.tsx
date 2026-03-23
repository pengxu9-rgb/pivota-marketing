import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  GitBranch,
  ShieldCheck,
  Target,
  TrendingUp,
  Workflow,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import networkFlowImage from "@/assets/network-flow.jpg";
import { buildMarketingMetadata } from "@/lib/marketing";

export const metadata = buildMarketingMetadata({
  title: "About Pivota | Merchant Gateway for Agent-Native Commerce",
  description:
    "Pivota is building the merchant gateway for agent-native commerce. Our focus is simple: help merchants turn LLM and agent traffic into merchant-native transactions across catalog, checkout, payment, and post-purchase systems.",
  path: "/about",
});

const optimizationPoints = [
  {
    icon: ShieldCheck,
    title: "Merchant control",
  },
  {
    icon: Workflow,
    title: "Reliable execution",
  },
  {
    icon: TrendingUp,
    title: "Better conversion",
  },
  {
    icon: Target,
    title: "Lower mismatch risk",
  },
  {
    icon: GitBranch,
    title: "Clear transaction pathways across LLM surfaces",
  },
] as const;

export default function AboutPage() {
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
                <p className="text-sm uppercase tracking-[0.24em] text-primary">About Pivota</p>
                <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
                  Building the <span className="text-gradient-primary">merchant gateway</span> for
                  agent-native commerce.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                  Pivota is building the merchant gateway for agent-native commerce. Our focus is
                  simple: help merchants turn LLM and agent traffic into merchant-native
                  transactions across catalog, checkout, payment, and post-purchase systems.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="btn-hero h-12 px-6 text-sm">
                    <Link href="/#contact">
                      Contact us
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-12 px-6 text-sm">
                    <Link href="/how-it-works">How Pivota works</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="section-frame relative overflow-hidden p-3 sm:p-4">
                  <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10">
                    <Image
                      src={networkFlowImage}
                      alt="Pivota infrastructure network"
                      priority
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/15 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 grid gap-3 p-6 sm:grid-cols-2 sm:p-8">
                      <div className="rounded-2xl border border-white/10 bg-background/80 p-4 backdrop-blur">
                        <p className="text-xs uppercase tracking-[0.18em] text-primary">
                          Merchant control
                        </p>
                        <p className="mt-2 text-sm text-foreground">
                          Built on top of merchant systems instead of replacing them.
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-background/80 p-4 backdrop-blur">
                        <p className="text-xs uppercase tracking-[0.18em] text-primary">
                          Reliable execution
                        </p>
                        <p className="mt-2 text-sm text-foreground">
                          A clearer path from LLM and agent traffic to merchant-native
                          transactions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-card to-background">
          <div className="container-max grid gap-6 lg:grid-cols-2">
            <div className="section-frame p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.22em] text-primary">What we believe</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Traffic generation is not enough.
              </h2>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                LLMs and agents can generate demand, but merchant execution still lacks a reliable
                middle layer. The long-term opportunity is not just traffic generation. It is
                creating the gateway that makes agent-native commerce work for merchants.
              </p>
            </div>

            <div className="section-frame p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.22em] text-primary">What we are building</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                The execution layer across merchant systems.
              </h2>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                Pivota is building the execution layer across catalog normalization,
                merchant-native checkout, payment orchestration, and order or payment write-back.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-background to-card">
          <div className="container-max">
            <div className="section-frame px-6 py-8 sm:px-10 sm:py-10">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.22em] text-primary">
                    What we optimize for
                  </p>
                  <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    The operating priorities behind the gateway.
                  </h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {optimizationPoints.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-border/70 bg-background/55 p-5"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <p className="text-sm font-semibold text-foreground">{item.title}</p>
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
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/merchant-gateway" className="text-primary hover:underline">
                  What is a merchant gateway?
                </Link>
                <Link href="/how-it-works" className="text-primary hover:underline">
                  How Pivota works
                </Link>
                <Link href="/#contact" className="text-primary hover:underline">
                  Contact us
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
