import type { Metadata } from "next";
import { Geist_Mono, Syne, DM_Sans } from "next/font/google";
import "./globals.css";

import { defaultLocale, translations } from "@/lib/translations";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bportlogistics.com"),
  title: translations[defaultLocale].meta.title,
  description: translations[defaultLocale].meta.description,
  openGraph: {
    title: translations[defaultLocale].meta.title,
    description: translations[defaultLocale].meta.description,
    url: "https://bportlogistics.com",
    siteName: "BPORT Logistics",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BPORT Logistics - Conectamos tu carga con el mundo",
      },
    ],
    locale: "es",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: translations[defaultLocale].meta.title,
    description: translations[defaultLocale].meta.description,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${syne.variable} ${dmSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}