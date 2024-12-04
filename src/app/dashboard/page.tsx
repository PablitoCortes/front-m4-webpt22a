"use client";

import Orders from "@/components/orders";
import { userContext } from "@/context/userContext";
import { Order } from "@/interfaces/Orders";
import { useContext } from "react";

const DashboardPage = () => {
  const { user } = useContext(userContext);

  const orders: Order[] = user?.user.orders || [];

  const orderProduct = orders.map((order) => order.products || []);
  console.log(orderProduct);

  return (
    <div>
      <Orders orders={orders} />
    </div>
  );
};

export default DashboardPage;
