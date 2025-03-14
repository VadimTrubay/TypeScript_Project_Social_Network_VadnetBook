import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createDialog, deleteDialog, fetchDialogs } from './operations';
import { initialDialogsType } from '../../types/dialogTypes';

const initialDialogs: initialDialogsType = {
  items: [],
  idActiveDialog: null,
  loading: false,
  error: null,
};

const handlePending = (state: initialDialogsType) => {
  state.loading = true;
};

const handleRejected = (state: initialDialogsType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = action.payload;
};

const handleFetchDialogsFulfilled = (state: initialDialogsType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = null;
  state.items = action.payload;
};

const handleCreateDialogFulfilled = (state: initialDialogsType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = null;
  state.idActiveDialog = action.payload.id;
};

const handleDeleteDialogFulfilled = (state: initialDialogsType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = null;
  state.items = state.items.filter((item) => item.id !== action.payload.id);
  // @ts-ignore
  toast.success(`Dialog deleted successfully`);
};

const dialogsSlice = createSlice({
  name: 'dialogs',
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
      .addCase(deleteDialog.rejected, handleRejected),
});

export const dialogsReducer = dialogsSlice.reducer;
