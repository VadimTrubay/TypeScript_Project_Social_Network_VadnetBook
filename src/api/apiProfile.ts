import {AxiosResponse} from 'axios';
import {mainUrls} from '../config/urls';
import axiosInstance from "../utils/createAxiosInstance";
import {photoDataType, statusDataType} from "../types/profileTypes";


export const getMeProfileApi = async (): Promise<AxiosResponse> => {
  return await axiosInstance.get(mainUrls.profile.profile);
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
