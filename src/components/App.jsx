import './App.css'
import {PrivateRoute} from "./PrivateRoute.jsx";
import {PublicRoute} from "./PublicRoute.jsx";
import {Layout} from "./Layout/Layout.jsx";
import {lazy} from "react";
import {Route, Routes} from "react-router-dom";

const HomePage = lazy(() => import ("../pages/HomePage/HomePage.jsx"))
const LoginForm = lazy(() => import ("../components/LoginForm/LoginForm.jsx"))
const UsersPage = lazy(() => import ("../pages/UsersPage/UsersPage.jsx"))
const NotFoundPage = lazy(() => import ("../pages/NotFoundPage/NotFoundPage.jsx"))

const App = () => {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="users" element={<PrivateRoute redirectTo="/users" component={<UsersPage/>}/>}/>
          <Route path="login" element={<PublicRoute redirectTo="/users" component={<LoginForm/>}/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </Layout>
    </>
  )
}

export default App
