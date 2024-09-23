import {createAsyncThunk} from "@reduxjs/toolkit";
import {getUsersApi} from "../../api/apiUsers";

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
