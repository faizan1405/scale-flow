import { SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ScaleFlow",
  description:
    "ScaleFlow is a website design and development studio based in Delhi, India. We design and develop modern, responsive and high-performing websites for businesses.",
  url: SITE_URL,
  telephone: "+919989895988",
  email: "scaleflowbusiness@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New Delhi",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "New Delhi",
  },
  knowsAbout: [
    "Website Design",
    "Website Development",
    "Responsive Web Design",
    "E-commerce Website Development",
    "Landing Page Design",
    "Business Website Design",
    "Website Performance Optimization",
    "WordPress Development",
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
