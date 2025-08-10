"use client";

import { useCartStore } from "@/store/cart";
import { products } from "@/data/products";

export function CartClient() {
  const { items, setQuantity, remove } = useCartStore();
  const detailed = items.map((i) => ({
    ...i,
    product: products.find((p) => p.id === i.productId)!,
  }));

  const totalCents = detailed.reduce(
    (sum, i) => sum + i.quantity * i.product.priceCents,
    0
  );

  if (detailed.length === 0) {
    return <p className="opacity-70">Your cart is empty.</p>;
  }

  return (
    <div className="grid gap-4 max-w-2xl">
      {detailed.map((i) => (
        <div key={i.productId} className="flex items-center justify-between border rounded-lg p-4">
          <div>
            <div className="font-medium">{i.product.name}</div>
            <div className="text-sm opacity-70">
              ${(i.product.priceCents / 100).toFixed(2)} each
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={1}
              value={i.quantity}
              onChange={(e) => setQuantity(i.productId, Number(e.target.value))}
              className="w-16 h-9 border rounded-md bg-transparent text-center"
            />
            <button
              className="text-sm underline opacity-80 hover:opacity-100"
              onClick={() => remove(i.productId)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="mt-2 flex items-center justify-between text-lg">
        <span>Total</span>
        <span>${(totalCents / 100).toFixed(2)}</span>
      </div>
      <button className="mt-2 h-11 rounded-full bg-black dark:bg-white text-white dark:text-black px-6 text-sm w-fit">
        Checkout
      </button>
    </div>
  );
}


