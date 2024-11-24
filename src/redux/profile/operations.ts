import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteProfileApi,
  editProfileApi,
  getMeProfileApi,
  setPhotoProfileApi,
  setStatusProfileApi,
} from "../../api/apiProfile";
import { EditProfileType, statusDataType } from "../../types/profileTypes";

export const fetchMeProfile: any = createAsyncThunk(
  "profile/fetchMeProfile",
  async (_, thunkAPI) => {
    try {
      const response = await getMeProfileApi();
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.details);
    }
  },
);

export const setStatusProfile: any = createAsyncThunk(
  "profile/setStatusProfile",
  async (statusData: statusDataType, thunkAPI) => {
    try {
      const response = await setStatusProfileApi(statusData);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.details);
    }
  },
);

export const setPhotoProfile: any = createAsyncThunk(
  "profile/setPhotoProfile",
  async (photoData: FormData, thunkAPI) => {
    try {
      const response = await setPhotoProfileApi(photoData);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.details);
    }
  },
);

export const editProfile: any = createAsyncThunk(
  "profile/editProfile",
  async (statusData: EditProfileType, thunkAPI) => {
    try {
      const response = await editProfileApi(statusData);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.details);
    }
  },
);

export const deleteProfile: any = createAsyncThunk(
  "profile/deleteProfile",
  async (_, thunkAPI) => {
    try {
      const response = await deleteProfileApi();
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.details);
    }
  },
);
