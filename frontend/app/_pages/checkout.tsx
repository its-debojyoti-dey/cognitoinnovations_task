"use client";

import { useState, useMemo } from "react";
import { Card } from "../components/checkout/card";
import { OrderSummary } from "../components/checkout/order-summary";
import { ProductItem } from "../components/checkout/product-item";
import { SectionHeader } from "../components/checkout/section-header";
import { RadioButton } from "../components/checkout/radio-button";
import { PaymentMethods } from "../components/checkout/payment-methods";
import { PaymentGateways } from "../components/checkout/payment-gateways";
import { CheckoutForm } from "../components/checkout/checkout-form";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { removeFromCart, updateQuantity } from "../store/slices/cartSlice";

export default function CheckoutPageComponent() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const cartTotal = useAppSelector((state) => state.cart.total);
  const [deliveryMethod, setDeliveryMethod] = useState("free");
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const deliveryCharges = useMemo(() => {
    return deliveryMethod === "free" ? 0 : 5;
  }, [deliveryMethod]);

  const finalTotal = useMemo(() => {
    return cartTotal + deliveryCharges;
  }, [cartTotal, deliveryCharges]);

  const formattedProducts = useMemo(() => {
    return cartItems.map((item) => ({
      id: item.id,
      image: item.product.image || "/placeholder.svg",
      title: item.product.title,
      rating: item.product.rating || 4.5,
      price: `$${(item.price * item.quantity).toFixed(2)}`,
      originalPrice: `$${(item.product.originalPrice * item.quantity).toFixed(
        2
      )}`,
      quantity: item.quantity,
      size: item.size,
    }));
  }, [cartItems]);

  const summaryItems = useMemo(() => {
    return [
      { label: "Sub-Total", value: `$${cartTotal.toFixed(2)}` },
      {
        label: "Delivery Charges",
        value: deliveryCharges > 0 ? `$${deliveryCharges.toFixed(2)}` : "Free",
      },
    ];
  }, [cartTotal, deliveryCharges]);

  const handleRemoveItem = (id: string | number, size?: string) => {
    dispatch(removeFromCart({ id, size }));
  };

  const handleUpdateQuantity = (
    id: string | number,
    quantity: number,
    size?: string
  ) => {
    dispatch(updateQuantity({ id, quantity, size }));
  };

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
          <Card>
            <SectionHeader title="Summary" />
            <OrderSummary
              items={summaryItems}
              totalValue={`$${finalTotal.toFixed(2)}`}
              products={formattedProducts}
              onRemoveItem={handleRemoveItem}
              onUpdateQuantity={handleUpdateQuantity}
            />
          </Card>

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

          <Card>
            <SectionHeader title="Payment Method" />
            <PaymentGateways gateways={paymentGateways} />
          </Card>
        </div>

        <div className="sm:max-w-[70%] w-full space-y-4">
          {cartItems.length === 0 ? (
            <Card>
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
                <a
                  href="/"
                  className="text-red-500 hover:text-red-600 font-semibold"
                >
                  Continue Shopping
                </a>
              </div>
            </Card>
          ) : (
            <CheckoutForm />
          )}
        </div>
      </div>
    </main>
  );
}
