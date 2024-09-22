import './App.css'
import {Layout} from "./Layout/Layout.jsx";
import {lazy} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectIsAuth} from "../redux/auth/selectors.js";
import Preloader from "./Other/Preloader/Preloader";
import {RouterEndpoints} from "../config/routes";

const HomePage = lazy(() => import ("../pages/HomePage/HomePage.jsx"))
const LoginForm = lazy(() => import ("../components/LoginForm/LoginForm.jsx"))
const ProfilePage = lazy(() => import ("../pages/ProfilePage/ProfilePage.jsx"))
const UsersPage = lazy(() => import ("../pages/UsersPage/UsersPage.jsx"))
const NotFoundPage = lazy(() => import ("../pages/NotFoundPage/NotFoundPage.jsx"))

const App = () => {
  const isAuth = useSelector(selectIsAuth);
  // const loading = useSelector(selectLoading);
  const loading = true;

  // console.log(isAuth)

  // if (loading) {
  //   return (
  //     <div>
  //       <Preloader/>
  //     </div>
  //   );
  // }
  return (
    <>
      <Layout>
        <Routes>
          <Route path={RouterEndpoints.users} element={<UsersPage/>}/>
          {/*<Route path={RouterEndpoints.profile} element={<ProfilePage/>}/>*/}
          {/*<Route path={RouterEndpoints.friends} element={<FriendsPage/>}/>*/}
          {/*<Route path={RouterEndpoints.messages} element={<MessagesPage/>}/>*/}
          {/*<Route*/}
          {/*  path={RouterEndpoints.signup}*/}
          {/*  element={isLoggedIn ? <Navigate to={RouterEndpoints.profile}/> : <UserRegistrationPage/>}*/}
          {/*/>*/}
          {/*<Route*/}
          {/*  path={RouterEndpoints.signin}*/}
          {/*  element={isLoggedIn ? <Navigate to={RouterEndpoints.profile}/> : <UserAuthorizationPage/>}*/}
          {/*/>*/}
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </Layout>
    </>
  )
}

export default App
