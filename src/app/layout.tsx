import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Analytics from "@/components/Analytics";
import FloatingCTA from "@/components/FloatingCTA";
import SkipLink from "@/components/SkipLink";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://joinscaleflow.in"),
  title: {
    default: "ScaleFlow — Website Design & Development Studio in Delhi",
    template: "%s | ScaleFlow",
  },
  description:
    "ScaleFlow designs and develops modern, responsive and high-performing websites for businesses. Explore our work and start your website project today.",
  keywords: [
    "website design",
    "website development",
    "Delhi",
    "custom website",
    "responsive website",
    "business website",
    "e-commerce website",
    "portfolio website",
    "landing page",
  ],
  authors: [{ name: "ScaleFlow" }],
  creator: "ScaleFlow",
  publisher: "ScaleFlow",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://joinscaleflow.in",
    siteName: "ScaleFlow",
    title: "ScaleFlow — Website Design & Development Studio in Delhi",
    description:
      "ScaleFlow designs and develops modern, responsive and high-performing websites for businesses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ScaleFlow — Website Design & Development Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ScaleFlow — Website Design & Development Studio in Delhi",
    description:
      "ScaleFlow designs and develops modern, responsive and high-performing websites for businesses.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">
        <SkipLink />
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
        <Analytics />
        <FloatingCTA />
      </body>
    </html>
  );
}