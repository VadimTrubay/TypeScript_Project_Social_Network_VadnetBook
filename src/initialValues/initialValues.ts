import {
  UserAuthorizationType,
  UserRegistrationType
} from "../types/authTypes";
import {EditProfileType} from "../types/profileTypes";

export const pageSize = 10;  // Adjust the page size as per your requirement


export const initialValueUserAuthorization: UserAuthorizationType = {
  email: "",
  password: "",
};

export const initialValueUserRegistration: UserRegistrationType = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
}

export const initialValueUserProfile: EditProfileType = {
  user: {
    first_name: "",
    last_name: "",
  },
  about_me: "",
  website_page: "",
  github_page: "",
  linkedin_page: "",
  looking_from_job: false,
  job_skills: "",
  birth_date: "",
  phone_number: "",
}