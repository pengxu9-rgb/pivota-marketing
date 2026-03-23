import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { footerDescriptor, footerExploreItems } from "@/lib/marketing";

const Footer = () => {
  return (
    <footer className="border-t border-border/70 bg-gradient-to-b from-background to-card">
      <div className="container-max px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.95fr_0.8fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/pivota-logo.png"
                alt="Pivota logo"
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg object-contain"
              />
              <span className="text-xl font-semibold tracking-tight text-foreground">Pivota</span>
            </div>
            <p className="max-w-lg text-sm leading-7 text-muted-foreground">{footerDescriptor}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
              Explore
            </h2>
            <div className="grid gap-2 text-sm">
              {footerExploreItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
              Contact
            </h2>
            <a
              href="mailto:contact@pivota.cc"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              contact@pivota.cc
            </a>
            <div className="grid gap-2 text-sm">
              <Link href="/privacy/merchant-app" className="text-muted-foreground transition-colors hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground transition-colors hover:text-foreground">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border/60 pt-6 text-sm text-muted-foreground">
          © 2026 Pivota. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
