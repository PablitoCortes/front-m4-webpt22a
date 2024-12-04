import { Product } from "@/interfaces/Product";

const ShopCart: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div className="flex flex-col w-full">
      {products.map((product) => (
        <div
          className="flex justify-between items-center p-2 text-xl "
          key={product.id}
        >
          <h2>{product.name}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ShopCart;
