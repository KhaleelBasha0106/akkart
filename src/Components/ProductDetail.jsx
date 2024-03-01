// import React, { useEffect,useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { memo } from "react";
// import ProductNotFound from "./ProductNotFound";
// import { Typography, Grid, Card, CardMedia, Button, Box } from "@mui/material";
// import axios from "axios";
// import {
//   addtoCart,
//   removeSelectedProduct,
//   selectedProduct,
// } from "../Actions/ProductActions";

// const ProductDetail = () => {
//   const { productId } = useParams();
//   const product = useSelector((state) => state.selectedProd.products);
//   const dispatch = useDispatch();
//   const [loading, setLoading] = useState(true);
 

//   const fetchProduct = async () => {
//     try {
//       const response = await axios.get(
//         `https://fakestoreapi.com/products/${productId}`
//       );
//       dispatch(selectedProduct(response.data));
//       setLoading(false)
//     } catch (error) {
//       throw error;
//     }
//   };

//   useEffect(() => {
//     // Disable scrolling when loading
//     const body = document.body;
//     if (loading) {
//       body.style.overflow = "hidden";
//     } else {
//       body.style.overflow = "auto";
//     }
//   }, [loading]);
  

//   useEffect(() => {
//     dispatch(removeSelectedProduct());
//     if (productId) fetchProduct();
//   }, [productId]);

//   if (!product) {
//     return <ProductNotFound />;
//   }

//   const { title, image, price, description } = product;

//   return (
//     <Grid
//       container
//       spacing={3}
//       justifyContent="center"
//       alignItems="center"
//       sx={{ marginTop: 10 }}
//     >
//       <Grid item xs={12} md={6} textAlign="center">
//         <Card>
//           <CardMedia component="img" image={image} alt={title} loading="lazy" />
//         </Card>
//       </Grid>
//       <Grid item xs={12} md={6} textAlign="center">
//         <Typography variant="h4">{title}</Typography>
//         <Typography variant="h6">Price: ${price}</Typography>
//         <Typography variant="body1">Description: {description}</Typography>
//         <Box mt={4}>
//           <Button variant="contained" color="error">
//             BUY
//           </Button>
//           &nbsp;
//           <Button
//             variant="contained"
//             onClick={() => dispatch(addtoCart(product))}
//           >
//             ADD TO CART
//           </Button>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// export default memo(ProductDetail);

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { memo } from "react";
import ProductNotFound from "./ProductNotFound";
import { Typography, Grid, Card, CardMedia, Button, Box } from "@mui/material";
import axios from "axios";
import ProductDetailSkeleton from "../Skeletons/ProductDetailSkeleton";
import {
  addtoCart,
  removeSelectedProduct,
  selectedProduct,
} from "../Actions/ProductActions";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.selectedProd.products);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      dispatch(selectedProduct(response.data));
      setLoading(false);
    } catch (error) {
      throw error;
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
    dispatch(removeSelectedProduct());
    if (productId) fetchProduct();
  }, [productId]);

  if (!product) {
    return <ProductNotFound />;
  }

  const { title, image, price, description } = product;

  return (
    <>
      {loading ? (
        // Render skeleton while loading
        <ProductDetailSkeleton />
      ) : (
        // Render actual product details when loading is complete
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: 10 }}
        >
          <Grid item xs={12} md={6} textAlign="center">
            <Card>
              <CardMedia
                component="img"
                image={image}
                alt={title}
                loading="lazy"
              />
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
              <Button
                variant="contained"
                onClick={() => dispatch(addtoCart(product))}
              >
                ADD TO CART
              </Button>
            </Box>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default memo(ProductDetail);
