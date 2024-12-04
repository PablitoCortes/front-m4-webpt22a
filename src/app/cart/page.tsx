"use client";

import { useContext, useEffect, useState } from "react";
import "./styles.css";
import { CartContext } from "@/context/cartContext";
import Link from "next/link";
import ShopCart from "@/components/ShopCart";
import { userContext } from "@/context/userContext";
import { createOrder } from "@/services/orderService";
import { useRouter } from "next/navigation";

const Cart = () => {
  const { user } = useContext(userContext);
  const { cart, clearCart } = useContext(CartContext);

  const router = useRouter();
  const cartToback = cart.map((item) => {
    return item.id;
  });

  const handleCheckout = async () => {
    try {
      if (user && user.user.id) {
        const order = await createOrder(user.user.id, cartToback, user.token);
        alert("Order created successfully");
        user.user.orders.push(order);
        localStorage.setItem("user", JSON.stringify(user));
        clearCart();
      } else {
        alert("You need to login to proceed to checkout");
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
      alert("Error creating order");
    }
  };

  if (cart.length === 0) {
    return (
      <div className="purchase-detail">
        <div>There´s no product in your cart</div>
        <Link href="/products">
          <button>Go back</button>
        </Link>
      </div>
    );
  }
  return (
    <div className="detailContainer">
      <div className="productDetail">
        <ShopCart products={cart} />
      </div>

      <div className="purchase-summary gap-y-4">
        <h3>Purchase Summary</h3>
        <div className="flex justify-between text-text ">
          <p>Products total:</p>
          <p>
            $
            {cart
              .reduce((total, product) => total + product.price, 0)
              .toFixed(2)}
          </p>
        </div>
        <div className="flex justify-between text-text ">
          <p>shipping:</p>
          <p>{"$"}0.00</p>
        </div>
        <button onClick={handleCheckout}>proceed to checkout</button>
      </div>
    </div>
  );
};

export default Cart;
