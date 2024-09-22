import './App.css'
import {Layout} from "./Layout/Layout.jsx";
import {lazy} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectIsAuth} from "../redux/auth/selectors.js";
import {RestrictedRoute} from "./RestrictedRoute/RestrictedRoute.jsx";
import Preloader from "./Other/Preloader/Preloader";

const HomePage = lazy(() => import ("../pages/HomePage/HomePage.jsx"))
const LoginForm = lazy(() => import ("../components/LoginForm/LoginForm.jsx"))
const ProfilePage = lazy(() => import ("../pages/ProfilePage/ProfilePage.jsx"))
const UsersPage = lazy(() => import ("../pages/UsersPage/UsersPage.jsx"))
const NotFoundPage = lazy(() => import ("../pages/NotFoundPage/NotFoundPage.jsx"))

const App = () => {
  const isAuth = useSelector(selectIsAuth);
  const loading = useSelector(selectLoading);
  // console.log(isAuth)

  if (loading) {
    return (
      <div>
        <Preloader/>
      </div>
    );
  }
  return (
    <>
      <Layout>
        <Routes>
          <Route path="profile" element={<ProfilePage/>}/>
          {/*<Route path="friends" element={<FriendsPage/>}/>*/}
          {/*<Route path="messages" element={<MessagesPage/>}/>*/}
          <Route path="users" element={<UsersPage/>}/>
          <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/"
                component={<LoginForm/>}
              />
            }
          />
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </Layout>
    </>
  )
}

export default App
