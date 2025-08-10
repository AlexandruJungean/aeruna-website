"use client";

import { useCartStore } from "@/store/cart";

export function AddToCartButton({ id }: { id: string }) {
  const add = useCartStore((s) => s.add);
  return (
    <button
      className="mt-6 w-full sm:w-auto text-sm rounded-full bg-black dark:bg-white text-white dark:text-black h-12 px-8 font-medium hover:opacity-90 transition-opacity"
      onClick={() => add(id, 1)}
    >
      Add to Cart
    </button>
  );
}


