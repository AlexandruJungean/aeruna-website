"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { useCartStore } from "@/store/cart";

type Props = {
  slug: string;
};

export function ProductCard({ slug }: Props) {
  const add = useCartStore((s) => s.add);
  const product = products.find((p) => p.slug === slug);
  if (!product) return null;

  const price = (product.priceCents / 100).toFixed(2);
  const originalPrice = product.originalPriceCents
    ? (product.originalPriceCents / 100).toFixed(2)
    : null;

  return (
    <div className="group">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-[#fafafa] mb-4">
          <Image 
            src={product.image} 
            alt={product.name} 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          {originalPrice && (
            <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-light tracking-wide">
              SALE
            </div>
          )}
        </div>
      </Link>
      
      <div className="space-y-2">
        <h3 className="text-sm font-light tracking-wide uppercase">{product.name}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-light">${price}</span>
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">${originalPrice}</span>
          )}
        </div>
        <button
          onClick={() => add(product.id, 1)}
          className="mt-3 w-full py-3 text-xs font-light tracking-widest uppercase border border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-white transition-all duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}