import {profileType} from "./profileTypes";
import {number, string} from "yup";

export interface initialUsersType {
  userById: profileType | null;
  users: {
    items: UserType[] | [];
    count: number;
    next: string | null;
    previous: string | null;
  }
  followers: {
    items: UserType[] | [];
    count: number;
    next: string | null;
    previous: string | null;
  };
  following: {
    items: UserType[] | [];
    count: number;
    next: string | null;
    previous: string | null;
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

export interface RequestListUserType {
  count: number,
  next: string | null,
  previous: string | null,
  result: UserType[] | [],
  friendsList?: RequestListUserType
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