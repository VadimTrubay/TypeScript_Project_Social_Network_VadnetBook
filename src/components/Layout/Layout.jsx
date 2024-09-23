import {Suspense} from "react";
import {Outlet} from "react-router-dom";
import Header from "../Header/Header";
import Loader from "../Loader/Loader.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import styles from "./Layout.module.css";


export const Layout = ({children}) => {
  return (
    <div className={styles.appWrapper}>
      <Header/>
      <Navbar/>
      <Suspense fallback={<Loader/>}>
        {children}
        <Outlet/>
      </Suspense>
    </div>
  );
};
