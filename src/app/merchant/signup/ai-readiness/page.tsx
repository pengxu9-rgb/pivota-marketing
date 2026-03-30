import { permanentRedirect } from "next/navigation";
import { buildMerchantSignupRedirectUrl, type SearchParamRecord } from "@/lib/merchant-signup";

type AiReadinessSignupPageProps = {
  searchParams?: Promise<SearchParamRecord>;
};

export default async function AiReadinessSignupPage({
  searchParams,
}: AiReadinessSignupPageProps) {
  const resolvedSearchParams = (await searchParams) ?? {};
  permanentRedirect(buildMerchantSignupRedirectUrl("ai-readiness", resolvedSearchParams));
}
