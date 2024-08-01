import React from "react";
import NavBar from "./hero/NavBar";
import Header from "./hero/header/Header";
import { Box, Container, Stack, Typography } from "@mui/material";
import Slider from "./hero/slider/Slider";
import Games from "./games/Games";
import ScrollToTopFab from "./ScrollToTopFab";

export default function HomePage() {
  return (
    <Box sx={{ position: "relative" }}>
      <Stack sx={{ height: "100vh" }}>
        <NavBar />
        <Container sx={{ marginTop: "80px" }}>
          <Header />
        </Container>
        <Slider />
        <Box sx={{ flexGrow: 1 }}></Box>
      </Stack>
      <Stack spacing={2} sx={{ p: 3 }}>
        <Typography
          component="h1"
          variant="h3"
          sx={{
            color: "primary.main",
            textAlign: "center",
            letterSpacing: "5px",
            fontWeight: "bold",
            mb: 3,
          }}
        >
          Games
        </Typography>
        <Games />
      </Stack>
      <ScrollToTopFab />
    </Box>
  );
}
