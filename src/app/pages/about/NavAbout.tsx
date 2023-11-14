"use client"

import Link from "next/link";
import person from '../../assets/img/person1.svg';
import person1 from '../../assets/img/person2.svg';
import person2 from '../../assets/img/person3.svg';
import person3 from '../../assets/img/person4.svg';
import person4 from '../../assets/img/person5.svg';
import person5 from '../../assets/img/person6.svg';
import person6 from '../../assets/img/person7.svg';
import person7 from '../../assets/img/person8.svg';
import Image from 'next/image'
import { useRouter } from 'next/navigation'


function NavAbout() {
    const router = useRouter()

  return (
    <div className="flex flex-col  m-5 gap-2"> 
      <div className="w-auto p-6  bg-white rounded-md shadow-md lg:max-w-xl">  
         <h1 className="flex text-lg font-bold">About</h1>
      
            <p>Terah GT is a groundbreaking decentralized talent network that reimagines the way freelancers 
                and businesses collaborate in a digital world. At the core, Terah GT is an ecosystem designed
                 to empower skilled professionals and create a more equitable landscape for talent.</p>

            <p>
               The platform operates on blockchain technology, eliminating intermediaries and fostering 
                direct connections between freelancers and the companies seeking their expertise. This 
                direct connection not only ensures greater transparency but also results in fairer 
                compensation for freelancers. 
                One of the key innovations of Terah GT is its native token, TRHGT. This token incentivizes 
                network participation, aligning the interests of all participants and ensuring that the 
                community is invested in the platform's growth...</p>
        </div>
        
        
        <div className="w-auto p-6  bg-white rounded-md shadow-md lg:max-w-xl"> 
          <h1 className="flex text-lg">Team</h1>

          <div className="flex m-5 gap-5">
            <div className="flex flex-col gap-5">
              <Image
                className="object-cover rounded-md"
                src={person} 
                width={64}
                height={64}
                alt="sign up with image"
                /> 
                                  
                <div>
                  <h1 className="text-lg font-bold">Jonah Roberts</h1>
                  <p>
                  Founder
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
              <Image
                className="object-cover rounded-md"
                src={person1} 
                width={64}
                height={64}
                alt="sign up with image"
                /> 
                                  
                <div>
                  <h1 className="text-lg font-bold">Micheal Chris</h1>
                  <p>
                  Adviser
                  </p>
                </div>
              </div>
            </div>

            <div className="flex m-5 gap-5">

            <div className="flex flex-col gap-5">
              <Image
                className="object-cover rounded-md"
                src={person2} 
                width={64}
                height={64}
                alt="sign up with image"
                /> 
                                  
                <div>
                  <h1 className="text-lg font-bold">Micheal Chris</h1>
                  <p>
                  Adviser
                  </p>
                </div>
              </div>

            <div className="flex flex-col gap-5">
              <Image
                className="object-cover rounded-md"
                src={person3} 
                width={64}
                height={64}
                alt="sign up with image"
                /> 
                                  
                <div>
                  <h1 className="text-lg font-bold">Jonah Roberts</h1>
                  <p>
                  Founder
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
              <Image
                className="object-cover rounded-md"
                src={person4} 
                width={64}
                height={64}
                alt="sign up with image"
                /> 
                                  
                <div>
                  <h1 className="text-lg font-bold">Micheal Chris</h1>
                  <p>
                  Adviser
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
              <Image
                className="object-cover rounded-md"
                src={person5} 
                width={64}
                height={64}
                alt="sign up with image"
                /> 
                                  
                <div>
                  <h1 className="text-lg font-bold">Micheal Chris</h1>
                  <p>
                  Adviser
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
              <Image
                className="object-cover rounded-md"
                src={person6} 
                width={64}
                height={64}
                alt="sign up with image"
                /> 
                                  
                <div>
                  <h1 className="text-lg font-bold">Micheal Chris</h1>
                  <p>
                  Adviser
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
              <Image
                className="object-cover rounded-md"
                src={person7} 
                width={64}
                height={64}
                alt="sign up with image"
                /> 
                                  
                <div>
                  <h1 className="text-lg font-bold">Micheal Chris</h1>
                  <p>
                  Adviser
                  </p>
                </div>
              </div>
            </div>

        
            <div className="flex m-5 gap-5">
              <svg width="632" height="1" viewBox="0 0 632 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="632" y2="0.5" stroke="#B1BABB"/>
              </svg>  
            </div>

            <p className="flex justify-center text-[#0F9D58]">View More Members</p>
                        
        </div>


        <div className="w-auto p-6  bg-white rounded-md shadow-md lg:max-w-xl"> 
          <h1 className="flex text-lg font-bold">Insights</h1>
            <p>Evaluate opportunities with confidence and stay updated on future plans and goals. 
              View roadmaps and milestones reached.</p>


  <div className="flex m-5 gap-5">         
<ol className="relative border-s border-gray-200 dark:border-gray-700">                  
    <li className="mb-10 ms-6">            
        <span className="absolute flex items-center justify-center w-6 h-6 bg-[#0F9D58] rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="8" fill="#0F9D58"/>
            </svg>

        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-[#0F9D58] dark:text-white">Concept Development and Legal Compliance:</h3>
        {/* <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2022</time> */}
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Consult with legal experts to navigate regulatory and compliance requirements, especially in the blockchain and employment sectors.</p>
    </li>

    <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-[#D0D0D0] rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="8" fill="#D0D0D0"/>
            </svg>

        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Blockchain platform</h3>
        {/* <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 7th, 2021</time> */}
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Developing and testing the smart contracts and decentralized infrastructure needed to support your platform</p>
    </li>

    <li className="ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-[#D0D0D0] rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="8" fill="#D0D0D0"/>
            </svg>

        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Platform Development Phase I</h3>
        {/* <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time> */}
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">developing user-friendly web and mobile applications for your decentralized talent network.</p>
    </li>
</ol>
</div> 

            <p className="flex justify-end text-[#0F9D58]">View More Insights</p>
                        
        </div>

        <div className="w-auto p-6  bg-white rounded-md shadow-md lg:max-w-xl"> 
          <h1 className="flex text-lg">DOCUMNETS</h1>

        <div className="flex justify-between gap-5">
          <div className="flex gap-5 items-center my-2">
            <div className="flex bg-[#E0F3F5] px-5 py-2 rounded-md font-semibold">DOC</div>
            <p className="flex text-xl">Business Plan</p>
          </div>

          <div>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.59182 15.8042C2.34396 10.2867 6.40306 4.25 12.3609 4.25H12.6823C17.1379 4.25 20.7499 7.86201 20.7499 12.3176C20.7499 17.2785 16.7284 21.3 11.7676 21.3H3.94731C3.62905 21.3 3.34545 21.0991 3.23982 20.7989C3.13419 20.4987 3.22954 20.1645 3.47769 19.9652L5.44918 18.3819C5.53538 18.3127 5.56587 18.1951 5.52416 18.0927L4.59182 15.8042ZM12.3609 5.75C7.46834 5.75 4.13502 10.7074 5.98096 15.2383L6.9133 17.5268C7.2053 18.2435 6.99184 19.0669 6.38842 19.5515L6.07897 19.8H11.7676C15.9 19.8 19.2499 16.45 19.2499 12.3176C19.2499 8.69044 16.3095 5.75 12.6823 5.75H12.3609Z" fill="#7E7E7E"/>
            </svg>
            <p>45</p>
          </div>

          </div>

          <div className="flex justify-between gap-5">
            <div className="flex gap-2 items-center my-2">
              <div className="flex bg-[#E0F3F5] px-5 py-2 rounded-md font-semibold">DOC</div>
                <p className="flex text-xl">Financial Strategy</p>
              </div>
            

            <div>
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.59182 15.8042C2.34396 10.2867 6.40306 4.25 12.3609 4.25H12.6823C17.1379 4.25 20.7499 7.86201 20.7499 12.3176C20.7499 17.2785 16.7284 21.3 11.7676 21.3H3.94731C3.62905 21.3 3.34545 21.0991 3.23982 20.7989C3.13419 20.4987 3.22954 20.1645 3.47769 19.9652L5.44918 18.3819C5.53538 18.3127 5.56587 18.1951 5.52416 18.0927L4.59182 15.8042ZM12.3609 5.75C7.46834 5.75 4.13502 10.7074 5.98096 15.2383L6.9133 17.5268C7.2053 18.2435 6.99184 19.0669 6.38842 19.5515L6.07897 19.8H11.7676C15.9 19.8 19.2499 16.45 19.2499 12.3176C19.2499 8.69044 16.3095 5.75 12.6823 5.75H12.3609Z" fill="#7E7E7E"/>
              </svg>
              <p>76</p>
            </div>
          </div>

          <div className="flex justify-between gap-5">
            <div className="flex gap-5 items-center my-2">
              <div className="flex bg-[#E0F3F5] px-5 py-2 rounded-md font-semibold">DOC</div>
              <p className="flex text-xl">Term and Conditions</p>
            </div>

              <div>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.59182 15.8042C2.34396 10.2867 6.40306 4.25 12.3609 4.25H12.6823C17.1379 4.25 20.7499 7.86201 20.7499 12.3176C20.7499 17.2785 16.7284 21.3 11.7676 21.3H3.94731C3.62905 21.3 3.34545 21.0991 3.23982 20.7989C3.13419 20.4987 3.22954 20.1645 3.47769 19.9652L5.44918 18.3819C5.53538 18.3127 5.56587 18.1951 5.52416 18.0927L4.59182 15.8042ZM12.3609 5.75C7.46834 5.75 4.13502 10.7074 5.98096 15.2383L6.9133 17.5268C7.2053 18.2435 6.99184 19.0669 6.38842 19.5515L6.07897 19.8H11.7676C15.9 19.8 19.2499 16.45 19.2499 12.3176C19.2499 8.69044 16.3095 5.75 12.6823 5.75H12.3609Z" fill="#7E7E7E"/>
                </svg>
                <p>52</p>
              </div>
            </div>
         


       
                        
        </div>
{/*  */}

        <div className="w-auto p-6  bg-white rounded-md shadow-md lg:max-w-xl"> 
          <h1 className="flex text-lg">DEMO</h1>

            <div className="flex gap-5 items-center my-2">
              <div className="flex bg-[#E0F3F5] px-5 py-2 rounded-md font-semibold">DOC</div>
              <p className="flex text-xl">Term and Conditions</p>
            </div>  
        </div>

        <div className="w-auto p-6  bg-white rounded-md shadow-md lg:max-w-xl"> 
          <h1 className="flex text-lg">Prototype</h1>

          <div className="flex gap-5">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 12C13.5 15.18 10.93 17.75 7.75 17.75C4.57 17.75 2 15.18 2 12C2 8.82 4.57 6.25 7.75 6.25" stroke="#0D8349" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M13.5 12C13.5 15.18 10.93 17.75 7.75 17.75C4.57 17.75 2 15.18 2 12C2 8.82 4.57 6.25 7.75 6.25" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 12C10 8.69 12.69 6 16 6C19.31 6 22 8.69 22 12C22 15.31 19.31 18 16 18" stroke="#0D8349" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 12C10 8.69 12.69 6 16 6C19.31 6 22 8.69 22 12C22 15.31 19.31 18 16 18" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          <p>Prototype Link</p>

          </div>
            
        </div>
  
    </div>
  )
}

export default NavAbout
