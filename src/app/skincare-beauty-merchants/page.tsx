import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import AnswerBlock from "@/components/AnswerBlock";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import PageChrome from "@/components/PageChrome";
import QuestionAnswerList from "@/components/QuestionAnswerList";
import { Button } from "@/components/ui/button";
import { buildMarketingMetadata, routePaths } from "@/lib/marketing";
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/schema";

const strongFitSignals = [
  "Ingredient-heavy catalogs",
  "Concern-driven shopping",
  "Variant-heavy product structures",
  "Kits, bundles, and sampler packs",
  "Subscriptions and replenishment paths",
] as const;

const categoryDifferences = [
  {
    title: "Ingredients and actives",
    body: "Ingredient-heavy catalogs create more resolution work than simple product-title matching.",
  },
  {
    title: "Concerns and routines",
    body: "Many shoppers start with a concern, a routine goal, or a regimen question instead of a specific product.",
  },
  {
    title: "Variants and formats",
    body: "Shade, size, strength, finish, format, travel size, and bundle structure can all create recommendation ambiguity.",
  },
  {
    title: "Bundles, kits, and sampler packs",
    body: "Beauty merchants often sell relationships between products, not only single items.",
  },
  {
    title: "Promotions, subscriptions, and replenishment",
    body: "First-order offers, replenishment logic, and subscription paths can make visible offers harder to execute cleanly.",
  },
] as const;

const resolutionBreaks = [
  {
    title: "Concern-led demand does not map cleanly to catalog taxonomy",
    body: "A shopper asks by concern, but the catalog is organized by collection, product family, or internal naming.",
  },
  {
    title: "Ingredient and active ambiguity",
    body: "Products may share overlapping claims while differing in concentration, usage, compatibility, or format.",
  },
  {
    title: "Variant ambiguity",
    body: "Agents may struggle to distinguish sizes, shades, strengths, refill versus full-size, or bundled versus standalone versions.",
  },
  {
    title: "Routine and regimen ambiguity",
    body: "A merchant may sell a cleanser, serum, moisturizer, and SPF individually, as a kit, or as a routine recommendation, but the execution path is not equally clear for each.",
  },
  {
    title: "Visible offer versus executable offer",
    body: "A discount, subscription, bundle, or sampler offer may be visible on site without being equally easy for an agent to preserve and route through the correct merchant path.",
  },
] as const;

const helpItems = [
  {
    title: "Makes catalogs more queryable",
    body: "Pivota helps structure products, variants, ingredients, actives, concerns, and offer context so agents can resolve what the merchant actually sells with less ambiguity.",
  },
  {
    title: "Reduces recommendation ambiguity",
    body: "Pivota helps merchants tighten the path between what a customer means, what an agent recommends, and what the catalog can actually support.",
  },
  {
    title: "Clarifies executable paths",
    body: "Pivota helps separate what is merely visible from what is executable across offers, bundles, kits, sampler packs, subscriptions, and replenishment paths.",
  },
  {
    title: "Keeps merchants on their existing stack",
    body: "Merchants keep Shopify, Wix, WooCommerce, BigCommerce, or similar systems, plus their storefront, PSP relationships, fulfillment stack, and customer operations.",
  },
  {
    title: "Supports staged rollout",
    body: "Some merchants start with discovery, feeds, or link-out. Others are ready to deepen into merchant-native checkout once checkout, payment, order, and webhook continuity are in good shape.",
  },
] as const;

const rolloutStages = [
  {
    title: "Discovery",
    body: "Use when ingredient mapping, concern mapping, routine logic, product normalization, or variant clarity still need work. This is the lighter starting path for merchants who need cleaner agent resolution first.",
  },
  {
    title: "Feeds or link-out",
    body: "Use when the merchant wants cleaner downstream recommendation and traffic routing before deeper checkout execution. This is often the right middle stage for brands improving catalog and offer readiness faster than checkout readiness.",
  },
  {
    title: "Merchant-native checkout",
    body: "Use when checkout, payment, order, and webhook continuity are ready for the deeper execution stage. Some merchants are ready to start here earlier. Others deepen later after discovery, feeds, or link-out improve the path.",
  },
] as const;

const fitList = [
  "DTC skincare brands with ingredient-heavy catalogs and concern-led discovery",
  "Beauty brands with close variants, sizes, formats, shades, or bundle relationships",
  "Merchants selling kits, sampler packs, routines, or regimen-style product combinations",
  "Brands with subscription, replenishment, or first-order offer complexity",
  "Teams seeing recommendation ambiguity between what is visible on site and what is actually executable",
  "Merchants that want to improve AI-agent readiness without replatforming their existing store stack",
] as const;

