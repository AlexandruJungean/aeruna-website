"use client";

import { Star } from "lucide-react";

type Props = {
  rating: number;
  size?: number;
  className?: string;
};

export function StarRating({ rating, size = 16, className = "" }: Props) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {[...Array(5)].map((_, i) => {
        const starValue = Math.max(0, Math.min(1, rating - i));
        const isFilled = starValue >= 1;
        const isPartial = starValue > 0 && starValue < 1;
        
        return (
          <div key={i} className="relative">
            {/* Background star (always empty) */}
            <Star
              size={size}
              className="fill-none stroke-current text-black/30 dark:text-white/30"
              strokeWidth={1.5}
            />
            {/* Foreground star (filled or partial) */}
            {isFilled && (
              <Star
                size={size}
                className="absolute inset-0 fill-current text-black dark:text-white"
                strokeWidth={1.5}
              />
            )}
            {isPartial && (
              <div className="absolute inset-0" style={{ width: `${starValue * 100}%`, overflow: 'hidden' }}>
                <Star
                  size={size}
                  className="fill-current text-black dark:text-white"
                  strokeWidth={1.5}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
