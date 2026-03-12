"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type Surface = {
  label: string;
  href: string;
  active: boolean;
};

export default function AgentSurfacesSwitcher({ className }: { className?: string }) {
  const pathname = usePathname() ?? "";

  const surfaces: Surface[] = [
    {
      label: "Shopping Agent",
      href: "/shopping-agent",
      active: pathname === "/shopping-agent" || pathname === "/zh/shopping-agent",
    },
    {
      label: "Creator Agents",
      href: "/creator-agents",
      active: pathname === "/creator-agents" || pathname === "/zh/creator-agents",
    },
  ];

  return (
    <div className={cn("flex items-center justify-center sm:justify-start", className)}>
      <div className="inline-flex items-center rounded-full border border-input bg-background/60 p-1 backdrop-blur">
        {surfaces.map((surface) => (
          <Link
            key={surface.href}
            href={surface.href}
            aria-current={surface.active ? "page" : undefined}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              surface.active
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-accent/20",
            )}
          >
            {surface.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
