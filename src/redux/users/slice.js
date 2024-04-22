import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./operations.js";
import toast from "react-hot-toast";

const initialUsers = {
  items: [],
  loading: false,
  error: null,
};

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
  toast.error(`Error: ${action.payload}`);
};

const handleFetchUsersFulfilled = (state, action) => {
  state.loading = false;
  state.error = null;
  state.items = action.payload;
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialUsers,
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFetchUsersFulfilled)
      .addCase(fetchContacts.rejected, handleRejected),
});

export const usersReducer = usersSlice.reducer;
