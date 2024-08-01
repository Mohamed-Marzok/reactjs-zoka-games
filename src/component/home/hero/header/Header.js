import * as React from "react";
import { Box, Stack, useMediaQuery } from "@mui/material";
import Categories from "./Categories";
import SearchContainer from "./SearchContainer";
import Sort from "./Sort";
import Slider from "../slider/Slider";

export default function Header() {
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <Box
      sx={{
        marginTop: "20px",
      }}
    >
      {isDesktop ? (
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Categories />
          <SearchContainer />
          <Sort />
        </Stack>
      ) : (
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack>
            <Categories />
            <Sort />
          </Stack>
          <SearchContainer />
        </Stack>
      )}
    </Box>
  );
}
