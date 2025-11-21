"use client";

import type React from "react";

import { useState } from "react";

interface Category {
  id: string;
  name: string;
  count: number;
}

interface Tag {
  id: string;
  name: string;
}

const ProductFilter = () => {
  const [categories] = useState<Category[]>([
    { id: "1", name: "Juice & Drinks", count: 20 },
    { id: "2", name: "Dairy & Milk", count: 54 },
    { id: "3", name: "Snack & Spice", count: 64 },
  ]);

  const [minPrice, setMinPrice] = useState(20);
  const [maxPrice, setMaxPrice] = useState(250);
  const [maxPriceLimit] = useState(500);

  const [tags] = useState<Tag[]>([
    { id: "1", name: "Vegetables" },
    { id: "2", name: "Juice" },
    { id: "3", name: "Food" },
    { id: "4", name: "Dry Fruits" },
  ]);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleCategory = (id: string) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleTag = (id: string) => {
    setSelectedTags((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value);
    if (value <= maxPrice) {
      setMinPrice(value);
    }
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value);
    if (value >= minPrice) {
      setMaxPrice(value);
    }
  };

  const handleFilter = () => {
    console.log("Filters applied:", {
      categories: selectedCategories,
      priceRange: { min: minPrice, max: maxPrice },
      tags: selectedTags,
    });
  };

  return (
    <div className="w-full max-w-sm bg-gray-50 rounded-2xl p-8 border border-gray-200">
      {/* Product Category Section */}
      <div className="mb-5">
        <h2 className="text-lg  text-gray-900">Product Category</h2>
        <div className="border-b border-gray-200 pb-2 mb-4"></div>

        <div className="space-y-2">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleCategory(category.id)}
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.id)}
                  onChange={() => toggleCategory(category.id)}
                  className="w-5 h-5 rounded border-2 border-gray-300 cursor-pointer accent-red-500"
                />
                <span className="text-gray-500 xl:text-base text-sm font-medium">
                  {category.name}
                </span>
              </div>
              <span className="text-gray-600 xl:text-base text-sm font-medium">
                [{category.count}]
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Filter By Price Section */}
      <div className="mb-5">
        <h2 className="text-lg  text-gray-900">Filter By Price</h2>
        <div className="border-b border-gray-200 pb-2 mb-6"></div>

        <div className="mb-4 relative">
          <div className="relative h-1 bg-gray-300 rounded-lg">
            <div
              className="absolute h-1 bg-red-500 rounded-lg"
              style={{
                left: `${(minPrice / maxPriceLimit) * 100}%`,
                right: `${100 - (maxPrice / maxPriceLimit) * 100}%`,
              }}
            ></div>
          </div>
          <input
            type="range"
            min={0}
            max={maxPriceLimit}
            value={minPrice}
            onChange={handleMinPriceChange}
            className="absolute w-full h-1 top-0 appearance-none bg-transparent rounded-lg cursor-pointer pointer-events-none accent-red-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-red-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-red-500 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:shadow-md"
          />
          <input
            type="range"
            min={0}
            max={maxPriceLimit}
            value={maxPrice}
            onChange={handleMaxPriceChange}
            className="absolute w-full h-1 top-0 appearance-none bg-transparent rounded-lg cursor-pointer pointer-events-none accent-red-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-red-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-red-500 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:shadow-md"
          />
        </div>

        <div className="mb-4">
          <p className="text-base font-bold text-gray-900">
            Price:{" "}
            <span className="text-gray-500 xl:text-base text-sm font-normal">
              ${minPrice} - ${maxPrice}
            </span>
          </p>
        </div>

        {/* Filter Button */}
        <button
          onClick={handleFilter}
          className="flex-1 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-bold py-2 px-6 rounded-xl text-base transition-colors"
        >
          Filter
        </button>
      </div>

      {/* Products Tags Section */}
      <div>
        <h2 className="text-lg  text-gray-900">Products Tags</h2>
        <div className="border-b border-gray-200 pb-2 mb-4"></div>

        <div className="grid grid-cols-2 gap-3">
          {tags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => toggleTag(tag.id)}
              className={`xl:py-1 py-0.5 xl:px-2 px-1 text-sm xl:text-base rounded-lg border-1 font-medium transition-all ${
                selectedTags.includes(tag.id)
                  ? "border-red-500 bg-red-50 text-red-600"
                  : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
              }`}
            >
              {tag.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
