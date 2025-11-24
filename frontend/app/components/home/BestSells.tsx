"use client";
import { badgeColors, Product } from "./popularProduct";
import { ProductCard } from "./popularProduct";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import useResponsive from "@/app/hooks/useResponsive";
import { useEffect, useState } from "react";

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
  const { isDesktop, isTablet, isMobile } = useResponsive();

  const [currentIndex, setCurrentIndex] = useState(0);

  const totalItems = isDesktop ? 4 : isTablet ? 3 : isMobile ? 2 : 1;
  const isFirstItem = currentIndex === 0;
  const isLastItem = currentIndex === bestSellsData.length - totalItems;

  const handlePrevious = () => {
    if (isFirstItem) return;
    setCurrentIndex(currentIndex - 1);
  };
  const handleNext = () => {
    if (isLastItem) return;
    setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    if (currentIndex < 0) {
      setCurrentIndex(bestSellsData.length - totalItems);
    }
    if (currentIndex >= bestSellsData.length - totalItems) {
      setCurrentIndex(0);
    }

    const container = document.querySelector(".overflow-x-scroll");
    if (container) {
      container.scrollTo({
        left: currentIndex * (container.clientWidth / totalItems),
        behavior: "smooth",
      });
    }

    if (currentIndex < 0) {
      setCurrentIndex(0);
    }
    if (currentIndex >= bestSellsData.length - totalItems) {
      setCurrentIndex(bestSellsData.length - totalItems);
      return;
    }
  }, [currentIndex, totalItems, isFirstItem, isLastItem]);

  return (
    <div className="max-w-[80%]  mx-auto my-10 flex flex-col md:flex-row gap-4">
      <div className="bg-white rounded-lg min-w-[20%] p-4 flex flex-col items-center justify-center  relative overflow-hidden flex-1 lg:block hidden">
        <img
          src={"/sales/bg.png"}
          alt="Bring nature into your home"
          className="w-full h-full object-cover absolute top-0 left-0 "
        />
        <div className="absolute top-0 sm:left-10 left-5 w-60 h-full flex flex-col items-start justify-center  sm:gap-8 gap-4">
          <h3 className="text-3xl font-bold text-white">
            Bring nature into your home
          </h3>
          <button className="bg-[#F53E32] text-white px-4 py-2 text-xs font-bold rounded-md hover:bg-red-600 transition-all duration-300 hover:scale-105 cursor-pointer">
            Shop Now
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 relative w-full h-full">
        <button
          className="rounded-full p-2 bg-gray-200 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handlePrevious}
          disabled={isFirstItem}
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-4 w-full h-full overflow-x-scroll">
          {bestSellsData
            .slice(currentIndex, currentIndex + totalItems)
            .map((product, index) => (
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
                pricingClass="flex-col items-start justify-start"
                buttonClass="w-full text-center justify-center items-center"
              />
            ))}
        </div>
        <button
          className="rounded-full p-2 bg-gray-200 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleNext}
          disabled={isLastItem}
        >
          <ArrowRightIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default BestSells;
