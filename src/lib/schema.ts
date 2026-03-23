import { siteName, siteUrl } from "@/lib/marketing";

export type BreadcrumbItemInput = {
  name: string;
  path: string;
};

export function buildBreadcrumbJsonLd(items: BreadcrumbItemInput[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? `${siteUrl}/` : `${siteUrl}${item.path}`,
    })),
  } as const;
}

export function buildFaqJsonLd(
  items: readonly {
    question: string;
    answer: string;
  }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  } as const;
}

export function buildSoftwareApplicationJsonLd(input: {
  name: string;
  description: string;
  path: string;
  featureList: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: input.name,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    description: input.description,
    url: input.path === "/" ? `${siteUrl}/` : `${siteUrl}${input.path}`,
    featureList: input.featureList,
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
  } as const;
}
