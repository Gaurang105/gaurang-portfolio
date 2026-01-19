import type { Metadata } from "next";
import { Newsreader, DM_Sans } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
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

export const metadata: Metadata = {
  title: "Gaurang Gujrati — Software Engineer",
  description:
    "Software Engineer building full-stack platforms and AI-powered systems. Currently at Headout.",
  keywords: [
    "Gaurang Gujrati",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "TypeScript",
    "Python",
  ],
  authors: [{ name: "Gaurang Gujrati" }],
  openGraph: {
    title: "Gaurang Gujrati — Software Engineer",
    description:
      "Software Engineer building full-stack platforms and AI-powered systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${newsreader.variable} ${dmSans.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
