import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import DescriptionCard from "./DescriptionCard";
import SliderGame from "./SliderGame";
import NavBar from "../home/hero/NavBar";
import GameInfo from "./GameInfo";
import { red } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGame } from "../../redux/gameSlice";

export default function Game() {
  const game = useSelector((state) => state.game.game);
  const dispatch = useDispatch();
  const { gameId } = useParams();

  useEffect(() => {
    if (gameId) {
      dispatch(getGame(gameId));
    }
  }, [gameId, dispatch]);
  console.log(Object.keys(game));
  return (
    <>
      {Object.keys(game).length === 15 ? (
        <Box>
          <NavBar />
          <Container maxWidth="lg" sx={{ p: 2, marginTop: "80px" }}>
            <Typography variant="h2" sx={{ color: red[700], mb: 3 }}>
              {game.title}
            </Typography>
            <Stack
              sx={{
                flexDirection: { md: "row", xs: "column-reverse" },
                gap: "10px",
                alignItems: "center",
              }}
            >
              <SliderGame game={game} />
              <DescriptionCard game={game} />
            </Stack>
            <Divider sx={{ mt: { md: "100px", xs: "60px" } }} />
            <GameInfo game={game} />
          </Container>
        </Box>
      ) : (
        <Typography variant="h6">No game data available.</Typography>
      )}
    </>
  );
}
