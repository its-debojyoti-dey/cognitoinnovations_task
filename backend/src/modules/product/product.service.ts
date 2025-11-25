import { Product, ProductResponse } from "./product.types";

// Badge colors matching frontend
const badgeColors = {
  Hot: "bg-[#F74B81]",
  Sale: "bg-[#67BCEE]",
  New: "bg-[#3BB77E]",
  Other: "bg-[#F59758]",
};

// Mock product data with isPopular and isBestSell flags
const mockProducts: Product[] = [
  {
    id: "1",
    title: "Fresh organic villa farm lemon 500gm pack",
    category: "Snack",
    image: "/sales/1.png",
    imageAlt: "Fresh organic villa farm lemon 500gm pack",
    rating: 4.0,
    brand: "NestFood",
    salePrice: 28.85,
    originalPrice: 32.8,
    isBadge: true,
    badgeText: "Hot",
    badgeColor: badgeColors.Hot,
    isPopular: true,
    isBestSell: true,
  },
  {
    id: "2",
    title: "Best snakes with hazel nut pack 200gm",
    category: "Hodo Foods",
    image: "/sales/2.png",
    imageAlt: "Best snakes with hazel nut pack 200gm",
    rating: 3.5,
    brand: "Stouffer",
    salePrice: 52.85,
    originalPrice: 55.8,
    isBadge: true,
    badgeText: "Sale",
    badgeColor: badgeColors.Sale,
    isPopular: true,
    isBestSell: true,
  },
  {
    id: "3",
    title: "Organic fresh venila farm watermelon 5kg",
    category: "Snack",
    image: "/sales/3.png",
    imageAlt: "Organic fresh venila farm watermelon 5kg",
    rating: 4.0,
    brand: "StarKist",
    salePrice: 48.85,
    originalPrice: 52.8,
    isBadge: true,
    badgeText: "New",
    badgeColor: badgeColors.New,
    isPopular: true,
    isBestSell: false,
  },
  {
    id: "4",
    title: "Fresh organic apple 1kg simla marmimg",
    category: "Vegetables",
    image: "/sales/4.png",
    imageAlt: "Fresh organic apple 1kg simla marmimg",
    rating: 4.0,
    brand: "NestFood",
    salePrice: 17.85,
    originalPrice: 19.8,
    isBadge: false,
    badgeText: "-14%",
    badgeColor: badgeColors.Other,
    isPopular: true,
    isBestSell: true,
  },
  {
    id: "5",
    title: "Blue Diamond Almonds Lightly Salted Vegetables",
    category: "Pet Foods",
    image: "/sales/1.png",
    imageAlt: "Blue Diamond Almonds Lightly Salted Vegetables",
    rating: 4.0,
    brand: "NestFood",
    salePrice: 23.85,
    originalPrice: 25.8,
    isBadge: true,
    badgeText: "-14%",
    badgeColor: badgeColors.Other,
    isPopular: true,
    isBestSell: false,
  },
  {
    id: "6",
    title: "Chobani Complete Vanilla Greek Yogurt",
    category: "Hodo Foods",
    image: "/sales/2.png",
    imageAlt: "Chobani Complete Vanilla Greek Yogurt",
    rating: 4.0,
    brand: "NestFood",
    salePrice: 54.85,
    originalPrice: 55.8,
    isBadge: false,
    badgeText: "Hot",
    badgeColor: badgeColors.Hot,
    isPopular: true,
    isBestSell: true,
  },
  {
    id: "7",
    title: "Canada Dry Ginger Ale – 2 L Bottle – 200ml - 400g",
    category: "Meats",
    image: "/sales/3.png",
    imageAlt: "Canada Dry Ginger Ale – 2 L Bottle – 200ml - 400g",
    rating: 4.0,
    brand: "NestFood",
    salePrice: 32.85,
    originalPrice: 33.8,
    isBadge: false,
    badgeText: "Hot",
    badgeColor: badgeColors.Hot,
    isPopular: true,
    isBestSell: true,
  },
  {
    id: "8",
    title: "Encore Seafoods Stuffed Alaskan Salmon",
    category: "Snack",
    image: "/sales/4.png",
    imageAlt: "Encore Seafoods Stuffed Alaskan Salmon",
    rating: 4.0,
    brand: "NestFood",
    salePrice: 35.85,
    originalPrice: 37.8,
    isBadge: true,
    badgeText: "Sale",
    badgeColor: badgeColors.Sale,
    isPopular: true,
    isBestSell: true,
  },
  {
    id: "9",
    title: "Gorton's Beer Battered Fish Fillets with soft paper",
    category: "Coffes",
    image: "/popular_products/9.png",
    imageAlt: "Gorton's Beer Battered Fish Fillets with soft paper",
    rating: 4.0,
    brand: "Old El Paso",
    salePrice: 23.85,
    originalPrice: 25.8,
    isBadge: true,
    badgeText: "Hot",
    badgeColor: badgeColors.Hot,
    isPopular: true,
    isBestSell: false,
  },
  {
    id: "10",
    title: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
    category: "Cream",
    image: "/sales/2.png",
    imageAlt: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
    rating: 4.0,
    brand: "Tyson",
    salePrice: 22.85,
    originalPrice: 24.8,
    isBadge: false,
    badgeText: "Hot",
    badgeColor: badgeColors.Hot,
    isPopular: true,
    isBestSell: true,
  },
];

export class ProductService {
  getPopularProducts(): ProductResponse[] {
    const popularProducts = mockProducts.filter(
      (product) => product.isPopular === true
    );
    return this.mapToResponse(popularProducts, "popular");
  }

  getBestSells(): ProductResponse[] {
    const bestSells = mockProducts.filter(
      (product) => product.isBestSell === true
    );
    return this.mapToResponse(bestSells, "sales");
  }

  private mapToResponse(
    products: Product[],
    imageType: "popular" | "sales"
  ): ProductResponse[] {
    return products.map((product) => {
      // Convert image path based on endpoint type
      let imagePath = product.image;
      if (
        imageType === "sales" &&
        product.image.includes("/popular_products/")
      ) {
        // Convert popular_products path to sales path for best sells
        const imageName = product.image.split("/").pop();
        imagePath = `/sales/${imageName}`;
      } else if (imageType === "popular" && product.image.includes("/sales/")) {
        // Convert sales path to popular_products path for popular products
        const imageName = product.image.split("/").pop();
        imagePath = `/popular_products/${imageName}`;
      }

      return {
        id: product.id,
        title: product.title,
        category: product.category,
        image: imagePath,
        imageAlt: product.imageAlt,
        rating: product.rating,
        brand: product.brand,
        salePrice: product.salePrice,
        originalPrice: product.originalPrice,
        isBadge: product.isBadge,
        badgeText: product.badgeText,
        badgeColor: product.badgeColor,
      };
    });
  }
}

export const productService = new ProductService();
