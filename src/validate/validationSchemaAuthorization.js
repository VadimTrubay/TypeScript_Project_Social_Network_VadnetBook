import * as Yup from 'yup';

export const validationSchemaAuthorization = Yup.object({
  email: Yup.string()
    .email('Enter a valid email')
    .required()
    .min(4, 'Email must be at least 4 characters')
    .max(50, 'Email must not exceed 50 characters'),
  password: Yup.string()
    .min(4, 'Password must be at least 4 characters')
    .max(50, 'Password must not exceed 50 characters'),
});
