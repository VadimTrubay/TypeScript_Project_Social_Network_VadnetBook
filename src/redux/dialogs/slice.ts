import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {createDialog, deleteDialog, fetchDialogs} from "./operations";
import {toast} from "react-toastify";
import {toast_settings} from "../../utils/toasts_settings";
import {initialDialogsType} from "../../types/dialogTypes";

const initialDialogs: initialDialogsType = {
  items: [],
  refreshed: false,
  loading: false,
  error: null,
};

const handlePending = (state: initialDialogsType) => {
  state.loading = true;
  state.refreshed = false;
};

const handleRejected = (state: initialDialogsType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = action.payload;
  // @ts-ignore
  toast.error(`${state.error}`, toast_settings);
};

const handleFetchDialogsFulfilled = (state: initialDialogsType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = null;
  state.items = action.payload;
};

const handleCreateDialogFulfilled = (state: initialDialogsType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = null;
  state.refreshed = true;
};


const handleDeleteDialogFulfilled = (state: initialDialogsType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = null;
  state.items = state.items.filter(item => item.id !== action.payload.id)
  // @ts-ignore
  toast.error(`Dialog deleted successfully`, toast_settings);
};


const dialogsSlice = createSlice({
  name: "dialogs",
  initialState: initialDialogs,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchDialogs.pending, handlePending)
      .addCase(fetchDialogs.fulfilled, handleFetchDialogsFulfilled)
      .addCase(fetchDialogs.rejected, handleRejected)
      .addCase(createDialog.pending, handlePending)
      .addCase(createDialog.fulfilled, handleCreateDialogFulfilled)
      .addCase(createDialog.rejected, handleRejected)
      .addCase(deleteDialog.pending, handlePending)
      .addCase(deleteDialog.fulfilled, handleDeleteDialogFulfilled)
      .addCase(deleteDialog.rejected, handleRejected)
});

export const dialogsReducer = dialogsSlice.reducer;
