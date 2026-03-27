import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnswerBlock from "@/components/AnswerBlock";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import PageChrome from "@/components/PageChrome";
import { Button } from "@/components/ui/button";
import {
  buildMarketingMetadata,
  routePaths,
  useCases,
} from "@/lib/marketing";
import { buildBreadcrumbJsonLd } from "@/lib/schema";

export const metadata = buildMarketingMetadata({
  title: "Use Cases | Pivota Merchant Gateway for Agent-Native Commerce",
  description:
    "Use cases for the merchant gateway for agent-native commerce across merchant discovery, merchant-native checkout, payment routing, write-back, and measurement in agentic commerce.",
  path: routePaths.useCases,
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: routePaths.home },
  { name: "Use cases", path: routePaths.useCases },
]);

export default function UseCasesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd id="use-cases-breadcrumb-jsonld" data={breadcrumbJsonLd} />

      <main className="overflow-hidden">
        <section className="relative bg-gradient-to-b from-background via-background to-card">
          <div className="bg-site-grid absolute inset-0 opacity-15" />

          <div className="section-padding relative">
            <div className="container-max space-y-6">
              <PageChrome
                items={[
                  { label: "Home", href: routePaths.home },
                  { label: "Use cases" },
                ]}
              />

              <div className="space-y-5">
                <p className="text-sm uppercase tracking-[0.18em] text-primary">Use cases</p>
                <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
                  Use cases for the merchant gateway for agent-native commerce.
                </h1>
                <AnswerBlock className="max-w-3xl">
                  <p>
                    Pivota is the merchant gateway for agent-native commerce.
                  </p>
                  <p className="mt-2">
                    These use cases show how the gateway supports merchant discovery,
                    merchant-native checkout, payment routing, write-back, and measurement across
                    LLM surfaces in agentic commerce.
                  </p>
                  <p className="mt-2">
                    In merchant-facing language, these are the execution patterns that make
                    agentic commerce workable for brands and merchants.
                  </p>
                </AnswerBlock>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {useCases.map((useCase) => (
                  <article key={useCase.slug} className="section-frame px-6 py-6 sm:px-7">
                    <p className="text-xs uppercase tracking-[0.18em] text-primary">
                      {useCase.prompt}
                    </p>
                    <h2 className="mt-3 text-xl font-semibold tracking-tight">{useCase.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {useCase.summary}
                    </p>
                  </article>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild className="btn-hero h-11 px-5 text-sm">
                  <Link href={routePaths.merchantGateway}>
                    Category page
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-11 px-5 text-sm">
                  <Link href="/#contact">Talk to us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