const beautyFaqItems = [
  {
    question: "Does Pivota replace Shopify for beauty brands?",
    answer:
      "No. Pivota works on top of Shopify, Wix, WooCommerce, BigCommerce, and similar stacks. Beauty merchants keep the storefront and operations they already run.",
  },
  {
    question: "Can Pivota help ingredient-heavy skincare catalogs appear more clearly in AI agents?",
    answer:
      "Yes. Pivota helps merchants make ingredients, actives, concerns, variants, and offer context more queryable so agents can resolve products with less ambiguity.",
  },
  {
    question: "How does Pivota help when customers shop by concern instead of exact product name?",
    answer:
      "That is one of the strongest use cases for this category. Pivota helps merchants tighten the path between concern-led demand, product resolution, offer logic, and downstream execution.",
  },
  {
    question: "Do beauty merchants need to start with full checkout integration?",
    answer:
      "No. Many merchants start with lighter paths such as discovery, feeds, or link-out first, then deepen into merchant-native checkout when readiness improves.",
  },
  {
    question: "Can some beauty merchants start with merchant-native checkout on day one?",
    answer:
      "Yes. Some merchants are ready to start deeper when checkout, payment, and execution continuity are already in good shape. Others should start lighter first.",
  },
  {
    question: "Can Pivota help with bundles, kits, sampler packs, subscriptions, or replenishment?",
    answer:
      "Yes. These are exactly the kinds of structures where visible offer versus executable offer can drift. Pivota helps merchants make those paths clearer and more dependable.",
  },
  {
    question: "Does merchant-native checkout mean every beauty flow happens fully inside chat?",
    answer:
      "No. Merchant-native checkout means the path stays in merchant-controlled systems. Some agent surfaces may still use link-out or another merchant-controlled handoff.",
  },
  {
    question: "Is Pivota only for skincare and beauty merchants?",
    answer:
      "No. Pivota is not beauty-exclusive. Skincare and beauty are simply a strong-fit category because of ingredient-heavy catalogs, concern-led shopping, variant complexity, and regimen-style recommendation patterns.",
  },
] as const;

export const metadata = buildMarketingMetadata({
  title: "Pivota for Skincare and Beauty Merchants | Merchant Gateway for AI Commerce",
  description:
    "Pivota works on top of Shopify, Wix, WooCommerce, BigCommerce, and similar stacks for skincare and beauty merchants. Improve ingredient, concern, variant, bundle, and replenishment resolution across AI agents without replatforming.",
  path: routePaths.skincareBeautyMerchants,
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: routePaths.home },
  { name: "Skincare and beauty merchants", path: routePaths.skincareBeautyMerchants },
]);

const faqJsonLd = buildFaqJsonLd(beautyFaqItems);

export default function SkincareBeautyMerchantsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd id="skincare-beauty-breadcrumb-jsonld" data={breadcrumbJsonLd} />
      <JsonLd id="skincare-beauty-faq-jsonld" data={faqJsonLd} />

      <main className="overflow-hidden">
        <section className="relative bg-gradient-to-b from-background via-background to-card">
          <div className="bg-site-grid absolute inset-0 opacity-15" />

          <div className="section-padding relative">
            <div className="container-max space-y-6">
              <PageChrome
                items={[
                  { label: "Home", href: routePaths.home },
                  { label: "Skincare and beauty merchants" },
                ]}
              />

              <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Skincare + beauty merchants
                  </p>
                  <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
                    Pivota for skincare and beauty merchants
                  </h1>
                  <AnswerBlock className="max-w-3xl">
                    <p>
                      Pivota is a merchant gateway and commerce layer that works on top of
                      Shopify, Wix, WooCommerce, BigCommerce, and similar stacks. No
                      replatforming is required.
                    </p>
                    <p className="mt-2">
                      That model is especially relevant for skincare and beauty because shoppers
                      and AI agents often ask by ingredient, active, concern, routine, variant,
                      bundle, kit, sampler pack, or replenishment need rather than exact catalog
                      taxonomy. Pivota helps merchants make that path more queryable, more
                      executable, and more merchant-controlled.
                    </p>
                  </AnswerBlock>
                  <p className="max-w-3xl text-sm leading-7 text-foreground/90">
                    Skincare and beauty are an early strong-fit category for Pivota, not the only
                    category it serves. Some merchants start with discovery, feeds, or link-out
                    first. Others deepen into merchant-native checkout when their checkout,
                    payment, and execution paths are ready.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild className="btn-hero h-11 px-5 text-sm">
                      <Link href={routePaths.aiReadiness}>
                        See what to fix first
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="h-11 px-5 text-sm">
                      <Link href={routePaths.merchantOnboarding}>Merchant onboarding</Link>
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <Link href={routePaths.merchantNativeCheckout} className="text-primary hover:underline">
                      Merchant-native checkout
                    </Link>
                    <Link href={routePaths.useCases} className="text-primary hover:underline">
                      Use cases
                    </Link>
                    <Link href={routePaths.faq} className="text-primary hover:underline">
                      FAQ
                    </Link>
                  </div>
                </div>

                <div className="section-frame px-6 py-6 sm:px-7">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Why this category is a strong fit
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    Skincare and beauty merchants often face natural-language shopping behavior,
                    dense ingredient context, closely related variants, and more offer logic than
                    simple catalog matching can handle.
                  </p>
                  <div className="mt-5 grid gap-3 text-sm">
                    {strongFitSignals.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-border/70 bg-background/55 px-4 py-3 text-foreground"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Why this category is a strong fit
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Why skincare and beauty are different in agent commerce
                  </h2>
                  <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
                    Skincare and beauty are unusually natural-language categories. Customers do
                    not only shop by SKU or exact product name. They ask for &quot;niacinamide for oily
                    skin,&quot; &quot;fragrance-free cleanser for sensitive skin,&quot; &quot;routine for acne
                    marks,&quot; or &quot;travel-size set for dry skin.&quot;
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {categoryDifferences.map((item) => (
                    <article key={item.title} className="section-frame px-5 py-5">
                      <h3 className="text-lg font-semibold tracking-tight text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.body}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    Where resolution breaks
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Where agent resolution breaks in beauty
                  </h2>
                  <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
                    A skincare or skin care brand can already be visible online and still be hard
                    for AI agents to resolve correctly. The break usually shows up as resolution
                    ambiguity first, then recommendation ambiguity later, between natural-language
                    shopping intent and an executable merchant path.
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {resolutionBreaks.map((item) => (
                    <article key={item.title} className="section-frame px-5 py-5">
                      <h3 className="text-lg font-semibold tracking-tight text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.body}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">
                    How Pivota helps
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    How Pivota helps skincare and beauty merchants
                  </h2>
                  <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
                    Pivota does not replace the storefront. It works on top of the merchant stack
                    and improves the path from agent demand to merchant execution.
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {helpItems.map((item) => (
                    <article key={item.title} className="section-frame px-5 py-5">
                      <h3 className="text-lg font-semibold tracking-tight text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.body}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="section-frame px-6 py-8 sm:px-10 sm:py-10">
                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                  <div className="space-y-4">
                    <p className="text-sm uppercase tracking-[0.18em] text-primary">
                      Rollout path
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                      Beauty merchants do not all need the same starting point
                    </h2>
                    <p className="text-base leading-8 text-muted-foreground">
                      Not every skincare or beauty merchant should start with the deepest
                      integration stage on day one. The right rollout depends on catalog clarity,
                      offer logic, checkout readiness, payment continuity, and operational
                      confidence.
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    {rolloutStages.map((stage) => (
                      <div key={stage.title} className="rounded-2xl border border-border/70 bg-background/55 p-5">
                        <p className="text-sm font-semibold text-foreground">{stage.title}</p>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">
                          {stage.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="mt-6 max-w-3xl text-sm leading-7 text-foreground/90">
                  Merchant-native checkout means the path stays in merchant-controlled systems. It
                  does not mean every merchant starts there immediately, or that every agent
                  surface runs a fully in-chat checkout.
                </p>
              </div>

              <div className="section-frame px-6 py-8 sm:px-10 sm:py-10">
                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                  <div className="space-y-4">
                    <p className="text-sm uppercase tracking-[0.18em] text-primary">
                      Who this fits best
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                      Who this page is especially relevant for
                    </h2>
                    <p className="text-base leading-8 text-muted-foreground">
                      This page is especially useful for skincare, beauty, and cosmetics merchants
                      with one or more of these patterns.
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {fitList.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-border/70 bg-background/55 px-4 py-3 text-sm leading-6 text-foreground"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">FAQ</p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Skincare and beauty merchant FAQ
                  </h2>
                </div>
                <QuestionAnswerList items={beautyFaqItems} columns={2} />
              </div>

              <div className="section-frame px-6 py-8 sm:px-10 sm:py-10">
                <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-primary">CTA</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                      Ready to see where beauty-specific resolution breaks in your merchant path?
                    </h2>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
                      Start with AI readiness, then use Merchant Onboarding and merchant-native
                      checkout guidance to decide whether discovery, feeds, link-out, or deeper
                      execution is the right next move.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild className="btn-hero h-11 px-5 text-sm">
                      <Link href={routePaths.aiReadiness}>
                        See what to fix first
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="h-11 px-5 text-sm">
                      <Link href="/#contact">Talk to us</Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm">
                <Link href={routePaths.merchantOnboarding} className="text-primary hover:underline">
                  Merchant onboarding
                </Link>
                <Link href={routePaths.merchantNativeCheckout} className="text-primary hover:underline">
                  Merchant-native checkout
                </Link>
                <Link href={routePaths.useCases} className="text-primary hover:underline">
                  Use cases
                </Link>
                <Link href={routePaths.faq} className="inline-flex items-center text-primary hover:underline">
                  FAQ
                  <ChevronRight className="ml-1 h-4 w-4" />
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
