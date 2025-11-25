"use client";

import { Plus, Minus, Check } from "lucide-react";
import { cn } from "@/app/utils/utils";

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  onAddToCart: () => void;
  isInCart?: boolean;
}

export function QuantitySelector({
  quantity,
  onQuantityChange,
  onAddToCart,
  isInCart = false,
}: QuantitySelectorProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center border border-gray-300 rounded-md">
        <button
          onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
          className="p-2 text-gray-600 hover:bg-gray-100"
        >
          <Minus size={18} />
        </button>
        <input
          type="number"
          value={quantity}
          readOnly
          className="w-12 text-center py-2 border-0 focus:outline-none text-gray-900"
        />
        <button
          onClick={() => onQuantityChange(quantity + 1)}
          className="p-2 text-gray-600 hover:bg-gray-100"
        >
          <Plus size={18} />
        </button>
      </div>
      <button
        onClick={onAddToCart}
        className={cn(
          "xl:px-8 px-4 xl:py-2 py-1 text-sm xl:text-lg rounded-md font-semibold transition-colors flex items-center gap-2",
          isInCart
            ? "bg-green-500 hover:bg-green-600 text-white"
            : "bg-red-500 hover:bg-red-600 text-white"
        )}
      >
        {isInCart ? (
          <>
            <Check className="w-4 h-4 xl:w-5 xl:h-5" />
            In Cart
          </>
        ) : (
          "Add To Cart"
        )}
      </button>
    </div>
  );
}
