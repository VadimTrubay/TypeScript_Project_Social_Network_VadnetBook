export interface initialAuthType {
  me: meType | null;
  access_token: string | null,
  isAuth: boolean,
  loading: boolean;
  error: string | null;
}

export interface meType {
  id: string | null;
  username: string | null;
  email: string | null;
  first_name: string | null;
  last_name: string | null;
}

export interface UserAuthorizationType {
  email: string;
  password: string;
}

export interface UserRegistrationType {
  username: string;
  email: string;
  password: string;
  confirmPassword: string,
}

export interface RegisterType {
  username: string;
  email: string;
  password: string;
}