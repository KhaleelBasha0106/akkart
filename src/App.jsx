import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListing from "./Components/ProductListing";
import Navbar from "./Navbar";
import ProductDetail from "./Components/ProductDetail";
import Page404 from "./Components/Page404";
import MyCart from "./Components/MyCart";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Settings from "./Components/Settings";
import Mycoins from "./Components/Mycoins";
import Vouchers from "./Components/Vouchers";
import Orders from "./Components/Orders";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
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
    </BrowserRouter>
  );
}

export default App;
