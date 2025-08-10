"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { products } from "@/data/products";
import Link from "next/link";

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const product = products[index];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % products.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-[#f9f7f4]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 py-20 md:py-32 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 space-y-6">
            <div className="space-y-4">
              <p className="text-xs font-light tracking-[0.3em] uppercase text-[var(--text-muted)]">
                Artisanal Collection
              </p>
              <h1 className="text-5xl md:text-6xl font-light leading-tight">
                {product.name}
              </h1>
              <p className="text-lg font-light text-[var(--text-muted)] leading-relaxed max-w-lg">
                {product.description}
              </p>
            </div>
            
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-light">${(product.priceCents / 100).toFixed(2)}</span>
              {product.weight && (
                <span className="text-sm text-[var(--text-muted)]">{product.weight}</span>
              )}
            </div>

            <div className="flex gap-4 pt-4">
              <Link
                href={`/products/${product.slug}`}
                className="btn-primary inline-block"
              >
                Shop Now
              </Link>
              <Link
                href="/products"
                className="btn-secondary inline-block"
              >
                View All
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2">
            <div className="relative aspect-[4/5] md:aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Minimal dots indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {products.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-8 h-0.5 transition-all ${
                i === index ? "bg-[var(--foreground)]" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}