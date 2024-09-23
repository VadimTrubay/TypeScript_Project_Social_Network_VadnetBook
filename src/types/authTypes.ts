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
  profile_picture: string | undefined;
}

export interface authType {
  id: number;
  username: string;
  email: string;
  password: string;
  new_password: string;
}

export interface authUserType {
  id: number;
  username: string;
  email: string;
  password: string;
}

export interface UserAuthorizationType {
  email: string;
  password: string;
}

export interface UserRegistrationType {
  username: string;
  email: string;
  home_page: string;
  password: string;
  confirmPassword: string,
}

export interface RegisterType {
  username: string;
  email: string;
  password: string;
}