import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Invalid name format")
    .required("Name is required")
    .min(4, "Name must be at least 4 characters")
    .max(25, "Name must not exceed 25 characters"),
  number: Yup.string()
    .matches(
      /\+\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,
      "Invalid number format"
    )
    .required("Number is required")
    .min(6, "Number must be at least 6 characters")
    .max(18, "Number must not exceed 18 characters"),
});
