import React, { useCallback } from "react";
import { useScrollTrigger, Zoom, Box, Fab } from "@mui/material";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";

function ScrollToTopFab() {
  // Use `window` instead of `body` as `document` will be `undefined` when the
  // hooks first runs. By default, useScrollTrigger will attach itself to `window`.
  const trigger = useScrollTrigger({
    // Number of pixels needed to scroll to toggle `trigger` to `true`.
    threshold: 400,
  });

  const scrollToTop = useCallback(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <Zoom in={trigger}>
      <Box
        role="presentation"
        // Place the button in the bottom right corner.
        sx={{
          position: "fixed",
          bottom: 32,
          right: 32,
          zIndex: 1,
        }}
      >
        <Fab
          onClick={scrollToTop}
          color="primary"
          size="small"
          aria-label="Scroll back to top"
        >
          <KeyboardArrowUp fontSize="medium" />
        </Fab>
      </Box>
    </Zoom>
  );
}

export default ScrollToTopFab;
