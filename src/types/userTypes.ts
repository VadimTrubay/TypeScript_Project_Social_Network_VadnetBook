import {profileType} from "./profileTypes";

export interface initialUsersType {
  userById: profileType | null;
  users: {
    items: UserType[] | [];
    count: number;
  };
  followers: {
    items: UserType[] | [];
    count: number;
  };
  following: {
    items: UserType[] | [];
    count: number;
  };
  refreshed: boolean;
  loading: boolean;
  error: string | null;
}

export interface UserType {
  id: string;
  is_friend: boolean;
  status: string | null;
  profile_picture: string | undefined;
}

export interface RequestDialogsUserType {
  id: string;
  username: string;
  profile_picture: string | undefined;
}


export interface UserProfileType {
  id: string;
  username: string;
  email: string;
  first_name: string | null;
  last_name: string | null;
}

export interface UserEditProfileType {
  username: string;
  first_name: string | null;
  last_name: string | null;
}

export interface usersParamsType {
  search: string;
  page: number;
}


export interface userIdType {
  users: string | undefined;
}