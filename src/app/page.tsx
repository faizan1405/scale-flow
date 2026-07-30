import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import SelectedWork from "@/components/SelectedWork";
import Capabilities from "@/components/Capabilities";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ScaleFlow",
    url: "https://joinscaleflow.in",
    logo: "https://joinscaleflow.in/favicon.svg",
    description:
      "ScaleFlow designs and develops modern, responsive and high-performing websites for businesses in Delhi.",
    image: "https://joinscaleflow.in/og-image.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Delhi",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 9873721207",
      contactType: "Customer Service",
      email: "faizanthings@gmail.com",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [],
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: "Website Design and Development",
  };

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <SelectedWork />
        <Capabilities />
        <AboutPreview />
        <Process />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}