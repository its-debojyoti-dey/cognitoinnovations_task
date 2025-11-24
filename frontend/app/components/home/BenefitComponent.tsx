import React from "react";

const benefitData = [
  {
    title: "Best prices & offers",
    description: "Orders $50 or more",
    icon: "/benefits/1.png",
  },
  {
    title: "Free delivery",
    description: "24/7 amazing services",
    icon: "/benefits/2.png",
  },
  {
    title: "Great daily deal",
    description: "When you sign up",
    icon: "/benefits/3.png",
  },
  {
    title: "Wide assortment",
    description: "Mega Discounts",
    icon: "/benefits/4.png",
  },
  {
    title: "Easy returns",
    description: "Within 30 days",
    icon: "/benefits/5.png",
  },
];

const BenefitComponent = () => {
  return (
    <div className="max-w-[80%] mx-auto my-10 grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 gap-0.5 ">
      {benefitData.map((benefit, index) => (
        <div
          key={index}
          className="flex  items-center justify-center  bg-gray-100 rounded-md p-2 gap-3"
        >
          <img
            src={benefit.icon}
            alt={benefit.title}
            className="w-[50px] h-[50px] m-2 "
          />
          <div className="flex flex-col items-start justify-center gap-1">
            <h5 className="text-md font-bold">{benefit.title}</h5>
            <p className="text-sm text-gray-400">{benefit.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BenefitComponent;
