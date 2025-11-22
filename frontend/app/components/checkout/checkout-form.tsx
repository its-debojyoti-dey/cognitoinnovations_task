"use client";

import type React from "react";

import { useState } from "react";
import { InputField } from "./input-field";
import { SelectField } from "./select-field";
import { Button } from "./button";
import { FormSection } from "./form-section";

export function CheckoutForm() {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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
      {/* Customer Section */}
      <FormSection title="Customer">
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-4">
              Checkout Options
            </h3>
          </div>

          {/* Returning Customer */}
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

      {/* Billing Details Section */}
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
      <div className="flex justify-end ">
        <Button type="submit">Place Order</Button>
      </div>
    </form>
  );
}
