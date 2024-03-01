import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../Actions/ProductActions";
import ProductComponent from "./ProductComponent";
import { memo } from "react";
import { Box } from "@mui/material";
import ProductSkeleton from "../Skeletons/ProductSkeletonForListing";
import ProductSkeletonForLisiting from "../Skeletons/ProductSkeletonForListing";
const ProductListing = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch(setProducts(response.data));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    // Disable scrolling when loading
    const body = document.body;
    if (loading) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [loading]);
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Box sx={{ marginTop: 12 }}>
      {loading ? <ProductSkeletonForLisiting /> : <ProductComponent />}
    </Box>
  );
};

export default memo(ProductListing);
