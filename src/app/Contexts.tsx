import CartProvider from "@/context/cartContext";
import UserProvider from "@/context/userContext";
import React from "react";

const Contexts = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserProvider>
      <CartProvider>{children}</CartProvider>
    </UserProvider>
  );
};

export default Contexts;
