import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MustLogin() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        p: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        You must log in to access this page.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Go to Login
      </Button>
    </Box>
  );
}
