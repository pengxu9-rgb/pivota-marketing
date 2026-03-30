type SearchParamValue = string | string[] | undefined;

export type SearchParamRecord = Record<string, SearchParamValue>;

const merchantPortalSignupBaseUrl = "https://merchant.pivota.cc/signup";

export function normalizeQueryValue(value: SearchParamValue): string[] {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (value) return [value];
  return [];
}

export function buildMerchantSignupRedirectUrl(
  source: string,
  searchParams: SearchParamRecord = {},
) {
  const targetUrl = new URL(merchantPortalSignupBaseUrl);
  targetUrl.searchParams.set("source", source);

  Object.entries(searchParams).forEach(([key, value]) => {
    if (key === "source") return;

    normalizeQueryValue(value).forEach((entry) => {
      targetUrl.searchParams.append(key, entry);
    });
  });

  return targetUrl.toString();
}

type SearchParamLike = {
  forEach: (callback: (value: string, key: string) => void) => void;
} | null | undefined;

export function appendCurrentSearchParamsToPath(path: string, searchParams?: SearchParamLike) {
  const url = new URL(path, "https://pivota.cc");

  searchParams?.forEach((value, key) => {
    url.searchParams.append(key, value);
  });

  const query = url.searchParams.toString();
  return `${url.pathname}${query ? `?${query}` : ""}${url.hash}`;
}

export function appendSearchParamRecordToPath(
  path: string,
  searchParams: SearchParamRecord = {},
) {
  const url = new URL(path, "https://pivota.cc");

  Object.entries(searchParams).forEach(([key, value]) => {
    normalizeQueryValue(value).forEach((entry) => {
      url.searchParams.append(key, entry);
    });
  });

  const query = url.searchParams.toString();
  return `${url.pathname}${query ? `?${query}` : ""}${url.hash}`;
}
