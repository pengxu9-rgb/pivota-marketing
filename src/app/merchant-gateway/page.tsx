import { permanentRedirect } from "next/navigation";
import { routePaths } from "@/lib/marketing";

export default function MerchantGatewayPage() {
  permanentRedirect(routePaths.merchantGateway);
}
