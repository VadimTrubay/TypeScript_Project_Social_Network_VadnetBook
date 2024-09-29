import {AxiosResponse} from 'axios';
import {mainUrls} from '../config/urls';
import axiosInstance from "../utils/createAxiosInstance";
import {EditProfileType, statusDataType} from "../types/profileTypes";


export const getMeProfileApi = async (): Promise<AxiosResponse> => {
  return await axiosInstance.get(mainUrls.profile.profile);
};

export const editProfileApi = async (profileData: EditProfileType): Promise<AxiosResponse> => {
  return await axiosInstance.patch(mainUrls.profile.edit, profileData);
};

export const deleteProfileApi = async (): Promise<AxiosResponse> => {
  return await axiosInstance.delete(mainUrls.profile.delete);
};

export const setStatusProfileApi = async (statusData: statusDataType): Promise<AxiosResponse> => {
  return await axiosInstance.put(mainUrls.profile.setStatus, statusData);
};

export const setPhotoProfileApi = async (photoData: FormData): Promise<AxiosResponse> => {
  return await axiosInstance.put(mainUrls.profile.setPhoto, photoData, {
    headers: {
      'Content-Type': 'multipart/form-data',  // Ensure multipart form data is set
    },
  });
};
