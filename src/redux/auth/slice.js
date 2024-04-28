import {createSlice} from "@reduxjs/toolkit";
import {logIn, logOut} from "./operations";


const initialAuth = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  loading: false,
  error: null,
};

const handlePending = (state) => {
  state.loading = true;
};

const handleLoginFulfilled = (state, action) => {
  state.loading = false;
  state.error = null;
  state.userId = action.payload.data.userId;
  state.isAuth = true;
  console.log(state.userId);
};
const handleLogOutFulfilled = (state) => {
  state.loading = false;
  state.error = null;
  state.userId = null;
  state.email = null;
  state.login = null;
  state.isAuth = false;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
}

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuth,
  extraReducers: (builder) =>
    builder
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, handleLoginFulfilled)
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, handleLogOutFulfilled)
      .addCase(logOut.rejected, handleRejected)
});

export const authReducer = authSlice.reducer;
