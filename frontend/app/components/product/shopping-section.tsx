"use client";

import ProductCard from "./product-card";

interface Product {
  id: number;
  title: string;
  category: string;
  image: string;
  originalPrice: number;
  salePrice: number;
}

interface ShoppingSectionProps {
  products: Product[];
}

export function ShoppingSection({ products }: ShoppingSectionProps) {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Popular Products
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et viverra maecenas accumsan
            lacus vel facilisis.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
