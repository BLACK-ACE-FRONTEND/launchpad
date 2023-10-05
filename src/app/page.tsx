"use client"

import GeneralLayout from '@/components/layout/GeneralLayout'
import {Routes, Route, Navigate} from 'react-router-dom';
import Image from 'next/image'
import NavBar from '@/components/layout/navbar/NavBar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
         <GeneralLayout/>
  </main>
  )
}
