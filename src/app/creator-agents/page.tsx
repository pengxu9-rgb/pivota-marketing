import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgentSurfacesSwitcher from "@/components/AgentSurfacesSwitcher";
import type { Metadata } from "next";
import { creatorAgentDemos } from "@/config/creatorAgentDemos";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Creator Agents that convert | Pivota",
  description:
    "Creator-first shopping surfaces combining category browsing, chat, and dynamic deals—powered by top LLMs.",
  alternates: {
    canonical: "/creator-agents",
    languages: {
      en: "/creator-agents",
      "zh-Hans": "/zh/creator-agents",
      "x-default": "/creator-agents",
    },
  },
  openGraph: {
    title: "Creator Agents that convert | Pivota",
    description:
      "Creator-first shopping surfaces combining category browsing, chat, and dynamic deals—powered by top LLMs.",
    url: "https://pivota.cc/creator-agents",
    siteName: "Pivota",
    type: "website",
  },
};

type CreatorAgentsPageProps = {
  localePrefix?: string;
};

export default function CreatorAgentsPage({ localePrefix = "" }: CreatorAgentsPageProps = {}) {
  const ninaDemo =
    creatorAgentDemos.find((d) => d.slug === "nina-studio")?.url ??
    "https://creator.pivota.cc/creator/nina-studio";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <AgentSurfacesSwitcher className="mb-2" />

        {/* Hero */}
        <section className="grid gap-10 lg:grid-cols-2 items-start">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Creator Agents that convert
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A creator-first shopping surface combining category browsing, chat, and dynamic
              deals—powered by top LLMs and your brand context.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild className="btn-hero">
                <a
                  href={ninaDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  // TODO: track("creator_agents_demo_click")
                >
                  Try a live demo
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                  <span className="sr-only">Opens in a new tab</span>
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link href={`${localePrefix}/#demo-section`}>Partner with Pivota</Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Prefer email?{" "}
              <a href="mailto:contact@pivota.cc" className="text-primary hover:underline">
                contact@pivota.cc
              </a>
            </p>
          </div>

          <div className="card-gradient">
            <h2 className="text-xl font-semibold mb-2">Designed for creators</h2>
            <p className="text-sm text-muted-foreground">
              Build a creator-branded storefront where audiences can browse categories, chat for
              recommendations, and catch timely deals—without losing creator identity.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Category browsing that feels like a shop</li>
              <li>• Chat + intent to drive conversion</li>
              <li>• Deals and bundles as first-class hooks</li>
            </ul>
          </div>
        </section>

        {/* Demo gallery */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Live demos</h2>
            <p className="text-muted-foreground max-w-2xl">
              Explore real Creator Agents running on creator.pivota.cc.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {creatorAgentDemos.map((demo) => (
              <Card key={demo.slug} className="bg-card">
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-xl">{demo.name}</CardTitle>
                    {demo.status && (
                      <Badge variant={demo.status === "live" ? "default" : "secondary"}>
                        {demo.status === "live" ? "Live" : "Coming soon"}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{demo.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {demo.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-muted-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent />
                <CardFooter className="gap-3">
                  <Button asChild className="btn-hero">
                    <a
                      href={demo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      // TODO: track(
                      //   demo.slug === "nina-studio"
                      //     ? "creator_agents_open_nina_click"
                      //     : "creator_agents_open_demo_click",
                      // )
                    >
                      {demo.ctaLabel ?? "Open demo"}
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                      <span className="sr-only">Opens in a new tab</span>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">How it works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A simple workflow to turn catalogs into creator-first experiences.
            </p>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="card-gradient">
              <h3 className="text-lg font-semibold mb-2">1. Connect catalog</h3>
              <p className="text-sm text-muted-foreground">
                Link your product feed or store catalog so items, inventory, and pricing stay in
                sync.
              </p>
            </div>
            <div className="card-gradient">
              <h3 className="text-lg font-semibold mb-2">2. Curate categories &amp; deals</h3>
              <p className="text-sm text-muted-foreground">
                Organize what you want to promote—categories, bundles, and time-boxed offers.
              </p>
            </div>
            <div className="card-gradient">
              <h3 className="text-lg font-semibold mb-2">
                3. AI drives conversion via chat + browse
              </h3>
              <p className="text-sm text-muted-foreground">
                Shoppers browse like a storefront and chat for guidance, recommendations, and
                deal discovery.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Feature highlights</h2>
            <p className="text-muted-foreground max-w-2xl">
              Built to feel like a modern creator storefront, with AI-native conversion hooks.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold mb-2 text-foreground">Category browsing</h3>
              <p className="text-sm text-muted-foreground">
                A familiar browsing flow that makes discovery fast on mobile and desktop.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold mb-2 text-foreground">
                Flash sales &amp; bundle discounts
              </h3>
              <p className="text-sm text-muted-foreground">
                Turn urgency and bundles into first-class components your audience understands.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold mb-2 text-foreground">Similar products</h3>
              <p className="text-sm text-muted-foreground">
                Keep shoppers engaged with relevant alternatives and intelligent substitutions.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold mb-2 text-foreground">Light creator branding</h3>
              <p className="text-sm text-muted-foreground">
                Creator-first themes that keep identity front and center—without heavy customization.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="card-gradient border border-border">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Get early access</h2>
              <p className="text-muted-foreground max-w-2xl">
                If you’re a creator or merchant, we’ll help you launch a creator agent in days.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button asChild className="btn-hero">
                <Link href={`${localePrefix}/#demo-section`}>Talk to us</Link>
              </Button>
              <Button asChild variant="outline">
                <a href="mailto:contact@pivota.cc">Email us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
