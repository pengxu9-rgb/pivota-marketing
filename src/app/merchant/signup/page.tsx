"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const initialForm = {
  business_name: "",
  store_url: "",
  website: "",
  region: "",
  contact_email: "",
  contact_phone: "",
};

const onboardingPoints = [
  "Direct merchant onboarding",
  "Merchant-native transactions",
  "Built on top of your existing systems",
] as const;

export default function MerchantSignup() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(
    null,
  );
  const [formData, setFormData] = useState(initialForm);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("https://web-production-fedb.up.railway.app/merchant/onboarding/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.status === "success") {
        setStatus({
          type: "success",
          message: `Registration successful. Merchant ID: ${data.merchant_id}. Check your email for next steps.`,
        });
        setFormData(initialForm);
        window.setTimeout(() => router.push("/"), 2200);
      } else {
        setStatus({
          type: "error",
          message: data.detail || data.message || "Registration failed.",
        });
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "Registration failed.";
      setStatus({
        type: "error",
        message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="relative overflow-hidden">
        <div className="bg-site-grid absolute inset-0 opacity-20" />
        <div className="absolute left-[8%] top-20 h-64 w-64 rounded-full bg-primary/12 blur-3xl" />
        <div className="absolute right-[10%] top-12 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

        <section className="section-padding relative">
          <div className="container-max space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to pivota.cc
              </Link>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/faq" className="text-primary hover:underline">
                  FAQ
                </Link>
                <a href="https://merchant.pivota.cc/login" className="text-primary hover:underline">
                  Merchant Login
                </a>
              </div>
            </div>

            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm uppercase tracking-[0.24em] text-primary">
                  Merchant onboarding
                </div>

                <div className="space-y-4">
                  <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
                    Merchant signup
                  </h1>
                  <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
                    Register your business to route LLM and agent traffic into merchant-native
                    transactions.
                  </p>
                </div>

                <div className="grid gap-4">
                  {onboardingPoints.map((point) => (
                    <div
                      key={point}
                      className="section-frame flex items-center gap-3 px-5 py-4 text-sm text-foreground"
                    >
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <div className="section-frame p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                    <Store className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">What merchants keep</h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    Your storefront, fulfillment stack, customer operations, and existing payment
                    relationships stay in place.
                  </p>
                </div>
              </div>

              <div className="section-frame p-6 sm:p-8 lg:p-10">
                <div className="mb-6 space-y-2">
                  <h2 className="text-2xl font-semibold text-foreground">Business details</h2>
                  <p className="text-sm text-muted-foreground">
                    Complete the form and we will create your merchant onboarding record.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="business_name">Business name</Label>
                      <Input
                        id="business_name"
                        name="business_name"
                        required
                        value={formData.business_name}
                        onChange={(e) =>
                          setFormData({ ...formData, business_name: e.target.value })
                        }
                        placeholder="Acme Corporation"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="region">Region</Label>
                      <select
                        id="region"
                        required
                        value={formData.region}
                        onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select region</option>
                        <option value="US">United States</option>
                        <option value="EU">Europe</option>
                        <option value="APAC">Asia Pacific</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="store_url">Store URL</Label>
                    <Input
                      id="store_url"
                      name="store_url"
                      type="url"
                      required
                      value={formData.store_url}
                      onChange={(e) => setFormData({ ...formData, store_url: e.target.value })}
                      placeholder="https://mystore.myshopify.com"
                    />
                    <p className="text-xs text-muted-foreground">
                      Shopify, Wix, WooCommerce, or another merchant storefront URL.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      name="website"
                      type="url"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="https://acme.com"
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="contact_email">Email</Label>
                      <Input
                        id="contact_email"
                        name="contact_email"
                        type="email"
                        required
                        value={formData.contact_email}
                        onChange={(e) =>
                          setFormData({ ...formData, contact_email: e.target.value })
                        }
                        placeholder="contact@acme.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact_phone">Phone</Label>
                      <Input
                        id="contact_phone"
                        name="contact_phone"
                        type="tel"
                        required
                        value={formData.contact_phone}
                        onChange={(e) =>
                          setFormData({ ...formData, contact_phone: e.target.value })
                        }
                        placeholder="+1 (234) 567-8900"
                      />
                    </div>
                  </div>

                  {status ? (
                    <div
                      className={
                        status.type === "success"
                          ? "rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 text-sm text-primary"
                          : "rounded-2xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
                      }
                    >
                      {status.message}
                    </div>
                  ) : null}

                  <Button type="submit" className="btn-hero h-12 w-full text-sm" disabled={loading}>
                    {loading ? "Submitting..." : "Complete merchant signup"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <p className="text-xs text-muted-foreground">
                    By registering, you agree to Pivota&apos;s{" "}
                    <Link href="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy/merchant-app" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
