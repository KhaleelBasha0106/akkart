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

const ProductCardSkeleton = () => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Skeleton variant="rectangular" height={200} />
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
        <CardActions
          sx={{ marginTop: "auto", justifyContent: "space-between" }}
        >
          <Button size="small">
            <Skeleton width={80} />
          </Button>
          <Button size="small" variant="outlined">
            <Skeleton width={100} />
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCardSkeleton;
