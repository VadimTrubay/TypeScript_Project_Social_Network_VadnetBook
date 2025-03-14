import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { toast_settings } from '../../utils/toasts_settings';
import { initialMessagesType } from '../../types/messageTypes';

// Начальное состояние
const initialMessages: initialMessagesType = {
  items: [],
  loading: false,
  error: null,
};

// Слайс сообщений
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
      // @ts-ignore
      toast.success(`Message deleted successfully`, toast_settings);
    },
  },
  extraReducers: () => {
    // Здесь можно добавить дополнительные обработчики для других действий, если это необходимо
  },
});

export const { setMessages, addMessage, setLoading, setError, deleteMessage } =
  messagesSlice.actions;

export const messagesReducer = messagesSlice.reducer;
