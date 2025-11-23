import { Star } from "lucide-react";
import React from "react";

const dealsDayData = [
  {
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    rating: 4.0,
    brand: "NestFood",
    price: 32.85,
    oldPrice: 33.8,
    image: "/info/veg.png",
    button: "Add",
  },
  {
    title: "Perdue Simply Smart Organics Gluten Free",
    rating: 4.0,
    brand: "Old El Paso",
    price: 24.85,
    oldPrice: 26.8,
    image: "/info/veg.png",
    button: "Add",
  },
  {
    title: "Signature Wood-Fired Mushroom and Caramelized",
    rating: 3.0,
    brand: "Progresso",
    price: 12.85,
    oldPrice: 13.8,
    image: "/info/veg.png",
    button: "Add",
  },
  {
    title: "Simply Lemonade with Raspberry Juice",
    rating: 3.0,
    brand: "Yoplait",
    price: 15.85,
    oldPrice: 16.8,
    image: "/info/veg.png",
    button: "Add",
  },
];

const DealsDay = () => {
  return (
    <div className="test_border h-full min-h-[400px]">
      <div className="max-w-[80%] mx-auto my-10 flex flex-col md:flex-row gap-4 test_border relative ">
        {dealsDayData.map((product, index) => (
          <div
            key={index}
            className="bg-white relative rounded-lg flex flex-col items-center justify-center test_border "
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full object-cover min-h-[80%] rounded-xl"
            />
            <div className="flex flex-col justify-between gap-3  test_border shadow-md rounded-lg p-4 min-h-[50%] max-w-[90%] mx-auto absolute -bottom-40 left-0 right-0 bg-white">
              <h3 className="text-md font-bold ">{product.title}</h3>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                </div>
                <span className="text-slate-500 text-sm">
                  ({Number(product.rating).toFixed(1)})
                </span>
              </div>
              <p className="text-sm text-gray-600">
                By <span className="text-green-600">{product.brand}</span>
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-end gap-2">
                  <span className="text-green-600 font-bold text-md opacity-80">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-slate-400 line-through text-xs pb-1">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                </div>

                <button className="bg-red-500 text-white px-4 py-2 rounded-md">
                  {product.button}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DealsDay;
