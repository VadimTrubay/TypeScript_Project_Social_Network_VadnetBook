import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getUserByIdApi,
  getUsersApi,
  getFollowersApi,
  getFollowingApi,
  followApi,
  unfollowApi,
} from "../../api/apiUsers";
import { usersParamsType } from "../../types/userTypes";

export const fetchUsers: any = createAsyncThunk(
  "users/fetchUsers",
  async (usersParams: usersParamsType, thunkAPI) => {
    try {
      const response = await getUsersApi(usersParams.search, usersParams.page);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.details);
    }
  },
);

export const fetchUserById: any = createAsyncThunk(
  "users/fetchUserById",
  async (user_id: string, thunkAPI) => {
    try {
      const response = await getUserByIdApi(user_id);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.details);
    }
  },
);

export const fetchFollowers: any = createAsyncThunk(
  "users/fetchFollowers",
  async (page: number, thunkAPI) => {
    try {
      const response = await getFollowersApi(page);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.details);
    }
  },
);

export const fetchFollowing: any = createAsyncThunk(
  "users/fetchFollowing",
  async (page: number, thunkAPI) => {
    try {
      const response = await getFollowingApi(page);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.details);
    }
  },
);

export const follow: any = createAsyncThunk(
  "users/follow",
  async (user_id: string, thunkAPI) => {
    try {
      const response = await followApi(user_id);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.details);
    }
  },
);

export const unfollow: any = createAsyncThunk(
  "users/unfollow",
  async (user_id: string, thunkAPI) => {
    try {
      const response = await unfollowApi(user_id);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.details);
    }
  },
);
