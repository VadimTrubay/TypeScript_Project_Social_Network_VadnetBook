import {RequestDialogsUserType} from "./userTypes";

export interface initialDialogsType {
  items: DialogType[] | [];
  refreshed: boolean;
  loading: boolean;
  error: string | null;
}

export interface DialogType {
  id: string;
  created_at: string;
  users: RequestDialogsUserType;
}
