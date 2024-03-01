import React from "react";
import { Box, Skeleton } from "@mui/material";

const ProductDetailSkeleton = () => {
  return (
    <Box
      sx={{
        display: { md: "flex", sm: "inline-block" },
        justifyContent: { md: "space-evenly", sm: "center" },
        alignItems: "center",
        textAlign: "center",
        marginTop: 15,
      }}
    >
      <Skeleton
        variant="rectangular"
        width={412}
        height={400}
        sx={{ marginLeft: { sm: 17 } }}
      />
      <Box mt={2} sx={{ margin: [1, 17, 16, 3] }}>
        <Box sx={{ marginRight: [6.2, 6.2, 7], marginLeft: [6.2, 6.2, 7] }}>
          <Skeleton variant="text" width={300} height={150} />
        </Box>
        <Box
          mt={2}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            marginRight: [4, 4, 7],
            marginLeft: [4, 4, 7],
          }}
        >
          <Skeleton variant="rectangular" width={100} height={30} />
          <Skeleton variant="rectangular" width={100} height={30} />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetailSkeleton;
