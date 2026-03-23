import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { buildMarketingMetadata } from "@/lib/marketing";

export const metadata = buildMarketingMetadata({
  title: "About Pivota | Merchant Gateway for Agent-Native Commerce",
  description:
    "Pivota is building the merchant gateway for agent-native commerce. Our focus is simple: help merchants turn LLM and agent traffic into merchant-native transactions across catalog, checkout, payment, and post-purchase systems.",
  path: "/about",
});

const optimizationPoints = [
  "Merchant control",
  "Reliable execution",
  "Better conversion",
  "Lower mismatch risk",
  "Clear transaction pathways across LLM surfaces",
] as const;

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="section-padding">
        <div className="container-max max-w-5xl space-y-12">
          <section className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Pivota</h1>
            <p className="text-lg text-muted-foreground">
              Pivota is building the merchant gateway for agent-native commerce. Our focus is
              simple: help merchants turn LLM and agent traffic into merchant-native transactions
              across catalog, checkout, payment, and post-purchase systems.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">What we believe</h2>
            <p className="text-base leading-7 text-muted-foreground">
              LLMs and agents can generate demand, but merchant execution still lacks a reliable
              middle layer. The long-term opportunity is not just traffic generation. It is
              creating the gateway that makes agent-native commerce work for merchants.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">What we are building</h2>
            <p className="text-base leading-7 text-muted-foreground">
              Pivota is building the execution layer across catalog normalization, merchant-native
              checkout, payment orchestration, and order or payment write-back.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">What we optimize for</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {optimizationPoints.map((item) => (
                <div key={item} className="rounded-xl border border-border/70 bg-card p-5">
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="flex flex-wrap gap-4 text-sm">
            <Link href="/merchant-gateway" className="text-primary hover:underline">
              What is a merchant gateway?
            </Link>
            <Link href="/how-it-works" className="text-primary hover:underline">
              How Pivota works
            </Link>
            <Link href="/#contact" className="text-primary hover:underline">
              Contact us
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
