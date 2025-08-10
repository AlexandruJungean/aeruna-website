import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

type Props = {
  limit?: number;
};

export function ProductGrid({ limit }: Props) {
  const list = typeof limit === "number" ? products.slice(0, limit) : products;
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {list.map((p) => (
        <ProductCard key={p.id} slug={p.slug} />
      ))}
    </div>
  );
}


