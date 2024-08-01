import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth, provider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
// Thunk to fetch user data
export const getUserData = createAsyncThunk("user/getuserdata", async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("User Info:", user);
    return user;
  } catch (error) {
    console.error("Error during sign-in:", error);
  }
});
export const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: {},
    token: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.user = action.payload;
      localStorage.setItem("token", action.payload.accessToken);
      localStorage.setItem(
        "userName",
        action.payload.reloadUserInfo.displayName
      );
      localStorage.setItem("userImg", action.payload.reloadUserInfo.photoUrl);
    });
  },
});

export default loginSlice.reducer;
