import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "01",
    name: "Mint Soap",
    slug: "mint-soap",
    priceCents: 1100,
    originalPriceCents: 1400,
    description:
      "Mint essential oil cleansing soap, handmade soap for cleansing, natural organic plant essential oil soap, bath soap",
    image: "/images/2d/mint-3.png",
    images: ["/images/2d/mint-1.png", "/images/2d/mint-2.png", "/images/2d/mint-3.png", "/images/2d/mint-4.png"],
    weight: "150g / 5.3oz",
    stock: 23,
    rating: 4.8,
    reviews: 127,
    ingredients: ["Coconut Oil", "Olive Oil", "Shea Butter", "Mint Essential Oil", "Spirulina"],
    background:
      "radial-gradient(1000px 600px at 20% 20%, rgba(160,255,220,0.25), transparent), linear-gradient(180deg, #0a1410, #0f1412)",
    notes: ["mint essential oil", "cooling", "refreshing"],
  },
  {
    id: "02",
    name: "Turmeric Soap",
    slug: "turmeric-soap",
    priceCents: 1200,
    description:
      "Turmeric Essential Oil Soap, Lemon Essential Oil Handmade Soap, Suitable For Washing Face And Bathing The Whole Body, Daily",
    image: "/images/2d/turmeric-1.png",
    images: ["/images/2d/turmeric-1.png", "/images/2d/turmeric-2.png", "/images/2d/turmeric-3.png", "/images/2d/turmeric-4.png"],
    weight: "150g / 5.3oz",
    stock: 15,
    rating: 4.9,
    reviews: 89,
    ingredients: ["Coconut Oil", "Palm Oil", "Turmeric Powder", "Lemon Essential Oil", "Vitamin E"],
    background:
      "radial-gradient(1000px 600px at 70% 30%, rgba(255,205,120,0.25), transparent), linear-gradient(180deg, #1a1409, #17120d)",
    notes: ["turmeric", "lemon", "daily use"],
  },
  {
    id: "03",
    name: "Cherry Soap Bar",
    slug: "cherry-soap",
    priceCents: 1300,
    originalPriceCents: 1600,
    description:
      "Fruit Cherry Aroma 150gYT Essential Oil Soap With Added 24K Gold Leaf Handmade Soap For Facial Cleansing",
    image: "/images/2d/cherry-1.png",
    images: ["/images/2d/cherry-1.png", "/images/2d/cherry-2.png", "/images/2d/cherry-3.png", "/images/2d/cherry-4.png"],
    weight: "150g / 5.3oz",
    stock: 8,
    rating: 4.7,
    reviews: 64,
    ingredients: ["Glycerin", "Cherry Extract", "24K Gold Leaf", "Rose Water", "Vitamin C"],
    background:
      "radial-gradient(1000px 600px at 30% 70%, rgba(255,120,160,0.25), transparent), linear-gradient(180deg, #180b0e, #11090c)",
    notes: ["cherry aroma", "gold leaf", "facial"],
  },
  {
    id: "04",
    name: "Coconut Soap Bar",
    slug: "coconut-soap",
    priceCents: 1000,
    description:
      "Coconut milk moisturizing soap, glutathione brightening cleansing soap, goat milk nourishing cleansing soap, bath soap, portable",
    image: "/images/2d/coconut-4.png",
    images: ["/images/2d/coconut-1.png", "/images/2d/coconut-2.png", "/images/2d/coconut-3.png", "/images/2d/coconut-4.png"],
    weight: "150g / 5.3oz",
    stock: 31,
    rating: 4.9,
    reviews: 203,
    ingredients: ["Coconut Milk", "Goat Milk", "Glutathione", "Glycerin", "Almond Oil"],
    background:
      "radial-gradient(1000px 600px at 70% 50%, rgba(235,240,255,0.22), transparent), linear-gradient(180deg, #0f1012, #0b0c0d)",
    notes: ["coconut milk", "goat milk", "moisturizing"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

