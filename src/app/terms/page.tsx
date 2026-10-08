import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Service terms and access | Pivota",
  description: "Service terms and access for Pivota.",
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
          <h1 className="text-4xl font-bold tracking-tight">Service terms and access</h1>
          <p className="mt-3 text-sm text-muted-foreground">Updated: 2026-10-07</p>

          <div className="prose mt-10 max-w-none prose-neutral prose-a:text-primary prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
            <p>
              This page is provided for general legal navigation. For the latest Service terms and access, please contact{" "}
              <a href="mailto:support@pivota.cc">support@pivota.cc</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
