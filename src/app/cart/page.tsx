import { CartClient } from "@/components/CartClient";

export const metadata = {
  title: "Cart",
};

export default function CartPage() {
  return (
    <main className="container py-10">
      <h1 className="text-3xl tracking-tight mb-6">Your cart</h1>
      <CartClient />
    </main>
  );
}

