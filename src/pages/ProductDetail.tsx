import { useEffect } from "react";
import Header from "../components/Header";
import Product from "../components/detail/Product";
import { useLocation } from "react-router-dom";


const ProductDetail = () => {
  const location = useLocation();
  
  return (
    <div className="max-h-screen overflow-y-auto">
      <Header />
      <div className="w-full absolute top-40">
        <Product />
      </div>
    </div>
  );
};

export default ProductDetail;
