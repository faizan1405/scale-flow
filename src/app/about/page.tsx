import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the mind behind Scale Flow. I help brands grow through social media content creation, AI automation, and performance-driven Meta Ads.",
  openGraph: {
    title: "About — Scale Flow",
    description:
      "Meet the mind behind Scale Flow. I help brands grow through social media content creation, AI automation, and performance-driven Meta Ads.",
    url: "/about",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Scale Flow",
    description:
      "Meet the mind behind Scale Flow. I help brands grow through social media content creation, AI automation, and performance-driven Meta Ads.",
    images: ["/og-image"],
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Scale Flow",
    url: "https://scaleflow.in",
    logo: "https://scaleflow.in/favicon.svg",
    description:
      "We build systems that turn attention into revenue. Content. Ads. Automation. Connected into one growth system.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Delhi",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9873721207",
      contactType: "Customer Service",
      email: "faizanthings@gmail.com",
    },
    sameAs: [],
  };

  return (
    <>
      <Navbar />
      <main id="main-content">
        <AboutContent />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}