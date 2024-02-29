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
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MyCart = () => {
  const products = useSelector((state) => state.mycartRedu.myCart);
  const [expandedDescriptionIds, setExpandedDescriptionIds] = useState([]);

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
            <Button size="small" variant="contained" color="error">
              BUY
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  });

  return (
    <Box sx={{ marginTop: 10 }}>
      <Grid container spacing={3}>
        {products.length ? (
          renderList
        ) : (
          <Typography
            variant="h5"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "80vh",
              color: 'text.secondary',
            }}
          >
            No items found
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default React.memo(MyCart);
