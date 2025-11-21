"use client";

interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string;
  onSizeChange: (size: string) => void;
}

export function SizeSelector({
  sizes,
  selectedSize,
  onSizeChange,
}: SizeSelectorProps) {
  return (
    <div className="lg:mb-8 mb-6 flex 2xl:items-center gap-2 flex-col 2xl:flex-row">
      <label className="block text-sm font-semibold text-gray-900">
        Size/Weight :
      </label>
      <div className="flex gap-3">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSizeChange(size)}
            className={`px-2 py-0.5 rounded-sm text-sm font-medium transition-colors cursor-pointer ${
              selectedSize === size
                ? "bg-red-500 text-white border border-red-500"
                : "border border-gray-300 text-gray-700 cursor-pointer"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
