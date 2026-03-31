import { redirect } from "next/navigation";
import { routePaths } from "@/lib/marketing";

export default function ApiOverviewRedirectPage() {
  redirect(routePaths.developersRequestTypes);
}
