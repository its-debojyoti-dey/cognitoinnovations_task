"use client";

import { StarRating } from "./star-rating";
import { Minus, Plus, X } from "lucide-react";

interface ProductItemProps {
  id: string | number;
  image: string;
  title: string;
  rating: number;
  price: string;
  originalPrice: string;
  quantity?: number;
  size?: string;
  onRemove?: (id: string | number, size?: string) => void;
  onUpdateQuantity?: (
    id: string | number,
    quantity: number,
    size?: string
  ) => void;
}

export function ProductItem({
  id,
  image,
  title,
  rating,
  price,
  originalPrice,
  quantity = 1,
  size,
  onRemove,
  onUpdateQuantity,
}: ProductItemProps) {
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity <= 0 && onRemove) {
      onRemove(id, size);
    } else if (onUpdateQuantity) {
      onUpdateQuantity(id, newQuantity, size);
    }
  };

  return (
    <div className="flex gap-6 py-4 sm:py-6 border-b border-gray-100 last:border-b-0 flex-col md:flex-row">
      <img
        src={image || "/placeholder.svg?height=120&width=120"}
        alt={title}
        className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-lg flex-shrink-0 bg-gray-100"
      />
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-bold text-gray-900 text-base sm:text-lg">
              {title}
              {size && (
                <span className="text-sm text-gray-500 font-normal ml-2">
                  ({size})
                </span>
              )}
            </h3>
            {onRemove && (
              <button
                onClick={() => onRemove(id, size)}
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Remove item"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          <StarRating rating={rating} />
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-3">
            <span className="font-bold text-teal-600 text-lg">{price}</span>
            <span className="text-gray-400 line-through text-base">
              {originalPrice}
            </span>
          </div>
          {onUpdateQuantity && (
            <div className="flex items-center border border-gray-300 rounded-md">
              <button
                onClick={() => handleQuantityChange(quantity - 1)}
                className="p-2 text-gray-600 hover:bg-gray-100"
                aria-label="Decrease quantity"
              >
                <Minus size={16} />
              </button>
              <span className="w-12 text-center py-2 text-gray-900 font-medium">
                {quantity}
              </span>
              <button
                onClick={() => handleQuantityChange(quantity + 1)}
                className="p-2 text-gray-600 hover:bg-gray-100"
                aria-label="Increase quantity"
              >
                <Plus size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
