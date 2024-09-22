import {createAsyncThunk} from "@reduxjs/toolkit";
import {getUsersApi} from "../../api/apiUsers";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    try {
      const response = await getUsersApi();
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
