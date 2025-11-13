import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import WorkflowSection from "@/components/WorkflowSection";
import PartnersSection from "@/components/PartnersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DemoSection from "@/components/DemoSection";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "面向智能商业的 API：连接代理与商家 | Pivota",
  description:
    "Pivota 提供智能商业基础设施：一个 API 连接 AI 代理与商家商品、下单（ACP）、以及直接支付（AP2）。",
  alternates: {
    canonical: "/zh/",
    languages: {
      en: "/",
      "zh-Hans": "/zh/",
      "x-default": "/",
    },
  },
};

export default function HomeZh() {
  return (
    <div id="home" className="min-h-screen bg-background">
      <Header />
      {/* Reusing existing sections. Content is currently in English; metadata is localized. */}
      <HeroSection />
      <FeaturesSection />
      <WorkflowSection />
      <PartnersSection />
      <TestimonialsSection />
      <DemoSection />
      <Footer />
    </div>
  );
}

