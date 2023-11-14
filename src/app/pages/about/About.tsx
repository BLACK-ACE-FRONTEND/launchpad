"use client"

import Link from "next/link";
import logo from '../../assets/img/image-overlap.svg';
import video from '../../assets/img/feed-video.svg';
import banner from '../../assets/img/banner-about.svg';
import keyIcon from '../../assets/img/img-related.svg';
import ecliseIcon from '../../assets/img/img-related1.svg';
import ecliseIcon1 from '../../assets/img/img-related2.svg';
import ecliseIcon2 from '../../assets/img/img-alupa.svg';
import lauchpadxx from '../../assets/img/eclipse1.svg';
import teragtIcon from '../../assets/img/tera-gt.svg';
import eclipseIcon3 from '../../assets/img/eclipse2.svg';
import eclipseIcon4 from '../../assets/img/eclipse3.svg';
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import NavAbout from "./NavAbout";
import NavEvents from "./NavEvents";


import React, { useEffect, useRef, useState } from "react";
// import Link from "next/link";
import { usePathname } from "next/navigation";
import AboutRoute from "./AboutRoute";
// import NavAbout from "./NavFeed";

// import logo from '../../assets/img/feed-pic1.svg';
// import video from '../../assets/img/feed-video.svg';
// import keyIcon from '../../assets/img/eclipse.svg';
// import ecliseIcon from '../../assets/img/eclipse1.svg';
// import ecliseIcon1 from '../../assets/img/eclipse2.svg';
// import ecliseIcon2 from '../../assets/img/eclipse3.svg';
// import lauchpadxx from '../../assets/img/launcpadxx.svg';
// import teragtIcon from '../../assets/img/tera-gt.svg';
// import eclipseIcon3 from '../../assets/img/eclipse4.svg';

