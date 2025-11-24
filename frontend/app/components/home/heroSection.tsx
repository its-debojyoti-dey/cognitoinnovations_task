"use client";
import { cn } from "@/app/utils/utils";
import useResponsive from "@/app/hooks/useResponsive";

const HeroComponent = () => {
  const { isMobile } = useResponsive();
  return (
    <div
      className={cn(
        "lg:grid lg:grid-cols-2 flex flex-col items-center justify-center gap-4 bg-no-repeat min-h-[80vh] bg-cover bg-center "
      )}
      style={{ backgroundImage: "url('/hero/bg.png')" }}
    >
      <div className="flex flex-col items-start justify-center md:px-20 px-5 gap-5 w-full h-full ">
        <h1 className="text-xl font-bold">
          <span className="text-red-500 underline underline-offset-4">
            100%{" "}
          </span>
          Organic Vegetables
        </h1>
        <h2 className="lg:text-6xl text-4xl font-bold">
          The best way to
          <br /> stuff your wallet.
        </h2>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          reiciendis beatae consequuntur.
        </p>
        <div className="flex items-center sm:gap-2 sm:w-[90%] md:w-[70%] w-full relative">
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full p-2 rounded-full flex-1 bg-white placeholder:text-gray-500 p-5 sm:px-10 px-3 sm:text-sm text-xs"
          />
          <button className="bg-green-500 text-white rounded-full absolute right-0 p-5 sm:px-10 px-6 sm:text-sm text-xs">
            Subscribe
          </button>
        </div>
      </div>
      <div
        className={cn(
          "flex-col items-end justify-end relative overflow-hidden h-full ",
          isMobile ? "hidden" : "flex"
        )}
      >
        <div className="h-[50%] absolute bottom-0 -right-10">
          <img
            src="/hero/leaves.png"
            alt="Subscribe"
            className="w-full h-full "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
