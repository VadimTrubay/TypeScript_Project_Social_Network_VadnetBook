import { AxiosResponse } from "axios";
import { mainUrls } from "../config/urls";
import axiosInstance from "../utils/createAxiosInstance";
import { messageDataType } from "../types/messageTypes";

export const getMessagesApi = async (
  dialog_id: string,
): Promise<AxiosResponse> => {
  return await axiosInstance.get(mainUrls.messages.messagesByDialog(dialog_id));
};

export const createMessageApi = async (
  messageData: messageDataType,
): Promise<AxiosResponse> => {
  return await axiosInstance.post(
    mainUrls.messages.messagesByDialog(messageData.dialog),
    messageData,
  );
};

export const deleteMessageApi = async (
  dialog_id: string,
  message_id: string,
): Promise<AxiosResponse> => {
  return await axiosInstance.delete(
    mainUrls.messages.deleteMessagesByDialog(dialog_id, message_id),
  );
};
