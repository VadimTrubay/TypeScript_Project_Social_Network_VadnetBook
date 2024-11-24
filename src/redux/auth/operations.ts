import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  googleCredType,
  RegisterType,
  UserAuthorizationType,
} from "../../types/authTypes";
import { clearAuthHeader, setAuthHeader } from "../../utils/authUtils";
import {
  getMeApi,
  googleAuthApi,
  signInApi,
  signUpApi,
} from "../../api/apiAuth";

export const signUp: any = createAsyncThunk(
  "auth/signUp",
  async (credentials: RegisterType, thunkAPI) => {
    try {
      const response = await signUpApi(credentials);
      setAuthHeader(response.data.access_token);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.details);
    }
  },
);

export const signIn: any = createAsyncThunk(
  "auth/signIn",
  async (credentials: UserAuthorizationType, thunkAPI) => {
    try {
      const response = await signInApi(credentials);
      setAuthHeader(response.data.access_token);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.details);
    }
  },
);

export const googleAuth: any = createAsyncThunk(
  "auth/googleAuth",
  async (googleCred: googleCredType, thunkAPI) => {
    try {
      const response = await googleAuthApi(googleCred);
      setAuthHeader(response.data.access_token);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.details);
    }
  },
);

export const fetchMe: any = createAsyncThunk("auth/fetchMe", async (_, thunkAPI) => {
  try {
    const response = await getMeApi();
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data.details);
  }
});

export const logOut: any = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
  try {
    clearAuthHeader();
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data.details);
  }
});
