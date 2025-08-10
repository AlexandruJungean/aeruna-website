import Link from "next/link";
import Image from "next/image";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ProductGrid } from "@/components/ProductGrid";
import { Reviews } from "@/components/Reviews";
import { TrustBadges } from "@/components/TrustBadges";
import { products } from "@/data/products";

export default function Home() {
  // Structured data for the product collection
  const collectionStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Aeruna Artisanal Bar Soaps",
    description: "Premium artisanal bar soaps handcrafted with natural ingredients",
    url: "https://aeruna.eu",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: product.name,
          description: product.description,
          image: `https://aeruna.eu${product.image}`,
          url: `https://aeruna.eu/products/${product.slug}`,
          brand: {
            "@type": "Brand",
            name: "Aeruna"
          },
          offers: {
            "@type": "Offer",
            price: (product.priceCents / 100).toFixed(2),
            priceCurrency: "USD",
            availability: product.stock && product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
          }
        }
      }))
    }
  };

  // Breadcrumb structured data
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://aeruna.eu"
      }
    ]
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionStructuredData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData)
        }}
      />
      
      <main className="">
        <HeroCarousel />
        <TrustBadges />
        <section className="container py-12">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl tracking-tight">Featured soaps</h2>
            <Link href="/products" className="text-sm opacity-70 hover:opacity-100">
              View all
            </Link>
          </div>
          <ProductGrid limit={4} />
        </section>
        <section className="container py-16 grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h3 className="text-xl mb-3">About Aeruna</h3>
            <p className="opacity-80 leading-relaxed">
              Small batch, cold‑processed bar soaps made with skin‑loving oils and aromatic botanicals.
              Minimal formulas. No harsh detergents. Designed for daily rituals.
            </p>
            <Link href="/about" className="mt-6 inline-block text-sm underline opacity-80 hover:opacity-100">
              Learn more
            </Link>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-black/5">
            <Image
              src="/images/2d/mint-2.png"
              alt="Artisanal soaps on a minimal background"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>
        <Reviews />
      </main>
    </>
  );
}
