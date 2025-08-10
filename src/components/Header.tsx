"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cart";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const items = useCartStore((s) => s.items);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Left - Text Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-lg md:text-xl font-light tracking-wider">AERUNA</span>
          </Link>

          {/* Center - Icon Logo */}
          <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
            <Image
              src="/images/Aeruna-logo-icon.svg"
              alt="Aeruna Icon"
              width={40}
              height={40}
              className="h-8 w-8 md:h-10 md:w-10"
              priority
            />
          </Link>

          {/* Right - Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            <Link 
              href="/products" 
              className="text-sm font-light tracking-wide hover:text-[var(--accent-primary)] transition-colors"
            >
              Products
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-light tracking-wide hover:text-[var(--accent-primary)] transition-colors"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-sm font-light tracking-wide hover:text-[var(--accent-primary)] transition-colors"
            >
              Contact
            </Link>
            <Link 
              href="/cart" 
              className="relative hover:text-[var(--accent-primary)] transition-colors"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[var(--foreground)] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-4 md:hidden">
            <Link href="/cart" className="relative">
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[var(--foreground)] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
            >
              {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-8 border-t border-gray-100">
            <Link
              href="/products"
              className="block py-3 text-sm font-light tracking-wide hover:text-[var(--accent-primary)] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/about"
              className="block py-3 text-sm font-light tracking-wide hover:text-[var(--accent-primary)] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block py-3 text-sm font-light tracking-wide hover:text-[var(--accent-primary)] transition-colors"
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