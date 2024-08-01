import { Light } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useTheme } from "@emotion/react";
import IconDarkAndLight from "../../../IconDarkAndLight";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../../redux/loginSlice";
export default function NavBar() {
  const theme = useTheme();
  const navigate = useNavigate("");
  const user = useSelector((state) => state.login.user);

  console.log(user);
  return (
    <AppBar
      sx={{
        bgcolor: theme.palette.myColor.main,
        maxHeight: "80px",
        m: 0,
      }}
    >
      <Toolbar sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          onClick={() => navigate("/home")}
          variant="h3"
          sx={{
            background: "linear-gradient(90deg, #FF5E00, #FF0080)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "30px",
            fontWeight: "bold",
            letterSpacing: "0.1em",
            cursor: "pointer",
          }}
        >
          ZOKA
        </Typography>
        <Box sx={{ flexGrow: "1" }} />
        <Stack direction="row" spacing={2} alignItems="center">
          <IconDarkAndLight />
          <Stack direction="row" spacing={1} alignItems="center">
            <Avatar src={localStorage.getItem("userImg")}></Avatar>
            <Typography variant="body2" color="text.primary">
              {localStorage.getItem("userName")}
            </Typography>
          </Stack>

          <Button
            color="error"
            variant="outlined"
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
          >
            Log out
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
