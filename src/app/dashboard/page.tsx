"use client"

import React from 'react'
import { useState, useEffect } from "react";
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Feed from '../pages/feed/Feed';

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [loading, setLoading] = useState<boolean>(true);

  return (
   
         <div className="flex h-screen overflow-hidden">
            <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            /> 
              
            {/* <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">  */}
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden"> 
              <Header
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                  
              /> 
              <Feed/> 
            </div>
        </div>
  )
}

export default Dashboard
