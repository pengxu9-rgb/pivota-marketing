import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Pivota",
  description: "Terms of Service for Pivota.",
  alternates: {
    canonical: "https://pivota.cc/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: 2026-01-19</p>

          <div className="prose prose-neutral mt-10 max-w-none dark:prose-invert prose-a:text-primary">
            <p>
              This page is provided for general legal navigation. For the latest Terms of Service, please contact{" "}
              <a href="mailto:support@pivota.cc">support@pivota.cc</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

