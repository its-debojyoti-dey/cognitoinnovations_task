"use client";

import { useState } from "react";
import { Card } from "../components/checkout/card";
import { OrderSummary } from "../components/checkout/order-summary";
import { ProductItem } from "../components/checkout/product-item";
import { SectionHeader } from "../components/checkout/section-header";
import { RadioButton } from "../components/checkout/radio-button";
import { PaymentMethods } from "../components/checkout/payment-methods";
import { PaymentGateways } from "../components/checkout/payment-gateways";
import { CheckoutForm } from "../components/checkout/checkout-form";

export default function CheckoutPageComponent() {
  const [deliveryMethod, setDeliveryMethod] = useState("free");
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const summaryItems = [
    { label: "Sub-Total", value: "$80.00" },
    { label: "Delivery Charges", value: "$80.00" },
  ];

  const products = [
    {
      image: "/checkout/1.png",
      title: "Dates Value Pack Pouch",
      rating: 4.5,
      price: "$120.25",
      originalPrice: "$123.25",
    },
    {
      image: "/checkout/2.png",
      title: "Smoked Honey Spiced Nuts",
      rating: 4.5,
      price: "$120.25",
      originalPrice: "$123.25",
    },
  ];

  const deliveryMethods = [
    { id: "free", label: "Free Shipping", rate: 0 },
    { id: "flat", label: "Flat Rate", rate: 5 },
  ];

  const paymentMethods = [
    { id: "cash", label: "Cash On Delivery" },
    { id: "upi", label: "UPI" },
    { id: "bank", label: "Bank Transfer" },
  ];

  const paymentGateways = [
    { id: "visa", name: "Visa", logo: "./payment_method/visa.png" },
    {
      id: "mastercard",
      name: "Mastercard",
      logo: "./payment_method/002-round.png",
    },
    { id: "paypal", name: "PayPal", logo: "./payment_method/003-paypal.png" },
    { id: "skrill", name: "Skrill", logo: "./payment_method/004-skrill.png" },
    // { id: "union", name: "Union", logo: "./payment_method/004-union.png" },
    // { id: "electron", name: "Electron", logo: "./payment_method/005-electron.png" },
  ];

  return (
    <main className="min-h-screen sm:max-w-7xl w-full mx-auto py-8 sm:px-4 px-2">
      <div className="sm:flex grid sm:grid-cols-2 gap-4 ">
        <div className="sm:max-w-[30%] w-full space-y-4">
          {/* Order Summary Card */}
          <Card>
            <SectionHeader title="Summary" />
            <OrderSummary
              items={summaryItems}
              totalValue="$80.00"
              products={products}
            />
          </Card>

          {/* Delivery Method Card */}
          <Card>
            <SectionHeader
              title="Delivery Method"
              description="Please select the preferred shipping method to use on this order."
            />
            <div className="grid md:grid-cols-2 gap-4">
              {deliveryMethods.map((method) => (
                <RadioButton
                  key={method.id}
                  id={method.id}
                  name="delivery"
                  label={method.label}
                  checked={deliveryMethod === method.id}
                  rate={method.rate}
                  onChange={(checked) =>
                    checked && setDeliveryMethod(method.id)
                  }
                />
              ))}
            </div>
          </Card>

          {/* Payment Method Card */}
          <Card>
            <SectionHeader
              title="Payment Method"
              description="Please select the preferred payment method to use on this order."
            />
            <PaymentMethods
              methods={paymentMethods}
              selected={paymentMethod}
              onSelect={setPaymentMethod}
            />
          </Card>

          {/* Payment Gateways Card */}
          <Card>
            <SectionHeader title="Payment Method" />
            <PaymentGateways gateways={paymentGateways} />
          </Card>
        </div>

        <div className="sm:max-w-[70%] w-full space-y-4">
          <CheckoutForm />
        </div>
      </div>
    </main>
  );
}
