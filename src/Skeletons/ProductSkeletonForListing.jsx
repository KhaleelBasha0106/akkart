import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Skeleton,
} from "@mui/material";

const ProductCard = () => {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Skeleton
        variant="rectangular"
        sx={{ maxWidth: "100%", height: [400, 300, 400] }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          <Skeleton />
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          <Skeleton />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Skeleton />
        </Typography>
      </CardContent>
      <CardActions sx={{ marginTop: "auto", justifyContent: "space-between" }}>
        <Button size="small">
          <Skeleton width={80} />
        </Button>
        <Button size="small">
          <Skeleton width={100} />
        </Button>
      </CardActions>
    </Card>
  );
};

const ProductSkeletonForLisiting = () => {
  const numberOfCards = 6;

  return (
    <Grid container spacing={2} marginTop={10}>
      {[...Array(numberOfCards)].map((_, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <ProductCard />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductSkeletonForLisiting;
