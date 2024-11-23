import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createMessageApi,
  deleteMessageApi,
  getMessagesApi,
} from "../../api/apiMessages";
import {
  deleteMessageDataType,
  messageDataType,
} from "../../types/messageTypes";

export const fetchMessages: any = createAsyncThunk(
  "messages/fetchMessages",
  async (dialog_id: string, thunkAPI) => {
    try {
      const response = await getMessagesApi(dialog_id);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.detail);
    }
  },
);

export const createMessage: any = createAsyncThunk(
  "messages/createMessage",
  async (messageData: messageDataType, thunkAPI) => {
    try {
      const response = await createMessageApi(messageData);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.detail);
    }
  },
);

export const deleteMessage: any = createAsyncThunk(
  "messages/deleteMessage",
  async (data: deleteMessageDataType, thunkAPI) => {
    try {
      const response = await deleteMessageApi(data.dialog_id, data.message_id);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.detail);
    }
  },
);
