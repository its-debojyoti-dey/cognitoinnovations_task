import {
  CartItem,
  OrderItem,
  PlaceOrderRequest,
  BillingDetails,
} from "../../types";

/**
 * Transform cart items to order items format
 */
export const transformCartItemsToOrderItems = (
  cartItems: CartItem[]
): OrderItem[] => {
  return cartItems.map((item) => ({
    productId: item.id,
    title: item.product.title,
    quantity: item.quantity,
    price: item.price,
    size: item.size,
  }));
};

/**
 * Create order request from cart and billing details
 */
export const createOrderRequest = (
  cartItems: CartItem[],
  billingDetails: BillingDetails,
  total: number,
  paymentMethod?: string,
  customerEmail?: string,
  otp?: string
): PlaceOrderRequest => {
  return {
    billingDetails,
    items: transformCartItemsToOrderItems(cartItems),
    total,
    paymentMethod,
    customerEmail,
    otp,
  };
};
