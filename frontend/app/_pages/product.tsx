"use client";

import { useState } from "react";
import { ProductImage } from "../components/product/product-image";
import { ProductDetails } from "../components/product/product-details";
import { ProductTabs } from "../components/product/product-tabs";
import { TabContent } from "../components/product/tab-content";
import ProductFilter from "../components/product/product-filter";
import { ShoppingSection } from "../components/product/shopping-section";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("50kg");
  const [activeTab, setActiveTab] = useState("description");

  const sizes = ["50kg", "80kg", "120kg", "200kg"];

  const specs = [
    { label: "Brand", value: "ESTA BETTERU CO" },
    { label: "Flavour", value: "Super Saver Pack" },
    { label: "Diet Type", value: "Vegetarian" },
    { label: "Weight", value: "200 Grams" },
    { label: "Speciality", value: "Gluten free, Sugar free" },
    { label: "Info", value: "Egg Free, Allergen-Free" },
    { label: "Items", value: "1" },
  ];

  const handleAddToCart = () => {
    console.log(`Added ${quantity} items of size ${selectedSize} to cart`);
  };

  const products = [
    {
      id: 1,
      title: "Best snakes with hazel nut mix pack 200gm",
      category: "Snacks",
      image: "/chocolate-hazelnut-snacks.jpg",
      originalPrice: 123.25,
      salePrice: 120.25,
    },
    {
      id: 2,
      title: "Sweet snakes crunchy nut mix 250gm pack",
      category: "Snacks",
      image: "/crunchy-nut-mix-snacks.jpg",
      originalPrice: 110.0,
      salePrice: 100.0,
    },
    {
      id: 3,
      title: "Best snakes with hazel nut mix pack 200gm",
      category: "Snacks",
      image: "/fresh-lemons.png",
      originalPrice: 123.25,
      salePrice: 120.25,
    },
    {
      id: 4,
      title: "Sweet snakes crunchy nut mix 250gm pack",
      category: "Snacks",
      image: "/apple-juice-beverage.jpg",
      originalPrice: 110.0,
      salePrice: 100.0,
    },
  ];

  return (
    <main className="min-h-screen bg-white 2xl:max-w-[70%] max-w-[90%] mx-auto">
      <div className="flex lg:py-12 py-6 flex-col lg:flex-row gap-6">
        <div className="h-full min-w-[100%] lg:min-w-[25%] mb-12 lg:mb-0 xl:block hidden">
          <ProductFilter />
        </div>
        {/* Product Section */}
        <div className="mx-auto lg:px-4 px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <ProductImage
              src="/info/veg.png"
              alt="Seeds Of Change Organic Quinoa"
            />

            <ProductDetails
              title="Seeds Of Change Orqagnic Quinoa, Brown"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iure minus error doloribus saepe natus?"
              rating={5}
              reviewCount={75}
              specs={specs}
              currentPrice={120.25}
              originalPrice={123.25}
              sizes={sizes}
              selectedSize={selectedSize}
              quantity={quantity}
              onSizeChange={setSelectedSize}
              onQuantityChange={setQuantity}
              onAddToCart={handleAddToCart}
            />
          </div>
          {/* Tabs Section */}
          <div className="border border-gray-200 rounded-lg">
            <div className="max-w-full mx-auto lg:px-6 px-4">
              <ProductTabs activeTab={activeTab} onTabChange={setActiveTab} />
              <TabContent activeTab={activeTab} />
            </div>
          </div>
        </div>
      </div>
      <ShoppingSection products={products} />
    </main>
  );
}
