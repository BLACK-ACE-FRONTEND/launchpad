import Link from "next/link";
import logo from '../../assets/img/log.svg';
import keyIcon from '../../assets/img/key-icon.svg';
import Image from 'next/image'

export default function ForgetPassword() {
    return (
    //   <div className="relative flex flex-col justify-center h-screen">
    <div className="relative flex flex-col justify-center h-auto">
        {/* <div className="lg:flex lg:gap-x-4 justify-center items-center mx-4"> */}
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
            <Image
                    className="w-auto h-auto object-cover rounded-md"
                    src={keyIcon} 
                    width={96}
                    height={96}
                    alt="sign up with image"
                />
                
                <h1 className="text-3xl font-bold text-start text-gray-700">
                    Forgot Password?
                    </h1>
                    <p>No worries, enter your email below, we will send you reset instructions.</p>
                <form className="mt-6">
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

                <div className="mt-2">
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#0F9D58] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                    Send
                    </button>
                </div>

                <p className="mt-4 text-sm text-center text-gray-700">
                {/* Already have an Account?{" "} */}
                <Link
                    href="/signup"
                    className="font-medium text-blue-600 hover:underline"
                >
                    Back to Login
                </Link>
                </p>
                </form>

            </div>





  
          </div>
        </div> 

         </div>
    );
  }
