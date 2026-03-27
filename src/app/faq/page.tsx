import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnswerBlock from "@/components/AnswerBlock";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import PageChrome from "@/components/PageChrome";
import QuestionAnswerList from "@/components/QuestionAnswerList";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  buildMarketingMetadata,
  coreAnswerBlock,
  faqItems,
  homepageFaqItems,
  routePaths,
} from "@/lib/marketing";
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/schema";

export const metadata = buildMarketingMetadata({
  title: "FAQ | Pivota Merchant Gateway for Agent-Native Commerce",
  description:
    "Answers about the merchant gateway for agent-native commerce, agentic commerce, merchant-native transactions, and how Pivota fits into merchant systems.",
  path: routePaths.faq,
});

const faqJsonLd = buildFaqJsonLd(faqItems);
const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: routePaths.home },
  { name: "FAQ", path: routePaths.faq },
]);

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd id="faq-jsonld" data={faqJsonLd} />
      <JsonLd id="faq-breadcrumb-jsonld" data={breadcrumbJsonLd} />

      <main className="overflow-hidden">
        <section className="relative bg-gradient-to-b from-background via-background to-card">
          <div className="bg-site-grid absolute inset-0 opacity-15" />

          <div className="section-padding relative">
            <div className="container-max space-y-6">
              <PageChrome
                items={[
                  { label: "Home", href: routePaths.home },
                  { label: "FAQ" },
                ]}
              />

              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">Category FAQ</p>
                  <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
                    FAQ about the merchant gateway for agent-native commerce.
                  </h1>
                  <AnswerBlock className="max-w-3xl">
                    <p>{coreAnswerBlock[0]}</p>
                    <p className="mt-2">{coreAnswerBlock[1]}</p>
                  </AnswerBlock>
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

                <div className="section-frame px-6 py-6 sm:px-7">
                  <h2 className="text-xl font-semibold tracking-tight text-foreground">
                    Why these answers stay visible
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    The highest-value questions stay expanded in the raw HTML so LLMs and human
                    readers can inspect the category definition, boundaries, and workflow without
                    relying on accordion state or client-side interaction.
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Visible answers
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Five prompt-shaped questions answered directly.
                  </h2>
                </div>
                <QuestionAnswerList items={homepageFaqItems} columns={2} />
              </div>

              <div className="section-frame overflow-hidden px-6 py-4 sm:px-8">
                <div className="mb-2">
                  <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                    More questions
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    The full FAQ keeps the same anchor language while expanding on agentic
                    commerce, comparison, measurement, and systems boundaries.
                  </p>
                </div>
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

              <div className="flex flex-wrap gap-4 text-sm">
                <Link href={routePaths.whatIsAgenticCommerce} className="text-primary hover:underline">
                  What is agentic commerce?
                </Link>
                <Link href={routePaths.whatIsAgentNativeCommerce} className="text-primary hover:underline">
                  What is agent-native commerce?
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
