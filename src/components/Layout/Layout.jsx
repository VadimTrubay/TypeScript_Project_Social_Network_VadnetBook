import {Suspense} from "react";
import {Outlet} from "react-router-dom";
import Header from "../Header/Header.jsx";
import Navbar from "../Navbar/Header.jsx";
import Loader from "../Loader/Loader.jsx";

export const Layout = ({children}) => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Suspense fallback={<Loader/>}>
        {children}
        <Outlet/>
      </Suspense>
    </div>
  );
};
