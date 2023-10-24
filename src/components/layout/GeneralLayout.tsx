"use client"

import React, {useEffect} from 'react';
import {useLocation, Outlet, Router} from 'react-router-dom';

import Footer from './footer/Footer';
import NavBar from './navbar/NavBar';
import Home from './home/home';
import DashboardSearch from '../dashboard-search/DashboardSearch';
// import ECommerce from '../Dashboard/E-commerce';


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
        {/* <Outlet />  */}
        <Home />  
      </>  
       {/* <Footer/>     */}
    </>
  );
};

export default GeneralLayout;

