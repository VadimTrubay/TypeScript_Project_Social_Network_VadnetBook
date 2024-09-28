import React, {useEffect} from "react";
import {Layout} from "./Layout/Layout.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import {RouterEndpoints} from "../config/routes";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuth} from "../redux/auth/selectors";
import {fetchMe} from "../redux/auth/operations";
import {AppDispatch} from "../redux/store";
import styles from "./App.module.css"
import ProfileByIdPage from "../pages/ProfilePage/ProfileByIdPage";


const UsersPage = React.lazy(() => import("../pages/UsersPage/UsersPage"));
const ProfilePage = React.lazy(() => import("../pages/ProfilePage/ProfilePage"));
const UserRegistrationPage = React.lazy(() => import("../pages/UserRegistrationPage/UserRegistrationPage"));
const UserAuthorizationPage = React.lazy(() => import("../pages/UserAuthorizationPage/UserAuthorizationPage"));


const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispatch(fetchMe());
  }, [isAuth, dispatch]);

  return (
    <>
      <Layout className={styles.container}>
        <Routes>
          <Route path={`${RouterEndpoints.users}/${RouterEndpoints.id}`} element={<ProfileByIdPage/>}/>
          <Route path={RouterEndpoints.users} element={<UsersPage/>}/>
          <Route
            path={RouterEndpoints.profile}
            element={!isAuth ? <Navigate to={RouterEndpoints.signin}/> : <ProfilePage/>}
          />
          {/*<Route path={RouterEndpoints.friends} element={<FriendsPage/>}/>*/}
          {/*<Route path={RouterEndpoints.messages} element={<MessagesPage/>}/>*/}
          <Route
            path={RouterEndpoints.signup}
            element={isAuth ? <Navigate to={RouterEndpoints.users}/> : <UserRegistrationPage/>}
          />
          <Route
            path={RouterEndpoints.signin}
            element={isAuth ? <Navigate to={RouterEndpoints.users}/> : <UserAuthorizationPage/>}
          />
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </Layout>
    </>
  )
}

export default App
