import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Login,
  Home,
  Public,
  Blog,
  DetailProduct,
  Product,
} from "./pages/public";
import path from "./utils/path";
import { getCategory } from "./store/app/asyncActions";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
  }, []);
  return (
    <div className="min-h-screen font-main">
      <Routes>
        {/* Main public route */}
        <Route path={path.PUBLIC} element={<Public />}>
          {/* Nested route */}
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.BLOGS} element={<Blog />} />
          <Route
            path={path.DETAIL_PRODUCT__PID__TITLE}
            element={<DetailProduct />}
          />
          <Route path={path.PRODUCTS} element={<Product />} />
        </Route>
        <Route path={path.LOGIN} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
