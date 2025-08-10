"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/types";
import { AddToCartButton } from "@/components/AddToCartButton";
import { StarRating } from "@/components/StarRating";
import { Truck, Shield, Package } from "lucide-react";

export function ProductDetail({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = product.images || [product.image];
  const price = (product.priceCents / 100).toFixed(2);
  const originalPrice = product.originalPriceCents
    ? (product.originalPriceCents / 100).toFixed(2)
    : null;
  const discount = originalPrice
    ? Math.round(((product.originalPriceCents! - product.priceCents) / product.originalPriceCents!) * 100)
    : 0;

  // Structured data for the product
  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: images.map(img => `https://aeruna.eu${img}`),
    brand: {
      "@type": "Brand",
      name: "Aeruna"
    },
    category: "Personal Care",
    offers: {
      "@type": "Offer",
      price: price,
      priceCurrency: "USD",
      availability: product.stock && product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      url: `https://aeruna.eu/products/${product.slug}`,
      seller: {
        "@type": "Organization",
        name: "Aeruna"
      }
    },
    aggregateRating: product.rating ? {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviews,
      bestRating: 5,
      worstRating: 1
    } : undefined,
    weight: product.weight,
    additionalProperty: product.ingredients ? product.ingredients.map(ingredient => ({
      "@type": "PropertyValue",
      name: "ingredient",
      value: ingredient
    })) : undefined
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productStructuredData)
        }}
      />
      
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black/5 mb-4">
            <Image 
              src={images[selectedImage]} 
              alt={product.name} 
              fill 
              className="object-cover"
              priority
            />
            {discount > 0 && (
              <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-sm">
                -{discount}%
              </div>
            )}
          </div>
          {images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 ${
                    i === selectedImage ? "border-black" : "border-transparent"
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <h1 className="text-3xl tracking-tight">{product.name}</h1>
          
          {product.rating && (
            <div className="flex items-center gap-2 mt-2">
              <StarRating rating={product.rating} size={16} />
              <span className="text-sm opacity-70">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
          )}

          <p className="mt-3 opacity-80">{product.description}</p>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-2xl font-medium">${price}</span>
            {originalPrice && (
              <>
                <span className="text-lg line-through opacity-50">${originalPrice}</span>
                <span className="text-sm opacity-70">Save {discount}%</span>
              </>
            )}
          </div>

          {product.weight && (
            <p className="mt-2 text-sm opacity-70">Weight: {product.weight}</p>
          )}

          {product.stock && product.stock < 20 && (
            <p className="mt-2 text-sm opacity-70">
              Only {product.stock} left in stock
            </p>
          )}

          <AddToCartButton id={product.id} />

          <div className="mt-6 space-y-3 border-t border-black/10 pt-6">
            <div className="flex items-center gap-3 text-sm opacity-70">
              <Truck size={18} />
              <span>Free shipping on orders over $35</span>
            </div>
            <div className="flex items-center gap-3 text-sm opacity-70">
              <Shield size={18} />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-3 text-sm opacity-70">
              <Package size={18} />
              <span>Ships within 24 hours</span>
            </div>
          </div>

          {product.ingredients && (
            <div className="mt-6 border-t border-black/10 pt-6">
              <h3 className="font-medium mb-3">Ingredients</h3>
              <p className="text-sm opacity-80">{product.ingredients.join(", ")}</p>
            </div>
          )}

          {product.notes?.length ? (
            <div className="mt-6 border-t border-black/10 pt-6">
              <h3 className="font-medium mb-3">Key Benefits</h3>
              <ul className="text-sm opacity-80 list-disc pl-4 space-y-1">
                {product.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mt-6 border-t pt-6">
            <h3 className="font-medium mb-3">How to Use</h3>
            <p className="text-sm opacity-80">
              Wet soap and lather between hands. Apply to face and body, massage gently, then rinse thoroughly with warm water. For best results, use daily.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
