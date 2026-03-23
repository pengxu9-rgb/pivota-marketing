"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogIn, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { primaryNavItems } from "@/lib/marketing";

function normalizePath(pathname: string | null): string {
  if (!pathname) return "/";
  if (pathname.length > 1 && pathname.endsWith("/")) return pathname.slice(0, -1);
  return pathname;
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoSrc, setLogoSrc] = useState("/pivota-logo.png");
  const pathname = normalizePath(usePathname());

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  const navItems = useMemo(
    () =>
      primaryNavItems.map((item) => ({
        ...item,
        active:
          !item.href.includes("#") &&
          (pathname === item.href || pathname.startsWith(`${item.href}/`)),
      })),
    [pathname],
  );

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-border/80 bg-background/88 backdrop-blur-xl"
            : "border-transparent bg-background/70 backdrop-blur-md"
        }`}
      >
        <nav className="container-max flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <img
              src={logoSrc}
              alt="Pivota logo"
              className="h-8 w-8 rounded-lg object-contain"
              onError={() => setLogoSrc("/pivota-logo-v2.svg")}
            />
            <span className="text-xl font-semibold tracking-tight text-foreground">Pivota</span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  item.active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="border-input bg-background/40 transition-colors hover:border-primary/60 hover:bg-primary/5"
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  Log in
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <a href="https://developer.pivota.cc/login">Developer Login</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="https://merchant.pivota.cc/login">Merchant Login</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-lg border border-input bg-background/40 p-2 text-foreground md:hidden"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {isOpen ? (
          <div className="border-t border-border bg-background/95 px-4 py-4 md:hidden">
            <div className="container-max space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    item.active
                      ? "bg-primary/10 text-foreground"
                      : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="grid grid-cols-2 gap-3 pt-3">
                <a
                  href="https://developer.pivota.cc/login"
                  className="rounded-lg border border-input px-3 py-3 text-center text-sm font-medium text-foreground transition-colors hover:border-primary/60 hover:bg-primary/5"
                >
                  Developer Login
                </a>
                <a
                  href="https://merchant.pivota.cc/login"
                  className="rounded-lg border border-input px-3 py-3 text-center text-sm font-medium text-foreground transition-colors hover:border-primary/60 hover:bg-primary/5"
                >
                  Merchant Login
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
};

export default Header;
