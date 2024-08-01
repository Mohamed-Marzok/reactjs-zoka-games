import { Box, Stack, Typography, Button } from "@mui/material";
import { orange } from "@mui/material/colors";
import React, { useEffect } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../redux/loginSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.user);
  const navigate = useNavigate();
  let token;

  useEffect(() => {
    token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, [token, user]);
  console.log(user.reloadUserInfo);
  const handleLogin = async () => {
    await dispatch(getUserData());
    if (token) {
      navigate("/home");
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 5,
        color: "#fff",
      }}
    >
      <img
        src="https://images.hdqwalls.com/download/devil-boy-4k-f9-2560x1700.jpg"
        alt="Background"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <Stack
        spacing={3}
        sx={{
          maxWidth: { md: "40%", xs: "100%" },
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Slightly more opaque background
          borderRadius: "8px",
          padding: "20px",
        }}
      >
        <Typography
          variant="h1"
          fontFamily="Bangers"
          color={orange[100]}
          sx={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
        >
          Zoka Game Store
        </Typography>
        <Typography
          variant="body1"
          color={orange[300]}
          sx={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)" }}
        >
          Welcome to Zoka Game Store! Log in to access the latest games,
          consoles, and accessories. Enjoy exclusive deals and join our vibrant
          gaming community. Your ultimate gaming experience starts here!
        </Typography>
        <Button
          variant="contained"
          color="info"
          startIcon={<GoogleIcon />}
          sx={{ width: "250px", alignSelf: "flex-end" }}
          onClick={handleLogin}
        >
          Login with Google
        </Button>
      </Stack>
    </Box>
  );
}
