import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SelectedWork from "@/components/SelectedWork";

export const metadata: Metadata = {
  title: "Our Work — Websites Built for Real Businesses | ScaleFlow",
  description:
    "Explore ScaleFlow's portfolio of custom websites built for businesses across e-commerce, healthcare, legal, and more. Real projects, real results.",
  openGraph: {
    title: "Our Work — ScaleFlow Portfolio",
    description:
      "A selection of websites designed and developed by ScaleFlow for real businesses.",
    url: "/work",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work — ScaleFlow Portfolio",
    description:
      "A selection of websites designed and developed by ScaleFlow for real businesses.",
    images: ["/og-image.png"],
  },
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <SelectedWork />
      </main>
      <Footer />
    </>
  );
}
