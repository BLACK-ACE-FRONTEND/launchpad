"use client"

import React, { useState } from 'react'
// import { useState, useEffect } from "react";
import NavBar from '@/app/components/layout/navbar/NavBar'
import About from './About'
import Sidebar from '@/app/components/Sidebar'
import Header from '@/app/components/Header'


const Page = () => {
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
              <About/>
            </div>
        </div>
  )
}

export default Page

