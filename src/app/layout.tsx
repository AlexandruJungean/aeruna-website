import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import Link from "next/link";
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
              logo: "https://aeruna.eu/images/Aeruna-logo.svg",
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
        <footer className="border-t border-gray-100 bg-white">
          <div className="container py-20">
            <div className="flex flex-col md:flex-row md:justify-between gap-26 mb-16">
              {/* Brand */}
              <div className="text-center md:text-left">
                <h3 className="text-lg font-light tracking-wider mb-4">AERUNA</h3>
                <p className="text-sm font-light text-[var(--text-muted)]">
                  Premium artisanal soaps handcrafted with natural ingredients.
                </p>
              </div>
              
              {/* Navigation Columns */}
              <div className="grid grid-cols-3 gap-8 md:gap-16">
                {/* Shop */}
                <div className="text-center md:text-left">
                  <h4 className="text-xs font-light tracking-[0.2em] uppercase mb-4">Shop</h4>
                  <ul className="space-y-3">
                    <li><Link href="/products" className="text-sm font-light text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors whitespace-nowrap">All Products</Link></li>
                    <li><Link href="/products" className="text-sm font-light text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors whitespace-nowrap">Best Sellers</Link></li>
                    <li><Link href="/products" className="text-sm font-light text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors whitespace-nowrap">New Arrivals</Link></li>
                  </ul>
                </div>
                
                {/* Customer Care */}
                <div className="text-center md:text-left">
                  <h4 className="text-xs font-light tracking-[0.2em] uppercase mb-4">Support</h4>
                  <ul className="space-y-3">
                    <li><Link href="/contact" className="text-sm font-light text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors whitespace-nowrap">Contact</Link></li>
                    <li><a href="#" className="text-sm font-light text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors whitespace-nowrap">Shipping</a></li>
                    <li><a href="#" className="text-sm font-light text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors whitespace-nowrap">Returns</a></li>
                  </ul>
                </div>
                
                {/* Company */}
                <div className="text-center md:text-left">
                  <h4 className="text-xs font-light tracking-[0.2em] uppercase mb-4">About</h4>
                  <ul className="space-y-3">
                    <li><Link href="/about" className="text-sm font-light text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors whitespace-nowrap">Our Story</Link></li>
                    <li><a href="#" className="text-sm font-light text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors whitespace-nowrap">Sustainability</a></li>
                    <li><a href="#" className="text-sm font-light text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors whitespace-nowrap">Ingredients</a></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-gray-100">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-xs font-light text-[var(--text-muted)]">
                  © {new Date().getFullYear()} Aeruna. All rights reserved.
                </p>
                <p className="text-xs font-light text-[var(--text-muted)]">
                  Handcrafted soaps, made with care
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
