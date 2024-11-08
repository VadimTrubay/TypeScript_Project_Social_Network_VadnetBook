import { RequestDialogsUserType } from "./userTypes";

export interface initialMessagesType {
  items: MessageType[] | [];
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

export interface messageDataType {
  dialog: string | null;
  content: string | null;
}

export interface deleteMessageDataType {
  dialog_id: string;
  message_id: string;
}
