import { CheckCircle2, ChevronRight, SearchCheck, Sparkles, Wrench } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AiReadinessHeroActions from "@/components/AiReadinessHeroActions";
import AiReadinessMobileStickyCta from "@/components/AiReadinessMobileStickyCta";
import TrackedMerchantCtaLink from "@/components/TrackedMerchantCtaLink";
import { appendSearchParamRecordToPath, type SearchParamRecord } from "@/lib/merchant-signup";
import {
  aiReadinessMetaDescription,
  aiReadinessSignupPath,
  aiReadinessTitle,
  buildMarketingMetadata,
  routePaths,
} from "@/lib/marketing";

const readinessAreas = [
  {
    title: "Likely issues to review",
    body: "See the gaps that may be making your store harder for AI systems to understand or convert.",
    icon: Sparkles,
  },
  {
    title: "What to fix first",
    body: "Get a prioritized view of the problems most worth addressing first.",
    icon: SearchCheck,
  },
  {
    title: "Suggested next steps",
    body: "Get practical recommendations for improving discovery, checkout, and conversion.",
    icon: Wrench,
  },
  {
    title: "A clearer starting path",
    body: "Understand whether your next step is better data, better handoff, or deeper integration.",
    icon: CheckCircle2,
  },
] as const;

const pressurePoints = [
  "AI systems cannot reliably understand many merchant catalogs",
  "Product and variant data is often incomplete or inconsistent",
  "Checkout and payment flows may not be set up for AI-driven handoff",
  "Many merchants do not know what to fix first",
] as const;

const steps = [
  {
    title: "Connect your store",
    body: "Sign up and connect your existing store and payment setup.",
  },
  {
    title: "See likely issues",
    body: "Pivota checks your catalog, product data, checkout flow, and payment setup for gaps that may affect discovery and conversion from AI customers.",
  },
  {
    title: "Get your next steps",
    body: "You receive a practical action plan to help your team decide what to fix first.",
  },
] as const;

const lightPanelClass =
  "rounded-[1.75rem] border border-slate-200/80 bg-white/88 shadow-[0_18px_42px_-22px_rgba(15,23,42,0.18)] backdrop-blur-xl";
const lightCardClass =
  "rounded-[1.5rem] border border-slate-200/80 bg-white/92 shadow-[0_18px_42px_-24px_rgba(15,23,42,0.16)]";
const lightInlineCardClass =
  "rounded-2xl border border-slate-200/80 bg-white/92 shadow-[0_10px_24px_-18px_rgba(15,23,42,0.12)]";
const lightPrimaryButtonClass =
  "h-11 rounded-xl bg-gradient-to-r from-primary via-cyan-400 to-accent px-5 text-sm font-semibold text-slate-950 shadow-[0_20px_36px_-22px_rgba(14,165,233,0.4)] transition-all hover:brightness-[1.03]";
const lightAnswerBlockClass =
  "max-w-3xl rounded-[1.4rem] border border-primary/18 bg-[linear-gradient(135deg,rgba(45,212,191,0.1),rgba(255,255,255,0.92),rgba(56,189,248,0.12))] text-base text-slate-700 shadow-[0_18px_30px_-22px_rgba(14,165,233,0.28)] backdrop-blur";
const pageSectionClass = "px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12";

export const metadata = buildMarketingMetadata({
  title: aiReadinessTitle,
  description: aiReadinessMetaDescription,
  path: routePaths.aiReadiness,
});

type AiReadinessPageProps = {
  searchParams?: Promise<SearchParamRecord>;
};

