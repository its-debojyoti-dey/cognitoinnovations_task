interface ProductPricingProps {
  currentPrice: number;
  originalPrice: number;
}

export function ProductPricing({
  currentPrice,
  originalPrice,
}: ProductPricingProps) {
  return (
    <div className="mb-6">
      <div className="flex items-baseline gap-2">
        <span className="text-4xl font-bold text-red-500">
          ${currentPrice.toFixed(2)}
        </span>
        <span className="text-lg text-gray-400 line-through">
          ${originalPrice.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
