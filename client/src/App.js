import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Login,
  Home,
  Public,
  Blog,
  DetailProduct,
  Products,
  FinalRegister,
  ResetPassword,
} from "./pages/public";
import path from "./utils/path";
import { getCategory } from "./store/app/asyncActions";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
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
            path={path.DETAIL_PRODUCT__CATEGORY__PID__TITLE}
            element={<DetailProduct />}
          />
          <Route path={path.RESET_PASSWORD} element={<ResetPassword />} />
          <Route path={path.PRODUCTS} element={<Products />} />
        </Route>
        <Route path={path.FINAL_REGISTER} element={<FinalRegister />} />
        <Route path={path.LOGIN} element={<Login />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
