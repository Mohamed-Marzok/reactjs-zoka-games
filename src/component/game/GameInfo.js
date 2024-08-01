import { Box, Link, Stack, Typography } from "@mui/material";
import { blue, teal, grey, green } from "@mui/material/colors";
import React from "react";
import SdStorageIcon from "@mui/icons-material/SdStorage";
import MemoryIcon from "@mui/icons-material/Memory";
import WindowIcon from "@mui/icons-material/Window";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

export default function GameInfo({ game }) {
  return (
    <>
      {game && (
        <Stack spacing={4} sx={{ mt: 2 }}>
          <Box>
            <Typography variant="h3" sx={{ color: blue[700] }}>
              Description
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {game?.description}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h3" sx={{ color: teal[700] }}>
              Requirements
            </Typography>
            <Box>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <WindowIcon sx={{ color: grey[600] }} /> OS:{" "}
                  {game?.minimum_system_requirements.os}
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <MemoryIcon sx={{ color: grey[600] }} /> Processor:{" "}
                  {game?.minimum_system_requirements.processor}
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <FilterDramaIcon sx={{ color: grey[600] }} /> Memory:{" "}
                  {game?.minimum_system_requirements.memory}
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <ScatterPlotIcon sx={{ color: grey[600] }} /> Graphics:{" "}
                  {game?.minimum_system_requirements.graphics}
                </li>
                <li
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <SdStorageIcon sx={{ color: grey[600] }} /> Storage:{" "}
                  {game?.minimum_system_requirements.storage}
                </li>
              </ul>
            </Box>
          </Box>
          <Link
            href={game?.game_url}
            target="_blank"
            sx={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              color: green[500],
            }}
          >
            <FileDownloadIcon /> DownLoad Now
          </Link>
        </Stack>
      )}
    </>
  );
}
