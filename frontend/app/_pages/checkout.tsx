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
      image: "/dates-value-pack-pouch.jpg",
      title: "Dates Value Pack Pouch",
      rating: 4.5,
      price: "$120.25",
      originalPrice: "$123.25",
    },
    {
      image: "/smoked-honey-spiced-nuts.jpg",
      title: "Smoked Honey Spiced Nuts",
      rating: 4.5,
      price: "$120.25",
      originalPrice: "$123.25",
    },
  ];

  const deliveryMethods = [
    { id: "free", label: "Free Shipping - Rate - $0.00" },
    { id: "flat", label: "Flat Rate - Rate - $5.00" },
  ];

  const paymentMethods = [
    { id: "cash", label: "Cash On Delivery" },
    { id: "upi", label: "UPI" },
    { id: "bank", label: "Bank Transfer" },
  ];

  const paymentGateways = [
    { id: "visa", name: "Visa", logo: "/visa-logo.jpg" },
    { id: "mastercard", name: "Mastercard", logo: "/mastercard-logo.jpg" },
    { id: "paypal", name: "PayPal", logo: "/paypal-logo.png" },
    { id: "skrill", name: "Skrill", logo: "/skrill-logo.jpg" },
    { id: "union", name: "Union", logo: "/union-pay-logo.jpg" },
    { id: "electron", name: "Electron", logo: "/visa-electron-logo.jpg" },
  ];

  return (
    <main className="min-h-screen max-w-7xl mx-auto py-8 px-4">
      <div className="flex gap-4">
        <div className="max-w-[30%] mx-auto space-y-4">
          {/* Order Summary Card */}
          <Card>
            <SectionHeader title="Summary" />
            <OrderSummary items={summaryItems} totalValue="$80.00" />
          </Card>

          {/* Products Card */}
          <Card>
            <div className="space-y-2">
              {products.map((product) => (
                <ProductItem
                  key={product.title}
                  image={product.image}
                  title={product.title}
                  rating={product.rating}
                  price={product.price}
                  originalPrice={product.originalPrice}
                />
              ))}
            </div>
          </Card>

          {/* Delivery Method Card */}
          <Card>
            <SectionHeader
              title="Delivery Method"
              description="Please select the preferred shipping method to use on this order."
            />
            <div className="space-y-4">
              {deliveryMethods.map((method) => (
                <RadioButton
                  key={method.id}
                  id={method.id}
                  name="delivery"
                  label={method.label}
                  checked={deliveryMethod === method.id}
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

        <div className="max-w-[70%] w-full space-y-4">
          <CheckoutForm />
        </div>
      </div>
    </main>
  );
}
