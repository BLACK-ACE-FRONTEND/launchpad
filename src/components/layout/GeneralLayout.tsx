"use client"

import React, {useEffect} from 'react';


import NavBar from './navbar/NavBar';
import NewHome from './home/NewHome';



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
       <NewHome/>
      </>  
       {/* <Footer/>     */}
    </>
  );
};

export default GeneralLayout;

