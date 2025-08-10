"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { useCartStore } from "@/store/cart";
import { StarRating } from "@/components/StarRating";

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
  const discount = originalPrice
    ? Math.round(((product.originalPriceCents! - product.priceCents) / product.originalPriceCents!) * 100)
    : 0;

  return (
    <div className="group rounded-xl border border-black/10 dark:border-white/10 overflow-hidden bg-white dark:bg-black text-black dark:text-white">
      <Link href={`/products/${product.slug}`} className="block relative aspect-[4/3]">
        <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
        {discount > 0 && (
          <div className="absolute top-3 left-3 bg-black text-white px-2.5 py-1 rounded-full text-xs">
            -{discount}%
          </div>
        )}
        {product.stock && product.stock < 10 && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-black px-2.5 py-1 rounded-full text-xs border border-black/10">
            Low Stock
          </div>
        )}
      </Link>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">{product.name}</h3>
          <div className="text-right">
            <div className="text-sm font-medium">${price}</div>
            {originalPrice && (
              <div className="text-xs line-through opacity-50">${originalPrice}</div>
            )}
          </div>
        </div>
        {product.rating && (
          <div className="flex items-center gap-1 mt-1">
            <StarRating rating={product.rating} size={12} />
            <span className="text-xs opacity-60 ml-1">({product.reviews})</span>
          </div>
        )}
        <p className="text-sm opacity-70 line-clamp-2 mt-1">{product.description}</p>
        <div className="mt-3 flex items-center gap-3">
          <Link href={`/products/${product.slug}`} className="text-sm underline opacity-80 hover:opacity-100">
            Details
          </Link>
          <button
            className="ml-auto text-sm rounded-full bg-black dark:bg-white text-white dark:text-black h-9 px-4 hover:opacity-90"
            onClick={() => add(product.id, 1)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}


