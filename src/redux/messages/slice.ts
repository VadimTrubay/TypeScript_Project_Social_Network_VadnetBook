import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialMessagesType } from '../../types/messageTypes';
import toast from 'react-hot-toast';

const initialMessages: initialMessagesType = {
  items: [],
  loading: false,
  error: null,
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState: initialMessages,
  reducers: {
    setMessages: (state, action: PayloadAction<any[]>) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    addMessage: (state, action: PayloadAction<any>) => {
      // @ts-ignore
      state.items.push(action.payload);
    },
    // setLoading: (state) => {
    //   state.loading = true;
    // },
    // setError: (state, action: PayloadAction<any>) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
    // deleteMessage: (state, action: PayloadAction<string>) => {
    //   state.items = state.items.filter((message) => message.id !== action.payload);
    //   toast.success(`Message deleted successfully`);
    // },
  },
  extraReducers: () => {
    // Здесь можно добавить дополнительные обработчики для других действий, если это необходимо
  },
});

export const { setMessages, addMessage } = messagesSlice.actions;

export const messagesReducer = messagesSlice.reducer;
