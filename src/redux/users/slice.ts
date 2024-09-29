import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUserById, fetchUsers, fetchFollowers, fetchFollowing, follow, unfollow, fetchSearchUsers} from "./operations";
import {initialUsersType} from "../../types/userTypes";

const initialUsers: initialUsersType = {
  userById: null,
  users: {
    items: [],
    count: 0,
  },
  searchUsers: {
    items: [],
    count: 0,
  },
  followers: {
    items: [],
    count: 0,
  },
  following: {
    items: [],
    count: 0,
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
};

const handleFetchFollowersFulfilled = (state: initialUsersType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = null;
  state.followers.items = action.payload.results;
  state.followers.count = action.payload.count;
};

const handleFetchFollowingFulfilled = (state: initialUsersType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = null;
  state.following.items = action.payload.results;
  state.following.count = action.payload.count;
};

const handleFetchUserByIdFulfilled = (state: initialUsersType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = null;
  state.userById = action.payload;
};


const handleFollowFulfilled = (state: initialUsersType) => {
  state.loading = false;
  state.error = null;
  state.refreshed = true;
};

const handleUnfollowFulfilled = (state: initialUsersType) => {
  state.loading = false;
  state.error = null;
  state.refreshed = true;
};

const handleSearchUsersFulfilled = (state: initialUsersType, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = null;
  state.searchUsers.items = action.payload.results;
  state.searchUsers.count = action.payload.count;
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
      .addCase(fetchSearchUsers.pending, handlePending)
      .addCase(fetchSearchUsers.fulfilled, handleSearchUsersFulfilled)
      .addCase(fetchSearchUsers.rejected, handleRejected)
});

export const usersReducer = usersSlice.reducer;
