import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, } from "react-redux";
import { setProducts } from "../Actions/ProductActions";
import ProductComponent from "./ProductComponent";
import { memo } from "react";
import { Box } from "@mui/material";
const ProductListing = () => {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch(setProducts(response.data));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Box sx={{marginTop:12}}>
      <ProductComponent />
    </Box>
  );
};

export default memo(ProductListing);
