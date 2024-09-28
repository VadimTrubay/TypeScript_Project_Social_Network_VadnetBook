import {AxiosResponse} from 'axios';
import {mainUrls} from '../config/urls';
import axiosInstance from "../utils/createAxiosInstance";

export const getUsersApi = async (page: number): Promise<AxiosResponse> => {
  return await axiosInstance.get(mainUrls.users.users(page));
};

export const getUserByIdApi = async (user_id: string): Promise<AxiosResponse> => {
  return await axiosInstance.get(mainUrls.users.userById(user_id));
};
