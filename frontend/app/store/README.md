# Redux Toolkit Setup

This project uses Redux Toolkit for state management with Product and Cart slices.

## Store Structure

### Product Slice

Manages product data and selected product state.

**State:**

- `products`: Array of all products
- `loading`: Loading state
- `error`: Error message if any
- `selectedProduct`: Currently selected product

**Actions:**

- `setProducts(products[])`: Set all products
- `addProduct(product)`: Add a new product
- `updateProduct(product)`: Update an existing product
- `removeProduct(id)`: Remove a product by ID
- `setSelectedProduct(product | null)`: Set the selected product
- `setLoading(boolean)`: Set loading state
- `setError(string | null)`: Set error message

### Cart Slice

Manages shopping cart items and totals.

**State:**

- `items`: Array of cart items
- `total`: Total price of all items
- `itemCount`: Total quantity of all items

**Actions:**

- `addToCart({ product, quantity?, size? })`: Add product to cart
- `removeFromCart({ id, size? })`: Remove item from cart
- `updateQuantity({ id, quantity, size? })`: Update item quantity
- `clearCart()`: Clear all items from cart

## Usage Examples

### In a Component

```tsx
"use client";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { addToCart, removeFromCart, updateQuantity } from "@/app/store/slices/cartSlice";
import { setProducts, setSelectedProduct } from "@/app/store/slices/productSlice";

export function MyComponent() {
  const dispatch = useAppDispatch();

  // Access state
  const products = useAppSelector((state) => state.product.products);
  const cartItems = useAppSelector((state) => state.cart.items);
  const cartTotal = useAppSelector((state) => state.cart.total);
  const cartItemCount = useAppSelector((state) => state.cart.itemCount);

  // Dispatch actions
  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({ product, quantity: 1, size: "50kg" }));
  };

  const handleRemoveFromCart = (id: string | number) => {
    dispatch(removeFromCart({ id }));
  };

  const handleUpdateQuantity = (id: string | number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    // Your component JSX
  );
}
```

### RTK Query - Order API

RTK Query is set up for API calls, specifically for order management.

**Endpoints:**

- `placeOrder(orderData)`: Create a new order
- `getOrder(orderId)`: Get order by ID
- `getOrders()`: Get all orders

**Usage Example - Place Order:**

```tsx
"use client";

import { usePlaceOrderMutation } from "@/app/store/api/orderApi";
import { useAppSelector } from "@/app/store/hooks";
import { clearCart } from "@/app/store/slices/cartSlice";
import { createOrderRequest } from "@/app/store/utils/orderUtils";
import { BillingDetails } from "@/app/types";

export function CheckoutForm() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const cartTotal = useAppSelector((state) => state.cart.total);

  const [placeOrder, { isLoading, isError, isSuccess, error }] = usePlaceOrderMutation();

  const handleSubmit = async (billingDetails: BillingDetails) => {
    try {
      const orderRequest = createOrderRequest(
        cartItems,
        billingDetails,
        cartTotal,
        "credit_card", // payment method
        billingDetails.email
      );

      const result = await placeOrder(orderRequest).unwrap();

      if (result.success) {
        // Clear cart after successful order
        dispatch(clearCart());
        // Redirect or show success message
        console.log("Order placed successfully:", result.data);
      }
    } catch (err) {
      console.error("Failed to place order:", err);
    }
  };

  return (
    // Your form JSX
  );
}
```

**Complete Checkout Example:**

```tsx
"use client";

import { useState } from "react";
import { usePlaceOrderMutation } from "@/app/store/api/orderApi";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { clearCart } from "@/app/store/slices/cartSlice";
import { createOrderRequest } from "@/app/store/utils/orderUtils";
import type { BillingDetails } from "@/app/types";

export function CheckoutPage() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const cartTotal = useAppSelector((state) => state.cart.total);

  const [placeOrder, { isLoading, isSuccess, error }] = usePlaceOrderMutation();
  const [formData, setFormData] = useState<BillingDetails>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    postCode: "",
    country: "",
    region: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const orderRequest = createOrderRequest(
        cartItems,
        formData,
        cartTotal,
        "credit_card",
        formData.email
      );

      const result = await placeOrder(orderRequest).unwrap();

      if (result.success) {
        dispatch(clearCart());
        // Handle success (redirect, show message, etc.)
      }
    } catch (err) {
      // Handle error
      console.error("Order failed:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Placing Order..." : "Place Order"}
      </button>
      {isSuccess && <p>Order placed successfully!</p>}
      {error && <p>Error: {JSON.stringify(error)}</p>}
    </form>
  );
}
```

### TypeScript Types

Import types from:

```tsx
import {
  Product,
  CartItem,
  OrderItem,
  BillingDetails,
  PlaceOrderRequest,
  OrderResponse,
} from "@/app/types";
import { RootState, AppDispatch } from "@/app/store";
```

### Utility Functions

Helper functions for order management:

```tsx
import {
  transformCartItemsToOrderItems,
  createOrderRequest,
} from "@/app/store/utils/orderUtils";
```
