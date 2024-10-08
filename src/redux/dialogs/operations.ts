import {createAsyncThunk} from "@reduxjs/toolkit";
import {
  getUserByIdApi,
  getUsersApi,
  getFollowersApi,
  getFollowingApi,
  followApi,
  unfollowApi,
} from "../../api/apiUsers";
import {userIdType, usersParamsType} from "../../types/userTypes";
import {createDialogApi, deleteDialogApi, getDialogsApi} from "../../api/apiDialogs";


export const fetchDialogs = createAsyncThunk(
  "dialogs/fetchDialogs",
  async (_, thunkAPI) => {
    try {
      const response = await getDialogsApi();
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.detail);
    }
  }
);

export const createDialog = createAsyncThunk(
  "dialogs/createDialog",
  async (userId: userIdType, thunkAPI) => {
    try {
      const response = await createDialogApi(userId);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.detail);
    }
  }
);

export const deleteDialog = createAsyncThunk(
  "dialogs/deleteDialog",
  async (user_id: string, thunkAPI) => {
    try {
      const response = await deleteDialogApi(user_id);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.detail);
    }
  }
);

// export const fetchFollowers = createAsyncThunk(
//   "dialogs/fetchFollowers",
//   async (page: number, thunkAPI) => {
//     try {
//       const response = await getFollowersApi(page);
//       return response.data;
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(error.response.data.detail);
//     }
//   }
// );
//
// export const fetchFollowing = createAsyncThunk(
//   "dialogs/fetchFollowing",
//   async (page: number, thunkAPI) => {
//     try {
//       const response = await getFollowingApi(page);
//       return response.data;
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(error.response.data.detail);
//     }
//   }
// );
//
// export const follow = createAsyncThunk(
//   "dialogs/follow",
//   async (user_id: string, thunkAPI) => {
//     try {
//       const response = await followApi(user_id);
//       return response.data;
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(error.response.data.detail);
//     }
//   }
// );
//
// export const unfollow = createAsyncThunk(
//   "dialogs/unfollow",
//   async (user_id: string, thunkAPI) => {
//     try {
//       const response = await unfollowApi(user_id);
//       return response.data;
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(error.response.data.detail);
//     }
//   }
// );
