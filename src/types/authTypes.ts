export interface initialAuthType {
  me: meType | null;
  profile: profileType | null;
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

export interface profileType {
  user: meType;
  status: string | null;
  website_page: string | null;
  github_page: string | null;
  linkedin_page: string | null;
  looking_from_job: boolean;
  job_skills: string | null;
  about_me: string | null;
  birth_date: string | null;
  profile_picture: string | null;
  phone_number: string | null;
  date_joined: string;
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