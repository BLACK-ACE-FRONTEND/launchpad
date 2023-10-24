'use client'

import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/navigation'


const Home = () => {
    const router = useRouter()

  return (
   
    <div className="w-7/12 grid p-5 m-20 mx-10 border border-gray-500 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-1">
         <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                     <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Join As A User, Founder or Investor</h3>      
         </blockquote>

        <div className="grid mb-8 border border-none rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
            <figure className="flex w-auto flex-col items-end justify-center m-2 p-8 text-start bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                <input type="radio" value="Male" name="user"/> 
                <blockquote className="max-w-2xl text-lg mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <p className="my-4">I am a founder, looking to publish a project</p>
                </blockquote>
            </figure>

            <figure className="flex w-auto flex-col items-end justify-center m-2 p-8 text-start bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
                <input type="radio" value="Female" name="user" /> 
                <blockquote className="max-w-2xl text-lg mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <p className="my-4">I am an investor, looking to invest in a project</p>
                </blockquote>
            </figure> 
        </div>

        <button type="button" className="text-white bg-[#0F9D58;] hover:bg-[#0F9D58;] focus:ring-4 
        focus:ring-[#0F9D58;] font-medium rounded-lg text-sm px-5 py-2.5 ml-20 mr-20 mb-2 dark:bg-[#0F9D58;] 
        dark:hover:bg-[#0F9D58;] focus:outline-none dark:focus:ring-[#0F9D58;]">
            Next   
        </button>

       

        <p className='text-center'>Already have an Account? <span className='text-[#0F9D58]'>
         <button type='button' onClick={() => router.push ('/dashboard')}> Sign In</button> 
        </span></p>

     </div>

  )
}

export default Home

