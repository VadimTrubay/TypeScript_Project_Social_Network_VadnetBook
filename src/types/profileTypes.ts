import {UserProfileType, UserType} from "./userTypes";

export interface initialProfileType {
  profile: profileType | null;
  loading: boolean;
  error: string | null;
}

export interface profileType {
  user: UserProfileType;
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

export interface statusDataType {
  status: string
}

export interface photoDataType {
  profile_picture: File
}
