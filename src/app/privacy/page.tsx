import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Privacy Policy & Cookies",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <main className="py-24 sm:py-32">
      <Container className="max-w-3xl">
        <h1 className="text-h2 text-night">Privacy Policy &amp; Cookies</h1>
        <p className="mt-8 text-lead">
          This is a demo landing page. It does not collect personal data, use analytics,
          or set cookies.
        </p>
        <Link
          href="/"
          className="mt-10 inline-block font-semibold text-navy underline underline-offset-4"
        >
          Back to home
        </Link>
      </Container>
    </main>
  );
}
