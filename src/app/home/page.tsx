import { Product } from "@/interfaces/Product";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/services/productService";

const Home: React.FC<{ products: Product[] }> = async () => {
  const products = await getProducts();
  const hotProducts = products.slice(0, 3);
  return (
    <div>
      <h1>Hot Sale</h1>
      <div>
        {hotProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
