import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { footerDescriptor, footerExploreItems, merchantSignupPath } from "@/lib/marketing";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#11100f] text-white">
      <div className="container-max px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="font-serif text-4xl font-medium leading-tight tracking-normal sm:text-5xl">
              Commerce for agents.
              <br />
              Control for merchants.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70">{footerDescriptor}</p>
          </div>
          <a
            href={merchantSignupPath}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-white px-5 text-sm font-semibold text-[#11100f] transition-colors hover:bg-lime-100"
          >
            Get started
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-10 py-10 lg:grid-cols-[1.15fr_0.95fr_0.8fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="pv-logo pv-logo--gradient pv-logo--md" aria-hidden="true" />
              <span className="pv-wordmark pv-wordmark--sm pv-wordmark--light">Pivota</span>
            </div>
            <p className="max-w-lg text-sm leading-7 text-white/60">
              Agent-readable commerce infrastructure on top of existing merchant systems.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-lime-200">
              Explore
            </h2>
            <div className="grid gap-2 text-sm">
              {footerExploreItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white/60 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-lime-200">
              Contact
            </h2>
            <a
              href="mailto:contact@pivota.cc"
              className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" />
              contact@pivota.cc
            </a>
            <div className="grid gap-2 text-sm">
              <Link href="/privacy/merchant-app" className="text-white/60 transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 transition-colors hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-sm text-white/50">
          © 2026 Pivota. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
