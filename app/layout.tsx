import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "OrbitX Solutions | Software House in Dubai",
  description:
    "Custom web development, AI-powered platforms, enterprise systems, and digital transformation solutions in the UAE. Building scalable digital platforms for modern businesses.",
  keywords: [
    "software house Dubai",
    "web development UAE",
    "AI solutions UAE",
    "enterprise systems Dubai",
    "digital transformation UAE",
    "custom software Dubai",
    "Next.js development",
    ".NET development UAE",
    "Dubai tech company",
  ],
  authors: [{ name: "OrbitX Solutions" }],
  creator: "OrbitX Solutions",
  publisher: "OrbitX Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://orbitx.ae"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "OrbitX Solutions | Software House in Dubai",
    description:
      "Custom web development, AI-powered platforms, enterprise systems, and digital transformation solutions in the UAE.",
    url: "https://orbitx.ae",
    siteName: "OrbitX Solutions",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OrbitX Solutions - Building Scalable Digital Platforms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OrbitX Solutions | Software House in Dubai",
    description:
      "Custom web development, AI-powered platforms, enterprise systems, and digital transformation solutions in the UAE.",
    images: ["/og-image.jpg"],
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: "/logo.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light bg-white">
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased bg-white text-slate-900`}
      >
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
