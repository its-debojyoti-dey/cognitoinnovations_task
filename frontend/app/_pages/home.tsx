import React from "react";
import HeroSection from "../components/home/heroSection";
import InfoCards from "../components/home/infoCards";
import PopularProduct from "../components/home/popularProduct";
import BestSells from "../components/home/BestSells";
import DealsDay from "../components/home/DealsDay";

const home = () => {
  return (
    <div>
      {/* <HeroSection/> */}
      <InfoCards />
      <PopularProduct />
      <BestSells />
      {/*<DealsDay/> */}
    </div>
  );
};

export default home;
