import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import gamesReducer from "./gamesSlice";
import gameReducer from "./gameSlice";
export default configureStore({
  reducer: {
    login: loginReducer,
    games: gamesReducer,
    game: gameReducer,
  },
});
