import './App.css'
import {Layout} from "./Layout/Layout.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import {RouterEndpoints} from "../config/routes";
import UsersPage from "../pages/UsersPage/UsersPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import UserAuthorizationPage from "../pages/UserAuthorizationPage/UserAuthorizationPage";
import {useSelector} from "react-redux";
import {selectIsAuth} from "../redux/auth/selectors";
import UserRegistrationPage from "../pages/UserRegistrationPage/UserRegistrationPage";


const App = () => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <>
      <Layout>
        <Routes>
          <Route path={RouterEndpoints.users} element={<UsersPage/>}/>
          {/*<Route path={RouterEndpoints.profile} element={<ProfilePage/>}/>*/}
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
