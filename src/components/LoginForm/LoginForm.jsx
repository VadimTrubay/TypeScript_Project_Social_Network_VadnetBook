import {useDispatch} from "react-redux";
import styles from "./LoginForm.module.css"
import {Field, Form, Formik, useFormik} from "formik";
import {logIn} from "../../redux/auth/operations.js";
import {validationSchemaLogin} from "../../validate/validationSchemaLogin.js";

const LoginForm = () => {
  const dispatch = useDispatch();


  const initialValues = {
    email: 'free@samuraijs.com',
    password: 'free',
    remember: "",
    captcha: '',
  }

  const handleSubmit = values => {
    console.log(values)
    dispatch(logIn({...values}));
  };

  return (
    <div>
      <h1 className={styles.title}>Login</h1>

      <div className={styles.testedDataWrapper}>
        <div className={styles.testedDataTitle}>Test account:</div>
        <div className={styles.testedData}>Login: free@samuraijs.com</div>
        <div className={styles.testedData}>Password: free</div>

        <button className={styles.loginTestAccountButton} onClick={() => {
          dispatch(logIn(initialValues));
        }}>Login test account
        </button>
      </div>

      <div className={styles.afterDataText}>or login your account:</div>

      <Formik
        initialValues={{
          email: '',
          password: '',
          remember: '',
          captcha: '',
        }}
        validationSchema={validationSchemaLogin}
        onSubmit={(values, actions) => {
          handleSubmit(values);
          actions.resetForm();
        }}
      >
        {({errors, touched, dirty, isValid}) => {
          return <Form>
            <div className={styles.formWrapper}>
              <div className={styles.inputWrapper}>
                <label htmlFor="login">Email:</label>
                <Field className={styles.input} id="email" name="email" placeholder="Your email" type="text"/>
                {errors.email && touched.email && <div className={styles.errorBlock}>{errors.email}</div>}
              </div>
              <div className={styles.inputWrapper}>
                <label htmlFor="password">Password:</label>
                <Field className={styles.input} id="password" name="password" placeholder="Your password"/>
                {errors.password && touched.password && <div className={styles.errorBlock}>{errors.password}</div>}
              </div>

              <div className={styles.inputWrapper + ' ' + styles.checkboxWrapper}>
                <label htmlFor="remember" className={styles.checkboxLabel}>Remember me</label>
                <Field className={styles.checkbox} id="remember" name="remember" type="checkbox"/>
              </div>

              {/*<div className={`${styles.generalErrorFetchingWrapper} ${isError ? styles.setHeightErrorWrapper : ''} `}>*/}
              {/*  {isError ? <div className={styles.generalErrorFetching}>{errorMessage}</div> : ''}*/}
              {/*</div>*/}

              {/*{captchaUrl ?*/}
              {/*  <div className={styles.inputWrapper}>*/}
              {/*    <img src={captchaUrl} alt="captcha"/>*/}
              {/*<Field className={styles.checkbox} id="captcha" name="captcha" placeholder="Captcha"/>*/}
              {/*  </div> : ''*/}
              {/*}*/}

              <div className={styles.buttonWrapper}>
                <button type="submit" className={styles.authButton}>Log In</button>
                {/*<div className={styles.preloaderWrapper}>{isFetching ? <Preloader/> : ''}</div>*/}
              </div>
            </div>
          </Form>
        }}
      </Formik>
    </div>
  )
};

export default LoginForm;
