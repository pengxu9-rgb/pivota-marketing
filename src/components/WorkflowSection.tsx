"use client";

import { UserCheck, Building2, CreditCard, PieChart } from "lucide-react";
import { usePathname } from "next/navigation";
import workflowImage from "@/assets/workflow-steps.jpg";

const WorkflowSection = () => {
  const pathname = usePathname();
  const isZh = pathname?.startsWith("/zh");

  const steps = isZh
    ? [
        {
          icon: UserCheck,
          title: "代理注册",
          description: "AI 辅助校验，自动 KYC，确保快速且安全的代理入驻。",
        },
        {
          icon: Building2,
          title: "商家接入",
          description: "快速连接系统，最小化配置，立即兼容平台。",
        },
        {
          icon: CreditCard,
          title: "支付流程",
          description: "实时安全交易，多层加密，即时结算能力。",
        },
        {
          icon: PieChart,
          title: "报表与洞察",
          description: "AI 驱动面板，提供预测分析与绩效优化建议。",
        },
      ]
    : [
        {
          icon: UserCheck,
          title: "Agent Registration",
          description:
            "AI-assisted verification process ensures quick and secure agent onboarding with automated KYC checks.",
        },
        {
          icon: Building2,
          title: "Merchant Onboarding",
          description:
            "Quick connection system integrates merchants with minimal setup and instant platform compatibility.",
        },
        {
          icon: CreditCard,
          title: "Payment Flow",
          description:
            "Real-time, secure transactions with multi-layer encryption and instant settlement capabilities.",
        },
        {
          icon: PieChart,
          title: "Reporting & Insights",
          description:
            "AI-powered dashboards provide clarity with predictive analytics and performance optimization.",
        },
      ];
  return (
    <section id="workflow-section" className="section-padding bg-gradient-to-b from-background to-card">
      <div className="container-max">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            {isZh ? (
              <>工作<span className="text-gradient-primary">原理</span></>
            ) : (
              <>How It <span className="text-gradient-primary">Works</span></>
            )}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {isZh ? "精简流程让代理支付管理更轻松" : "Our streamlined process makes agent payment management effortless"}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Workflow Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={step.title} 
                className="flex gap-6 group animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:shadow-[var(--shadow-neon)] transition-all duration-300">
                    {index + 1}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <step.icon className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Workflow Visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={workflowImage.src} 
                alt="Pivota workflow visualization showing the 4-step process" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
            </div>
            
            {/* Animated connections */}
            <div className="absolute top-1/4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-lg animate-pulse"></div>
            <div className="absolute bottom-1/4 -left-4 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
