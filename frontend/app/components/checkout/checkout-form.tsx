"use client";

import type React from "react";

import { useState } from "react";
import { InputField } from "./input-field";
import { SelectField } from "./select-field";
import { Button } from "./button";
import { FormSection } from "./form-section";
import { usePlaceOrderMutation } from "@/app/store/api/orderApi";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { clearCart } from "@/app/store/slices/cartSlice";
import { createOrderRequest } from "@/app/store/utils/orderUtils";
import type { BillingDetails } from "@/app/types";
import toast from "react-hot-toast";

export function CheckoutForm() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const cartTotal = useAppSelector((state) => state.cart.total);

  const [placeOrder, { isLoading, isSuccess, isError, error }] =
    usePlaceOrderMutation();

  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postCode: "",
    country: "",
    region: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleVerify = () => {
    console.log("Verify clicked:", formData.email, formData.otp);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.city ||
      !formData.country
    ) {
      // alert("Please fill in all required fields");
      toast.error("Please fill in all required fields");
      return;
    }

    if (cartItems.length === 0) {
      // alert("Your cart is empty");
      toast.error("Your cart is empty");
      return;
    }

    try {
      // Prepare billing details
      const billingDetails: BillingDetails = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email || undefined,
        address: formData.address || undefined,
        city: formData.city,
        postCode: formData.postCode || undefined,
        country: formData.country,
        region: formData.region || undefined,
      };

      // Create order request
      const orderRequest = createOrderRequest(
        cartItems,
        billingDetails,
        cartTotal,
        "cash",
        formData.email || undefined,
        formData.otp || undefined
      );

      // Place order
      const result = await placeOrder(orderRequest).unwrap();

      if (result.success) {
        dispatch(clearCart());
        toast.success(
          "Order placed successfully! Check your email for confirmation."
        );
        setFormData({
          email: "",
          otp: "",
          firstName: "",
          lastName: "",
          address: "",
          city: "",
          postCode: "",
          country: "",
          region: "",
        });
      }
    } catch (err) {
      console.error("Failed to place order:", err);
      toast.error("Failed to place order. Please try again.");
    }
  };

  const cityOptions = [
    { value: "new-york", label: "New York" },
    { value: "los-angeles", label: "Los Angeles" },
    { value: "chicago", label: "Chicago" },
  ];

  const countryOptions = [
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "uk", label: "United Kingdom" },
  ];

  const regionOptions = [
    { value: "ny", label: "New York" },
    { value: "ca", label: "California" },
    { value: "tx", label: "Texas" },
  ];

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-8 bg-background">
      <FormSection title="Customer">
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-4">
              Checkout Options
            </h3>
          </div>

          <div className="border-t border-gray-200 border-t-1 pt-6">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Returning Customer
            </h3>

            <div className="space-y-6">
              <InputField
                label="Email Address"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
              />

              <InputField
                label="OTP"
                name="otp"
                type="text"
                placeholder="Enter your OTP"
                value={formData.otp}
                onChange={handleChange}
              />

              <div className="flex justify-center pt-4">
                <Button onClick={handleVerify}>Verify</Button>
              </div>
            </div>
          </div>
        </div>
      </FormSection>

      <FormSection title="Billing Details">
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-4">
              Checkout Options
            </h3>
          </div>

          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="First Name*"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <InputField
              label="Last Name*"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Address */}
          <InputField
            label="Address"
            name="address"
            placeholder="Address Line 1"
            value={formData.address}
            onChange={handleChange}
          />

          {/* City & Post Code */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SelectField
              label="City *"
              name="city"
              value={formData.city}
              onChange={handleChange}
              options={cityOptions}
              required
            />
            <InputField
              label="Post Code"
              name="postCode"
              placeholder="Post Code"
              value={formData.postCode}
              onChange={handleChange}
            />
          </div>

          {/* Country & Region */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SelectField
              label="Country *"
              name="country"
              value={formData.country}
              onChange={handleChange}
              options={countryOptions}
              required
            />
            <SelectField
              label="Region/State"
              name="region"
              value={formData.region}
              onChange={handleChange}
              options={regionOptions}
            />
          </div>
        </div>
      </FormSection>

      {/* Submit Button */}
      <div className="flex flex-col items-end gap-4">
        {isSuccess && (
          <div className="w-full p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-medium">
              Order placed successfully! Check your email for confirmation.
            </p>
          </div>
        )}
        {isError && (
          <div className="w-full p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800 font-medium">
              Failed to place order. Please try again.
            </p>
            {error && "data" in error && (
              <p className="text-red-600 text-sm mt-1">
                {JSON.stringify(error.data)}
              </p>
            )}
          </div>
        )}
        <Button
          type="submit"
          disabled={isLoading || cartItems.length === 0}
          className="cursor-pointer"
        >
          {isLoading ? "Placing Order..." : "Place Order"}
        </Button>
      </div>
    </form>
  );
}
