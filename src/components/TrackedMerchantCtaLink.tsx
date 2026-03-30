"use client";

import * as React from "react";
import Link from "next/link";
import { type VariantProps } from "class-variance-authority";
import { emitMarketingEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

type TrackedMerchantCtaLinkProps = Omit<
  React.ComponentPropsWithoutRef<typeof Link>,
  "href"
> &
  VariantProps<typeof buttonVariants> & {
    href: string;
    eventName: string;
    page: string;
    placement: string;
  };

const TrackedMerchantCtaLink = React.forwardRef<HTMLAnchorElement, TrackedMerchantCtaLinkProps>(
  (
    {
      className,
      variant,
      size,
      href,
      eventName,
      page,
      placement,
      onClick,
      ...props
    },
    ref,
  ) => {
    const resolvedHref = href;

    return (
      <Link
        ref={ref}
        href={resolvedHref}
        className={cn(buttonVariants({ variant, size }), className)}
        onClick={(event) => {
          emitMarketingEvent({
            event: eventName,
            page,
            placement,
            href: resolvedHref,
          });
          onClick?.(event);
        }}
        {...props}
      />
    );
  },
);

TrackedMerchantCtaLink.displayName = "TrackedMerchantCtaLink";

export default TrackedMerchantCtaLink;
