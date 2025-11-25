export interface Product {
  id: string;
  title: string;
  category: string;
  image: string;
  imageAlt: string;
  rating: number;
  brand: string;
  salePrice: number;
  originalPrice: number;
  isBadge?: boolean;
  badgeText?: string;
  badgeColor?: string;
  isPopular?: boolean;
  isBestSell?: boolean;
}

export interface ProductResponse {
  id: string;
  title: string;
  category: string;
  image: string;
  imageAlt: string;
  rating: number;
  brand: string;
  salePrice: number;
  originalPrice: number;
  isBadge?: boolean;
  badgeText?: string;
  badgeColor?: string;
}
