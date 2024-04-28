import './App.css'
import {Route, Routes} from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";
import {PrivateRoute} from "./PrivateRoute.jsx";
import {PublicRoute} from "./PublicRoute.jsx";
import Users from "../pages/Users/Users.jsx";
import {Layout} from "./Layout/Layout.jsx";
import {Suspense, lazy} from "react";
import Loader from "./Loader/Loader.jsx";
import Header from "./Header/Header.jsx";
import Navbar from "./Navbar/Header.jsx";

const HomePage = lazy(() => import ("../pages/HomePage/HomePage.jsx"))

const App = () => {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="users" element={<PublicRoute component={<Users/>}/>}/>
          <Route path="login" element={<PublicRoute redirectTo="/users" component={<LoginForm/>}/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </Layout>
    </>
  )
}

export default App
