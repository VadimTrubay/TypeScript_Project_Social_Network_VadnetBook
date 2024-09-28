import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUserById, fetchUsers, fetchFollowers, fetchFollowing, follow, unfollow} from "./operations";
import {initialUsersType} from "../../types/userTypes";
import {toast} from "react-toastify";

const initialUsers: initialUsersType = {
  userById: null,
  users: {
    items: [],
    count: 0,
    next: null,
    previous: null,
  },
  followers: {
    items: [],
    count: 0,
    next: null,
    previous: null,
  },
  following: {
    items: [],
    count: 0,
    next: null,
    previous: null,
  },
  refreshed: false,
  loading: false,
  error: null,
};

const handlePending = (state: initialUsersType) => {
  state.loading = true;
  state.refreshed = false;
};

const handleRejected = (state: initialUsersType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = action.payload;
};

const handleFetchUsersFulfilled = (state: initialUsersType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = null;
  state.users.items = action.payload.results;
  state.users.count = action.payload.count;
  state.users.next = action.payload.next;
  state.users.previous = action.payload.previous;
};

const handleFetchFollowersFulfilled = (state: initialUsersType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = null;
  state.followers.items = action.payload.results;
  state.followers.count = action.payload.count;
  state.followers.next = action.payload.next;
  state.followers.previous = action.payload.previous;
};

const handleFetchFollowingFulfilled = (state: initialUsersType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = null;
  state.following.items = action.payload.results;
  state.following.count = action.payload.count;
  state.following.next = action.payload.next;
  state.following.previous = action.payload.previous;
};

const handleFetchUserByIdFulfilled = (state: initialUsersType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = null;
  state.userById = action.payload;
};


const handleFollowFulfilled = (state: initialUsersType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = null;
  state.refreshed = true;
};

const handleUnfollowFulfilled = (state: initialUsersType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = null;
  state.refreshed = true;
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
      .addCase(fetchFollowers.pending, handlePending)
      .addCase(fetchFollowers.fulfilled, handleFetchFollowersFulfilled)
      .addCase(fetchFollowers.rejected, handleRejected)
      .addCase(fetchFollowing.pending, handlePending)
      .addCase(fetchFollowing.fulfilled, handleFetchFollowingFulfilled)
      .addCase(fetchFollowing.rejected, handleRejected)
      .addCase(follow.pending, handlePending)
      .addCase(follow.fulfilled, handleFollowFulfilled)
      .addCase(follow.rejected, handleRejected)
      .addCase(unfollow.pending, handlePending)
      .addCase(unfollow.fulfilled, handleUnfollowFulfilled)
      .addCase(unfollow.rejected, handleRejected)
});

export const usersReducer = usersSlice.reducer;
