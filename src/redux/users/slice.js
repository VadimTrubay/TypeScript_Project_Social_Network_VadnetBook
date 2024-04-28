import {createSlice} from "@reduxjs/toolkit";
import {fetchUsers} from "./operations";

const initialUsers = {
  items: [],
  totalCount: 0,
  loading: false,
  error: null,
  api_key: null
};

const handlePending = (state) => {
  state.loading = true;
};

const handleFetchUsersFulfilled = (state, action) => {
  state.loading = false;
  state.error = null;
  state.items = action.payload.items;
  state.totalCount = action.payload.totalCount;
  // console.log(state.items);
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialUsers,
  extraReducers: (builder) =>
    builder
      .addCase(fetchUsers.pending, handlePending)
      .addCase(fetchUsers.fulfilled, handleFetchUsersFulfilled)
      .addCase(fetchUsers.rejected, handleRejected),
});

export const usersReducer = usersSlice.reducer;
