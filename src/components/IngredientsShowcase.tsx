export function IngredientsShowcase() {
  const ingredients = [
    "Coconut Oil",
    "Shea Butter", 
    "Essential Oils",
    "Olive Oil",
    "Vitamin E",
    "Natural Extracts"
  ];

  return (
    <section className="py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-light tracking-[0.3em] uppercase text-[var(--text-muted)] mb-4">
            Pure & Natural
          </p>
          <h2 className="text-3xl md:text-4xl font-light mb-8">
            Premium Ingredients
          </h2>
          <p className="text-lg font-light text-[var(--text-muted)] mb-12 leading-relaxed">
            We carefully select each ingredient for its unique properties and benefits. 
            No harsh chemicals, no synthetic fragrances, just nature&apos;s finest.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {ingredients.map((ingredient, index) => (
              <div key={index} className="text-center">
                <p className="text-sm font-light">{ingredient}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}