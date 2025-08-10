"use client";

import { StarRating } from "@/components/StarRating";

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 4.8,
    date: "2 weeks ago",
    verified: true,
    text: "The mint soap is amazing! My skin feels so clean and refreshed. The scent lasts all day.",
    product: "Mint Soap"
  },
  {
    id: 2,
    name: "David L.",
    rating: 4.9,
    date: "1 month ago",
    verified: true,
    text: "Best turmeric soap I've ever used. Cleared up my skin in just a week. Will definitely reorder!",
    product: "Turmeric Soap"
  },
  {
    id: 3,
    name: "Emily R.",
    rating: 4.2,
    date: "3 weeks ago",
    verified: true,
    text: "Love the cherry scent and the gold leaf is so luxurious. Great for gifts!",
    product: "Cherry Soap Bar"
  },
  {
    id: 4,
    name: "Michael K.",
    rating: 4.7,
    date: "1 week ago",
    verified: true,
    text: "Coconut soap is incredibly moisturizing. Perfect for dry winter skin.",
    product: "Coconut Soap Bar"
  }
];

export function Reviews() {
  return (
    <section className="container py-16">
      <h2 className="text-2xl tracking-tight mb-8">Customer Reviews</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {reviews.map((review) => (
          <div key={review.id} className="border border-black/10 dark:border-white/10 rounded-xl p-5 bg-white dark:bg-black">
            <div className="mb-3">
              <StarRating rating={review.rating} size={16} />
            </div>
            <div className="flex items-center gap-2 mb-2 text-sm">
              <span className="font-medium">{review.name}</span>
              {review.verified && (
                <span className="text-xs opacity-60">✓ Verified</span>
              )}
            </div>
            <p className="text-sm opacity-70 mb-3 leading-relaxed">{review.text}</p>
            <div className="flex items-center justify-between text-xs opacity-50">
              <span>{review.product}</span>
              <span>{review.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
