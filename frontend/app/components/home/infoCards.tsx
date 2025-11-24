import React from "react";

const infoCardsData = [
  {
    title: "Everyday Fresh & Clean with Our Products",
    button: "Shop Now",
    image: "onions",
    src: "./info/onions.png",
  },
  {
    title: "Make your Breakfast Healthy and Easy",
    button: "Shop Now",
    image: "strawberry juice bottle",
    src: "./info/strawberry.png",
  },
  {
    title: "The best Organic Products Online",
    button: "Shop Now",
    image: "vegetable basket",
    src: "./info/veg.png",
  },
];

const infoCards = () => {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 lg:max-w-[80%] max-w-[90%] mx-auto my-10 ">
      {infoCardsData.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-lg p-4 flex flex-col items-center justify-center  relative sm:min-h-70 min-h-50 overflow-hidden"
        >
          <img
            src={card.src}
            alt={card.image}
            className="w-full h-full object-cover absolute top-0 left-0 "
          />
          <div className="absolute top-0 sm:left-10 left-5 w-60 h-full flex flex-col items-start justify-center  sm:gap-8 gap-4">
            <h3 className="text-xl font-bold text-[#253D4E]">{card.title}</h3>
            <button className="bg-[#F53E32] text-white px-4 py-2 text-xs font-bold rounded-md hover:bg-red-600 transition-all duration-300 hover:scale-105 cursor-pointer">
              {card.button}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default infoCards;
