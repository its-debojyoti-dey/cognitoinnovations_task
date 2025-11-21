"use client";
import React, { useState } from "react";

import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";

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
    image: "/info/veg.png",
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
    image: "/info/veg.png",
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
    image: "/info/veg.png",
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
    image: "/info/veg.png",
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
    image: "/info/veg.png",
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
    image: "/info/veg.png",
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
    image: "/info/veg.png",
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
    image: "/info/veg.png",
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
    image: "/info/veg.png",
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
    image: "/info/veg.png",
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
          width={280}
          height={280}
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-1">
        {/* Category */}
        <p className="text-slate-400 text-sm font-medium">{category}</p>

        {/* Title */}
        <h3 className="text-slate-900 font-semibold text-lg leading-snug">
          {title}
        </h3>

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
        <div className="flex items-center justify-between pt-4 flex-wrap lg:flex-nowrap gap-2">
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
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors"
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

  const handleAddToCart = (productId: string, productTitle: string) => {
    setCart([...cart, productId]);
    console.log(
      `Added "${productTitle}" to cart. Total items: ${cart.length + 1}`
    );
  };

  return (
    <div className="min-h-screen sm:p-8 p-4 my-10">
      <div className="mb-8 max-w-[80%] mx-auto">
        <h1 className="sm:text-3xl text-2xl font-bold text-slate-900 mb-2 ">
          Popular Products
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 max-w-[80%] mx-auto">
        {popularProductData?.map((product, index) => (
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
