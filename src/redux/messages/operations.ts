import {createAsyncThunk} from "@reduxjs/toolkit";
import {createMessageApi, deleteMessageApi, getMessagesApi} from "../../api/apiMessages";
import {messageDataType} from "../../types/messageTypes";


export const fetchMessages = createAsyncThunk(
  "messages/fetchMessages",
  async (dialog_id: string, thunkAPI) => {
    try {
      const response = await getMessagesApi(dialog_id);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.detail);
    }
  }
);

export const createMessage = createAsyncThunk(
  "messages/createMessage",
  async (messageData: messageDataType, thunkAPI) => {
    try {
      const response = await createMessageApi(messageData);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.detail);
    }
  }
);

export const deleteMessage = createAsyncThunk(
  "messages/deleteMessage",
  async (message_id: string, thunkAPI) => {
    try {
      const response = await deleteMessageApi(message_id);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.detail);
    }
  }
);
