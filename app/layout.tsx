import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono, Poppins } from "next/font/google";
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

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-brand",
});

export const metadata: Metadata = {
  title: "Software House Dubai | OrbitX Solutions UAE",
  description:
    "OrbitX Solutions is a Dubai-based software house delivering custom websites, enterprise systems, and scalable digital platforms for UAE businesses.",
  keywords: [
    "software house Dubai",
    "web development company UAE",
    "custom software development Dubai",
    "business systems development UAE",
    "enterprise web solutions Dubai",
    "custom web applications UAE",
    "enterprise software house UAE",
    "Next.js development Dubai",
    ".NET development UAE",
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
    title: "Software House Dubai | OrbitX Solutions UAE",
    description:
      "Custom websites, business systems, and enterprise web solutions built in Dubai for UAE organizations.",
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
    title: "Software House Dubai | OrbitX Solutions UAE",
    description:
      "Custom websites, business systems, and enterprise web solutions built in Dubai for UAE organizations.",
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
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    shortcut: "/favicon.ico",
    apple: "/logo.png",
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
        className={`${inter.variable} ${geistMono.variable} ${poppins.variable} font-sans antialiased bg-white text-slate-900`}
      >
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
