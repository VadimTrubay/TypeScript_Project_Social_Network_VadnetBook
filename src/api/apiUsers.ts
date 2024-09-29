import {AxiosResponse} from 'axios';
import {mainUrls} from '../config/urls';
import axiosInstance from "../utils/createAxiosInstance";

export const getUsersApi = async (search: string, page: number): Promise<AxiosResponse> => {
  return await axiosInstance.get(mainUrls.users.users(search, page));
};

export const getUserByIdApi = async (user_id: string): Promise<AxiosResponse> => {
  return await axiosInstance.get(mainUrls.users.userById(user_id));
};

export const getFollowersApi = async (page: number): Promise<AxiosResponse> => {
  return await axiosInstance.get(mainUrls.users.followers(page));
};

export const getFollowingApi = async (page: number): Promise<AxiosResponse> => {
  return await axiosInstance.get(mainUrls.users.following(page));
};

export const followApi = async (user_id: string): Promise<AxiosResponse> => {
  return await axiosInstance.post(mainUrls.users.follow(user_id));
};

export const unfollowApi = async (user_id: string): Promise<AxiosResponse> => {
  return await axiosInstance.delete(mainUrls.users.unfollow(user_id));
};
