"use client";
import "./globals.css";
import "./data-tables-css.css";
import "./satoshi.css";
import { useState, useEffect } from "react";
import Loader from "@/components/common/Loader";
import GeneralLayout from "@/components/layout/GeneralLayout";
import Dashboard from "@/app/dashboard/page";
// import {BrowserRouter} from 'react-router-dom';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}> 
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          {loading ? (
            <Loader />
          ) : (

            <>
               {/* <GeneralLayout/> */}
               {children}

               </>
               
          )}
        </div>
      </body> 
    </html>
  );
}
