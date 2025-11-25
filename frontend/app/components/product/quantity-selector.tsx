"use client";

import { Plus, Minus } from "lucide-react";
import Link from "next/link";

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  onAddToCart: () => void;
}

export function QuantitySelector({
  quantity,
  onQuantityChange,
  onAddToCart,
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
        className="bg-red-500 text-white xl:px-8 px-4 xl:py-2 py-1 text-sm xl:text-lg rounded-md font-semibold hover:bg-red-600 transition-colors"
      >
        Add To Cart
      </button>
    </div>
  );
}
