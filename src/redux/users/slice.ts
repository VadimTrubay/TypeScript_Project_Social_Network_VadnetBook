import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./operations";
import {initialUsersType} from "../../types/authTypes";

const initialUsers: initialUsersType = {
  items: [],
  count: 0,
  next: null,
  previous: null,
  loading: false,
  error: null,
};

const handlePending = (state: initialUsersType) => {
  state.loading = true;
};

const handleFetchUsersFulfilled = (state: initialUsersType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = null;
  state.items = action.payload.results;
  state.count = action.payload.count;
  state.next = action.payload.next;
  state.previous = action.payload.previous;
};

const handleRejected = (state: initialUsersType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = action.payload;
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialUsers,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchUsers.pending, handlePending)
      .addCase(fetchUsers.fulfilled, handleFetchUsersFulfilled)
      .addCase(fetchUsers.rejected, handleRejected),
});

export const usersReducer = usersSlice.reducer;
