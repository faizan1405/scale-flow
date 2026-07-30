import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About ScaleFlow — Website Design & Development Studio",
  description:
    "ScaleFlow is a website design and development studio based in Delhi. We help businesses build modern, responsive and professional websites.",
  openGraph: {
    title: "About — ScaleFlow",
    description:
      "ScaleFlow is a website design and development studio based in Delhi.",
    url: "/about",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About — ScaleFlow",
    description:
      "ScaleFlow is a website design and development studio based in Delhi.",
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}