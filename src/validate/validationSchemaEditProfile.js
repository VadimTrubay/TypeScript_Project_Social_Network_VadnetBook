import * as Yup from "yup";

export const EditProfileInfoValidationSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, 'min 5 characters')
    .max(50, 'Too Long!'),
  first_name: Yup.string()
    .min(4, 'min 5 characters')
    .max(50, 'Too Long!'),
  last_name: Yup.string()
    .min(4, 'min 5 characters')
    .max(50, 'Too Long!'),
  website_page: Yup.string().matches(/.com|.ua|.site|.dev|.io/gm, 'only .com .ua .site .dev .io domens').nullable()
    .min(4, 'Too Short!')
    .max(100, 'Too Long!'),
  github_page: Yup.string().matches(/github.com|^https:\/\/github.com|http:\/\/github.com/gm, 'Enter correct github URL').nullable()
    .min(10, 'Too Short!')
    .max(100, 'Too Long!'),
  linkedin_page: Yup.string().matches(/linkedin.com|^https:\/\/linkedin.com|http:\/\/linkedin.com/gm, 'Enter correct facebook URL').nullable()
    .min(10, 'Too Short!')
    .max(100, 'Too Long!'),
  looking_from_job: Yup.boolean(),
  aboutMe: Yup.string()
    .min(2, 'min 5 characters')
    .max(50, 'Too Long!'),
  birth_date: Yup.string()
    .min(5, 'min 5 characters')
    .max(12, 'Too Long!'),
  phone_number: Yup.string()
    .min(5, 'min 5 characters')
    .max(50, 'Too Long!'),
  job_skills: Yup.string()
    .min(3, 'min 3 characters')
    .max(500, 'Too Long!'),
});
