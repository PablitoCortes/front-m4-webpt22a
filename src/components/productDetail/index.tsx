"use client";

import React, { useContext } from "react";
import { Product } from "@/interfaces/Product";
import "./styles.css";
import { userContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import { CartContext } from "@/context/cartContext";
import Link from "next/link";

interface ProductDetailProps {
  product: Product;
}
const ProductDetail = ({ product }: ProductDetailProps) => {
  const { isLoggedIn } = useContext(userContext);
  const { cart, setCart } = useContext(CartContext);
  const router = useRouter();

  const isInCart = cart.some((p) => p.id === product.id);

  const handleBuy = () => {
    if (isLoggedIn()) {
      setCart([...cart, product]);
    } else {
      alert("Please login to add to cart");
      router.push("/login");
    }
  };

  return (
    <div className="detailContainer">
      <div className="productDetail">
        <img src={product.image} alt={product.name} />
        <div className="productInfo">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      </div>

      <div className="purchase-summary">
        <h3>Purchase Summary</h3>
        <div className="line-item">
          <span>Products total:</span>
          <span>${product.price}</span>
        </div>
        <div className="line-item">
          <span>Shipping: $0.00</span>
          <span>Free</span>
        </div>
        {/* <div className="quantity">
          <span>Quantity:</span>
          <input
            type="number"
            value={quantity}
            min={quantity}
            max={product.stock}
            onChange={handleQuantityChange}
          />
        </div> */}
        <div className="stock">Stock: {product.stock}</div>
        {!isInCart ? (
          <button onClick={handleBuy}>Add to Cart</button>
        ) : (
          <Link href="/cart">
            <button>Go to Cart</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
