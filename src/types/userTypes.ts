import {profileType} from "./profileTypes";

export interface initialUsersType {
  items: UserType[] | [];
  userById: profileType | null;
  following : UserProfileType | [];
  followers  : UserProfileType | [];
  count: number;
  next: string | null;
  previous: string | null;
  loading: boolean;
  error: string | null;
}

export interface UserType {
  id: string;
  username: string;
  status: string | null;
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