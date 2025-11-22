// Product type definition
export interface Product {
  id: string | number;
  title: string;
  category: string;
  image: string;
  imageAlt?: string;
  rating?: number;
  brand?: string;
  salePrice: number;
  originalPrice: number;
  isBadge?: boolean;
  badgeText?: string;
  badgeColor?: string;
  description?: string;
  reviewCount?: number;
}

// Cart item with additional cart-specific properties
export interface CartItem {
  id: string | number;
  product: Product;
  quantity: number;
  size?: string;
  price: number; // Price at time of adding to cart
}

// Order types
export interface OrderItem {
  productId: string | number;
  title: string;
  quantity: number;
  price: number;
  size?: string;
}

export interface BillingDetails {
  firstName: string;
  lastName: string;
  email?: string;
  address?: string;
  city: string;
  postCode?: string;
  country: string;
  region?: string;
}

export interface PlaceOrderRequest {
  billingDetails: BillingDetails;
  items: OrderItem[];
  total: number;
  paymentMethod?: string;
  customerEmail?: string;
  otp?: string;
}

export interface OrderResponse {
  id: string | number;
  orderNumber: string;
  status: string;
  total: number;
  items: OrderItem[];
  billingDetails: BillingDetails;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}
