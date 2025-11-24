"use client";
import React, { useState } from "react";

import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import { cn } from "@/app/utils/utils";
import useResponsive from "@/app/hooks/useResponsive";
import Link from "next/link";

export const badgeColors = {
  Hot: "bg-[#F74B81]",
  Sale: "bg-[#67BCEE]",
  New: "bg-[#3BB77E]",
  Other: "bg-[#F59758]",
};

const popularProductData: Product[] = [
  {
    id: "1",
    title: "Fresh organic villa farm lemon 500gm pack",
    category: "Snack",
    image: "/popular_products/1.png",
    imageAlt: "Fresh organic villa farm lemon 500gm pack",
    rating: 4.0,
    brand: "NestFood",
    salePrice: 28.85,
    originalPrice: 32.8,
    isBadge: true,
    badgeText: "Hot",
    badgeColor: badgeColors.Hot,
  },
  {
    id: "2",
    title: "Best snakes with hazel nut pack 200gm",
    category: "Hodo Foods",
    image: "/popular_products/2.png",
    imageAlt: "Best snakes with hazel nut pack 200gm",
    rating: 3.5,
    brand: "Stouffer",
    salePrice: 52.85,
    originalPrice: 55.8,
    isBadge: true,
    badgeText: "Sale",
    badgeColor: badgeColors.Sale,
  },
  {
    id: "3",
    title: "Organic fresh venila farm watermelon 5kg",
    category: "Snack",
    image: "/popular_products/3.png",
    imageAlt: "Organic fresh venila farm watermelon 5kg",
    rating: 4.0,
    brand: "StarKist",
    salePrice: 48.85,
    originalPrice: 52.8,
    isBadge: true,
    badgeText: "New",
    badgeColor: badgeColors.New,
  },
  {
    id: "4",
    title: "Fresh organic apple 1kg simla marmimg",
    category: "Vegetables",
    image: "/popular_products/4.png",
    imageAlt: "Fresh organic apple 1kg simla marmimg",
    rating: 4.0,
    brand: "NestFood",
    salePrice: 17.85,
    originalPrice: 19.8,
    isBadge: false,
    badgeText: "-14%",
    badgeColor: badgeColors.Other,
  },
  {
    id: "5",
    title: "Blue Diamond Almonds Lightly Salted Vegetables",
    category: "Pet Foods",
    image: "/popular_products/5.png",
    imageAlt: "Blue Diamond Almonds Lightly Salted Vegetables",
    rating: 4.0,
    brand: "NestFood",
    salePrice: 23.85,
    originalPrice: 25.8,
    isBadge: true,
    badgeText: "-14%",
    badgeColor: badgeColors.Other,
  },
  {
    id: "6",
    title: "Chobani Complete Vanilla Greek Yogurt",
    category: "Hodo Foods",
    image: "/popular_products/6.png",
    imageAlt: "Chobani Complete Vanilla Greek Yogurt",
    rating: 4.0,
    brand: "NestFood",
    salePrice: 54.85,
    originalPrice: 55.8,
    isBadge: false,
    badgeText: "Hot",
    badgeColor: badgeColors.Hot,
  },
  {
    id: "7",
    title: "Canada Dry Ginger Ale – 2 L Bottle – 200ml - 400g",
    category: "Meats",
    image: "/popular_products/7.png",
    imageAlt: "Canada Dry Ginger Ale – 2 L Bottle – 200ml - 400g",
    rating: 4.0,
    brand: "NestFood",
    salePrice: 32.85,
    originalPrice: 33.8,
    isBadge: false,
    badgeText: "Hot",
    badgeColor: badgeColors.Hot,
  },
  {
    id: "8",
    title: "Encore Seafoods Stuffed Alaskan Salmon",
    category: "Snack",
    image: "/popular_products/8.png",
    imageAlt: "Encore Seafoods Stuffed Alaskan Salmon",
    rating: 4.0,
    brand: "NestFood",
    salePrice: 35.85,
    originalPrice: 37.8,
    isBadge: true,
    badgeText: "Sale",
    badgeColor: badgeColors.Sale,
  },
  {
    id: "9",
    title: "Gorton’s Beer Battered Fish Fillets with soft paper",
    category: "Coffes",
    image: "/popular_products/9.png",
    imageAlt: "Gorton’s Beer Battered Fish Fillets with soft paper",
    rating: 4.0,
    brand: "Old El Paso",
    salePrice: 23.85,
    originalPrice: 25.8,
    isBadge: true,
    badgeText: "Hot",
    badgeColor: badgeColors.Hot,
  },
  {
    id: "10",
    title: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
    category: "Cream",
    image: "/popular_products/10.png",
    imageAlt: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
    rating: 4.0,
    brand: "Tyson",
    salePrice: 22.85,
    originalPrice: 24.8,
    isBadge: false,
    badgeText: "Hot",
    badgeColor: badgeColors.Hot,
  },
];

export interface Product {
  id: string;
  title: string;
  category: string;
  image: string;
  imageAlt: string;
  rating: number;
  brand: string;
  salePrice: number;
  originalPrice: number;
  isBadge?: boolean;
  badgeText?: string;
  badgeColor?: string;
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
}: Product) {
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
          alt={imageAlt}
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
  const [cart, setCart] = useState<string[]>([]);

  const { isDesktop } = useResponsive();
  const [category, setCategory] = useState<string>("all");

  const handleCategoryChange = (category: string) => {
    setCategory(category);
  };

  const filteredProducts = popularProductData.filter((product) => {
    if (category === "all") return true;
    return product.category === category;
  });

  const handleAddToCart = (productId: string, productTitle: string) => {
    setCart([...cart, productId]);
    console.log(
      `Added "${productTitle}" to cart. Total items: ${cart.length + 1}`
    );
  };

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
              {Array.from(
                new Set(popularProductData.map((product) => product.category))
              ).map((item, index) => (
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
                defaultValue="all"
                className="text-gray-400 px-2 py-1 rounded-md cursor-pointer border border-gray-200"
                onChange={(e) => handleCategoryChange(e.target.value)}
              >
                <option value="all">All</option>
                {Array.from(
                  new Set(popularProductData.map((product) => product.category))
                ).map((item, index) => (
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
        {filteredProducts?.map((product, index) => (
          <ProductCard
            key={index}
            {...product}
            onAddClick={() => handleAddToCart(product.image, product.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default popularProduct;
