"use client";
import "./globals.css";
import "./data-tables-css.css";
import "./satoshi.css";
import { useState, useEffect } from "react";
import Loader from "@/components/common/Loader";
import GeneralLayout from "@/components/layout/GeneralLayout";
import Dashboard from "@/app/dashboard/page";
import {BrowserRouter} from 'react-router-dom';

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
      <BrowserRouter>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          {loading ? (
            <Loader />
          ) : (

            // <div className="flex min-h-screen flex-col items-center justify-between p-0">
            <>
               {/* <GeneralLayout/> */}
               {children}

               </>
            //  </div>
            // <div><Dashboard/></div>

          )}
        </div>
        </BrowserRouter>
      </body> 
    </html>
  );
}
