import {
  CartItem,
  OrderItem,
  PlaceOrderRequest,
  BillingDetails,
} from "../../types";

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
