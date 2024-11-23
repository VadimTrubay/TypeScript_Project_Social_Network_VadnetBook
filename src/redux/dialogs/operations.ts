import { createAsyncThunk } from "@reduxjs/toolkit";
import { userIdType } from "../../types/userTypes";
import {
  createDialogApi,
  deleteDialogApi,
  getDialogsApi,
} from "../../api/apiDialogs";

export const fetchDialogs: any = createAsyncThunk(
  "dialogs/fetchDialogs",
  async (_, thunkAPI) => {
    try {
      const response = await getDialogsApi();
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.detail);
    }
  },
);

export const createDialog: any = createAsyncThunk(
  "dialogs/createDialog",
  async (userId: userIdType, thunkAPI) => {
    try {
      const response = await createDialogApi(userId);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.detail);
    }
  },
);

export const deleteDialog: any = createAsyncThunk(
  "dialogs/deleteDialog",
  async (dialog_id: string, thunkAPI) => {
    try {
      const response = await deleteDialogApi(dialog_id);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.detail);
    }
  },
);
