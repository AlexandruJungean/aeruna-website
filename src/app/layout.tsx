import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Aeruna — Premium Artisanal Bar Soaps | Handcrafted Natural Soaps",
    template: "%s — Aeruna",
  },
  description:
    "Discover premium artisanal bar soaps handcrafted with natural ingredients. Mint, Turmeric, Cherry, and Coconut soaps for cleansing and skincare. Free shipping on orders over $35.",
  keywords: [
    "artisanal soap",
    "handmade soap",
    "natural soap",
    "bar soap",
    "premium soap",
    "organic soap",
    "mint soap",
    "turmeric soap",
    "cherry soap",
    "coconut soap",
    "skincare",
    "bath products",
    "natural ingredients",
    "cold process soap",
    "small batch soap"
  ],
  authors: [{ name: "Aeruna" }],
  creator: "Aeruna",
  publisher: "Aeruna",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://aeruna.eu"),
  alternates: {
    canonical: "/",
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
  openGraph: {
    title: "Aeruna — Premium Artisanal Bar Soaps",
    description: "Discover premium artisanal bar soaps handcrafted with natural ingredients. Mint, Turmeric, Cherry, and Coconut soaps for cleansing and skincare.",
    url: "https://aeruna.eu",
    siteName: "Aeruna",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aeruna Artisanal Bar Soaps",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aeruna — Premium Artisanal Bar Soaps",
    description: "Discover premium artisanal bar soaps handcrafted with natural ingredients.",
    images: ["/images/twitter-image.jpg"],
    creator: "@aeruna",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  other: {
    "theme-color": "#000000",
    "msapplication-TileColor": "#000000",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Aeruna",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Aeruna",
              url: "https://aeruna.eu",
              logo: "https://aeruna.eu/logo.png",
              description: "Premium artisanal bar soaps handcrafted with natural ingredients",
              sameAs: [
                "https://instagram.com/aeruna",
                "https://facebook.com/aeruna",
                "https://twitter.com/aeruna"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-0123",
                contactType: "customer service",
                email: "hello@aeruna.eu"
              }
            })
          }}
        />
        
        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Aeruna",
              url: "https://aeruna.eu",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://aeruna.eu/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <div className="container">
          <footer className="py-10 text-sm opacity-70">
            <div className="flex items-center justify-between">
              <p>© {new Date().getFullYear()} Aeruna. All rights reserved.</p>
              <p>Handcrafted soaps, small batch.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
