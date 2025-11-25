import { Product } from "@/app/types";
import { ProductItem } from "./product-item";

interface SummaryItem {
  label: string;
  value: string;
}

interface OrderSummaryProps {
  items: SummaryItem[];
  totalLabel?: string;
  totalValue?: string;
  products: any[];
  onRemoveItem?: (id: string | number, size?: string) => void;
  onUpdateQuantity?: (
    id: string | number,
    quantity: number,
    size?: string
  ) => void;
}

export function OrderSummary({
  items,
  totalLabel = "Total Amount",
  totalValue = "$0.00",
  products,
  onRemoveItem,
  onUpdateQuantity,
}: OrderSummaryProps) {
  return (
    <div className="space-y-4 sm:space-y-6 overflow-hidden">
      <div className="space-y-4">
        {items.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center">
            <span className="text-gray-500 font-medium">{item.label}</span>
            <span className="text-gray-900 font-semibold text-base sm:text-lg">
              {item.value}
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200"></div>

      <div className="flex justify-between items-center pt-2">
        <span className="text-lg sm:text-xl font-bold text-gray-900">
          {totalLabel}
        </span>
        <span className="text-lg sm:text-2xl font-bold text-gray-900">
          {totalValue}
        </span>
      </div>

      <div className="space-y-2 gap-2">
        {products.map((product) => (
          <ProductItem
            key={`${product.id}-${product.size || ""}`}
            id={product.id}
            image={product.image}
            title={product.title}
            rating={product.rating}
            price={product.price}
            originalPrice={product.originalPrice}
            quantity={product.quantity}
            size={product.size}
            onRemove={onRemoveItem}
            onUpdateQuantity={onUpdateQuantity}
          />
        ))}
      </div>
    </div>
  );
}
