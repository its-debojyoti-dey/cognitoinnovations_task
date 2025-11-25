"use client";
import React, { useState, useMemo } from "react";

import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import { cn } from "@/app/utils/utils";
import useResponsive from "@/app/hooks/useResponsive";
import Link from "next/link";
import { useGetPopularProductsQuery } from "@/app/store/api/productApi";
import type { Product } from "@/app/types";
import { useAppDispatch } from "@/app/store/hooks";
import { addToCart } from "@/app/store/slices/cartSlice";

export const badgeColors = {
  Hot: "bg-[#F74B81]",
  Sale: "bg-[#67BCEE]",
  New: "bg-[#3BB77E]",
  Other: "bg-[#F59758]",
};

export interface ProductCardProps extends Product {
  pricingClass?: string;
  buttonClass?: string;
  onAddClick?: () => void;
}

export function ProductCard({
  title,
  category,
  image,
  imageAlt,
  rating,
  brand,
  salePrice,
  originalPrice,
  isBadge = false,
  badgeText = "Badge",
  badgeColor = badgeColors.Other,
  onAddClick,
  pricingClass,
  buttonClass,
}: ProductCardProps) {
  return (
    <div className="relative bg-white rounded-3xl overflow-hidden border border-slate-200">
      {/* Hot Badge */}
      {isBadge && (
        <div
          className={`absolute top-0 left-0 ${badgeColor} text-white px-6 py-2 rounded-br-3xl z-10`}
        >
          <span className="font-semibold text-sm">{badgeText}</span>
        </div>
      )}

      {/* Product Image */}
      <div className="bg-white h-50 flex items-center justify-center">
        <Image
          src={image || "/placeholder.svg"}
          alt={imageAlt || title || "Product image"}
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-1 flex flex-col justify-between flex-1">
        {/* Category */}
        <p className="text-slate-400 text-sm font-medium">{category}</p>

        {/* Title */}
        <Link
          href={`/product/1`}
          className="text-slate-900 font-semibold text-lg leading-snug line-clamp-2"
        >
          {title}
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          </div>
          <span className="text-slate-500 text-sm">
            ({Number(rating).toFixed(1)})
          </span>
        </div>
        <div>
          <span className="text-slate-500 text-sm">By</span>
          <span className="text-green-600 text-sm"> {brand}</span>
        </div>

        {/* Price and Button */}
        <div
          className={cn(
            "flex items-center justify-between flex-wrap lg:flex-nowrap gap-2",
            pricingClass
          )}
        >
          <div className="flex items-end gap-2">
            <span className="text-green-600 font-bold text-md opacity-80">
              ${salePrice.toFixed(2)}
            </span>
            <span className="text-slate-400 line-through text-xs pb-1">
              ${originalPrice.toFixed(2)}
            </span>
          </div>
          <button
            onClick={onAddClick}
            className={cn(
              "bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors",
              buttonClass
            )}
          >
            <ShoppingCart className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

const popularProduct = () => {
  const dispatch = useAppDispatch();
  const { isDesktop } = useResponsive();
  const [category, setCategory] = useState<string>("all");

  const { data, isLoading, error } = useGetPopularProductsQuery();

  const popularProductData = data?.data || [];

  const handleCategoryChange = (category: string) => {
    setCategory(category);
  };

  const filteredProducts = useMemo(() => {
    if (!popularProductData.length) return [];
    if (category === "all") return popularProductData;
    return popularProductData.filter(
      (product) => product.category === category
    );
  }, [popularProductData, category]);

  const categories = useMemo(() => {
    return Array.from(
      new Set(popularProductData.map((product) => product.category))
    );
  }, [popularProductData]);

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({ product, quantity: 1 }));
  };

  if (isLoading) {
    return (
      <div className="sm:p-8 p-4 my-10">
        <div className="flex items-center justify-center min-h-[400px]">
          <p className="text-slate-500">Loading popular products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="sm:p-8 p-4 my-10">
        <div className="flex items-center justify-center min-h-[400px]">
          <p className="text-red-500">
            Error loading popular products. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="sm:p-8 p-4 my-10">
      <div className="mb-8 sm:max-w-[80%] max-w-[90%] mx-auto flex items-center justify-between flex-wrap gap-2">
        <h1 className="sm:text-3xl text-2xl font-bold text-slate-900 mb-2 ">
          Popular Products
        </h1>

        <div className="flex items-center gap-2">
          {isDesktop ? (
            <>
              <button
                onClick={() => handleCategoryChange("all")}
                className={cn(
                  "text-gray-400 px-2 py-1 rounded-md cursor-pointer text-sm",
                  category === "all" ? "text-black" : "text-gray-400"
                )}
              >
                All
              </button>
              {categories.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryChange(item)}
                  className={cn(
                    "text-gray-400 px-2 py-1 rounded-md cursor-pointer text-sm",
                    category === item ? "text-black" : "text-gray-400"
                  )}
                >
                  {item}
                </button>
              ))}
            </>
          ) : (
            <>
              {/* select category */}
              <select
                value={category}
                className="text-gray-400 px-2 py-1 rounded-md cursor-pointer border border-gray-200"
                onChange={(e) => handleCategoryChange(e.target.value)}
              >
                <option value="all">All</option>
                {categories.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 lg:max-w-[80%] max-w-[90%] mx-auto">
        {filteredProducts?.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onAddClick={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default popularProduct;
