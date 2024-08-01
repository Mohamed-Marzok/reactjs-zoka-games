import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk to fetch user data
export const getGames = createAsyncThunk("games/getGames", async () => {
  try {
    const response = await axios.get("https://www.freetogame.com/api/games");
    return response.data;
  } catch (error) {
    console.error("Error during get games:", error);
  }
});
// Thunk to fetch user data By Category
export const getGamesByCategory = createAsyncThunk(
  "games/getGamesByCategory",
  async (category) => {
    try {
      let response;
      if (category === "All Category") {
        response = await axios.get("https://www.freetogame.com/api/games");
      } else {
        response = await axios.get(
          `https://www.freetogame.com/api/games?category=${category}`
        );
      }
      return response.data;
    } catch (error) {
      console.error("Error during get games:", error);
    }
  }
);
// Thunk to fetch user data By platform
export const getGamesByPlatform = createAsyncThunk(
  "games/getGamesByPlatform",
  async (platform) => {
    try {
      let response;
      if (platform === "Platform") {
        response = await axios.get("https://www.freetogame.com/api/games");
      } else {
        response = await axios.get(
          `https://www.freetogame.com/api/games?platform=${platform}`
        );
      }
      return response.data;
    } catch (error) {
      console.error("Error during get games:", error);
    }
  }
);
// Thunk to fetch user data By Sort
export const getGamesBySort = createAsyncThunk(
  "games/getGamesBySort",
  async (sort) => {
    try {
      let response;
      if (sort === "Sort") {
        response = await axios.get("https://www.freetogame.com/api/games");
      } else {
        response = await axios.get(
          `https://www.freetogame.com/api/games?sort-by=${sort}`
        );
      }
      return response.data;
    } catch (error) {
      console.error("Error during get games:", error);
    }
  }
);
export const gamesSlice = createSlice({
  name: "games",
  initialState: {
    games: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGames.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getGames.fulfilled, (state, action) => {
        state.games = action.payload;
        state.loading = false;
      })
      .addCase(getGamesByCategory.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getGamesByCategory.fulfilled, (state, action) => {
        state.games = action.payload;
        state.loading = false;
      })
      .addCase(getGamesByPlatform.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getGamesByPlatform.fulfilled, (state, action) => {
        state.games = action.payload;
        state.loading = false;
      })
      .addCase(getGamesBySort.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getGamesBySort.fulfilled, (state, action) => {
        state.games = action.payload;
        state.loading = false;
      });
  },
});

export default gamesSlice.reducer;
