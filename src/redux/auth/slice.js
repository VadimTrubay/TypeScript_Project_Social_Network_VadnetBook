import {createSlice} from "@reduxjs/toolkit";
import {logIn, logOut} from "./operations";


const initialAuth = {
  userId: null,
  email: null,
  login: null,
  smallLogo: null,
  isAuth: false,
  loading: false,
  error: null,
  captchaUrl: null,

};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuth,
  extraReducers: (builder) =>
    builder
      .addCase(logIn.fulfilled, (state, action) => {
        if (action.payload.resultCode === 0) {
          state.userId = action.payload.data.userId;
          state.email = action.payload.data.email;
          state.login = action.payload.data.login;
          state.smallLogo = action.payload.data.smallLogo;
          state.isAuth = true;
        }
      })
      .addCase(logOut.fulfilled, (state) => {
        state.email = null;
        state.login = null;
        state.isAuth = false;
      })
});

export const authReducer = authSlice.reducer;
