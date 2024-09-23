import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {logOut, signIn, signUp, fetchMe, fetchMeProfile} from "./operations";
import {initialAuthType} from "../../types/authTypes";
import {toast} from "react-toastify";


const initialAuth: initialAuthType = {
  me: null,
  profile: null,
  access_token: "",
  isAuth: false,
  loading: false,
  error: null,
};

const handlePending = (state: initialAuthType) => {
  state.loading = true;
};

const handleRejected = (state: initialAuthType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = action.payload;
};

const handleSignInFulfilled = (state: initialAuthType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = null;
  state.access_token = action.payload.access_token
  state.isAuth = true;
};

const handleSignUpFulfilled = (state: initialAuthType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = null;
  state.access_token = action.payload.access_token
  state.isAuth = true;
};

const handleFetchMeFulfilled = (state: initialAuthType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = null;
  state.me = action.payload;
  state.isAuth = true;
};

const handleFetchMeProfileFulfilled = (state: initialAuthType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = null;
  state.profile = action.payload;
  state.isAuth = true;
};

const handleLogOutFulfilled = (state: initialAuthType) => {
  state.loading = false;
  state.error = null;
  state.me = null;
  state.profile = null;
  state.access_token = "";
  state.isAuth = false;
}

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuth,
  reducers: {
    setAccessToken(state: initialAuthType, action: PayloadAction<string>) {
      state.access_token = action.payload;
    }
  },
  extraReducers: (builder) =>
    builder
      .addCase(signUp.pending, handlePending)
      .addCase(signUp.fulfilled, handleSignUpFulfilled)
      .addCase(signUp.rejected, handleRejected)
      .addCase(signIn.pending, handlePending)
      .addCase(signIn.fulfilled, handleSignInFulfilled)
      .addCase(signIn.rejected, handleRejected)
      .addCase(fetchMe.pending, handlePending)
      .addCase(fetchMe.fulfilled, handleFetchMeFulfilled)
      .addCase(fetchMe.rejected, handleRejected)
      .addCase(fetchMeProfile.pending, handlePending)
      .addCase(fetchMeProfile.fulfilled, handleFetchMeProfileFulfilled)
      .addCase(fetchMeProfile.rejected, handleRejected)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, handleLogOutFulfilled)
      .addCase(logOut.rejected, handleRejected),
});

export const {setAccessToken} = authSlice.actions;
export const authReducer = authSlice.reducer;
