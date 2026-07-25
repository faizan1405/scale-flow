import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Pillars from "@/components/Pillars";
import CaseStudies from "@/components/CaseStudies";
import Clients from "@/components/Clients";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Scale Flow",
    url: "https://scaleflow.in",
    logo: "https://scaleflow.in/favicon.svg",
    description:
      "We build systems that turn attention into revenue. Content. Ads. Automation. Connected into one growth system.",
    image: "https://scaleflow.in/og-image.png",
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
        <Hero />
        <Intro />
        <Pillars />
        <CaseStudies />
        <Clients />
        <Process />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
