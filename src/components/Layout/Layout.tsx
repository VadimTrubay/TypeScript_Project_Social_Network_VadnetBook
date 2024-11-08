import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Loader from "../Loader/Loader.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import styles from "./Layout.module.css";
import { LayoutProps } from "../../types/layoutTypes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.appWrapper}>
      <Header />
      <Navbar />
      <Suspense fallback={<Loader />}>
        {children}
        <ToastContainer />
        <Outlet />
      </Suspense>
    </div>
  );
};
