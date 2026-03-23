import { permanentRedirect } from "next/navigation";
import { routePaths } from "@/lib/marketing";

export default function HowItWorksPage() {
  permanentRedirect(routePaths.howPivotaWorks);
}
