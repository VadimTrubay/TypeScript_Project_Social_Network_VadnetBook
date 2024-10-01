import {AxiosResponse} from 'axios';
import {googleCredType, RegisterType, UserAuthorizationType} from '../types/authTypes';
import {mainUrls} from '../config/urls';
import axiosInstance from "../utils/createAxiosInstance";


export const signUpApi = async (credentials: RegisterType): Promise<AxiosResponse> => {
  return await axiosInstance.post(mainUrls.auth.signup, credentials);
};

export const signInApi = async (credentials: UserAuthorizationType): Promise<AxiosResponse> => {
  return await axiosInstance.post(mainUrls.auth.signin, credentials);
};


export const googleAuthApi = async (googleCred: googleCredType): Promise<AxiosResponse> => {
  return await axiosInstance.post(mainUrls.auth.googleAuth, googleCred);
};

export const getMeApi = async (): Promise<AxiosResponse> => {
  return await axiosInstance.get(mainUrls.auth.me);
};
