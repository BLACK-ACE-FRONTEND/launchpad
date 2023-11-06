"use client"

import React, { useState } from 'react'
import Feed from './Feed'
import Header from '@/app/components/Header';
import Sidebar from '@/app/components/Sidebar';



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
              <Feed/>
            </div>
        </div>
  )
}

export default Page

