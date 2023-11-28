import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import "./index.css";

import App from "./pages/App";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProductDetail from "./pages/ProductDetail";
import CategoryProduct from "./pages/CategoryProduct";

const Root = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="p">
          <Route path=":DetailProduct" element={<ProductDetail />} />
        </Route>
        <Route path="cat">
          <Route path=":CatCar" element={<CategoryProduct />} />
        </Route>
        <Route path="/home" element={<App />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  );
};

export default Root;
