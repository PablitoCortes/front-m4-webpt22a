"use client";

import React, { FormEvent, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { userContext } from "@/context/userContext";
import { CartContext } from "@/context/cartContext";

const NavBar = () => {
  const { user, setUser } = useContext(userContext);
  const { clearCart } = useContext(CartContext);

  const router = useRouter();

  const handleLogout = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setUser(null);
    clearCart();
    router.push("/login");
  };

  if (user) {
    return (
      <nav className="flex justify-between w-full items-center p-2 bg-[#D35400] text-[#4A2C2A] text-lg">
        <span className="p-2 text-2xl">{`Welcome ${user.user.name}`}</span>
        <div className="flex w-auto justify-center items-center">
          <input
            className="w-[600px] p-2 rounded-lg border border-gray-300 text-text"
            type="text"
            placeholder="Buscar productos..."
          />
        </div>
        <div className="flex gap-3 items-center border-b-2 border-[#4A2C2A]">
          <Link href={"/products"}>
            <button className="text-text text-lg font-primaryFont">
              Products
            </button>
          </Link>
          <Link href={"/cart"}>
            <button className="text-text text-lg font-primaryFont">Cart</button>
          </Link>
          <button className="text-text text-lg font-primaryFont">
            Dashboard
          </button>
          <button className="text-text text-lg" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </nav>
    );
  }
  return (
    <nav className="flex justify-between w-full items-center p-2 bg-[#D35400] text-[#4A2C2A] text-lg">
      <Link href="/login">
        <button className="text-text text-lg font-primaryFont">Sign in</button>
      </Link>
      <Link href="/register">
        <button className="text-text text-lg font-primaryFont">Sign up</button>
      </Link>
    </nav>
  );
};

export default NavBar;
