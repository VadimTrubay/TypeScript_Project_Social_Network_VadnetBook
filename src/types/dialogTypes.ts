import { RequestDialogsUserType } from './userTypes';

export interface initialDialogsType {
  items: DialogType[] | [];
  idActiveDialog: string | null;
  loading: boolean;
  error: string | null;
}

export interface DialogType {
  id: string;
  created_at: string;
  users: RequestDialogsUserType;
}
