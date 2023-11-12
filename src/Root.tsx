import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import "./index.css";

import App from "./pages/App";
import Login from "./pages/Login";

const Root = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<App />} />
          <Route path="login" element={<Login />} />
      </Routes>
    </Suspense>
  );
};

export default Root;
