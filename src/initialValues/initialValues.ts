import {
  UserAuthorizationType,
  UserRegistrationType
} from "../types/authTypes";

export const initialValueUserAuthorization: UserAuthorizationType = {
  email: "",
  password: "",
};

export const initialValueUserRegistration: UserRegistrationType = {
  username: "",
  email: "",
  home_page: "",
  password: "",
  confirmPassword: "",
}