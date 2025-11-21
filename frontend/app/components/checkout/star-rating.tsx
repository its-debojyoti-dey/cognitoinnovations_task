interface StarRatingProps {
  rating: number
  maxStars?: number
}

export function StarRating({ rating, maxStars = 5 }: StarRatingProps) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: maxStars }).map((_, i) => (
        <span key={i} className={`text-lg ${i < Math.floor(rating) ? "text-orange-400" : "text-gray-300"}`}>
          ★
        </span>
      ))}
    </div>
  )
}
