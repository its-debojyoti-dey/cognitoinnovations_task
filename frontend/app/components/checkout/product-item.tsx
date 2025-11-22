import { StarRating } from "./star-rating";

interface ProductItemProps {
  image: string;
  title: string;
  rating: number;
  price: string;
  originalPrice: string;
}

export function ProductItem({
  image,
  title,
  rating,
  price,
  originalPrice,
}: ProductItemProps) {
  return (
    <div className="flex gap-6 py-4 sm:py-6 border-b border-gray-100 last:border-b-0 flex flex-col md:flex-row">
      <img
        src={image || "/placeholder.svg?height=120&width=120"}
        alt={title}
        className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-lg flex-shrink-0 bg-gray-100"
      />
      <div className="flex-1 flex flex-col justify-start">
        <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-1 sm:mb-3">
          {title}
        </h3>
        <StarRating rating={rating} />
        <div className="flex gap-3 mt-2 sm:mt-4">
          <span className="font-bold text-teal-600 text-lg">{price}</span>
          <span className="text-gray-400 line-through text-base">
            {originalPrice}
          </span>
        </div>
      </div>
    </div>
  );
}
