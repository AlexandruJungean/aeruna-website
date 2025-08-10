export type Product = {
  id: string;
  name: string;
  slug: string;
  priceCents: number;
  originalPriceCents?: number;
  description: string;
  image: string;
  images?: string[];
  background: string;
  notes?: string[];
  ingredients?: string[];
  weight?: string;
  stock?: number;
  rating?: number;
  reviews?: number;
};

export type CartItem = {
  productId: string;
  quantity: number;
};

