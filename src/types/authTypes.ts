export interface initialUsersType {
  items: UserType[] | [];
  count: number;
  next: string | null,
  previous: string | null,
  loading: boolean;
  error: string | null;
}

export interface UserType {
  id: string;
  username: string;
  followed: boolean,
  status: string | null;
  profile_picture: string | null;
}
