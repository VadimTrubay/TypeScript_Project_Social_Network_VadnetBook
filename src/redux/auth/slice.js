import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut } from "./operations";

export const API_KEY = "173e7929-a115-44d1-a2e5-6ee5da017136";

const initialAuth = {
  user: {
    name: null,
    email: null,
  },
  token: API_KEY,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuth,
  extraReducers: (builder) => {
    builder
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;
