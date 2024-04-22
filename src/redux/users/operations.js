import { createAsyncThunk } from "@reduxjs/toolkit";
import { usersApi } from "../../api/api.js";

export const fetchContacts = createAsyncThunk(
  "users/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await usersApi.getContacts();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
