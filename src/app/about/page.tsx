import Link from "next/link";
import { ArrowRight, GitBranch, ShieldCheck, Target, TrendingUp, Workflow } from "lucide-react";
import AnswerBlock from "@/components/AnswerBlock";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import PageChrome from "@/components/PageChrome";
import { Button } from "@/components/ui/button";
import {
  buildMarketingMetadata,
  routePaths,
} from "@/lib/marketing";
import { buildBreadcrumbJsonLd } from "@/lib/schema";

export const metadata = buildMarketingMetadata({
  title: "About Pivota | Merchant Gateway for Agent-Native Commerce",
  description:
    "Pivota is the merchant gateway for agent-native commerce. Pivota is building the execution layer that helps merchants turn LLM and agent traffic into merchant-native transactions across catalog, checkout, payment, and post-purchase systems.",
  path: routePaths.about,
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: routePaths.home },
  { name: "About", path: routePaths.about },
]);

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
      <JsonLd id="about-breadcrumb-jsonld" data={breadcrumbJsonLd} />

      <main className="overflow-hidden">
        <section className="relative bg-gradient-to-b from-background via-background to-card">
          <div className="bg-site-grid absolute inset-0 opacity-15" />

          <div className="section-padding relative">
            <div className="container-max space-y-6">
              <PageChrome
                items={[
                  { label: "Home", href: routePaths.home },
                  { label: "About" },
                ]}
              />

              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">About Pivota</p>
                  <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
                    About Pivota
                  </h1>
                  <AnswerBlock className="max-w-3xl">
                    <p>
                      Pivota is the merchant gateway for agent-native commerce.
                    </p>
                    <p className="mt-2">
                      Pivota is building the execution layer that helps merchants turn LLM and
                      agent traffic into merchant-native transactions across catalog, checkout,
                      payment, and post-purchase systems.
                    </p>
                  </AnswerBlock>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild className="btn-hero h-11 px-5 text-sm">
                      <Link href="/#contact">
                        Talk to us
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="h-11 px-5 text-sm">
                      <Link href={routePaths.howPivotaWorks}>How Pivota works</Link>
                    </Button>
                  </div>
                </div>

                <div className="section-frame px-6 py-6 sm:px-7">
                  <h2 className="text-xl font-semibold tracking-tight text-foreground">
                    Press-ready definition
                  </h2>
                  <div className="mt-4 grid gap-3 text-sm">
                    <div className="rounded-2xl border border-border/70 bg-background/55 px-4 py-3">
                      Category: merchant gateway for agent-native commerce
                    </div>
                    <div className="rounded-2xl border border-border/70 bg-background/55 px-4 py-3">
                      Role: execution layer between LLM and agent demand and merchant systems
                    </div>
                    <div className="rounded-2xl border border-border/70 bg-background/55 px-4 py-3">
                      Boundary: not a marketplace, not an inventory holder, not a checkout-only tool
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
                middle layer. Agentic commerce only becomes credible for merchants when execution
                stays merchant-native. The long-term opportunity is not just traffic generation. It
                is creating the gateway that makes agent-native commerce work for merchants.
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
                In market language, that is the infrastructure layer behind agentic commerce for
                merchants.
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
                <Link href={routePaths.merchantGateway} className="text-primary hover:underline">
                  Category page
                </Link>
                <Link href={routePaths.howPivotaWorks} className="text-primary hover:underline">
                  How Pivota works
                </Link>
                <Link href={routePaths.agentIntegration} className="text-primary hover:underline">
                  Agent Integration
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
