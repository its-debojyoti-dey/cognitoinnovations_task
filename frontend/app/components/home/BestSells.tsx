import React from "react";
import { badgeColors, Product } from "./popularProduct";
import { ProductCard } from "./popularProduct";

const bestSellsData: Product[] = [
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

const BestSells = () => {
  return (
    <div className="max-w-[80%]  mx-auto my-10 flex flex-col md:flex-row gap-4 ">
      <div className="bg-white rounded-lg p-4 flex flex-col items-center justify-center  relative max-w-[20%] min-h-70 overflow-hidden flex-1">
        <img
          src={bestSellsData[0].image}
          alt={bestSellsData[0].title}
          className="w-full h-full object-cover absolute top-0 left-0 "
        />
        <div className="absolute top-0 sm:left-10 left-5 w-60 h-full flex flex-col items-start justify-center  sm:gap-8 gap-4">
          <h3 className="text-xl font-bold text-[#253D4E]">
            Bring nature into your home
          </h3>
          <button className="bg-[#F53E32] text-white px-4 py-2 text-xs font-bold rounded-md hover:bg-red-600 transition-all duration-300 hover:scale-105 cursor-pointer">
            Shop Now
          </button>
        </div>
      </div>

      <div className="flex-1 grid md:grid-cols-4 grid-cols-1 gap-4">
        {bestSellsData.slice(0, 4).map((product, index) => (
          <ProductCard
            key={index}
            id={index.toString()}
            title={product.title}
            category={product.category}
            image={product.image}
            imageAlt={product.imageAlt}
            rating={product.rating}
            brand={product.brand}
            salePrice={product.salePrice}
            originalPrice={product.originalPrice}
            isBadge={product.isBadge}
            badgeText={product.badgeText}
            badgeColor={product.badgeColor}
            onAddClick={product.onAddClick}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSells;
