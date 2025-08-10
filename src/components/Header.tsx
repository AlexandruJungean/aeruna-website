"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cart";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const items = useCartStore((s) => s.items);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="relative z-50 bg-transparent">
      <div className="container">
        <div className="flex items-center justify-between py-6">
          <Link href="/" className="text-xl tracking-tight font-medium">
            Aeruna
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/products" className="opacity-80 hover:opacity-100">
              Products
            </Link>
            <Link href="/about" className="opacity-80 hover:opacity-100">
              About
            </Link>
            <Link href="/contact" className="opacity-80 hover:opacity-100">
              Contact
            </Link>
            <Link href="/cart" className="relative opacity-80 hover:opacity-100">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </nav>

          {/* Mobile Nav */}
          <div className="flex items-center gap-4 md:hidden">
            <Link href="/cart" className="relative">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <Link
              href="/products"
              className="block py-2 opacity-80 hover:opacity-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/about"
              className="block py-2 opacity-80 hover:opacity-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block py-2 opacity-80 hover:opacity-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
