import React, { useEffect } from "react";
import styles from "./EditProfile.module.css";
import { Field, Form, Formik, FormikErrors } from "formik";
import { EditProfileInfoValidationSchema } from "../../../../../validate/validationSchemaEditProfile";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../redux/store";
import {
  editProfile,
  fetchMeProfile,
} from "../../../../../redux/profile/operations";
import { fetchMe } from "../../../../../redux/auth/operations";

// @ts-ignore
const EditProfile = ({ profile, setEditeProfile }) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchMeProfile());
    dispatch(fetchMe());
  }, [dispatch]);

  const createFormikTextField = (
    formDataName: string | undefined,
    labelTitle:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | Iterable<React.ReactNode>
      | null
      | undefined,
    placeholder: string,
    errorsObject: FormikErrors<{
      username: any;
      about_me: any;
      first_name: any;
      last_name: any;
      website_page: any;
      github_page: any;
      linkedin_page: any;
      looking_from_job: any;
      job_skills: any;
      birth_date: any;
      phone_number: any;
    }>,
  ) => {
    // @ts-ignore
    // @ts-ignore
    return (
      <div className={styles.inputWrapper}>
        <label htmlFor={formDataName}>{labelTitle}:</label>
        <Field
          className={styles.input}
          id={formDataName}
          name={formDataName}
          placeholder={placeholder}
          type="text"
        />
        {errorsObject[formDataName] && (
          <div className={styles.errorBlock}>{errorsObject[formDataName]}</div>
        )}
      </div>
    );
  };

  return (
    <div className={styles.modalWrapper}>
      <div
        className={styles.modalWrapperGrayOpacity}
        onClick={() => setEditeProfile(false)}
      ></div>

      <Formik
        initialValues={{
          username: profile.user.username || "",
          about_me: profile.about_me || "",
          first_name: profile.user.first_name || "",
          last_name: profile.user.last_name || "",
          website_page: profile.website_page || "",
          github_page: profile.github_page || "",
          linkedin_page: profile.linkedin_page || "",
          looking_from_job: profile.looking_from_job,
          job_skills: profile.job_skills || "",
          birth_date: profile.birth_date || "",
          phone_number: profile.phone_number || "",
        }}
        validationSchema={EditProfileInfoValidationSchema}
        onSubmit={(formData) => {
          dispatch(
            editProfile({
              user: {
                username: formData.username === "" ? null : formData.username,
                first_name:
                  formData.first_name === "" ? null : formData.first_name,
                last_name:
                  formData.last_name === "" ? null : formData.last_name,
              },
              about_me: formData.about_me === "" ? null : formData.about_me,
              website_page:
                formData.website_page === "" ? null : formData.website_page,
              github_page:
                formData.github_page === "" ? null : formData.github_page,
              linkedin_page:
                formData.linkedin_page === "" ? null : formData.linkedin_page,
              looking_from_job:
                formData.looking_from_job === null
                  ? false
                  : formData.looking_from_job,
              job_skills:
                formData.job_skills === "" ? null : formData.job_skills,
              birth_date:
                formData.birth_date === "" ? null : formData.birth_date,
              phone_number:
                formData.phone_number === "" ? null : formData.phone_number,
            }),
          );
          setEditeProfile(false);
        }}
      >
        {({ errors, dirty, isValid }) => {
          return (
            <Form className={styles.formzindex}>
              <div className={styles.modalBlock}>
                <button
                  className={styles.closeButton}
                  onClick={() => setEditeProfile(false)}
                  type="button"
                ></button>
                <div className={styles.leftBlock}>
                  <span className={styles.modalBlockSubtitle}>
                    General info:
                  </span>

                  {createFormikTextField(
                    "username",
                    "Your username",
                    "Change your username",
                    errors,
                  )}
                  {createFormikTextField(
                    "first_name",
                    "Your first name",
                    "Change your first name",
                    errors,
                  )}
                  {createFormikTextField(
                    "last_name",
                    "Your last name",
                    "Change your last name",
                    errors,
                  )}
                  {createFormikTextField(
                    "about_me",
                    "About Me",
                    "Change about me info",
                    errors,
                  )}
                  {createFormikTextField(
                    "birth_date",
                    "Birth date",
                    "Change about me info",
                    errors,
                  )}
                  {createFormikTextField(
                    "phone_number",
                    "Phone number",
                    "Change phone number",
                    errors,
                  )}
                </div>

                <div className={styles.rightContactsBlock}>
                  <span className={styles.modalBlockSubtitle}>Contacts:</span>
                  {createFormikTextField(
                    "website_page",
                    "Website",
                    "your website",
                    errors,
                  )}
                  {createFormikTextField(
                    "github_page",
                    "Github",
                    "your github account",
                    errors,
                  )}
                  {createFormikTextField(
                    "linkedin_page",
                    "Linkedin",
                    "your linkedin account",
                    errors,
                  )}

                  <span className={styles.modalBlockSubtitle}>Job status:</span>
                  {createFormikTextField(
                    "job_skills",
                    "Job skills",
                    "select search job description",
                    errors,
                  )}
                  <div
                    className={
                      styles.inputWrapper + " " + styles.checkboxWrapper
                    }
                  >
                    <label
                      htmlFor="looking_from_job"
                      className={styles.checkboxLabel}
                    >
                      looking for a job
                    </label>
                    <Field
                      className={styles.checkbox}
                      id="looking_from_job"
                      name="looking_from_job"
                      type="checkbox"
                    />
                  </div>
                </div>
                <div className={styles.confirmButtonsBlock}>
                  <div className={styles.buttonWrapper}>
                    <button
                      type="submit"
                      className={styles.authButton}
                      disabled={!(isValid && dirty)}
                    >
                      Change
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
export default EditProfile;
