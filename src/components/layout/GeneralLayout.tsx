"use client"

import React, {useEffect} from 'react';
import {useLocation, Outlet, Router} from 'react-router-dom';

import Footer from './footer/Footer';
import NavBar from './navbar/NavBar';

/**
 * General Layout Component
 * @return {JSX.Element} JSX code for a general layout
 */

const GeneralLayout: React.FC = (): JSX.Element => {
  // @Lowe add loader here to avoid hydration issues, !important.
  // use
  return (
    <>
      <NavBar/>  
       <>
        <Outlet />
      </> 
      <Footer/> 
    </>
  );
};

export default GeneralLayout;

