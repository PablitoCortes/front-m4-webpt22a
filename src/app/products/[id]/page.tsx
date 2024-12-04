import ProductDetail from "@/components/productDetail";
import { getProduct } from "@/services/productService";
import { notFound } from "next/navigation";

interface pageProps {
  params: {
    id: string;
  };
}

const page = async ({ params }: pageProps) => {
  const { id } = await params;
  const product = await getProduct(id);
  if (!product) return notFound();
  return (
    <div>
      <ProductDetail product={product} />
    </div>
  );
};

export default page;
