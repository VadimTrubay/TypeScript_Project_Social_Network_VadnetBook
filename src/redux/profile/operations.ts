import {createAsyncThunk} from "@reduxjs/toolkit";
import {editProfileApi, getMeProfileApi, setPhotoProfileApi, setStatusProfileApi} from "../../api/apiProfile";
import {EditProfileType, statusDataType} from "../../types/profileTypes";



export const fetchMeProfile = createAsyncThunk(
  "profile/fetchMeProfile",
  async (_, thunkAPI) => {
    try {
      const response = await getMeProfileApi();
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.detail);
    }
  }
);

export const setStatusProfile = createAsyncThunk(
  "profile/setStatusProfile",
  async (statusData: statusDataType, thunkAPI) => {
    try {
      const response = await setStatusProfileApi(statusData);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.detail);
    }
  }
);

export const setPhotoProfile = createAsyncThunk(
  "profile/setPhotoProfile",
  async (photoData: FormData, thunkAPI) => {
    try {
      const response = await setPhotoProfileApi(photoData);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.detail);
    }
  }
);

export const editProfile = createAsyncThunk(
  "profile/editProfile",
  async (statusData: EditProfileType, thunkAPI) => {
    try {
      const response = await editProfileApi(statusData);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.detail);
    }
  }
);