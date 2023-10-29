"use client"

import Link from "next/link";
import logo from '../../assets/img/login-log.svg';
import keyIcon from '../../assets/img/key-icon.svg';
import backArrow from '../../assets/img/arrow-back.svg';
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function PasswordReset() {
    const router = useRouter()

    return (
        <div className="relative flex flex-col justify-center h-auto">
        <div  className="lg:flex lg:gap-x-4 justify-center items-start my-5 mx-4">
            
          <div className="lg:max-w-xl w-full my-5">
        
            <h1 className="text-3xl font-bold text-start text-gray-700">
                Sign up and start your project Launch Journery
            </h1>
                    
            <Image
                className="w-full h-full object-cover rounded-md"
                src={logo} 
                width={488}
                height={488}
                alt="sign up with image"
            />
          </div>

          <div className="w-full bg-white rounded-md lg:max-w-xl">
          
            <div className="w-auto p-6  bg-white rounded-md shadow-md lg:max-w-xl"> 
                <div className="flex flex-col justify-center items-center gap-2 mx-10">
                    <Image
                            className="object-cover rounded-md"
                            src={keyIcon} 
                            width={96}
                            height={96}
                            alt="sign up with image"
                        />
                        
                        <h1 className="text-3xl font-bold text-gray-700">
                            Forgot Password?
                            </h1>
                            <p className="text-center">
                              Your new password must be different from previously used password.
                            </p>
                </div>

                <form className="mt-6 mb-10">
                <div className="mb-5">
                    <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-800"
                    >
                    New Password
                    </label>
                    <input
                    type="email"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>

                <div className="mb-2">
                      <label
                      htmlFor="password"
                      className="block text-sm font-semibold text-gray-800"
                      >
                      Confirm Password
                      </label>
                      <input
                      type="password"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                  </div>

                <div className="mt-2">
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#0F9D58] rounded-md hover:bg-[#0F9D58] focus:outline-none focus:bg-gray-600">
                    Reset
                    </button>
                </div>

              
                <div className="flex  gap-5 m-5 justify-center">
                    <Image
                        className="object-cover rounded-md"
                        src={backArrow} 
                        width={24}
                        height={24}
                        alt="sign up with image"
                    />

                    <p className='text-center'><span className='text-[#0F9D58]'>
                                    <button type='button' onClick={() => router.push ('/pages/login')}>Back to Login</button> 
                                    </span></p>
                </div>
              
                </form>

            </div>
          </div>

        </div> 

         </div>
    );
  }
