import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { blue, cyan, green, orange, purple, red } from "@mui/material/colors";
import React from "react";

export default function DescriptionCard({ game }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 270 }}
        image={game?.thumbnail}
        title={game?.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {game?.short_description}
        </Typography>
        <Typography variant="body2" color="text">
          <span style={{ color: blue[700] }}>Genre:</span> {game?.genre}
        </Typography>{" "}
        <Typography variant="body2" color="text">
          <span style={{ color: cyan[700] }}>Status:</span> {game?.status}
        </Typography>
        <Typography variant="body2" color="text">
          <span style={{ color: green[700] }}>Platform:</span> {game?.platform}
        </Typography>
        <Typography variant="body2" color="text">
          <span style={{ color: purple[700] }}>Publisher:</span>{" "}
          {game?.publisher}
        </Typography>
        <Typography variant="body2" color="text">
          <span style={{ color: orange[700] }}>Developer:</span>{" "}
          {game?.developer}
        </Typography>
        <Typography variant="body2" color="text">
          <span style={{ color: red[700] }}>Release Date:</span>{" "}
          {game?.release_date}
        </Typography>
      </CardContent>
    </Card>
  );
}
