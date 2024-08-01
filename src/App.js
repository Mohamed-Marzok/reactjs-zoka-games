import Login from "./component/login/Login";
import "./App.css";
import HomePage from "./component/home/HomePage";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Game from "./component/game/Game";
import { Navigate, Route, Routes } from "react-router-dom";
import ErrorPage from "./component/errorPages/ErrorPage";
import MustLogin from "./component/errorPages/MustLogin";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/game/:gameId" element={<Game />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
