import {createAsyncThunk} from "@reduxjs/toolkit";
import {getUserByIdApi, getUsersApi} from "../../api/apiUsers";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (page: number, thunkAPI) => {
    try {
      const response = await getUsersApi(page);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.detail);
    }
  }
);

export const fetchUserById = createAsyncThunk(
  "users/fetchUserById",
  async (user_id: string, thunkAPI) => {
    try {
      const response = await getUserByIdApi(user_id);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.detail);
    }
  }
);