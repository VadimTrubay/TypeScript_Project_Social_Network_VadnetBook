import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useFormik} from "formik";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {InputAdornment, IconButton, Grid} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {validationSchemaAuthorization} from "../../validate/validationSchemaAuthorization.js";
import {signIn} from "../../redux/auth/operations";
import {AppDispatch} from "../../redux/store";
import {selectIsAuth} from "../../redux/auth/selectors";
import styles from "../UserRegistrationPage/UserRegistrationPage.module.css";
import {initialValueUserAuthorization} from "../../initialValues/initialValues";
import {RouterEndpoints} from "../../config/routes";

const defaultTheme = createTheme();

const UserAuthorizationPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isAuth = useSelector(selectIsAuth);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: initialValueUserAuthorization,
    validationSchema: validationSchemaAuthorization,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        await dispatch(signIn(values));
      } catch (error) {
        console.error("Login failed:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    !isAuth && (
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline/>
          <Box className={styles.box}>
            <Avatar className={styles.avatar}>
              <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
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
                color="warning"
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
                color="warning"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
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
                        {showPassword ? <Visibility/> : <VisibilityOff/>}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="warning"
                disabled={isSubmitting || !formik.isValid}
                className={styles.success}
                sx={{marginTop: 1, marginBottom: 1}}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </Button>
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
