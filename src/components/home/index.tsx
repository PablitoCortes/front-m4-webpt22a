import { Product } from "@/interfaces/Product";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/services/productService";

const Home: React.FC<{ products: Product[] }> = async ({ products }) => {
  return (
    <div>
      <h1>Hot Sale</h1>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
