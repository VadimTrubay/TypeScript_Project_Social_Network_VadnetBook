import "react-toastify/dist/ReactToastify.css";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initialProfileType} from "../../types/profileTypes";
import {deleteProfile, editProfile, fetchMeProfile, setPhotoProfile, setStatusProfile} from "./operations";
import {toast} from "react-toastify";
import {toast_settings} from "../../utils/toasts_settings";


const initialProfile: initialProfileType = {
  profile: {
    user: {
      id: "",
      username: "",
      email: "",
      first_name: "",
      last_name: "",
      date_joined: "",
    },
    is_friend: false,
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
  },
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
  // @ts-ignore
  toast.info('Status setting successfully', toast_settings);
};

const handleSetPhotoFulfilled = (state: initialProfileType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = null;
  // @ts-ignore
  toast.info('Photo setting successfully', toast_settings);
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
  // @ts-ignore
  toast.info('Profile edited successfully', toast_settings);
};

const handleDeleteProfileFulfilled = (state: initialProfileType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = null;
  state.profile = {
    user: {
      id: "",
      username: "",
      email: "",
      first_name: "",
      last_name: "",
      date_joined: "",
    },
    is_friend: false,
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
  };
  // @ts-ignore
  toast.success('Profile deleted successfully', toast_settings);
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
      .addCase(setPhotoProfile.rejected, handleRejected)
      .addCase(deleteProfile.pending, handlePending)
      .addCase(deleteProfile.fulfilled, handleDeleteProfileFulfilled)
      .addCase(deleteProfile.rejected, handleRejected),
});

export const profileReducer = profileSlice.reducer;
