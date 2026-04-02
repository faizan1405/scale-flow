import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Pillars from "@/components/Pillars";
import CaseStudies from "@/components/CaseStudies";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Pillars />
        <CaseStudies />
        <Process />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
