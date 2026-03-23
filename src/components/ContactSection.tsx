"use client";

import { useState } from "react";
import Link from "next/link";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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
    <section id="contact" className="section-padding bg-gradient-to-b from-card to-background">
      <div className="container-max">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Talk to us</h2>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Pivota is building the merchant gateway that turns agent-native demand into
                merchant-native transactions.
              </p>
              <p className="text-sm text-muted-foreground max-w-2xl">
                Tell us where you are on the path from discovery to merchant-native checkout, and
                we will follow up with the right next conversation.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="card-gradient">
                <h3 className="text-lg font-semibold">What we can discuss</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Merchant gateway for agent-native commerce</li>
                  <li>Merchant-native checkout and payment flows</li>
                  <li>Catalog, checkout, payment, and post-purchase systems</li>
                </ul>
              </div>
              <div className="card-gradient">
                <h3 className="text-lg font-semibold">Prefer email?</h3>
                <p className="mt-4 text-sm text-muted-foreground">
                  Reach us at{" "}
                  <a href="mailto:contact@pivota.cc" className="text-primary hover:underline">
                    contact@pivota.cc
                  </a>
                  .
                </p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  <Link href="/merchant-gateway" className="text-primary hover:underline">
                    Product
                  </Link>
                  <Link href="/faq" className="text-primary hover:underline">
                    FAQ
                  </Link>
                  <Link href="/about" className="text-primary hover:underline">
                    About
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="card-gradient">
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
                  placeholder="Tell us where you are today: discovery, feeds, or merchant-native checkout."
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
    </section>
  );
};

export default ContactSection;
