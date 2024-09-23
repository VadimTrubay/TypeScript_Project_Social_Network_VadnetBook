import {AxiosResponse} from 'axios';
import {mainUrls} from '../config/urls';
import axiosInstance from "../utils/createAxiosInstance";

export const getUsersApi = async (page: number): Promise<AxiosResponse> => {
  return await axiosInstance.get(mainUrls.auth.users(page));
};
