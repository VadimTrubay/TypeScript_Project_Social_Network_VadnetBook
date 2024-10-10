import {RequestDialogsUserType} from "./userTypes";

export interface initialMessagesType {
  items: MessageType[] | [];
  refreshed: boolean;
  loading: boolean;
  error: string | null;
}

export interface MessageType {
  id: string;
  created_at: string;
  updated_at: string;
  dialog: string;
  sender: RequestDialogsUserType;
  content: string;
}

export interface  messageDataType {
  dialog: string | null;
  content: string | null;
}
