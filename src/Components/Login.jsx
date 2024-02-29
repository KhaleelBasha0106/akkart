import { Box, Button, FormGroup, TextField, Typography } from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
      <FormGroup
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "2px solid black",
          padding: "50px",
          borderRadius: "10px",
          width: "fit-content",
        }}
      >
        <Typography
          variant="h5"
          sx={{ marginBottom: "20px", textDecoration: "underline" }}
        >
          Login
        </Typography>
        <TextField
          type="email"
          id="email1"
          name="email"
          label="Email"
          sx={{ marginTop: "20px", width: "100%" }}
        />
        <TextField
          type="password"
          id="password1"
          name="password"
          label="Password"
          sx={{ marginTop: "20px", width: "100%" }}
        />
        <br />

        <Button variant="contained">Submit</Button>
      </FormGroup>
    </Box>
  );
};

export default Login;
