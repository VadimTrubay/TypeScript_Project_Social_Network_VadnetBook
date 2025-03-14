import React, { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Loader from '../Loader/Loader.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import styles from './Layout.module.css';
import { LayoutProps } from '../../types/layoutTypes';
import { useSelector } from 'react-redux';
import { selectAuthError } from '../../redux/auth/selectors';
import { Toaster } from 'react-hot-toast';

export const Layout = ({ children }: LayoutProps) => {
  const errorMessage = useSelector(selectAuthError);

  useEffect(() => {
    if (errorMessage) {
      // @ts-ignore
      toast.error(errorMessage, toast_settings);
    }
  }, [errorMessage]);

  return (
    <div className={styles.appWrapper}>
      <Header />
      <Navbar />
      <Suspense fallback={<Loader />}>
        {children}
        <Toaster />
        <Outlet />
      </Suspense>
    </div>
  );
};
