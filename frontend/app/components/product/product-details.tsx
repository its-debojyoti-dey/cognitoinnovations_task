import { ProductRating } from "./product-rating";
import { ProductSpecs } from "./product-specs";
import { ProductPricing } from "./product-pricing";
import { SizeSelector } from "./size-selector";
import { QuantitySelector } from "./quantity-selector";

interface ProductDetailsProps {
  title: string;
  description: string;
  rating: number;
  reviewCount: number;
  specs: Array<{ label: string; value: string }>;
  currentPrice: number;
  originalPrice: number;
  sizes: string[];
  selectedSize: string;
  quantity: number;
  onSizeChange: (size: string) => void;
  onQuantityChange: (quantity: number) => void;
  onAddToCart: () => void;
}

export function ProductDetails({
  title,
  description,
  rating,
  reviewCount,
  specs,
  currentPrice,
  originalPrice,
  sizes,
  selectedSize,
  quantity,
  onSizeChange,
  onQuantityChange,
  onAddToCart,
}: ProductDetailsProps) {
  return (
    <div className="flex flex-col justify-start">
      <h1 className="text-2xl  text-gray-900 mb-4">{title}</h1>

      <p className="text-gray-600 text-sm mb-2 leading-relaxed">
        {description}
      </p>

      <div className="border-b border-gray-200 pb-2 mb-4 border-b-2"></div>

      <ProductRating rating={rating} reviewCount={reviewCount} />

      <ProductSpecs specs={specs} />

      <ProductPricing
        currentPrice={currentPrice}
        originalPrice={originalPrice}
      />

      <SizeSelector
        sizes={sizes}
        selectedSize={selectedSize}
        onSizeChange={onSizeChange}
      />

      <QuantitySelector
        quantity={quantity}
        onQuantityChange={onQuantityChange}
        onAddToCart={onAddToCart}
      />
    </div>
  );
}
