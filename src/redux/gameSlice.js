import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk to fetch user data
export const getGame = createAsyncThunk("game/getGame", async (gameId) => {
  try {
    const response = await axios.get(
      `https://www.freetogame.com/api/game?id=${gameId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error during get game by ID:", error);
  }
});
export const gameSlice = createSlice({
  name: "game",
  initialState: {
    game: {},
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGame.pending, (state) => {
        state.loading = true;
      })
      .addCase(getGame.fulfilled, (state, action) => {
        state.game = action.payload;
        state.loading = false;
      });
  },
});

export default gameSlice.reducer;
