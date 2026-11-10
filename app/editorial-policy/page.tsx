import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { getLegalPage } from "@/lib/legal";

const page = getLegalPage("editorial-policy");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/editorial-policy" },
};

export default function EditorialPolicyRoute() {
  return <LegalPage page={page} />;
}
