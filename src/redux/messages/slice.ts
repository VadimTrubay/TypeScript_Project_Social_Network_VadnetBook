import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {createMessage, deleteMessage, fetchMessages} from "./operations";
import {toast} from "react-toastify";
import {toast_settings} from "../../utils/toasts_settings";
import {initialMessagesType} from "../../types/messageTypes";


const initialMessages: initialMessagesType = {
  items: [],
  refreshed: false,
  loading: false,
  error: null,
};

const handlePending = (state: initialMessagesType) => {
  state.loading = true;
  state.refreshed = false;
};

const handleRejected = (state: initialMessagesType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = action.payload;
  // @ts-ignore
  // toast.error(`${state.error}`, toast_settings);
};

const handleFetchMessagesFulfilled = (state: initialMessagesType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = null;
  state.items = [];
  state.items = action.payload;
};

const handleCreateMessageFulfilled = (state: initialMessagesType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = null;
  state.refreshed = true;
};


const handleDeleteMessageFulfilled = (state: initialMessagesType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = null;
  state.items = state.items.filter(item => item.id !== action.payload.id)
  // @ts-ignore
  toast.success(`Message deleted successfully`, toast_settings);
};


const messagesSlice = createSlice({
  name: "messages",
  initialState: initialMessages,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchMessages.pending, handlePending)
      .addCase(fetchMessages.fulfilled, handleFetchMessagesFulfilled)
      .addCase(fetchMessages.rejected, handleRejected)
      .addCase(createMessage.pending, handlePending)
      .addCase(createMessage.fulfilled, handleCreateMessageFulfilled)
      .addCase(createMessage.rejected, handleRejected)
      .addCase(deleteMessage.pending, handlePending)
      .addCase(deleteMessage.fulfilled, handleDeleteMessageFulfilled)
      .addCase(deleteMessage.rejected, handleRejected)
});

export const messagesReducer = messagesSlice.reducer;
