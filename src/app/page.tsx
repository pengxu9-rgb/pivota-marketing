// Server component to allow page-level metadata

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
  title: "The API for Agentic Commerce: Connect Agents & Merchants | Pivota",
  description:
    "Pivota is the infrastructure for agentic commerce. A single API to connect AI agents to merchant products, ordering (ACP), and direct payments (AP2).",
};

export default function Home() {
  return (
    <div id="home" className="min-h-screen bg-background">
      <Header />
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
