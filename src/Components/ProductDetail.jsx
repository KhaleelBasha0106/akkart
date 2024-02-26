import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { memo } from "react";
import ProductNotFound from "./ProductNotFound";
import { Typography, Grid, Card, CardMedia, Button, Box } from "@mui/material";
import axios from "axios";
import { removeSelectedProduct, selectedProduct } from "../Actions/ProductActions";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.selectedProd.products);

  const dispatch = useDispatch();

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      dispatch(selectedProduct(response.data));
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    dispatch(removeSelectedProduct())
    if (productId) fetchProduct();
  }, [productId]);

  if (!product) {
    return <ProductNotFound />;
  }

  const { title, image, price, description } = product;

  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      alignItems="center"
      sx={{ marginTop: 10 }}
    >
      <Grid item xs={12} md={6} textAlign="center">
        <Card>
          <CardMedia component="img" image={image} alt={title} />
        </Card>
      </Grid>
      <Grid item xs={12} md={6} textAlign="center">
        <Typography variant="h4">{title}</Typography>
        <Typography variant="h6">Price: ${price}</Typography>
        <Typography variant="body1">Description: {description}</Typography>
        <Box mt={4}>
          <Button variant="contained" color="error">
            BUY
          </Button>
          &nbsp;
          <Button variant="contained">ADD TO CART</Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default memo(ProductDetail);
