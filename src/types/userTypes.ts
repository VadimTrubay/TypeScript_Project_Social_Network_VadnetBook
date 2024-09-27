export interface initialUsersType {
  items: UserType[] | [];
  count: number;
  next: string | null;
  previous: string | null;
  loading: boolean;
  error: string | null;
}

export interface UserType {
  id: string;
  username: string;
  followed: boolean;
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