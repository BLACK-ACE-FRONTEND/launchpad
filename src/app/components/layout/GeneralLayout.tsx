"use client"

import React, {useEffect} from 'react';
import NewHome from './home/NewHome';
import Dashboard from '@/app/dashboard/page';



/**
 * General Layout Component
 * @return {JSX.Element} JSX code for a general layout
 */

const GeneralLayout: React.FC = (): JSX.Element => {
  // @Lowe add loader here to avoid hydration issues, !important.
  // use
  return (
    <>
       {/* <NewHome/> */}
       <Dashboard/>
    </>
  );
};

export default GeneralLayout;

