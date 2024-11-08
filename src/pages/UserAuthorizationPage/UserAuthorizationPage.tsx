import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { InputAdornment, IconButton, Grid } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { validationSchemaAuthorization } from "../../validate/validationSchemaAuthorization.js";
import { fetchMe, googleAuth, signIn } from "../../redux/auth/operations";
import { AppDispatch } from "../../redux/store";
import { selectIsAuth } from "../../redux/auth/selectors";
import styles from "../UserRegistrationPage/UserRegistrationPage.module.css";
import { initialValueUserAuthorization } from "../../initialValues/initialValues";
import { RouterEndpoints } from "../../config/routes";
import { Login } from "@mui/icons-material";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";

const defaultTheme = createTheme();

const UserAuthorizationPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isAuth = useSelector(selectIsAuth);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: initialValueUserAuthorization,
    validationSchema: validationSchemaAuthorization,
    onSubmit: (values) => {
      if (formik.isValid) {
        dispatch(signIn(values));
        dispatch(fetchMe);
      }
    },
  });

  const handleGoogleLoginSuccess = (response: any) => {
    // const accessToken = response.credential;
    // console.log(`Access token1: ${accessToken}`)
    // const googleCred = {
    //   token: accessToken,
    //   backend: 'google-oauth2',
    //   grant_type: 'convert_token',
    //   client_id: '818320348557-678cnb41bfihf7368pdj2dklmnhf2o2v.apps.googleusercontent.com',
    //   client_secret: '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',
    // }
    // dispatch(googleAuth(googleCred))
    console.log("Google");
    console.log(response);
    const accessToken = response.credential; // You get this from Google's response
    axios
      .post("http://localhost:8000/api/v1/auth/convert-token/", {
        token: accessToken,
        backend: "google-oauth2",
        grant_type: "convert_token",
        client_id:
          "818320348557-678cnb41bfihf7368pdj2dklmnhf2o2v.apps.googleusercontent.com",
        client_secret: "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",
      })
      .then((res) => {
        console.log("Access Token:", res.data.access_token);
        // Store access token in local storage or context
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    !isAuth && (
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box className={styles.box}>
            <Avatar className={styles.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              SignIn
            </Typography>
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              noValidate
              className={styles.box_submit}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                color="primary"
                name="email"
                autoComplete="email"
                autoFocus
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                color="primary"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ textTransform: "none" }}
                sx={{ marginTop: 1, marginBottom: 1 }}
                endIcon={<Login />}
              >
                SignIn
              </Button>
              <GoogleOAuthProvider clientId="818320348557-678cnb41bfihf7368pdj2dklmnhf2o2v.apps.googleusercontent.com">
                <GoogleLogin
                  onSuccess={handleGoogleLoginSuccess}
                  onError={() => {
                    console.log("Google Login Failed");
                  }}
                />
              </GoogleOAuthProvider>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <span className={styles.span}>Don't have an account?</span>
                  <Link to={RouterEndpoints.signup}>SignUp</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    )
  );
};
export default UserAuthorizationPage;