export default async function AiReadinessPage({ searchParams }: AiReadinessPageProps) {
  const resolvedSearchParams = (await searchParams) ?? {};
  const signupHref = appendSearchParamRecordToPath(aiReadinessSignupPath, resolvedSearchParams);

  return (
    <div className="min-h-screen bg-[#f6f4eb] text-slate-900">
      <Header />

      <main className="overflow-hidden bg-[#f6f4eb] pb-24 sm:pb-0">
        <section className="relative overflow-hidden bg-gradient-to-b from-[#fbfaf4] via-[#f7f4ea] to-[#f2efe4] pt-0">
          <div className="bg-site-grid absolute inset-0 opacity-[0.08]" />
          <div className="absolute left-[10%] top-10 h-52 w-52 rounded-full bg-primary/12 blur-3xl" />
          <div className="absolute right-[10%] top-10 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-6">
            <div className="container-max">
              <div className={`${lightPanelClass} overflow-hidden p-5 sm:p-6 lg:p-7`}>
                <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
                      <Sparkles className="h-3.5 w-3.5" />
                      Free store check after connection
                    </div>

                    <div className="space-y-3">
                      <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        Can your store win customers from AI?
                      </h1>

                      <div className={`${lightAnswerBlockClass} px-4 py-3.5 sm:px-5 sm:py-4`}>
                        <p className="text-[15px] leading-6 sm:hidden">
                          Connect your store to quickly spot what may be blocking discovery, clicks,
                          and conversion from AI customers, then get clear next steps on what to fix
                          first.
                        </p>
                        <div className="hidden sm:block text-base leading-7">
                          <p>
                            Connect your store to Pivota and quickly see what may be stopping your
                            store from getting discovered, clicked, and converted through AI
                            shopping flows.
                          </p>
                          <p className="mt-2">Then get clear next steps on what to fix first.</p>
                        </div>
                      </div>
                    </div>

                    <AiReadinessHeroActions signupHref={signupHref} />

                    <p className="text-sm leading-6 text-slate-600 sm:hidden">
                      No replatforming. Practical diagnostic, not a certification.
                    </p>

                    <div className="hidden sm:block space-y-1">
                      <p className="text-sm leading-7 text-slate-600">
                        No replatforming. Keep your storefront, payment setup, fulfillment, and
                        operations.
                      </p>
                      <p className="text-sm leading-7 text-slate-600">
                        This is a practical diagnostic to help you spot likely issues. It is not a
                        certification or a final go/no-go decision.
                      </p>
                    </div>

                    <div
                      className={`${lightInlineCardClass} px-4 py-3 text-xs leading-5 text-slate-600 sm:px-4 sm:py-4 sm:text-sm sm:leading-6`}
                    >
                      <span className="block font-medium text-slate-900">What happens next:</span>
                      <span className="mt-1 block">
                        Sign up → Connect your store → See likely issues → Get next steps
                      </span>
                    </div>
                  </div>

                  <div className={`${lightCardClass} p-5 sm:p-7`}>
                    <p className="text-sm uppercase tracking-[0.18em] text-primary">
                      Practical starting point
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
                      Useful before you invest more deeply
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      This gives merchants a useful starting point. It helps you spot likely
                      blockers early and leave with clear next steps instead of a vague score.
                    </p>

                    <div className="mt-5 space-y-3">
                      {[
                        "Connect your store through the existing merchant signup flow",
                        "Spot likely blockers across catalog, checkout, and payments",
                        "Leave with practical next steps on what to fix first",
                      ].map((item) => (
                        <div
                          key={item}
                          className={`${lightInlineCardClass} flex items-start gap-3 px-4 py-3`}
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <p className="text-sm leading-6 text-slate-700">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${pageSectionClass} bg-gradient-to-b from-[#f2efe4] to-[#f8f6ee]`}>
          <div className="container-max grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.18em] text-primary">
                Why merchants need this now
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                AI shopping traffic is growing. Most stores still have gaps.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-slate-600">
                Merchants want customers from AI, but many stores still have gaps that make them
                harder to discover, click, and convert.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {pressurePoints.map((item) => (
                <div key={item} className={`${lightCardClass} px-5 py-5`}>
                  <p className="text-sm leading-7 text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`${pageSectionClass} bg-gradient-to-b from-[#f8f6ee] to-[#f2efe4]`}>
          <div className="container-max space-y-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.18em] text-primary">What you&apos;ll get</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                What you get after connecting your store
              </h2>
              <p className="max-w-3xl text-base leading-8 text-slate-600">
                This is not a certification or final verdict. It is a practical way to spot likely
                blockers and decide what to work on first.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {readinessAreas.map((item) => {
                const Icon = item.icon;

                return (
                  <article key={item.title} className={`${lightCardClass} px-5 py-5 sm:px-6 sm:py-6`}>
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="how-it-works" className={`${pageSectionClass} bg-gradient-to-b from-[#f2efe4] to-[#f8f6ee]`}>
          <div className="container-max space-y-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.18em] text-primary">How it works</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                From connection to action in 3 steps
              </h2>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {steps.map((step, index) => (
                <article key={step.title} className={`${lightCardClass} px-5 py-5 sm:px-6 sm:py-6`}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-semibold text-primary">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${pageSectionClass} bg-gradient-to-b from-[#f8f6ee] to-[#efe9d9]`}>
          <div className="container-max">
            <div className={`${lightPanelClass} overflow-hidden p-5 sm:p-8 lg:p-10`}>
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">Final CTA</p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    See what may be blocking your store from AI customers
                  </h2>
                  <p className="max-w-3xl text-base leading-8 text-slate-600">
                    Connect your store and get a practical check of your catalog, checkout, and
                    payment setup, plus clear next steps on what to improve first.
                  </p>
                </div>

                <TrackedMerchantCtaLink
                  href={signupHref}
                  eventName="ai_readiness_final_cta_click"
                  page={routePaths.aiReadiness}
                  placement="final_cta"
                  className={lightPrimaryButtonClass}
                >
                  Check my store
                  <ChevronRight className="h-4 w-4" />
                </TrackedMerchantCtaLink>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link href={routePaths.howPivotaWorks} className="inline-flex items-center text-primary hover:underline">
                How Pivota works
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
              <Link
                href={routePaths.merchantNativeCheckout}
                className="inline-flex items-center text-primary hover:underline"
              >
                Merchant-native checkout
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
              <Link href={routePaths.faq} className="inline-flex items-center text-primary hover:underline">
                FAQ
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <AiReadinessMobileStickyCta signupHref={signupHref} />
      <Footer />
    </div>
  );
}
