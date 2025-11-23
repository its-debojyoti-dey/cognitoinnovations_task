import React from "react";
import HeroSection from "../components/home/heroSection";
import InfoCards from "../components/home/infoCards";
import PopularProduct from "../components/home/popularProduct";
import BestSells from "../components/home/BestSells";
import DealsDay from "../components/home/DealsDay";
import SubscribeComponent from "../components/home/SubscribeComponent";
import BenefitComponent from "../components/home/BenefitComponent";

const home = () => {
  return (
    <div>
      <SubscribeComponent className="!min-h-screen !w-full !max-w-full rounded-none test_border" />
      <InfoCards />
      <PopularProduct />
      <BestSells />
      <DealsDay />
      <SubscribeComponent />
      <BenefitComponent />
    </div>
  );
};

export default home;
