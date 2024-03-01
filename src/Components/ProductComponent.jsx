import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addtoCart } from "../Actions/ProductActions";

const ProductComponent = () => {
  const products = useSelector((state) => state.setprodReducer.products);
  const [expandedDescriptionIds, setExpandedDescriptionIds] = useState([]);
  const dispatch = useDispatch();

  const toggleDescriptionExpansion = (id) => {
    setExpandedDescriptionIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((prevId) => prevId !== id)
        : [...prevIds, id]
    );
  };

  const isDescriptionExpanded = (id) => {
    return expandedDescriptionIds.includes(id);
  };

  const renderList = products.map((product) => {
    const { id, title, image, price, description } = product;
    const isExpanded = isDescriptionExpanded(id);

    return (
      <Grid key={id} item xs={12} sm={6} md={4}>
        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <Link
            to={`/product/${id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <CardMedia
              component="img"
              image={image}
              title={title}
              sx={{ objectFit: "cover" }}
              loading="lazy"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Price: ${price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {isExpanded ? description : `${description.slice(0, 100)}...`}
              </Typography>
            </CardContent>
          </Link>
          <CardActions
            sx={{ marginTop: "auto", justifyContent: "space-between" }}
          >
            <Button size="small" onClick={() => toggleDescriptionExpansion(id)}>
              {isExpanded ? "Show Less" : "Show More"}
            </Button>
            <Button
              size="small"
              variant="outlined"
              onClick={() => dispatch(addtoCart(product))}
            >
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  });

  return (
    <Box>
      <Grid container spacing={3}>
        {renderList}
      </Grid>
    </Box>
  );
};

export default React.memo(ProductComponent);
