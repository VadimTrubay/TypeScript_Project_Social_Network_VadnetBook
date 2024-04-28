import * as Yup from "yup";

export const validationSchemaLogin = Yup.object({
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required")
    .min(4, "Email must be at least 4 characters")
    .max(25, "Email must not exceed 52 characters"),
  password: Yup.string("Enter your password")
    .min(4, "Password must be at least 4 characters")
    .max(25, "Password must not exceed 25 characters"),
});
