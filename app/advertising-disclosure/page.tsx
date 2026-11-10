import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { getLegalPage } from "@/lib/legal";

const page = getLegalPage("advertising-disclosure");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/advertising-disclosure" },
};

export default function AdvertisingDisclosureRoute() {
  return <LegalPage page={page} />;
}
