import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Analytics from "@/components/Analytics";
import SkipLink from "@/components/SkipLink";
import "./globals.css";
import CallNowButton from "@/components/CallNowButton";

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
};

export const metadata: Metadata = {
  metadataBase: new URL("https://scaleflow.in"),
  title: {
    default: "Scale Flow — Growth Systems That Drive Revenue",
    template: "%s | Scale Flow",
  },
  description:
    "We build systems that turn attention into revenue. Content. Ads. Automation. Connected into one growth system.",
  keywords: ["growth systems", "social media", "Meta Ads", "AI automation", "digital marketing", "Scale Flow"],
  authors: [{ name: "Scale Flow" }],
  creator: "Scale Flow",
  publisher: "Scale Flow",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Scale Flow",
    title: "Scale Flow — Growth Systems That Drive Revenue",
    description:
      "We build systems that turn attention into revenue. Content. Ads. Automation. Connected into one growth system.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Scale Flow — Growth Systems That Drive Revenue",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scale Flow — Growth Systems That Drive Revenue",
    description:
      "We build systems that turn attention into revenue. Content. Ads. Automation. Connected into one growth system.",
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
        <CallNowButton />
      </body>
    </html>
  );
}
