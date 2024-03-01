import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListing from "./Components/ProductListing";
import Navbar from "./Navbar";
import ProductDetail from "./Components/ProductDetail";
import Page404 from "./Components/Page404";


const MyCart = lazy(() => import("./Components/MyCart"));
const Register = lazy(() => import("./Components/Register"));
const Login = lazy(() => import("./Components/Login"));
const Settings = lazy(() => import("./Components/Settings"));
const Mycoins = lazy(() => import("./Components/Mycoins"));
const Vouchers = lazy(() => import("./Components/Vouchers"));
const Orders = lazy(() => import("./Components/Orders"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/addcart" element={<MyCart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/coins" element={<Mycoins />} />
          <Route path="/vouchers" element={<Vouchers />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
