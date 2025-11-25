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
