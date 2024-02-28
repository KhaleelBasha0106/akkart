import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListing from "./Components/ProductListing";
import Navbar from "./Navbar";
import ProductDetail from "./Components/ProductDetail";
import Page404 from "./Components/Page404";
import MyCart from "./Components/MyCart";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/addcart" element={<MyCart />}/>
        <Route path="*" element={<Page404 />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
