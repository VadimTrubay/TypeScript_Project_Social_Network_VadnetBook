import {createAsyncThunk} from "@reduxjs/toolkit";
import {getMeProfileApi, setStatusProfileApi} from "../../api/apiProfile";
import {statusDataType} from "../../types/profileTypes";



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