export default function About() {
    const router = useRouter()

    const pathname = usePathname();

    return (
      // <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden"> 
      <div className="relative flex flex-1 flex-col h-auto overflow-y-auto overflow-x-hidden"> 
        <div  className="lg:flex lg:gap-x-4 justify-center items-start my-5 mx-4">

         <div className="flex flex-col"> 
         <Image
                    className="w-auto h-auto rounded-md -mb-8"
                    src={banner} 
                    width={96}
                    height={96}
                    alt="sign up with image"
                />


<div className="w-auto md:w-auto bg-transparent -mt-8   mx-10 rounded-lg overflow-hidden">
 
     <Image
                    className="w-116 h-116 rounded-md"
                    src={logo} 
                    width={96}
                    height={96}
                    alt="sign up with image"
                />

</div>
        

          <div className="flex gap-2 my-5 w-auto"> 
              <Image
                    className="w-auto h-auto rounded-md"
                    src={teragtIcon} 
                    width={96}
                    height={96}
                    alt="sign up with image"
                /> 
            
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <h1 className="text-lg font-bold text-start text-gray-700">
                      Terah GT
                  </h1>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.5599 8.73957L18.1999 7.15957C17.9399 6.85957 17.7299 6.29957 17.7299 5.89957V4.19957C17.7299 3.13957 16.8599 2.26957 15.7999 2.26957H14.0999C13.7099 2.26957 13.1399 2.05957 12.8399 1.79957L11.2599 0.43957C10.5699 -0.15043 9.43988 -0.15043 8.73988 0.43957L7.16988 1.80957C6.86988 2.05957 6.29988 2.26957 5.90988 2.26957H4.17988C3.11988 2.26957 2.24988 3.13957 2.24988 4.19957V5.90957C2.24988 6.29957 2.03988 6.85957 1.78988 7.15957L0.439883 8.74957C-0.140117 9.43957 -0.140117 10.5596 0.439883 11.2496L1.78988 12.8396C2.03988 13.1396 2.24988 13.6996 2.24988 14.0896V15.7996C2.24988 16.8596 3.11988 17.7296 4.17988 17.7296H5.90988C6.29988 17.7296 6.86988 17.9396 7.16988 18.1996L8.74988 19.5596C9.43988 20.1496 10.5699 20.1496 11.2699 19.5596L12.8499 18.1996C13.1499 17.9396 13.7099 17.7296 14.1099 17.7296H15.8099C16.8699 17.7296 17.7399 16.8596 17.7399 15.7996V14.0996C17.7399 13.7096 17.9499 13.1396 18.2099 12.8396L19.5699 11.2596C20.1499 10.5696 20.1499 9.42957 19.5599 8.73957ZM14.1599 8.10957L9.32988 12.9396C9.18988 13.0796 8.99988 13.1596 8.79988 13.1596C8.59988 13.1596 8.40988 13.0796 8.26988 12.9396L5.84988 10.5196C5.55988 10.2296 5.55988 9.74957 5.84988 9.45957C6.13988 9.16957 6.61988 9.16957 6.90988 9.45957L8.79988 11.3496L13.0999 7.04957C13.3899 6.75957 13.8699 6.75957 14.1599 7.04957C14.4499 7.33957 14.4499 7.81957 14.1599 8.10957Z" fill="#0F9D58"/>
                    </svg>
                </div>

                <p>
                A decentralized talent network that empowers freelancers and companies to collaborate directly.
                </p>

                <div className="flex gap-2">
                    <p className="text-[#0F9D58]">Talent Industry . 00x2G6...35hWn</p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 12.9V17.1C15.5 18.8007 15.1568 19.8611 14.5089 20.5089C13.8611 21.1568 12.8007 21.5 11.1 21.5H6.9C5.19931 21.5 4.13891 21.1568 3.49105 20.5089C2.8432 19.8611 2.5 18.8007 2.5 17.1V12.9C2.5 11.1993 2.8432 10.1389 3.49105 9.49105C4.13891 8.8432 5.19931 8.5 6.9 8.5H11.1C12.8007 8.5 13.8611 8.8432 14.5089 9.49105C15.1568 10.1389 15.5 11.1993 15.5 12.9Z" fill="#0F9D58" stroke="#0F9D58"/>
                        <path d="M12.9 2.5H17.1C18.8007 2.5 19.8611 2.8432 20.509 3.49105C21.1568 4.13891 21.5 5.19931 21.5 6.9V11.1C21.5 12.5962 21.2319 13.5965 20.7262 14.2533C20.2327 14.8941 19.4463 15.292 18.2044 15.4335C17.9834 15.4586 17.75 15.2736 17.75 14.9781V12.9C17.75 10.7323 17.2474 9.04033 16.1036 7.89645C14.9597 6.75257 13.2677 6.25 11.1 6.25H9.02191C8.72644 6.25 8.54137 6.01659 8.56654 5.79559C8.70798 4.55368 9.10595 3.76727 9.74675 3.27381C10.4035 2.76809 11.4038 2.5 12.9 2.5Z" fill="#0F9D58" stroke="#0F9D58"/>
                        </svg>
                    </div>

                </div>
            
              
            </div>

           
             {/* </div> */}
            {/* <div className="flex mx-8">  */}
        <div className="flex justify-between items-center"> 
                <div className="flex gap-2"> 
                  <button
                    type="button"
                    className="flex items-center gap-0 justify-center w-auto py-2 px-5 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
                >
                    Fund project

                </button>
               
                <button className="flex  items-center gap-5 justify-center w-auto py-2 px-12 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600">
                    Follow
                </button>

                </div> 

                <div className="flex gap-5 mx-5">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4416 2.9252L12.9083 5.85853C13.1083 6.26686 13.6416 6.65853 14.0916 6.73353L16.7499 7.1752C18.4499 7.45853 18.8499 8.69186 17.6249 9.90853L15.5583 11.9752C15.2083 12.3252 15.0166 13.0002 15.1249 13.4835L15.7166 16.0419C16.1833 18.0669 15.1083 18.8502 13.3166 17.7919L10.8249 16.3169C10.3749 16.0502 9.63326 16.0502 9.17492 16.3169L6.68326 17.7919C4.89992 18.8502 3.81659 18.0585 4.28326 16.0419L4.87492 13.4835C4.98326 13.0002 4.79159 12.3252 4.44159 11.9752L2.37492 9.90853C1.15826 8.69186 1.54992 7.45853 3.24992 7.1752L5.90826 6.73353C6.34992 6.65853 6.88326 6.26686 7.08326 5.85853L8.54992 2.9252C9.34992 1.33353 10.6499 1.33353 11.4416 2.9252Z" stroke="#3C5354" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>


                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.8333 9.16634L17.6666 2.33301" stroke="#3C5354" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.3333 5.66699V1.66699H14.3333" stroke="#3C5354" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.16675 1.66699H7.50008C3.33341 1.66699 1.66675 3.33366 1.66675 7.50033V12.5003C1.66675 16.667 3.33341 18.3337 7.50008 18.3337H12.5001C16.6667 18.3337 18.3334 16.667 18.3334 12.5003V10.8337" stroke="#3C5354" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.16667 8.33301C3.25 8.33301 2.5 9.08301 2.5 9.99967C2.5 10.9163 3.25 11.6663 4.16667 11.6663C5.08333 11.6663 5.83333 10.9163 5.83333 9.99967C5.83333 9.08301 5.08333 8.33301 4.16667 8.33301Z" stroke="#3C5354" stroke-width="1.5"/>
                  <path d="M15.8334 8.33301C14.9167 8.33301 14.1667 9.08301 14.1667 9.99967C14.1667 10.9163 14.9167 11.6663 15.8334 11.6663C16.7501 11.6663 17.5001 10.9163 17.5001 9.99967C17.5001 9.08301 16.7501 8.33301 15.8334 8.33301Z" stroke="#3C5354" stroke-width="1.5"/>
                  <path d="M9.99992 8.33301C9.08325 8.33301 8.33325 9.08301 8.33325 9.99967C8.33325 10.9163 9.08325 11.6663 9.99992 11.6663C10.9166 11.6663 11.6666 10.9163 11.6666 9.99967C11.6666 9.08301 10.9166 8.33301 9.99992 8.33301Z" stroke="#3C5354" stroke-width="1.5"/>
                  </svg>

                </div>
                </div>
       
     

      <div className="flex gap-5 my-5 justify-between py-2 px-5 rounded-md shadow-inner ...">
                <div>
                  <h1>OCT 2023</h1>
                  <p>Joined</p>
                </div>

                <div>
                  <h1>10 ETH</h1>
                  <p>Seed Raised</p>
                </div>

                <div>
                  <h1>21 ETH</h1>
                  <p>Seed Need</p>
                </div>

                <div>
                  <h1>15 ETH</h1>
                  <p>STO % </p>
                </div>

                <div>
                  <h1>348</h1>
                  <p>Investors</p>
                </div>

                <div>
                  <h1>12 Jan 2024</h1>
                  <p>Time Ceiling</p>
                </div>
              </div>
            
                {/* <NavAbout/> */}
                <AboutRoute/>
                
             
      </div>  
     
          <div className="w-auto bg-white rounded-md lg:max-w-xl">
          
            <div className="w-auto p-6  bg-white rounded-md shadow-md lg:max-w-xl"> 
                <div className="flex flex-col justify-center items-start gap-5 ">
                  
                        <h1 className="text-2xl font-bold text-gray-700">
                            Related
                            </h1>



                            <div className="flex gap-5">
                              <Image
                                className="rounded-md"
                                src={keyIcon} 
                                width={43}
                                height={43}
                                alt="sign up with image"
                              /> 
                                
                                <div>
                                <h1 className="text-lg font-bold">Jem Trail</h1>
                                <h3>Creative Agency</h3>
                                <p>
                                Innovating tech solutions for a dynamic digital world.
                                </p>
                                </div>
                            </div>

                            <div className="flex gap-5">
                              <Image
                                className="rounded-md"
                                src={ecliseIcon} 
                                width={43}
                                height={43}
                                alt="sign up with image"
                              /> 
                              <div>
                                <h1 className="text-lg font-bold">kilp</h1>
                                <h3>Telecom</h3>
                                <p>
                                Reimagining agriculture through technology for sustainable and efficient farming practices.
                                </p>
                                </div>
                            </div>

                            <div className="flex gap-5">
                              <Image
                                className="rounded-md"
                                src={ecliseIcon1} 
                                width={43}
                                height={43}
                                alt="sign up with image"
                              /> 
                                
                                <div>
                                <h1 className="text-lg font-bold">JuRi</h1>
                                <h3>Health and Wellness</h3>
                                <p>
                                Embarking on a wellness revolution, fostering healthier lives through holistic care and mindful practices.
                                </p>
                                </div>
                            </div>

                            <p className="text-[#0F9D58]">Show more</p>

                            
                </div>
            </div>


            <div className="w-auto mt-5 p-6  bg-white rounded-md shadow-md lg:max-w-xl"> 
                <div className="flex flex-col justify-center items-start gap-5 ">
                  
                        <h1 className="text-2xl font-bold text-gray-700">
                            You might like
                            </h1>



                            <div className="flex gap-5">
                              <Image
                                className="rounded-md"
                                src={ecliseIcon2} 
                                width={43}
                                height={43}
                                alt="sign up with image"
                              /> 
                                
                                <div>
                                <h1 className="text-lg font-bold">Aluppa</h1>
                                <h3>Creative Agency</h3>
                                {/* <p>
                                Innovating tech solutions for a dynamic digital world.
                                </p> */}
                                </div>
                            </div>

                            <div className="flex gap-5">
                              <Image
                                className="rounded-md"
                                src={lauchpadxx} 
                                width={43}
                                height={43}
                                alt="sign up with image"
                              /> 
                              <div>
                                <h1 className="text-lg font-bold">Pettra</h1>
                                <h3>AgroTech</h3>
                                {/* <p>
                                Reimagining agriculture through technology for sustainable and efficient farming practices.
                                </p> */}
                                </div>
                            </div>

                            <div className="flex gap-5">
                              <Image
                                className="rounded-md"
                                src={eclipseIcon3} 
                                width={43}
                                height={43}
                                alt="sign up with image"
                              /> 
                                
                                <div>
                                <h1 className="text-lg font-bold">Waire</h1>
                                <h3>Health and Wellness</h3>
                                {/* <p>
                                Embarking on a wellness revolution, fostering healthier lives through holistic care and mindful practices.
                                </p> */}
                                </div>
                            </div>

                            <div className="flex gap-5">
                              <Image
                                className="rounded-md"
                                src={eclipseIcon4} 
                                width={43}
                                height={43}
                                alt="sign up with image"
                              /> 
                                
                                <div>
                                <h1 className="text-lg font-bold">Gatejar</h1>
                                <h3>Eco-Friendly Retail</h3>
                                {/* <p>
                                Embarking on a wellness revolution, fostering healthier lives through holistic care and mindful practices.
                                </p> */}
                                </div>
                            </div>

                            
                </div>
            </div>



            <div className="w-auto p-6 mt-10 bg-white rounded-md shadow-md lg:max-w-xl"> 
                <div className="flex flex-col justify-start items-start gap-2 mx-5">
                    
                        <h1 className="text-2xl font-bold text-gray-700">
                            Trending tags
                            </h1>
                            <div className="flex flex-col my-5 gap-5"> 
                  
                                    <p className='text-start'><span className='bg-[#EBEDED]'>
                                    <button type='button' onClick={() => router.push ('/pages/login')}>Tech Innovators</button> 
                                    </span></p>

                                    <p className='text-start'><span className='bg-[#EBEDED]'>
                                    <button type='button' onClick={() => router.push ('/pages/login')}>Services</button> 
                                    </span></p>

                                    <p className='text-start'><span className='bg-[#EBEDED]'>
                                    <button type='button' onClick={() => router.push ('/pages/login')}>Creative Agency</button> 
                                    </span></p>

                                    <p className='text-start'><span className='bg-[#EBEDED]'>
                                    <button type='button' onClick={() => router.push ('/pages/login')}>Innovative</button> 
                                    </span></p>

                                    <p className='text-start'><span className='bg-[#EBEDED]'>
                                    <button type='button' onClick={() => router.push ('/pages/login')}>Healthcare</button> 
                                    </span></p>

                                    <p className='text-start'><span className='bg-[#EBEDED]'>
                                    <button type='button' onClick={() => router.push ('/pages/login')}>Blockchain</button> 
                                    </span></p>

                                    <p className='text-start'><span className='bg-[#EBEDED]'>
                                    <button type='button' onClick={() => router.push ('/pages/login')}>AgroTech</button> 
                                    </span></p>
                            </div>
                </div>

                
            </div>



          </div>

        </div> 

         </div>
    );
  }

