import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const axiosCustomInstance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "2606b888-8484-4e56-ac3e-483848e15f9a",
  },
});


export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (currentPage = 1, pageSize = 10, onlyFriends = null, thunkAPI) => {
    try {
      const response = await axiosCustomInstance.get(`users?page=${currentPage}&count=${pageSize}&friend=${onlyFriends}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
