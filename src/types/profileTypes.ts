import { UserEditProfileType, UserProfileType } from "./userTypes";

export interface initialProfileType {
  profile: profileType;
  loading: boolean;
  error: string | null;
}

export interface profileType {
  user: UserProfileType;
  is_friend: boolean;
  status: string | null;
  about_me: string | null;
  website_page: string | null;
  github_page: string | null;
  linkedin_page: string | null;
  looking_from_job: boolean;
  job_skills: string | null;
  birth_date: string | null;
  profile_picture: string | null;
  phone_number: string | null;
}

export interface EditProfileType {
  user: UserEditProfileType;
  about_me: string | null;
  website_page: string | null;
  github_page: string | null;
  linkedin_page: string | null;
  looking_from_job: boolean;
  job_skills: string | null;
  birth_date: string | null;
  phone_number: string | null;
}

export interface statusDataType {
  status: string;
}

export interface photoDataType {
  profile_picture: File;
}
