import { useLoaderData } from "react-router-dom";
import { ProductInfo } from "../components/ProductInfo";

const Product = () => {
  const product = useLoaderData();

  return (
    <div className="min-h-screen grid place-items-center max-w-5xl mx-auto ">
      <ProductInfo {...product} />
    </div>
  );
};

export default Product;
