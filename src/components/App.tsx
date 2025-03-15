import React, { useEffect, lazy } from 'react';
import { Layout } from './Layout/Layout.jsx';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { RouterEndpoints } from '../config/routes';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth } from '../redux/auth/selectors';
import { fetchMe } from '../redux/auth/operations';
import { AppDispatch } from '../redux/store';
import styles from './App.module.css';
import { fetchMeProfile } from '../redux/profile/operations';
import DialogsPage from '../pages/DialogsPage/DialogsPage';

const ProfilePage = lazy(() => import('../pages/ProfilePage/ProfilePage'));
const UsersPage = lazy(() => import('../pages/UsersPage/UsersPage'));
const FollowersPage = lazy(() => import('../pages/UsersPage/FollowersPage'));
const FollowingPage = lazy(() => import('../pages/UsersPage/FollowingPage'));
const UserRegistrationPage = lazy(
  () => import('../pages/UserRegistrationPage/UserRegistrationPage')
);
const UserAuthorizationPage = lazy(
  () => import('../pages/UserAuthorizationPage/UserAuthorizationPage')
);
const ProfileByIdPage = lazy(() => import('../pages/ProfilePage/ProfileByIdPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();

  useEffect(() => {
    const lastPath = localStorage.getItem('lastPath');
    if (lastPath) {
      navigate(lastPath, { replace: true });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('lastPath', location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    dispatch(fetchMeProfile());
    dispatch(fetchMe());
  }, [isAuth]);

  return (
    <>
      <Layout className={styles.container}>
        <Routes>
          {/*<Route path="/" element={<Navigate to={RouterEndpoints.users}/>}/>*/}
          <Route path={RouterEndpoints.users} element={<UsersPage />} />
          <Route
            path={RouterEndpoints.profile}
            element={!isAuth ? <Navigate to={RouterEndpoints.signin} /> : <ProfilePage />}
          />
          <Route
            path={RouterEndpoints.followers}
            element={!isAuth ? <Navigate to={RouterEndpoints.signin} /> : <FollowersPage />}
          />
          <Route
            path={RouterEndpoints.following}
            element={!isAuth ? <Navigate to={RouterEndpoints.signin} /> : <FollowingPage />}
          />
          <Route
            path={RouterEndpoints.dialogs}
            element={!isAuth ? <Navigate to={RouterEndpoints.signin} /> : <DialogsPage />}
          />
          <Route
            path={RouterEndpoints.signup}
            element={isAuth ? <Navigate to={RouterEndpoints.users} /> : <UserRegistrationPage />}
          />
          <Route
            path={RouterEndpoints.signin}
            element={isAuth ? <Navigate to={RouterEndpoints.users} /> : <UserAuthorizationPage />}
          />
          <Route
            path={`${RouterEndpoints.users}/${RouterEndpoints.id}`}
            element={<ProfileByIdPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
