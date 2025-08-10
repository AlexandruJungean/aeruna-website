import { Shield, Truck, RefreshCw, Lock } from "lucide-react";

export function TrustBadges() {
  return (
    <section className="border-y border-black/5">
      <div className="container py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <Shield className="mb-3 opacity-70" size={24} />
            <h3 className="text-sm font-medium">100% Natural</h3>
            <p className="text-xs opacity-60 mt-1">No harsh chemicals</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Truck className="mb-3 opacity-70" size={24} />
            <h3 className="text-sm font-medium">Free Shipping</h3>
            <p className="text-xs opacity-60 mt-1">Orders over $35</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <RefreshCw className="mb-3 opacity-70" size={24} />
            <h3 className="text-sm font-medium">30-Day Returns</h3>
            <p className="text-xs opacity-60 mt-1">Risk-free purchase</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Lock className="mb-3 opacity-70" size={24} />
            <h3 className="text-sm font-medium">Secure Checkout</h3>
            <p className="text-xs opacity-60 mt-1">SSL encrypted</p>
          </div>
        </div>
      </div>
    </section>
  );
}
