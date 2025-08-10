"use client";

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    text: "The mint soap is amazing! My skin feels so clean and refreshed.",
    product: "Mint Soap"
  },
  {
    id: 2,
    name: "David L.",
    text: "Best turmeric soap I've ever used. Cleared up my skin in just a week.",
    product: "Turmeric Soap"
  },
  {
    id: 3,
    name: "Emily R.",
    text: "Love the cherry scent and the quality is exceptional.",
    product: "Cherry Soap"
  }
];

export function Reviews() {
  return (
    <div className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-xs font-light tracking-[0.3em] uppercase text-[var(--text-muted)] mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-light">What Our Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {reviews.map((review) => (
            <div key={review.id} className="text-center space-y-4">
              <p className="text-lg font-light italic leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
              <div>
                <p className="font-light">{review.name}</p>
                <p className="text-xs text-[var(--text-muted)] mt-1">{review.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}