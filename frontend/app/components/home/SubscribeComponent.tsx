"use client";

import React, { useState } from "react";
import { cn } from "@/app/utils/utils";
import { useSubscribeNewsletterMutation } from "@/app/store/api/newsletterApi";

const SubscribeComponent = ({ className }: { className?: string }) => {
  const [email, setEmail] = useState("");
  const [subscribeNewsletter, { isLoading, isSuccess, isError }] =
    useSubscribeNewsletterMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      return;
    }

    try {
      await subscribeNewsletter({ email: email.trim() }).unwrap();
      setEmail("");
    } catch (error) {
      console.error("Failed to subscribe:", error);
    }
  };

  return (
    <div
      className={cn(
        "max-w-[80%] min-h-[300px] mx-auto my-10 sm:grid grid-cols-2 flex flex-col md:flex-row  rounded-2xl gap-4  bg-cover bg-center bg-no-repeat",
        className
      )}
      style={{ backgroundImage: "url('/subscribe_bg.png')" }}
    >
      <div className="flex flex-col items-start justify-center md:p-10 p-5 gap-4 w-full h-full ">
        <h2 className="text-2xl font-bold">
          Stay home & get your
          <br /> daily needs from our shop
        </h2>
        <p className="text-sm text-gray-600">
          Start You'r Daily Shopping with{" "}
          <span className="text-green-500">Nest Mart</span>
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex items-center sm:gap-2 sm:w-[90%] md:w-[70%] w-full relative"
        >
          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="w-full p-2 rounded-full flex-1 bg-white placeholder:text-gray-500 p-3 sm:px-5 px-2 sm:text-sm text-xs disabled:opacity-50"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-red-500 text-white rounded-full absolute right-0 p-3 sm:px-5 px-2 sm:text-sm text-xs disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-600 transition-colors"
          >
            {isLoading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
        {isSuccess && (
          <p className="text-sm text-green-600 font-medium">
            Successfully subscribed! Check your email for confirmation.
          </p>
        )}
        {isError && (
          <p className="text-sm text-red-600 font-medium">
            Failed to subscribe. Please try again.
          </p>
        )}
      </div>
      <div className="flex flex-col items-end justify-end ">
        <div className="relative h-[70%]">
          <img
            src="/subscribe.png"
            alt="Subscribe"
            className="w-full h-full object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default SubscribeComponent;
