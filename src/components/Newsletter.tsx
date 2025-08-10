"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription
    setEmail("");
  };

  return (
    <div className="py-24">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-light tracking-[0.3em] uppercase text-[var(--text-muted)] mb-4">
            Newsletter
          </p>
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Stay Updated
          </h2>
          <p className="text-lg font-light text-[var(--text-muted)] mb-8">
            Subscribe for exclusive offers and new product launches.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className="flex-1 px-4 py-3 border border-gray-200 font-light focus:outline-none focus:border-[var(--foreground)] transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-[var(--foreground)] text-white font-light tracking-wider uppercase text-sm hover:bg-[var(--accent-primary)] transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}