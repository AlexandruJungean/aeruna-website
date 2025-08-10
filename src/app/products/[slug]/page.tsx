import { getProductBySlug, products } from "@/data/products";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/ProductDetail";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({
  params,
}: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return notFound();

  return (
    <main className="container py-10">
      <ProductDetail product={product} />
    </main>
  );
}


