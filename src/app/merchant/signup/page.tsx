import { permanentRedirect } from "next/navigation";

type MerchantSignupPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

function normalizeQueryValue(value: string | string[] | undefined): string[] {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (value) return [value];
  return [];
}

export default async function MerchantSignupPage({ searchParams }: MerchantSignupPageProps) {
  const resolvedSearchParams = (await searchParams) ?? {};
  const targetUrl = new URL("https://merchant.pivota.cc/signup");
  targetUrl.searchParams.set("source", "marketing");

  Object.entries(resolvedSearchParams).forEach(([key, value]) => {
    if (key === "source") return;

    normalizeQueryValue(value).forEach((entry) => {
      targetUrl.searchParams.append(key, entry);
    });
  });

  permanentRedirect(targetUrl.toString());
}
