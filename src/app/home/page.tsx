import Home from "@/components/home";
import { getProducts } from "@/services/productService";

const products = await getProducts();
const hotProducts = products.slice(0, 3);
const home = () => {
  return (
    <div>
      <Home products={hotProducts}></Home>
    </div>
  );
};

export default home;
