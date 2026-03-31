"use client";

import { useState } from "react";
import Link from "next/link";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { merchantSignupPath } from "@/lib/marketing";

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

const ContactSection = () => {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error((data as { error?: string }).error || "Request failed");
      }

      setFormData(initialForm);
      setStatus({
        type: "success",
        message: "Thanks. We sent your request to contact@pivota.cc.",
      });
    } catch (error) {
      console.error("Contact form error", error);
      setStatus({
        type: "error",
        message: "We could not send your request right now. Email contact@pivota.cc.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-card to-background"
    >
      <div className="bg-site-grid absolute inset-0 opacity-15" />
      <div className="absolute left-[10%] top-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-[8%] bottom-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

      <div className="section-padding relative">
      <div className="container-max">
        <div className="section-frame relative overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Talk to us</h2>
                <p className="text-lg text-muted-foreground max-w-3xl">
                  Pivota is building the merchant gateway that turns agent-native demand into
                  merchant-native transactions.
                </p>
                <p className="text-sm text-muted-foreground max-w-2xl">
                  If you are ready to onboard, start merchant signup. If you want to talk through
                  the execution model first, use the form.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild className="btn-hero h-12 px-6 text-sm">
                  <Link href={merchantSignupPath}>Merchant signup</Link>
                </Button>
                <Button asChild variant="outline" className="h-12 px-6 text-sm">
                  <a href="mailto:contact@pivota.cc">Email us</a>
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="card-gradient">
                  <h3 className="text-lg font-semibold">What we can discuss</h3>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li>Merchant gateway for agent-native commerce</li>
                    <li>Merchant-native checkout and payment flows</li>
                    <li>Catalog, checkout, payment, and post-purchase systems</li>
                    <li>Commerce skill layer for personal agents, branded agents, and shopping assistants</li>
                  </ul>
                </div>
                <div className="card-gradient">
                  <h3 className="text-lg font-semibold">Need direct onboarding?</h3>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Merchants can register directly through the merchant signup flow and keep
                    storefront, payment, and customer operations in place.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3 text-sm">
                    <Link href={merchantSignupPath} className="text-primary hover:underline">
                      Open merchant signup
                    </Link>
                    <Link href="/faq" className="text-primary hover:underline">
                      Read the FAQ
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-gradient">
              <div className="mb-5">
                <h3 className="text-xl font-semibold text-foreground">Contact form</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Tell us where you are today: discovery, feeds, or merchant-native checkout.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Discovery, feeds, merchant-native checkout, or merchant onboarding."
                  />
                </div>

                {status ? (
                  <p
                    className={
                      status.type === "success"
                        ? "text-sm text-primary"
                        : "text-sm text-destructive"
                    }
                  >
                    {status.message}
                  </p>
                ) : null}

                <Button type="submit" className="btn-hero w-full" disabled={isSubmitting}>
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Contact us"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ContactSection;
