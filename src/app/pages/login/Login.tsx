"use client"

import Link from "next/link";
import footerLogo from '../../assets/img/log.svg';
import { useRouter } from 'next/navigation'

import Image from 'next/image'

export default function Login() {
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
                  src={footerLogo} 
                  width={488}
                  height={488}
                  alt="sign up with image"
              />
            </div>
            <div className="w-full bg-white rounded-md lg:max-w-xl">
            
              <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
                  <h1 className="text-3xl font-bold text-start text-gray-700">
                    Welcome to Launchpad
                    </h1>
                  <form className="mt-10">
                  <div className="mb-4">
                      <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-800"
                      >
                      Email
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
                      Password
                      </label>
                      <input
                      type="password"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                  </div>
                  
                <div className="flex justify-between">
                    <div>
                    <input type="checkbox" />
                    <Link
                        href="/forget"
                        className="text-xs text-blue-600 hover:underline m-2"
                    >
                        Remember Me
                    </Link>
                    </div>

                    <div>
                    <input type="checkbox" />
                    <Link
                        href="/forget"
                        className="text-xs text-blue-600 hover:underline m-2"
                    >
                        Forget Password?
                    </Link>
                    </div>
                </div>

                <div className="flex mt-10 mb-5 gap-x-2">
                  <button
                    type="button"
                    className="flex items-center gap-5 justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
                >
                    Sign up with Email

                </button>
                
                <button className="flex items-center gap-5 justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600">
                    Sign up with a Wallet
                </button>

                </div>
                <p className='text-center'>Don't have an account? <span className='text-[#0F9D58]'>
                <button type='button' onClick={() => router.push ('/pages/signup')}> Sign up</button> 
                </span></p>
                  </form>
  
                  <div className="relative flex items-center justify-center w-full mt-10 border border-t">
                  <div className="absolute px-5 bg-white">Or</div>
                  </div>

                  <div className="flex mt-10 mb-10 gap-x-2">
                  <button
                    type="button"
                    className="flex items-center gap-5 justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                    >
                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>

                    Sign up with Google

                </button>
                
                <button className="flex items-center gap-5 justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                    >
                    <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                    </svg>

                    Sign up with Apple

                </button>

                </div>
   
              </div>
    
            </div>
          </div>
        </div>
      );
    }
  