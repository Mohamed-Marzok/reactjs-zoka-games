import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useMemo } from "react";
import { Box, Container, Stack } from "@mui/system";
import { purple, teal, orange, cyan } from "@mui/material/colors";
import Grid from "@mui/material/Unstable_Grid2";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getGames } from "../../../redux/gamesSlice";
import PropTypes from "prop-types";
import Skeleton from "@mui/material/Skeleton";

export default function Games() {
  const games = useSelector((state) => state.games.games);
  const loading = useSelector((state) => state.games.loading);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.user);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  useEffect(() => {
    if (token === null) {
      navigate("/");
    }
  }, [token, navigate]);

  const renderSkeletons = () => {
    return Array.from(new Array(8)).map((_, index) => (
      <Grid key={index} xs={12} md={3}>
        <Card
          sx={{
            height: "558px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Skeleton variant="rectangular" width="100%" height={270} />
          <CardContent
            sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
          >
            <Skeleton width="60%" height={50} sx={{ mb: 1 }} />
            <Skeleton width="100%" sx={{ mb: 5 }} />

            <Skeleton width="50%" />

            <Skeleton width="100%" height={60} sx={{ mt: 2 }} />
          </CardContent>
        </Card>
      </Grid>
    ));
  };

  const gamesList = useMemo(() => {
    return games?.map((game) => (
      <Grid key={game.id} xs={12} md={3}>
        <Card
          sx={{
            height: "558px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardMedia
            sx={{ height: 270 }}
            image={game.thumbnail}
            title={game.title}
          />
          <CardContent
            sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ mb: 2 }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ m: 0 }}
              >
                {game.title}
              </Typography>
              <Box
                sx={{
                  bgcolor: teal[700],
                  color: "#fff",
                  padding: "5px",
                  borderRadius: "15px",
                  fontSize: "12px",
                  whiteSpace: "nowrap",
                }}
              >
                {game.platform}
              </Box>
            </Stack>

            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ mb: 1, height: "55px" }}
            >
              {game.short_description}
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              sx={{ mt: 2, mb: 2 }}
            >
              <Typography variant="body2" color="text">
                <span style={{ color: cyan[700] }}>Developer:</span>{" "}
                {game.developer}
              </Typography>
              <Typography variant="body2" color="text">
                <span style={{ color: orange[700] }}>Release Date:</span>{" "}
                {game.release_date}
              </Typography>
            </Stack>
            <Box sx={{ mt: "auto" }}>
              <Button
                color="primary"
                variant="contained"
                sx={{ width: "100%" }}
                onClick={() => {
                  navigate(`/game/${game.id}`);
                }}
              >
                Open
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    ));
  }, [games, navigate]);

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ justifyContent: "center" }}
    >
      {loading ? renderSkeletons() : gamesList}
    </Grid>
  );
}
