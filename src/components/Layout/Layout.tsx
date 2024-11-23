import React, {Suspense, useEffect} from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Loader from "../Loader/Loader.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import styles from "./Layout.module.css";
import { LayoutProps } from "../../types/layoutTypes";
import "react-toastify/dist/ReactToastify.css";
import {toast, ToastContainer} from "react-toastify";
import {useSelector} from "react-redux";
import {selectAuthError} from "../../redux/auth/selectors";
import {toast_settings} from "../../utils/toasts_settings";

export const Layout = ({ children }: LayoutProps) => {
    const errorMessage = useSelector(selectAuthError);

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage, toast_settings);
        }
    }, [errorMessage]);

  return (
    <div className={styles.appWrapper}>
      <Header />
      <Navbar />
      <Suspense fallback={<Loader />}>
        {children}
        <ToastContainer />
          {/*{errorMessage & toast.error(`${errorMessage}`, toast_settings)*/}
          {/*    }*/}
        <Outlet />
      </Suspense>
    </div>
  );
};
