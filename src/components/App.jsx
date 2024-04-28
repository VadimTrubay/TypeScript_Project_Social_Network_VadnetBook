import './App.css'
import {Route, Routes, BrowserRouter} from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";
import {PrivateRoute} from "./PrivateRoute.jsx";
import {PublicRoute} from "./PublicRoute.jsx";
import Users from "../pages/Users/Users.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route
            path="users"
            element={
              <PublicRoute component={<Users/>}/>
            }
          />
          {/*<Route*/}
          {/*  path="login"*/}
          {/*  element={*/}
          {/*    <PublicRoute*/}
          {/*      redirectTo="/users"*/}
          {/*      component={<LoginForm/>}*/}
          {/*    />*/}
          {/*  }*/}
          />
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
