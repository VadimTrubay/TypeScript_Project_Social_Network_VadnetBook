import {createSlice} from "@reduxjs/toolkit";
import {logIn, logOut, getMe} from "./operations";


const initialAuth = {
  userId: null,
  me: {
    email: null,
    login: null,
  },
  access_token: "",
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
          state.isAuth = true;
        }
      })
      .addCase(getMe.fulfilled, (state, action) => {
        if (action.payload.resultCode === 0) {
          state.me.userId = action.payload.data.id;
          state.me.email = action.payload.data.email;
          state.me.login = action.payload.data.login;
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
