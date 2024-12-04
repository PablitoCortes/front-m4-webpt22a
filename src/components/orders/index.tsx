import { Order } from "@/interfaces/Orders";

const Orders: React.FC<{ orders: Order[] }> = ({ orders: orders }) => {
  return (
    <div className="flex flex-col w-full">
      {orders.map((order) => (
        <div
          className="flex justify-between items-center p-2 text-xl "
          key={order.id}
        >
          <h2>{order.status}</h2>
          <p>${order.date}</p>
          {!order.products && <p>No products</p>}
          <ul>
            {order.products?.map((product) => (
              <li key={product.id}>
                <h2>{product.name}</h2>
                <p>{product.price}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Orders;
