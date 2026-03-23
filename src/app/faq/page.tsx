import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
      <main className="section-padding">
        <div className="container-max max-w-4xl space-y-10">
          <section className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">FAQ</h1>
            <p className="text-lg text-muted-foreground">
              Answers to the core category questions around the merchant gateway for agent-native
              commerce.
            </p>
          </section>

          <Accordion type="single" collapsible className="rounded-2xl border border-border/70 bg-card px-6">
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
      </main>
      <Footer />
    </div>
  );
}
