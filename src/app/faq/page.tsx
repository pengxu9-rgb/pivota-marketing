import Script from "next/script";
import Link from "next/link";
import { AlertCircle, ArrowRight, CheckCircle2, Layers3 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { buildMarketingMetadata, faqItems } from "@/lib/marketing";

export const metadata = buildMarketingMetadata({
  title: "FAQ | Pivota Merchant Gateway for Agent-Native Commerce",
  description:
    "Answers about the merchant gateway for agent-native commerce, merchant-native transactions, and how Pivota fits into merchant systems.",
  path: "/faq",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
} as const;

const categorySignals = [
  {
    icon: AlertCircle,
    title: "Not a marketplace",
    body: "Merchants keep their storefront, fulfillment, and customer operations.",
  },
  {
    icon: Layers3,
    title: "Not a checkout-only tool",
    body: "Checkout is one part of a broader execution layer across merchant systems.",
  },
  {
    icon: CheckCircle2,
    title: "Built on top of merchant systems",
    body: "Orders and payment state write back into existing merchant operations.",
  },
] as const;

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="overflow-hidden">
        <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-card">
          <div className="bg-site-grid absolute inset-0 opacity-20" />
          <div className="absolute left-[8%] top-20 h-64 w-64 rounded-full bg-primary/12 blur-3xl" />
          <div className="absolute right-[10%] top-12 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

          <div className="section-padding relative">
            <div className="container-max grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.24em] text-primary">
                  Category clarity
                </p>
                <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">FAQ</h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                  Answers to the core category questions around the merchant gateway for
                  agent-native commerce.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="btn-hero h-12 px-6 text-sm">
                    <Link href="/merchant-gateway">
                      What is a merchant gateway?
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-12 px-6 text-sm">
                    <Link href="/#contact">Talk to us</Link>
                  </Button>
                </div>
              </div>

              <div className="grid gap-4">
                {categorySignals.map((item) => (
                  <div key={item.title} className="section-frame p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-card to-background">
          <div className="container-max">
            <div className="section-frame overflow-hidden px-6 py-4 sm:px-8">
              <Accordion type="single" collapsible>
                {faqItems.map((item, index) => (
                  <AccordionItem key={item.question} value={`item-${index + 1}`}>
                    <AccordionTrigger className="text-left text-base text-foreground">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-7 text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
