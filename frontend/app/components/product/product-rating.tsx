import { Star } from "lucide-react";

interface ProductRatingProps {
  rating: number;
  reviewCount: number;
}

export function ProductRating({ rating, reviewCount }: ProductRatingProps) {
  return (
    <div className="flex items-center gap-2 mb-6">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={15} className="fill-red-500 text-red-500" />
        ))}
      </div>
      <span className="text-gray-700 text-sm">( {reviewCount} Review )</span>
    </div>
  );
}
