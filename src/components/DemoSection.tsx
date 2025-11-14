"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Calendar, Send } from "lucide-react";

const DemoSection = () => {
  const pathname = usePathname();
  const isZh = pathname?.startsWith("/zh");

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error((data as any)?.error || "Failed to submit");
      }
      toast.success(
        isZh
          ? "已提交！我们也已向 contact@pivota.cc 发送通知。我们会在 24 小时内联系你。"
          : "Submitted! We emailed contact@pivota.cc and will reach out within 24 hours.",
      );
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting demo request:", error);
      toast.error(isZh ? "提交失败，请重试。" : "Failed to submit demo request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="demo-section" className="section-padding bg-gradient-to-b from-card to-background">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold">
              {isZh ? (
                <>立即<span className="text-gradient-primary">预约演示</span></>
              ) : (
                <>Book a <span className="text-gradient-primary">Demo</span> Today</>
              )}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {isZh
                ? "亲身体验 Pivota 如何简化代理支付并提升效率"
                : "Experience firsthand how Pivota can simplify your agent payments and boost efficiency"}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="card-gradient">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{isZh ? "全名 *" : "Full Name *"}</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border/50 focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">{isZh ? "公司 *" : "Company *"}</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border/50 focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">{isZh ? "邮箱 *" : "Email *"}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border/50 focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{isZh ? "电话" : "Phone"}</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-background/50 border/50 focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">{isZh ? "留言" : "Message"}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder={
                      isZh ? "请简单介绍你的支付痛点与场景..." : "Tell us about your current payment challenges..."
                    }
                    className="bg-background/50 border/50 focus:border-primary transition-colors"
                  />
                </div>
                
                <Button type="submit" className="btn-hero w-full" disabled={isSubmitting}>
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? (isZh ? "发送中..." : "Sending...") : isZh ? "预约演示" : "Book a Demo"}
                </Button>
              </form>
            </div>
            
            {/* Benefits */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">{isZh ? "演示内容包括：" : "What to expect in your demo:"}</h3>
                
                <div className="space-y-4">
                  {(isZh
                    ? [
                        "平台现场演示",
                        "基于你的业务定制化演示",
                        "与支付专家的问答环节",
                        "集成路线讨论",
                        "价格与实施时间表",
                      ]
                    : [
                        "Live walkthrough of the Pivota platform",
                        "Customized demo based on your business needs",
                        "Q&A session with our payment experts",
                        "Integration roadmap discussion",
                        "Pricing and implementation timeline",
                      ]).map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="card-gradient border-l-4 border-l-primary">
                <div className="flex items-start gap-4">
                  <Calendar className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">{isZh ? "排期灵活" : "Schedule Flexibility"}</h4>
                    <p className="text-sm text-muted-foreground">
                      {isZh
                        ? "我们会根据你的时区灵活安排。演示通常持续 30-45 分钟。"
                        : "We accommodate your timezone and schedule. Demo sessions typically last 30-45 minutes."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
