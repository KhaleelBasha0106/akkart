import { Box, Button, FormGroup, TextField, Typography } from "@mui/material";
import React from "react";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
const Register = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
      <FormGroup
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "2px solid black",
          padding: "10px",
          borderRadius: "10px",
          width: "fit-content",
        }}
      >
        <Typography
          variant="h5"
          sx={{ marginBottom: "20px", textDecoration: "underline" }}
        >
          Sign Up
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            width: "100%",
          }}
        >
          <TextField type="text" id="name" name="name" label="Name" />
          <TextField
            type="text"
            id="lastName"
            name="lastName"
            label="Surname"
          />
        </Box>
        <TextField
          type="date"
          id="date"
          name="dob"
          label="Date of Birth"
          InputLabelProps={{ shrink: true }}
          InputProps={{
            inputProps: { min: "1900-01-01" },
            value: "",
            style: { width: "100%" },
          }}
          sx={{ marginTop: "20px", width: "100%" }}
        />
        <TextField
          type="tel"
          id="mobile"
          name="mobile"
          label="Mobile Number"
          sx={{ marginTop: "20px", width: "100%" }}
        />
        <TextField
          type="email"
          id="email"
          name="email"
          label="Email"
          sx={{ marginTop: "20px", width: "100%" }}
        />
        <TextField
          type="password"
          id="password"
          name="password"
          label="Password"
          sx={{ marginTop: "20px", width: "100%" }}
        />
        <TextField
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          sx={{ marginTop: "20px", width: "100%" }}
        />
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{ marginRight: "10px" }}
          >
            Register
          </Button>
        </Box>
      </FormGroup>
    </Box>
  );
};

export default Register;
