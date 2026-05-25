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

const discussionItems = [
  "Merchant gateway for agent-native commerce",
  "Catalog, offer, checkout, and payment continuity",
  "Readiness paths across discovery, feeds, link-out, and merchant-native checkout",
  "Commerce infrastructure for personal agents, branded agents, and shopping assistants",
] as const;

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
      className="bg-[#f7f3ea]"
    >
      <div className="section-padding">
        <div className="container-max grid gap-10 border-y border-border/80 py-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="space-y-7">
            <div>
              <p className="kicker text-primary">Talk to us</p>
              <h2 className="mt-5 font-serif text-4xl font-medium tracking-normal text-foreground sm:text-5xl">
                Ready to make agent demand executable?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
                Start merchant signup if you are ready to connect. Use the form if you want to
                talk through the execution model first.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild className="h-12 px-6 text-sm">
                <Link href={merchantSignupPath}>Merchant signup</Link>
              </Button>
              <Button asChild variant="outline" className="h-12 px-6 text-sm">
                <a href="mailto:contact@pivota.cc">Email us</a>
              </Button>
            </div>

            <div className="divide-y divide-border/80 border-y border-border/80">
              {discussionItems.map((item) => (
                <div key={item} className="py-4 text-sm font-medium text-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="section-frame p-5 sm:p-6">
            <div className="mb-5">
              <h3 className="text-xl font-semibold text-foreground">Contact form</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
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

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                <Send className="mr-2 h-4 w-4" />
                {isSubmitting ? "Sending..." : "Contact us"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
