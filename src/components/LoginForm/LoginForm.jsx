import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {ThemeProvider} from "@mui/material/styles";
import {useFormik} from "formik";
import {logIn} from "../../redux/auth/operations.js";
import {validationSchemaLogin} from "../../validate/validationSchemaLogin.js";
import {createTheme} from "@mui/material";
import {selectIsAuth, selectUserId} from "../../redux/auth/selectors.js";

export const defaultTheme = createTheme();

const LoginForm = () => {
  const dispatch = useDispatch();
  const selectedIsAuth = useSelector(selectIsAuth);
  const selectedUserId = useSelector(selectUserId)

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchemaLogin,
    onSubmit: (values) => {
      if (formik.isValid) {
        dispatch(logIn(values));
      }
    },
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{m: 1, bgcolor: "#2aaf00"}}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{mt: 1, borderColor: "red"}}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              color="success"
              name="email"
              autoComplete="email"
              autoFocus
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              color="success"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.password && Boolean(formik.errors.password)
              }
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button
              type="submit"
              color="success"
              fullWidth
              variant="contained"
              sx={{bgcolor: "#2aaf00"}}
            >
              Login
            </Button>
            {/*<Grid container justifyContent="flex-end">*/}
              {/*<Grid item>*/}
                {/*<Span>Don&apos;t have an account?</Span>*/}
                {/*<Link to="/register" variant="body2">*/}
                {/*  Register*/}
                {/*</Link>*/}
              {/*</Grid>*/}
            {/*</Grid>*/}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LoginForm;
