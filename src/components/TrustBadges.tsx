import { Leaf, Droplets, Heart, Recycle } from "lucide-react";

export function TrustBadges() {
  const badges = [
    { 
      icon: Leaf,
      title: "Natural Ingredients", 
      description: "100% pure & organic" 
    },
    { 
      icon: Heart,
      title: "Handcrafted", 
      description: "Made in small batches" 
    },
    { 
      icon: Droplets,
      title: "Gentle Formula", 
      description: "pH balanced for all skin" 
    },
    { 
      icon: Recycle,
      title: "Sustainable", 
      description: "Eco-friendly packaging" 
    }
  ];

  return (
    <div className="py-20">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {badges.map((badge, index) => (
            <div key={index} className="text-center space-y-3">
              <badge.icon 
                className="w-8 h-8 mx-auto text-[var(--accent-primary)] opacity-80" 
                strokeWidth={1.5}
              />
              <div className="space-y-1">
                <h3 className="text-sm font-light tracking-wider uppercase">
                  {badge.title}
                </h3>
                <p className="text-xs text-[var(--text-muted)]">
                  {badge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}