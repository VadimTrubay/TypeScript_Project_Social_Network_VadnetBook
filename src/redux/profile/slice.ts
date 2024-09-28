import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initialProfileType} from "../../types/profileTypes";
import {editProfile, fetchMeProfile, setPhotoProfile, setStatusProfile} from "./operations";


const initialProfile: initialProfileType = {
  profile: {
    user: {
      id: "",
      username: "",
      email: "",
      first_name: "",
      last_name: "",
    },
    status: "",
    about_me: "",
    website_page: "",
    github_page: "",
    linkedin_page: "",
    looking_from_job: false,
    job_skills: "",
    birth_date: "",
    profile_picture: "",
    phone_number: "",
    date_joined: "",
  },
  refreshed: false,
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
  state.profile.status = action.payload.status;
  state.refreshed = true;
};

const handleSetPhotoFulfilled = (state: initialProfileType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = null;
  state.refreshed = true;
};

const handleEditProfileFulfilled = (state: initialProfileType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = null;
  state.profile.user.username = action.payload.username || state.profile.user.username;
  state.profile.user.first_name = action.payload.first_name || state.profile.user.first_name;
  state.profile.user.last_name = action.payload.last_name || state.profile.user.last_name;
  state.profile.about_me = action.payload.about_me || state.profile.about_me;
  state.profile.website_page = action.payload.website_page || state.profile.website_page;
  state.profile.github_page = action.payload.github_page || state.profile.github_page;
  state.profile.linkedin_page = action.payload.linkedin_page || state.profile.linkedin_page;
  state.profile.looking_from_job = action.payload.looking_from_job ?? state.profile.looking_from_job;
  state.profile.job_skills = action.payload.job_skills || state.profile.job_skills;
  state.profile.birth_date = action.payload.birth_date || state.profile.birth_date;
  state.profile.phone_number = action.payload.phone_number || state.profile.phone_number;
  state.refreshed = true;
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
      .addCase(editProfile.pending, handlePending)
      .addCase(editProfile.fulfilled, handleEditProfileFulfilled)
      .addCase(editProfile.rejected, handleRejected)
      .addCase(setPhotoProfile.pending, handlePending)
      .addCase(setPhotoProfile.fulfilled, handleSetPhotoFulfilled)
      .addCase(setPhotoProfile.rejected, handleRejected),
});

export const profileReducer = profileSlice.reducer;
