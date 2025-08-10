import { ProductGrid } from "@/components/ProductGrid";

export const metadata = {
  title: "Products",
};

export default function ProductsPage() {
  return (
    <main className="container py-10">
      <h1 className="text-3xl tracking-tight mb-6">All soaps</h1>
      <ProductGrid />
    </main>
  );
}


