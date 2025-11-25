"use client";
import { badgeColors } from "./popularProduct";
import { ProductCard } from "./popularProduct";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import useResponsive from "@/app/hooks/useResponsive";
import { useEffect, useState, useMemo } from "react";
import { useGetBestSellsQuery } from "@/app/store/api/productApi";
import { useAppDispatch } from "@/app/store/hooks";
import { addToCart } from "@/app/store/slices/cartSlice";
import type { Product } from "@/app/types";

const BestSells = () => {
  const dispatch = useAppDispatch();
  const { isDesktop, isTablet, isMobile } = useResponsive();
  const { data, isLoading, error } = useGetBestSellsQuery();

  const bestSellsData = data?.data || [];

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({ product, quantity: 1 }));
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const totalItems = isDesktop ? 4 : isTablet ? 3 : isMobile ? 1 : 0;
  const isFirstItem = currentIndex === 0;
  const isLastItem = currentIndex >= bestSellsData.length - totalItems;

  const handlePrevious = () => {
    if (isFirstItem) return;
    setCurrentIndex(currentIndex - 1);
  };
  const handleNext = () => {
    if (isLastItem) return;
    setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    if (bestSellsData.length === 0) return;

    if (currentIndex < 0) {
      setCurrentIndex(Math.max(0, bestSellsData.length - totalItems));
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
      setCurrentIndex(Math.max(0, bestSellsData.length - totalItems));
      return;
    }
  }, [currentIndex, totalItems, isFirstItem, isLastItem, bestSellsData.length]);

  if (isLoading) {
    return (
      <div className="sm:p-8 p-4 max-w-[80%] mx-auto">
        <h3 className="text-3xl font-bold text-slate-900">Daily Best Sells</h3>
        <div className="flex items-center justify-center min-h-[400px] my-10">
          <p className="text-slate-500">Loading best sells...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="sm:p-8 p-4 max-w-[80%] mx-auto">
        <h3 className="text-3xl font-bold text-slate-900">Daily Best Sells</h3>
        <div className="flex items-center justify-center min-h-[400px] my-10">
          <p className="text-red-500">
            Error loading best sells. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className=" sm:p-8 p-4 max-w-[80%] mx-auto">
      <h3 className="text-3xl font-bold text-slate-900">Daily Best Sells</h3>
      <div className="  mx-auto my-10 flex flex-col md:flex-row gap-4">
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

        <div className="flex flex-col items-center justify-center gap-4 relative w-full h-full">
          <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-4 w-full h-full">
            {bestSellsData
              .slice(currentIndex, currentIndex + totalItems)
              .map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  pricingClass="flex-col items-start justify-start"
                  buttonClass="w-full text-center justify-center items-center"
                  onAddClick={() => handleAddToCart(product)}
                />
              ))}
          </div>
          <div className="flex items-center justify-between gap-2 w-full">
            <button
              className="rounded-full p-2 bg-gray-200 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handlePrevious}
              disabled={isFirstItem || bestSellsData.length === 0}
            >
              <ArrowLeftIcon className="w-6 h-6" />
            </button>
            <button
              className="rounded-full p-2 bg-gray-200 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleNext}
              disabled={isLastItem || bestSellsData.length === 0}
            >
              <ArrowRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSells;
