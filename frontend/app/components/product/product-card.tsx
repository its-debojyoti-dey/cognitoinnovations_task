"use client";

interface Product {
  id: number;
  title: string;
  category: string;
  image: string;
  originalPrice: number;
  salePrice: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      {/* Product Image Container */}
      <div className="relative bg-gray-100 h-72 flex items-center justify-center group m-3 border border-gray-200 rounded-lg">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          className="h-full w-full object-contain p-4"
        />
        <div className="h-10 w-10 bg-gray-100 border border-gray-300 rounded-full absolute -bottom-5 left-[45%]"></div>
      </div>

      {/* Product Info */}
      <div className="flex-1 p-6 flex flex-col">
        {/* Category */}
        <p className="text-xs text-gray-500 font-medium mb-3 uppercase tracking-wider text-center">
          {product.category}
        </p>

        {/* Rating Stars - added star rating display */}
        <div className="flex gap-1 mb-4 justify-center">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-3 h-3 text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold text-gray-900 mb-4 line-clamp-2 leading-tight text-center">
          {product.title}
        </h3>

        {/* Pricing - updated price display styling to match design */}
        <div className="flex items-baseline gap-2 mt-auto justify-center">
          <span className="text-lg font-bold text-red-500">
            ${product.salePrice.toFixed(2)}
          </span>
          <span className="text-sm text-gray-400 line-through">
            ${product.originalPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
