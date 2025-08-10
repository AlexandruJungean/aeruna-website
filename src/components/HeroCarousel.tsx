"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/products";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const product = products[index];

  function next() {
    setIndex((i) => (i + 1) % products.length);
  }
  function prev() {
    setIndex((i) => (i - 1 + products.length) % products.length);
  }

  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={product.id + "bg"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0"
          style={{ background: product.background }}
        />
      </AnimatePresence>

      <div className="container relative z-10 py-16 md:py-24">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div className="text-white/90">
            <motion.h1
              key={product.id + "title"}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-5xl tracking-tight"
            >
              {product.name}
            </motion.h1>
            <motion.p
              key={product.id + "desc"}
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="mt-4 max-w-[50ch] opacity-90"
            >
              {product.description}
            </motion.p>
            <div className="mt-6 flex items-center gap-4">
              <Link
                href={`/products/${product.slug}`}
                className="inline-flex items-center justify-center rounded-full bg-white text-black h-11 px-6 text-sm font-medium hover:opacity-90"
              >
                View soap
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full border border-white/40 text-white h-11 px-6 text-sm font-medium hover:bg-white/10"
              >
                All products
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] md:aspect-[3/4] rounded-xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={product.id + "image"}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-6 md:bottom-10 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous"
            className="h-10 w-10 rounded-full bg-white/15 backdrop-blur border border-white/30 text-white flex items-center justify-center hover:bg-white/25"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {products.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setIndex(i)}
                aria-label={`Go to ${p.name}`}
                className={`h-2.5 w-2.5 rounded-full ${
                  i === index ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next"
            className="h-10 w-10 rounded-full bg-white/15 backdrop-blur border border-white/30 text-white flex items-center justify-center hover:bg-white/25"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}


