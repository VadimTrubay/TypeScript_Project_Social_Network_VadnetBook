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


export const deleteDialogApi = async (dialog_id: string): Promise<AxiosResponse> => {
  return await axiosInstance.delete(mainUrls.dialogs.deleteDialogById(dialog_id));
};
