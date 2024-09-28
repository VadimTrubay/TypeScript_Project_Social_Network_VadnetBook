import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUserById, fetchUsers} from "./operations";
import {initialUsersType} from "../../types/userTypes";
import {toast} from "react-toastify";

const initialUsers: initialUsersType = {
  items: [],
  following: [],
  followers: [],
  userById: null,
  count: 0,
  next: null,
  previous: null,
  loading: false,
  error: null,
};

const handlePending = (state: initialUsersType) => {
  state.loading = true;
};

const handleRejected = (state: initialUsersType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = action.payload;
};

const handleFetchUsersFulfilled = (state: initialUsersType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = null;
  state.items = action.payload.results;
  state.count = action.payload.count;
  state.next = action.payload.next;
  state.previous = action.payload.previous;
};

const handleFetchUserByIdFulfilled = (state: initialUsersType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = null;
  state.userById = action.payload;
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialUsers,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchUsers.pending, handlePending)
      .addCase(fetchUsers.fulfilled, handleFetchUsersFulfilled)
      .addCase(fetchUsers.rejected, handleRejected)
      .addCase(fetchUserById.pending, handlePending)
      .addCase(fetchUserById.fulfilled, handleFetchUserByIdFulfilled)
      .addCase(fetchUserById.rejected, handleRejected)
});

export const usersReducer = usersSlice.reducer;
