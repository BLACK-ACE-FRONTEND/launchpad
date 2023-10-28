"use client"

import React from 'react'
import { useState, useEffect } from "react";
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [loading, setLoading] = useState<boolean>(true);

  return (
   
         <div className="flex h-screen overflow-hidden">
            <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            /> 
              
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
              <Header
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
              /> 
            </div>
        </div>
  )
}

export default Dashboard
