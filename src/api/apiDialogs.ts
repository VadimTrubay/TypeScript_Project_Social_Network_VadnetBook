import {AxiosResponse} from 'axios';
import {mainUrls} from '../config/urls';
import axiosInstance from "../utils/createAxiosInstance";
import {userIdType} from "../types/userTypes";

export const getDialogsApi = async (): Promise<AxiosResponse> => {
  return await axiosInstance.get(mainUrls.dialogs.dialogs);
};


export const createDialogApi = async (userId: userIdType): Promise<AxiosResponse> => {
  return await axiosInstance.post(mainUrls.dialogs.dialogs, userId);
};


export const deleteDialogApi = async (user_id: string): Promise<AxiosResponse> => {
  return await axiosInstance.delete(mainUrls.dialogs.deleteById(user_id));
};

// export const getFollowersApi = async (page: number): Promise<AxiosResponse> => {
//   return await axiosInstance.get(mainUrls.users.followers(page));
// };
//
// export const getFollowingApi = async (page: number): Promise<AxiosResponse> => {
//   return await axiosInstance.get(mainUrls.users.following(page));
// };
//
// export const followApi = async (user_id: string): Promise<AxiosResponse> => {
//   return await axiosInstance.post(mainUrls.users.follow(user_id));
// };
//
// export const unfollowApi = async (user_id: string): Promise<AxiosResponse> => {
//   return await axiosInstance.delete(mainUrls.users.unfollow(user_id));
// };
