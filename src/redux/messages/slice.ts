// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { createMessage, deleteMessage, fetchMessages } from "./operations";
// import { toast } from "react-toastify";
// import { toast_settings } from "../../utils/toasts_settings";
// import { initialMessagesType } from "../../types/messageTypes";
//
// const initialMessages: initialMessagesType = {
//   items: [],
//   loading: false,
//   error: null,
// };
//
// const handlePending = (state: initialMessagesType) => {
//   state.loading = true;
// };
//
// const handleRejected = (
//   state: initialMessagesType,
//   action: PayloadAction<any>,
// ) => {
//   state.loading = false;
//   state.error = action.payload;
// };
//
// const handleFetchMessagesFulfilled = (
//   state: initialMessagesType,
//   action: PayloadAction<any>,
// ) => {
//   state.loading = false;
//   state.error = null;
//   state.items = [];
//   state.items = action.payload;
// };
//
// const handleCreateMessageFulfilled = (
//   state: initialMessagesType,
//   action: PayloadAction<any>,
// ) => {
//   state.loading = false;
//   state.error = null;
// };
//
// const handleDeleteMessageFulfilled = (
//   state: initialMessagesType,
//   action: PayloadAction<any>,
// ) => {
//   state.loading = false;
//   state.error = null;
//   // @ts-ignore
//   toast.success(`Message deleted successfully`, toast_settings);
// };
//
// const messagesSlice = createSlice({
//   name: "messages",
//   initialState: initialMessages,
//   reducers: {},
//   extraReducers: (builder) =>
//     builder
//       .addCase(fetchMessages.pending, handlePending)
//       .addCase(fetchMessages.fulfilled, handleFetchMessagesFulfilled)
//       .addCase(fetchMessages.rejected, handleRejected)
//       .addCase(createMessage.pending, handlePending)
//       .addCase(createMessage.fulfilled, handleCreateMessageFulfilled)
//       .addCase(createMessage.rejected, handleRejected)
//       .addCase(deleteMessage.pending, handlePending)
//       .addCase(deleteMessage.fulfilled, handleDeleteMessageFulfilled)
//       .addCase(deleteMessage.rejected, handleRejected),
// });
//
// export const messagesReducer = messagesSlice.reducer;


import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { toast_settings } from "../../utils/toasts_settings";
import { initialMessagesType } from "../../types/messageTypes";

// Начальное состояние
const initialMessages: initialMessagesType = {
  items: [],
  loading: false,
  error: null,
};

// Слайс сообщений
const messagesSlice = createSlice({
  name: "messages",
  initialState: initialMessages,
  reducers: {
    setMessages: (state, action: PayloadAction<any[]>) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    addMessage: (state, action: PayloadAction<any>) => {
      state.items.push(action.payload);
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteMessage: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((message) => message.id !== action.payload);
      toast.success(`Message deleted successfully`, toast_settings);
    },
  },
  extraReducers: (builder) => {
    // Здесь можно добавить дополнительные обработчики для других действий, если это необходимо
  },
});

export const { setMessages, addMessage, setLoading, setError, deleteMessage } = messagesSlice.actions;

export const messagesReducer = messagesSlice.reducer;
