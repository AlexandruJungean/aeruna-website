import { create } from "zustand";
import { CartItem } from "@/types";

type CartState = {
  items: CartItem[];
  add: (productId: string, quantity?: number) => void;
  remove: (productId: string) => void;
  clear: () => void;
  setQuantity: (productId: string, quantity: number) => void;
};

export const useCartStore = create<CartState>((set) => ({
  items: [],
  add: (productId, quantity = 1) =>
    set((state) => {
      const existing = state.items.find((i) => i.productId === productId);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.productId === productId
              ? { ...i, quantity: i.quantity + quantity }
              : i
          ),
        };
      }
      return { items: [...state.items, { productId, quantity }] };
    }),
  remove: (productId) =>
    set((state) => ({
      items: state.items.filter((i) => i.productId !== productId),
    })),
  clear: () => set({ items: [] }),
  setQuantity: (productId, quantity) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.productId === productId ? { ...i, quantity } : i
      ),
    })),
}));

