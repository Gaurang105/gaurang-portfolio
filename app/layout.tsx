import type { Metadata, Viewport } from "next";
import { Newsreader, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "./components/ThemeProvider";
import { SkipLink } from "./components/SkipLink";
import { BuyMeACoffeeWidget } from "./components/BuyMeACoffeeWidget";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gaurang.blog";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f6f1" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gaurang Gujrati — Software Engineer",
    template: "%s | Gaurang Gujrati",
  },
  description:
    "Software Engineer building full-stack platforms and AI-powered systems. Currently at Headout. Specializing in React, TypeScript, Python, and Node.js.",
  keywords: [
    "Gaurang Gujrati",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "TypeScript",
    "Python Developer",
    "Node.js",
    "Next.js",
    "AI Engineer",
    "Headout",
    "Bangalore",
    "India",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Gaurang Gujrati", url: siteUrl }],
  creator: "Gaurang Gujrati",
  publisher: "Gaurang Gujrati",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Gaurang Gujrati",
    title: "Gaurang Gujrati — Software Engineer",
    description:
      "Software Engineer building full-stack platforms and AI-powered systems. Currently at Headout.",
    images: [
      {
        url: "/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Gaurang Gujrati - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurang Gujrati — Software Engineer",
    description:
      "Software Engineer building full-stack platforms and AI-powered systems. Currently at Headout.",
    creator: "@GaurangGujrati",
    images: ["/images/profile.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  verification: {
    // Add these when you have verification codes
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${newsreader.variable} ${dmSans.variable} antialiased`}>
        <SkipLink />
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
        <BuyMeACoffeeWidget />
      </body>
    </html>
  );
}
