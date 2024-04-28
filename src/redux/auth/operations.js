import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = {
  "API-KEY": "2606b888-8484-4e56-ac3e-483848e15f9a"
};

const axiosCustomInstance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "2606b888-8484-4e56-ac3e-483848e15f9a"
  }
});

// const setAuthHeader = (api_key) => {
//   axios.defaults.headers = api_key;
// };

const clearAuthHeader = () => {
  axios.defaults.headers = "";
};

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axiosCustomInstance.post("/auth/login", credentials);
      // setAuthHeader(API_KEY);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logout",
  async (credentials, thunkAPI) => {
    try {
      await axiosCustomInstance.post("/auth/logout", credentials);
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

