import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { getLegalPage } from "@/lib/legal";

const page = getLegalPage("privacy-policy");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyRoute() {
  return <LegalPage page={page} />;
}
