import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "服务条款 | Pivota",
  description: "Pivota 服务条款。",
  alternates: {
    canonical: "https://pivota.cc/zh/terms",
  },
};

export default function ZhTermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight">服务条款</h1>
          <p className="mt-3 text-sm text-muted-foreground">更新日期：2026-01-19</p>

          <div className="prose prose-invert mt-10 max-w-none prose-a:text-primary">
            <p>
              如需最新版本服务条款，请联系：<a href="mailto:support@pivota.cc">support@pivota.cc</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

