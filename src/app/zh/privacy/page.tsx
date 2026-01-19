import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "隐私政策 | Pivota",
  description: "Pivota Merchant App 隐私政策。",
  alternates: {
    canonical: "https://pivota.cc/zh/privacy",
  },
};

export default function ZhPrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight">隐私政策</h1>
          <p className="mt-3 text-sm text-muted-foreground">更新日期：2026-01-19</p>

          <div className="prose prose-invert mt-10 max-w-none prose-a:text-primary">
            <p>
              我们的 Merchant App 隐私政策请参考：{" "}
              <a href="/privacy/merchant-app">https://pivota.cc/privacy/merchant-app</a>
            </p>
            <p>
              如有任何问题，请联系：<a href="mailto:support@pivota.cc">support@pivota.cc</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

