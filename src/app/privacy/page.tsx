import { Metadata } from "next";
import Link from "next/link";
import { EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | ScaleFlow",
  description:
    "ScaleFlow's privacy policy covering data collection, usage, and your rights.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20 md:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-gray-text">
          Last updated: July 2026
        </p>

        <div className="mt-10 space-y-8 text-gray-light leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white font-[family-name:var(--font-heading)]">
              Information We Collect
            </h2>
            <p className="mt-3">
              We collect information you voluntarily provide when you contact us
              through our website — such as your name, email address, phone
              number, business name and any message content. This information is
              used solely to respond to your enquiry.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white font-[family-name:var(--font-heading)]">
              How We Use Your Information
            </h2>
            <p className="mt-3">
              We use the information you provide to respond to your website
              enquiry, share relevant information about our services, and improve
              our website experience. We do not sell, rent, or share your
              personal data with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white font-[family-name:var(--font-heading)]">
              Analytics
            </h2>
            <p className="mt-3">
              We use Plausible Analytics, a privacy-first analytics tool that
              does not use cookies and does not collect any personally
              identifiable information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white font-[family-name:var(--font-heading)]">
              Data Retention
            </h2>
            <p className="mt-3">
              Enquiry data submitted through our WhatsApp contact form is not
              stored on our servers — it is sent directly to WhatsApp. We retain
              no personal records beyond what is necessary for follow-up
              communication.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white font-[family-name:var(--font-heading)]">
              Your Rights
            </h2>
            <p className="mt-3">
              You may request access to, correction of, or deletion of any
              personal data we hold by contacting us at{" "}
              <Link
                href={`mailto:${EMAIL}`}
                className="text-gold hover:text-gold-light transition-colors"
              >
                {EMAIL}
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white font-[family-name:var(--font-heading)]">
              Contact
            </h2>
            <p className="mt-3">
              For any privacy-related questions, reach us at{" "}
              <Link
                href={`mailto:${EMAIL}`}
                className="text-gold hover:text-gold-light transition-colors"
              >
                {EMAIL}
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
