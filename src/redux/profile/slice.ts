import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initialProfileType} from "../../types/profileTypes";
import {fetchMeProfile, setStatusProfile} from "./operations";


const initialProfile: initialProfileType = {
  profile: null,
  loading: false,
  error: null,
};

const handlePending = (state: initialProfileType) => {
  state.loading = true;
};

const handleRejected = (state: initialProfileType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = action.payload;
};


const handleFetchMeProfileFulfilled = (state: initialProfileType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = null;
  state.profile = action.payload;
};

const handleSetMeStatusFulfilled = (state: initialProfileType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = null;
  // state.profile.status = action.payload;
};


const profileSlice = createSlice({
  name: "profile",
  initialState: initialProfile,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchMeProfile.pending, handlePending)
      .addCase(fetchMeProfile.fulfilled, handleFetchMeProfileFulfilled)
      .addCase(fetchMeProfile.rejected, handleRejected)
      .addCase(setStatusProfile.pending, handlePending)
      .addCase(setStatusProfile.fulfilled, handleSetMeStatusFulfilled)
      .addCase(setStatusProfile.rejected, handleRejected)
});

export const profileReducer = profileSlice.reducer;
