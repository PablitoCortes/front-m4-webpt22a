"use client";

import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import { getProducts } from "@/services/productService";
import { Product } from "@/interfaces/Product";

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4 w-[90%]">
      {products.map((product, i) => (
        <ProductCard key={i} {...product} />
      ))}
    </div>
  );
};

export default ProductsPage;
