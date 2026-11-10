import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { getLegalPage } from "@/lib/legal";

const page = getLegalPage("affiliate-disclosure");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/affiliate-disclosure" },
};

export default function AffiliateDisclosureRoute() {
  return <LegalPage page={page} />;
}
