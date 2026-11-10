import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { getLegalPage } from "@/lib/legal";

const page = getLegalPage("cookie-policy");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyRoute() {
  return <LegalPage page={page} />;
}
