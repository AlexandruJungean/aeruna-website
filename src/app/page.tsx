import Link from "next/link";
import Image from "next/image";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ProductGrid } from "@/components/ProductGrid";
import { Reviews } from "@/components/Reviews";
import { TrustBadges } from "@/components/TrustBadges";
import { IngredientsShowcase } from "@/components/IngredientsShowcase";
import { Newsletter } from "@/components/Newsletter";

export default function Home() {
  return (
    <>      
      <main>
        <HeroCarousel />
        
        {/* Trust Badges - White background */}
        <section className="bg-white">
          <TrustBadges />
        </section>
        
        {/* Featured Products - Light gray background */}
        <section className="py-24 bg-[#fafafa]">
          <div className="container">
            <div className="text-center mb-16">
              <p className="text-xs font-light tracking-[0.3em] uppercase text-[var(--text-muted)] mb-4">
                Best Sellers
              </p>
              <h2 className="text-3xl md:text-4xl font-light">Featured Collection</h2>
            </div>
            <ProductGrid limit={4} />
            <div className="text-center mt-12">
              <Link 
                href="/products" 
                className="inline-block text-sm font-light tracking-wider uppercase underline underline-offset-4 hover:text-[var(--accent-primary)] transition-colors"
              >
                View All Products
              </Link>
            </div>
          </div>
        </section>
        
        {/* Divider */}
        <div className="w-full h-px bg-gray-200"></div>
        
        {/* Ingredients - White background */}
        <section className="bg-white">
          <IngredientsShowcase />
        </section>
        
        {/* Divider */}
        <div className="w-full h-px bg-gray-200"></div>
        
        {/* About Section - Light beige background */}
        <section className="py-24 bg-[#f9f7f4]">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div>
                <p className="text-xs font-light tracking-[0.3em] uppercase text-[var(--text-muted)] mb-4">
                  Our Story
                </p>
                <h2 className="text-3xl md:text-4xl font-light mb-6">
                  Crafted with Care
                </h2>
                <p className="text-lg font-light text-[var(--text-muted)] leading-relaxed mb-6">
                  At Aeruna, we believe in the transformative power of natural ingredients. 
                  Each bar is meticulously handcrafted in small batches using traditional 
                  cold-process methods.
                </p>
                <p className="text-lg font-light text-[var(--text-muted)] leading-relaxed mb-8">
                  Our commitment to minimal, thoughtful formulas means no harsh detergents 
                  or synthetic additives—just pure, skin-loving ingredients.
                </p>
                <Link 
                  href="/about" 
                  className="inline-block text-sm font-light tracking-wider uppercase underline underline-offset-4 hover:text-[var(--accent-primary)] transition-colors"
                >
                  Learn More
                </Link>
              </div>
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/2d/mint-2.png"
                  alt="Artisanal soap making process"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Reviews - Light gray background */}
        <section className="bg-[#fafafa]">
          <Reviews />
        </section>
        
        {/* Newsletter - White background */}
        <section className="bg-white border-t border-gray-100">
          <Newsletter />
        </section>
      </main>
    </>
  );
}