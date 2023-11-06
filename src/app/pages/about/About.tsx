"use client"

import Link from "next/link";
import logo from '../../assets/img/tera-img.svg';
import video from '../../assets/img/feed-video.svg';
import banner from '../../assets/img/banner-about.svg';
import keyIcon from '../../assets/img/eclipse.svg';
import ecliseIcon from '../../assets/img/eclipse1.svg';
import ecliseIcon1 from '../../assets/img/eclipse2.svg';
import ecliseIcon2 from '../../assets/img/eclipse3.svg';
import lauchpadxx from '../../assets/img/tera-img1.svg';
import teragtIcon from '../../assets/img/tera-gt.svg';
import eclipseIcon3 from '../../assets/img/eclipse4.svg';
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function About() {
    const router = useRouter()

    return (
      // <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden"> 
      <div className="relative flex flex-1 flex-col h-auto overflow-y-auto overflow-x-hidden"> 
        <div  className="lg:flex lg:gap-x-4 justify-center items-start my-5 mx-4">

         <div className="flex flex-col"> 
         <Image
                    className="w-auto h-auto rounded-md"
                    src={banner} 
                    width={96}
                    height={96}
                    alt="sign up with image"
                />
        

          <svg width="531" height="1" viewBox="0 0 531 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="531" height="1" rx="0.5" fill="#D0D6D6"/>
          </svg>

           {/* <div className="lg:max-w-xl w-auto my-5">  */}

          <div className="flex gap-2 my-5 w-auto"> 
              {/* <Image
                    className="w-auto h-auto rounded-md"
                    src={teragtIcon} 
                    width={96}
                    height={96}
                    alt="sign up with image"
                /> */}
            
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

                <div className="flex gap-5">
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

        
        {/* <div> */}
                <nav>
                  <ul className="flex justify-between mx-5">
                    <li>About</li>
                    <li>Feed</li>
                    <li>Events</li>
                  </ul>
                </nav>
                {/* <div></div> */}
              {/* </div> */}

      <div className="flex flex-col bg-[#E8F0EC]"> 
        
          <div className="lg:max-w-xl w-full mb-5">
            <div className="flex gap-2 my-5">
              <Image
                    className="w-auto h-auto rounded-md"
                    src={teragtIcon} 
                    width={96}
                    height={96}
                    alt="sign up with image"
                />
              <div className="flex flex-col">
                <h1 className="text-sm font-bold text-start text-gray-700">
                    Terah GT
                </h1>
                <p>12:17 PM . Oct 28, 2023</p>
                </div>
            </div>

            <div className="mx-8">
            <p>We are thrilled to announce the successful deployment of our blockchain
              contract! This milestones marks a significant step towards decentralized
              future.</p>   

              <div className="flex gap-5 my-5"> 
                  
                  <p className='text-start'><span className='bg-[#F8FFFB] text-black'>
                  <button type='button' onClick={() => router.push ('/pages/login')}>web3</button> 
                  </span></p>

                  <p className='text-start'><span className='bg-[#F8FFFB] text-black'>
                  <button type='button' onClick={() => router.push ('/pages/login')}>blockchain</button> 
                  </span></p>

                  <p className='text-start'><span className='bg-[#F8FFFB] text-black'>
                  <button type='button' onClick={() => router.push ('/pages/login')}>decentralization</button> 
                  </span></p>

                  <p className='text-start'><span className='bg-[#F8FFFB] text-black'>
                  <button type='button' onClick={() => router.push ('/pages/login')}>smart contract</button> 
                  </span></p>
          </div>


            <Image
                className="w-full h-full object-cover rounded-md mt-5"
                src={logo} 
                width={410}
                height={280}
                alt="sign up with image"
            />

            <div className="flex gap-5 justify-between my-5 mx-5"> 
              <div className="flex gap-2">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.59182 12.3042C-0.656044 6.78675 3.40306 0.75 9.36088 0.75H9.6823C14.1379 0.75 17.7499 4.36201 17.7499 8.81765C17.7499 13.7785 13.7284 17.8 8.76759 17.8H0.947308C0.62905 17.8 0.345448 17.5991 0.23982 17.2989C0.134192 16.9987 0.229543 16.6645 0.477686 16.4652L2.44918 14.8819C2.53538 14.8127 2.56587 14.6951 2.52416 14.5927L1.59182 12.3042ZM9.36088 2.25C4.46834 2.25 1.13502 7.20735 2.98096 11.7383L3.9133 14.0268C4.2053 14.7435 3.99184 15.5669 3.38842 16.0515L3.07897 16.3H8.76759C12.9 16.3 16.2499 12.95 16.2499 8.81765C16.2499 5.19044 13.3095 2.25 9.6823 2.25H9.36088Z" fill="#637576"/>
                </svg>
                  <p className='text-start'><span className='bg-[#F8FFFB] text-black'>
                  <button type='button' onClick={() => router.push ('/pages/login')}>132</button> 
                  </span></p>
                  </div>

                <div className="flex gap-2">
                  <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.70238 2.25C6.53615 2.25 6.3827 2.33919 6.30042 2.48362L2.95444 8.35685C2.51091 9.13539 2.32478 10.0342 2.42265 10.9249L2.7758 14.1385C2.83863 14.7103 3.2875 15.1632 3.8587 15.2312L5.97575 15.483C7.37331 15.6493 8.79034 15.5051 10.1258 15.0609C10.7854 14.8416 11.3136 14.341 11.5681 13.6942L13.2722 9.36363C13.3139 9.25775 13.3427 9.14725 13.358 9.03451C13.4872 8.0824 12.6538 7.27924 11.7071 7.44367L8.29129 8.03694C7.21229 8.22434 6.28038 7.27216 6.49096 6.19744L7.15637 2.80158C7.21236 2.51581 6.99358 2.25 6.70238 2.25ZM4.99708 1.74111C5.34617 1.12836 5.99716 0.750006 6.70237 0.75C7.93775 0.749989 8.86593 1.87768 8.62838 3.09001L7.96297 6.48587C7.96012 6.50042 7.96165 6.50931 7.96365 6.51569C7.96612 6.52355 7.97119 6.53276 7.97954 6.5413C7.9879 6.54984 7.997 6.5551 8.0048 6.55774C8.01114 6.55988 8.01999 6.5616 8.0346 6.55906L11.4504 5.96579C13.3966 5.62777 15.1101 7.27891 14.8444 9.23627C14.8129 9.46806 14.7537 9.69522 14.6681 9.91289L12.964 14.2435C12.5467 15.3039 11.6806 16.1246 10.5992 16.4843C9.0544 16.9981 7.41522 17.1648 5.79856 16.9725L3.68151 16.7207C2.4173 16.5703 1.42383 15.5679 1.28477 14.3024L0.931628 11.0887C0.799213 9.88369 1.05103 8.66766 1.65111 7.61434L4.99708 1.74111Z" fill="#637576"/>
                  </svg>
                  <p className='text-start'><span className='bg-[#F8FFFB] text-black'>
                  <button type='button' onClick={() => router.push ('/pages/login')}>213</button> 
                  </span></p>
                  </div>
                 
                <div className="flex gap-2">
                  <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.29758 15.7502C8.46381 15.7502 8.61726 15.661 8.69954 15.5166L12.0455 9.64334C12.4891 8.8648 12.6752 7.96599 12.5773 7.07533L12.2242 3.86166C12.1613 3.28988 11.7125 2.83697 11.1413 2.76902L9.02422 2.51719C7.62665 2.35094 6.20962 2.49505 4.87414 2.93924C4.2146 3.15861 3.68633 3.6592 3.43182 4.30599L1.72773 8.63656C1.68607 8.74244 1.65727 8.85293 1.64197 8.96568C1.51273 9.91779 2.3462 10.7209 3.29287 10.5565L6.70868 9.96325C7.78767 9.77585 8.71959 10.728 8.509 11.8027L7.84359 15.1986C7.7876 15.4844 8.00638 15.7502 8.29758 15.7502ZM10.0029 16.2591C9.6538 16.8718 9.0028 17.2502 8.2976 17.2502C7.06221 17.2502 6.13403 16.1225 6.37159 14.9102L7.03699 11.5143C7.03984 11.4998 7.03831 11.4909 7.03631 11.4845C7.03384 11.4766 7.02878 11.4674 7.02042 11.4589C7.01206 11.4504 7.00296 11.4451 6.99516 11.4424C6.98882 11.4403 6.97997 11.4386 6.96536 11.4411L3.54955 12.0344C1.60337 12.3724 -0.110097 10.7213 0.155601 8.76392C0.187065 8.53213 0.246258 8.30497 0.33191 8.0873L2.036 3.75673C2.45328 2.69631 3.31939 1.87557 4.40072 1.51591C5.94557 1.00208 7.58474 0.835375 9.2014 1.02769L11.3185 1.27953C12.5827 1.42991 13.5761 2.43232 13.7152 3.69782L14.0683 6.91149C14.2008 8.1165 13.9489 9.33253 13.3489 10.3858L10.0029 16.2591Z" fill="#637576"/>
                  </svg>
                  <p className='text-start'><span className='bg-[#F8FFFB] text-black'>
                  <button type='button' onClick={() => router.push ('/pages/login')}>7</button> 
                  </span></p>
                  </div>

                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.44 8.90039C20.04 9.21039 21.51 11.0604 21.51 15.1104V15.2404C21.51 19.7104 19.72 21.5004 15.25 21.5004H8.73998C4.26998 21.5004 2.47998 19.7104 2.47998 15.2404V15.1104C2.47998 11.0904 3.92998 9.24039 7.46998 8.91039" stroke="#637576" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 15.0001V3.62012" stroke="#637576" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M15.35 5.85L12 2.5L8.65002 5.85" stroke="#637576" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>

          </div>

            </div>
          </div>

          <svg width="531" height="1" viewBox="0 0 531 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="531" height="1" rx="0.5" fill="#D0D6D6"/>
          </svg>

          <div className="lg:max-w-xl w-full my-5">

          <div className="flex gap-2 my-5">
              <Image
                    className="w-auto h-auto rounded-md"
                    src={teragtIcon} 
                    width={96}
                    height={96}
                    alt="sign up with image"
                />
            
              <div className="flex flex-col">
                  <h1 className="text-sm font-bold text-start text-gray-700">
                      Terah GT
                  </h1>
                  <p>6:07 PM . oct 27, 2023</p>
                </div>
            </div>

            <div className="mx-8">
            <p>We are thrilled to announce the successful deployment of our blockchain
              contract! This milestones marks a significant step towards decentralized
              future.</p>   

              <div className="flex gap-5 my-5"> 
                  
                  <p className='text-start'><span className='bg-[#F8FFFB] text-black'>
                  <button type='button' onClick={() => router.push ('/pages/login')}>demoTesting</button> 
                  </span></p>

                  <p className='text-start'><span className='bg-[#F8FFFB] text-black'>
                  <button type='button' onClick={() => router.push ('/pages/login')}>innovation</button> 
                  </span></p>

                  <p className='text-start'><span className='bg-[#F8FFFB] text-black'>
                  <button type='button' onClick={() => router.push ('/pages/login')}>Freelance</button> 
                  </span></p>

                  <p className='text-start'><span className='bg-[#F8FFFB] text-black'>
                  <button type='button' onClick={() => router.push ('/pages/login')}>services</button> 
                  </span></p>
          </div>
               
            <Image
                className="w-full h-full object-cover rounded-md"
                src={video} 
                width={410}
                height={280}
                alt="sign up with image"
            />

<div className="flex gap-5 justify-between my-5 mx-5"> 
              <div className="flex gap-2">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.59182 12.3042C-0.656044 6.78675 3.40306 0.75 9.36088 0.75H9.6823C14.1379 0.75 17.7499 4.36201 17.7499 8.81765C17.7499 13.7785 13.7284 17.8 8.76759 17.8H0.947308C0.62905 17.8 0.345448 17.5991 0.23982 17.2989C0.134192 16.9987 0.229543 16.6645 0.477686 16.4652L2.44918 14.8819C2.53538 14.8127 2.56587 14.6951 2.52416 14.5927L1.59182 12.3042ZM9.36088 2.25C4.46834 2.25 1.13502 7.20735 2.98096 11.7383L3.9133 14.0268C4.2053 14.7435 3.99184 15.5669 3.38842 16.0515L3.07897 16.3H8.76759C12.9 16.3 16.2499 12.95 16.2499 8.81765C16.2499 5.19044 13.3095 2.25 9.6823 2.25H9.36088Z" fill="#637576"/>
                </svg>
                  <p className='text-start'><span className='bg-[#F8FFFB] text-black'>
                  <button type='button' onClick={() => router.push ('/pages/login')}>467</button> 
                  </span></p>
                  </div>

                <div className="flex gap-2">
                  <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.70238 2.25C6.53615 2.25 6.3827 2.33919 6.30042 2.48362L2.95444 8.35685C2.51091 9.13539 2.32478 10.0342 2.42265 10.9249L2.7758 14.1385C2.83863 14.7103 3.2875 15.1632 3.8587 15.2312L5.97575 15.483C7.37331 15.6493 8.79034 15.5051 10.1258 15.0609C10.7854 14.8416 11.3136 14.341 11.5681 13.6942L13.2722 9.36363C13.3139 9.25775 13.3427 9.14725 13.358 9.03451C13.4872 8.0824 12.6538 7.27924 11.7071 7.44367L8.29129 8.03694C7.21229 8.22434 6.28038 7.27216 6.49096 6.19744L7.15637 2.80158C7.21236 2.51581 6.99358 2.25 6.70238 2.25ZM4.99708 1.74111C5.34617 1.12836 5.99716 0.750006 6.70237 0.75C7.93775 0.749989 8.86593 1.87768 8.62838 3.09001L7.96297 6.48587C7.96012 6.50042 7.96165 6.50931 7.96365 6.51569C7.96612 6.52355 7.97119 6.53276 7.97954 6.5413C7.9879 6.54984 7.997 6.5551 8.0048 6.55774C8.01114 6.55988 8.01999 6.5616 8.0346 6.55906L11.4504 5.96579C13.3966 5.62777 15.1101 7.27891 14.8444 9.23627C14.8129 9.46806 14.7537 9.69522 14.6681 9.91289L12.964 14.2435C12.5467 15.3039 11.6806 16.1246 10.5992 16.4843C9.0544 16.9981 7.41522 17.1648 5.79856 16.9725L3.68151 16.7207C2.4173 16.5703 1.42383 15.5679 1.28477 14.3024L0.931628 11.0887C0.799213 9.88369 1.05103 8.66766 1.65111 7.61434L4.99708 1.74111Z" fill="#637576"/>
                  </svg>
                  <p className='text-start'><span className='bg-[#F8FFFB] text-black'>
                  <button type='button' onClick={() => router.push ('/pages/login')}>845</button> 
                  </span></p>
                  </div>
                 
                <div className="flex gap-2">
                  <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.29758 15.7502C8.46381 15.7502 8.61726 15.661 8.69954 15.5166L12.0455 9.64334C12.4891 8.8648 12.6752 7.96599 12.5773 7.07533L12.2242 3.86166C12.1613 3.28988 11.7125 2.83697 11.1413 2.76902L9.02422 2.51719C7.62665 2.35094 6.20962 2.49505 4.87414 2.93924C4.2146 3.15861 3.68633 3.6592 3.43182 4.30599L1.72773 8.63656C1.68607 8.74244 1.65727 8.85293 1.64197 8.96568C1.51273 9.91779 2.3462 10.7209 3.29287 10.5565L6.70868 9.96325C7.78767 9.77585 8.71959 10.728 8.509 11.8027L7.84359 15.1986C7.7876 15.4844 8.00638 15.7502 8.29758 15.7502ZM10.0029 16.2591C9.6538 16.8718 9.0028 17.2502 8.2976 17.2502C7.06221 17.2502 6.13403 16.1225 6.37159 14.9102L7.03699 11.5143C7.03984 11.4998 7.03831 11.4909 7.03631 11.4845C7.03384 11.4766 7.02878 11.4674 7.02042 11.4589C7.01206 11.4504 7.00296 11.4451 6.99516 11.4424C6.98882 11.4403 6.97997 11.4386 6.96536 11.4411L3.54955 12.0344C1.60337 12.3724 -0.110097 10.7213 0.155601 8.76392C0.187065 8.53213 0.246258 8.30497 0.33191 8.0873L2.036 3.75673C2.45328 2.69631 3.31939 1.87557 4.40072 1.51591C5.94557 1.00208 7.58474 0.835375 9.2014 1.02769L11.3185 1.27953C12.5827 1.42991 13.5761 2.43232 13.7152 3.69782L14.0683 6.91149C14.2008 8.1165 13.9489 9.33253 13.3489 10.3858L10.0029 16.2591Z" fill="#637576"/>
                  </svg>
                  <p className='text-start'><span className='bg-[#F8FFFB] text-black'>
                  <button type='button' onClick={() => router.push ('/pages/login')}>374</button> 
                  </span></p>
                  </div>

                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.44 8.90039C20.04 9.21039 21.51 11.0604 21.51 15.1104V15.2404C21.51 19.7104 19.72 21.5004 15.25 21.5004H8.73998C4.26998 21.5004 2.47998 19.7104 2.47998 15.2404V15.1104C2.47998 11.0904 3.92998 9.24039 7.46998 8.91039" stroke="#637576" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 15.0001V3.62012" stroke="#637576" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M15.35 5.85L12 2.5L8.65002 5.85" stroke="#637576" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>

          </div>

        </div>

      </div>

      <svg width="531" height="1" viewBox="0 0 531 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="531" height="1" rx="0.5" fill="#D0D6D6"/>
          </svg>



      <div className="lg:max-w-xl w-full my-5">

<div className="flex gap-2 my-5">
    <Image
          className="w-auto h-auto rounded-md"
          src={teragtIcon} 
          width={96}
          height={96}
          alt="sign up with image"
      />
  
    <div className="flex flex-col">
        <h1 className="text-sm font-bold text-start text-gray-700">
          Terah GT
        </h1>
        <p>11:09 AM . oct 19, 2023</p>
      </div>
  </div>

  <div className="mx-8">
  <p>Exciting news from our telecom startup! We are in the early stages of
    development and the journey is underway. We are passionate about transforming
    the telecom industry and cannot wait to share our innovations with you.
    Stay tuned for more updates!</p>   

    <div className="flex gap-5 my-5"> 
        
        <p className='text-start'><span className='bg-[#F8FFFB] text-black'>
        <button type='button' onClick={() => router.push ('/pages/login')}>telecom</button> 
        </span></p>

        <p className='text-start'><span className='bg-[#F8FFFB] text-black'>
        <button type='button' onClick={() => router.push ('/pages/login')}>innovation</button> 
        </span></p>

        <p className='text-start'><span className='bg-[#F8FFFB] text-black'>
        <button type='button' onClick={() => router.push ('/pages/login')}>StartupProgress</button> 
        </span></p>

        {/* <p className='text-start'><span className='text-[#0F9D58]'>
        <button type='button' onClick={() => router.push ('/pages/login')}>services</button> 
        </span></p> */}
</div>
      
  {/* <Image
      className="w-auto h-auto object-cover rounded-md"
      src={video} 
      width={410}
      height={280}
      alt="sign up with image"
  /> */}

<div className="flex gap-5 justify-between my-5 mx-5"> 
    <div className="flex gap-2">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.59182 12.3042C-0.656044 6.78675 3.40306 0.75 9.36088 0.75H9.6823C14.1379 0.75 17.7499 4.36201 17.7499 8.81765C17.7499 13.7785 13.7284 17.8 8.76759 17.8H0.947308C0.62905 17.8 0.345448 17.5991 0.23982 17.2989C0.134192 16.9987 0.229543 16.6645 0.477686 16.4652L2.44918 14.8819C2.53538 14.8127 2.56587 14.6951 2.52416 14.5927L1.59182 12.3042ZM9.36088 2.25C4.46834 2.25 1.13502 7.20735 2.98096 11.7383L3.9133 14.0268C4.2053 14.7435 3.99184 15.5669 3.38842 16.0515L3.07897 16.3H8.76759C12.9 16.3 16.2499 12.95 16.2499 8.81765C16.2499 5.19044 13.3095 2.25 9.6823 2.25H9.36088Z" fill="#637576"/>
      </svg>
        <p className='text-start'><span className='bg-[#F8FFFB] text-black'>
        <button type='button' onClick={() => router.push ('/pages/login')}>457</button> 
        </span></p>
        </div>

      <div className="flex gap-2">
        <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.70238 2.25C6.53615 2.25 6.3827 2.33919 6.30042 2.48362L2.95444 8.35685C2.51091 9.13539 2.32478 10.0342 2.42265 10.9249L2.7758 14.1385C2.83863 14.7103 3.2875 15.1632 3.8587 15.2312L5.97575 15.483C7.37331 15.6493 8.79034 15.5051 10.1258 15.0609C10.7854 14.8416 11.3136 14.341 11.5681 13.6942L13.2722 9.36363C13.3139 9.25775 13.3427 9.14725 13.358 9.03451C13.4872 8.0824 12.6538 7.27924 11.7071 7.44367L8.29129 8.03694C7.21229 8.22434 6.28038 7.27216 6.49096 6.19744L7.15637 2.80158C7.21236 2.51581 6.99358 2.25 6.70238 2.25ZM4.99708 1.74111C5.34617 1.12836 5.99716 0.750006 6.70237 0.75C7.93775 0.749989 8.86593 1.87768 8.62838 3.09001L7.96297 6.48587C7.96012 6.50042 7.96165 6.50931 7.96365 6.51569C7.96612 6.52355 7.97119 6.53276 7.97954 6.5413C7.9879 6.54984 7.997 6.5551 8.0048 6.55774C8.01114 6.55988 8.01999 6.5616 8.0346 6.55906L11.4504 5.96579C13.3966 5.62777 15.1101 7.27891 14.8444 9.23627C14.8129 9.46806 14.7537 9.69522 14.6681 9.91289L12.964 14.2435C12.5467 15.3039 11.6806 16.1246 10.5992 16.4843C9.0544 16.9981 7.41522 17.1648 5.79856 16.9725L3.68151 16.7207C2.4173 16.5703 1.42383 15.5679 1.28477 14.3024L0.931628 11.0887C0.799213 9.88369 1.05103 8.66766 1.65111 7.61434L4.99708 1.74111Z" fill="#637576"/>
        </svg>
        <p className='text-start'><span className='bg-[#F8FFFB] text-black'>
        <button type='button' onClick={() => router.push ('/pages/login')}>159</button> 
        </span></p>
        </div>
       
      <div className="flex gap-2">
        <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.29758 15.7502C8.46381 15.7502 8.61726 15.661 8.69954 15.5166L12.0455 9.64334C12.4891 8.8648 12.6752 7.96599 12.5773 7.07533L12.2242 3.86166C12.1613 3.28988 11.7125 2.83697 11.1413 2.76902L9.02422 2.51719C7.62665 2.35094 6.20962 2.49505 4.87414 2.93924C4.2146 3.15861 3.68633 3.6592 3.43182 4.30599L1.72773 8.63656C1.68607 8.74244 1.65727 8.85293 1.64197 8.96568C1.51273 9.91779 2.3462 10.7209 3.29287 10.5565L6.70868 9.96325C7.78767 9.77585 8.71959 10.728 8.509 11.8027L7.84359 15.1986C7.7876 15.4844 8.00638 15.7502 8.29758 15.7502ZM10.0029 16.2591C9.6538 16.8718 9.0028 17.2502 8.2976 17.2502C7.06221 17.2502 6.13403 16.1225 6.37159 14.9102L7.03699 11.5143C7.03984 11.4998 7.03831 11.4909 7.03631 11.4845C7.03384 11.4766 7.02878 11.4674 7.02042 11.4589C7.01206 11.4504 7.00296 11.4451 6.99516 11.4424C6.98882 11.4403 6.97997 11.4386 6.96536 11.4411L3.54955 12.0344C1.60337 12.3724 -0.110097 10.7213 0.155601 8.76392C0.187065 8.53213 0.246258 8.30497 0.33191 8.0873L2.036 3.75673C2.45328 2.69631 3.31939 1.87557 4.40072 1.51591C5.94557 1.00208 7.58474 0.835375 9.2014 1.02769L11.3185 1.27953C12.5827 1.42991 13.5761 2.43232 13.7152 3.69782L14.0683 6.91149C14.2008 8.1165 13.9489 9.33253 13.3489 10.3858L10.0029 16.2591Z" fill="#637576"/>
        </svg>
        <p className='text-start'><span className='bg-[#F8FFFB] text-black'>
        <button type='button' onClick={() => router.push ('/pages/login')}>12</button> 
        </span></p>
        </div>

        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.44 8.90039C20.04 9.21039 21.51 11.0604 21.51 15.1104V15.2404C21.51 19.7104 19.72 21.5004 15.25 21.5004H8.73998C4.26998 21.5004 2.47998 19.7104 2.47998 15.2404V15.1104C2.47998 11.0904 3.92998 9.24039 7.46998 8.91039" stroke="#637576" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 15.0001V3.62012" stroke="#637576" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.35 5.85L12 2.5L8.65002 5.85" stroke="#637576" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

</div>

</div>

</div>

<svg width="531" height="1" viewBox="0 0 531 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="531" height="1" rx="0.5" fill="#D0D6D6"/>
          </svg>

          <div className="lg:max-w-xl w-full my-5">

<div className="flex gap-2 my-5">
    <Image
          className="w-auto h-auto rounded-md"
          src={teragtIcon} 
          width={96}
          height={96}
          alt="sign up with image"
      />
  
    <div className="flex flex-col">
        <h1 className="text-sm font-bold text-start text-gray-700">
            Terah GT
        </h1>
        <p>6:07 PM . oct 27, 2023</p>
      </div>
  </div>

  <div className="mx-8">
  <p>We are thrilled to announce the successful deployment of our blockchain
    contract! This milestones marks a significant step towards decentralized
    future.</p>   

    <div className="flex gap-5 my-5"> 
        
        <p className='text-start'><span className='bg-[#F8FFFB] text-black'>
        <button type='button' onClick={() => router.push ('/pages/login')}>demoTesting</button> 
        </span></p>

        <p className='text-start'><span className='bg-[#F8FFFB] text-black'>
        <button type='button' onClick={() => router.push ('/pages/login')}>innovation</button> 
        </span></p>

        <p className='text-start'><span className='bg-[#F8FFFB] text-black'>
        <button type='button' onClick={() => router.push ('/pages/login')}>Freelance</button> 
        </span></p>

        <p className='text-start'><span className='bg-[#F8FFFB] text-black'>
        <button type='button' onClick={() => router.push ('/pages/login')}>services</button> 
        </span></p>
</div>
     
  <Image
      className="w-full h-full object-cover rounded-md"
      src={lauchpadxx} 
      width={410}
      height={280}
      alt="sign up with image"
  />

<div className="flex gap-5 justify-between my-5 mx-5"> 
    <div className="flex gap-2">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.59182 12.3042C-0.656044 6.78675 3.40306 0.75 9.36088 0.75H9.6823C14.1379 0.75 17.7499 4.36201 17.7499 8.81765C17.7499 13.7785 13.7284 17.8 8.76759 17.8H0.947308C0.62905 17.8 0.345448 17.5991 0.23982 17.2989C0.134192 16.9987 0.229543 16.6645 0.477686 16.4652L2.44918 14.8819C2.53538 14.8127 2.56587 14.6951 2.52416 14.5927L1.59182 12.3042ZM9.36088 2.25C4.46834 2.25 1.13502 7.20735 2.98096 11.7383L3.9133 14.0268C4.2053 14.7435 3.99184 15.5669 3.38842 16.0515L3.07897 16.3H8.76759C12.9 16.3 16.2499 12.95 16.2499 8.81765C16.2499 5.19044 13.3095 2.25 9.6823 2.25H9.36088Z" fill="#637576"/>
      </svg>
        <p className='text-start'><span className='bg-[#F8FFFB] text-black'>
        <button type='button' onClick={() => router.push ('/pages/login')}>467</button> 
        </span></p>
        </div>

      <div className="flex gap-2">
        <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.70238 2.25C6.53615 2.25 6.3827 2.33919 6.30042 2.48362L2.95444 8.35685C2.51091 9.13539 2.32478 10.0342 2.42265 10.9249L2.7758 14.1385C2.83863 14.7103 3.2875 15.1632 3.8587 15.2312L5.97575 15.483C7.37331 15.6493 8.79034 15.5051 10.1258 15.0609C10.7854 14.8416 11.3136 14.341 11.5681 13.6942L13.2722 9.36363C13.3139 9.25775 13.3427 9.14725 13.358 9.03451C13.4872 8.0824 12.6538 7.27924 11.7071 7.44367L8.29129 8.03694C7.21229 8.22434 6.28038 7.27216 6.49096 6.19744L7.15637 2.80158C7.21236 2.51581 6.99358 2.25 6.70238 2.25ZM4.99708 1.74111C5.34617 1.12836 5.99716 0.750006 6.70237 0.75C7.93775 0.749989 8.86593 1.87768 8.62838 3.09001L7.96297 6.48587C7.96012 6.50042 7.96165 6.50931 7.96365 6.51569C7.96612 6.52355 7.97119 6.53276 7.97954 6.5413C7.9879 6.54984 7.997 6.5551 8.0048 6.55774C8.01114 6.55988 8.01999 6.5616 8.0346 6.55906L11.4504 5.96579C13.3966 5.62777 15.1101 7.27891 14.8444 9.23627C14.8129 9.46806 14.7537 9.69522 14.6681 9.91289L12.964 14.2435C12.5467 15.3039 11.6806 16.1246 10.5992 16.4843C9.0544 16.9981 7.41522 17.1648 5.79856 16.9725L3.68151 16.7207C2.4173 16.5703 1.42383 15.5679 1.28477 14.3024L0.931628 11.0887C0.799213 9.88369 1.05103 8.66766 1.65111 7.61434L4.99708 1.74111Z" fill="#637576"/>
        </svg>
        <p className='text-start'><span className='bg-[#F8FFFB] text-black'>
        <button type='button' onClick={() => router.push ('/pages/login')}>845</button> 
        </span></p>
        </div>
       
      <div className="flex gap-2">
        <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.29758 15.7502C8.46381 15.7502 8.61726 15.661 8.69954 15.5166L12.0455 9.64334C12.4891 8.8648 12.6752 7.96599 12.5773 7.07533L12.2242 3.86166C12.1613 3.28988 11.7125 2.83697 11.1413 2.76902L9.02422 2.51719C7.62665 2.35094 6.20962 2.49505 4.87414 2.93924C4.2146 3.15861 3.68633 3.6592 3.43182 4.30599L1.72773 8.63656C1.68607 8.74244 1.65727 8.85293 1.64197 8.96568C1.51273 9.91779 2.3462 10.7209 3.29287 10.5565L6.70868 9.96325C7.78767 9.77585 8.71959 10.728 8.509 11.8027L7.84359 15.1986C7.7876 15.4844 8.00638 15.7502 8.29758 15.7502ZM10.0029 16.2591C9.6538 16.8718 9.0028 17.2502 8.2976 17.2502C7.06221 17.2502 6.13403 16.1225 6.37159 14.9102L7.03699 11.5143C7.03984 11.4998 7.03831 11.4909 7.03631 11.4845C7.03384 11.4766 7.02878 11.4674 7.02042 11.4589C7.01206 11.4504 7.00296 11.4451 6.99516 11.4424C6.98882 11.4403 6.97997 11.4386 6.96536 11.4411L3.54955 12.0344C1.60337 12.3724 -0.110097 10.7213 0.155601 8.76392C0.187065 8.53213 0.246258 8.30497 0.33191 8.0873L2.036 3.75673C2.45328 2.69631 3.31939 1.87557 4.40072 1.51591C5.94557 1.00208 7.58474 0.835375 9.2014 1.02769L11.3185 1.27953C12.5827 1.42991 13.5761 2.43232 13.7152 3.69782L14.0683 6.91149C14.2008 8.1165 13.9489 9.33253 13.3489 10.3858L10.0029 16.2591Z" fill="#637576"/>
        </svg>
        <p className='text-start'><span className='bg-[#F8FFFB] text-black'>
        <button type='button' onClick={() => router.push ('/pages/login')}>374</button> 
        </span></p>
        </div>

        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.44 8.90039C20.04 9.21039 21.51 11.0604 21.51 15.1104V15.2404C21.51 19.7104 19.72 21.5004 15.25 21.5004H8.73998C4.26998 21.5004 2.47998 19.7104 2.47998 15.2404V15.1104C2.47998 11.0904 3.92998 9.24039 7.46998 8.91039" stroke="#637576" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 15.0001V3.62012" stroke="#637576" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.35 5.85L12 2.5L8.65002 5.85" stroke="#637576" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

</div>

</div>

</div>

<svg width="531" height="1" viewBox="0 0 531 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="531" height="1" rx="0.5" fill="#D0D6D6"/>
          </svg>

{/* Motseki */}
      </div>  

      </div>  

          <div className="w-auto bg-white rounded-md lg:max-w-xl">
          
            <div className="w-auto p-6  bg-white rounded-md shadow-md lg:max-w-xl"> 
                <div className="flex flex-col justify-center items-start gap-5 ">
                  
                        <h1 className="text-3xl font-bold text-gray-700">
                            FEATURED
                            </h1>
                            <div className="flex gap-5">
                              <Image
                                className="object-cover rounded-md"
                                src={keyIcon} 
                                width={96}
                                height={96}
                                alt="sign up with image"
                              /> 
                                
                                <div>
                                <h1 className="text-lg font-bold">Spiral Flow</h1>
                                <p>
                                  Your new password must be different from previously used password.
                                </p>
                                </div>
                            </div>

                            <div className="flex gap-5">
                              <Image
                                className="object-cover rounded-md"
                                src={ecliseIcon} 
                                width={96}
                                height={96}
                                alt="sign up with image"
                              /> 
                              <div>
                                <h1 className="text-lg font-bold">Pettra</h1>
                                <p>
                                  Your new password must be different from previously used password.
                                </p>
                                </div>
                            </div>

                            <div className="flex gap-5">
                              <Image
                                className="object-cover rounded-md"
                                src={ecliseIcon1} 
                                width={96}
                                height={96}
                                alt="sign up with image"
                              /> 
                                
                                <div>
                                <h1 className="text-lg font-bold">Waire</h1>
                                <p>
                                  Your new password must be different from previously used password.
                                </p>
                                </div>
                            </div>

                            <div className="flex gap-5">
                              <Image
                                className="object-cover rounded-md"
                                src={ecliseIcon2} 
                                width={96}
                                height={96}
                                alt="sign up with image"
                              /> 
                                
                                <div>
                                <h1 className="text-lg font-bold">Gatejar</h1>
                                <p>
                                  Your new password must be different from previously used password.
                                </p>
                                </div>
                            </div>
                </div>
            </div>


            <div className="w-auto p-6 mt-10 bg-white rounded-md shadow-md lg:max-w-xl"> 
                <div className="flex flex-col justify-start items-start gap-2 mx-10">
                    
                        <h1 className="text-3xl font-bold text-gray-700">
                            TRENDING TAGS
                            </h1>
                            <div className="flex flex-col my-5 gap-5"> 
                  
                                    <p className='text-start'><span className='bg-[#EBEDED]'>
                                    <button type='button' onClick={() => router.push ('/pages/login')}>services</button> 
                                    </span></p>

                                    <p className='text-start'><span className='bg-[#EBEDED]'>
                                    <button type='button' onClick={() => router.push ('/pages/login')}>blockchain</button> 
                                    </span></p>

                                    <p className='text-start'><span className='bg-[#EBEDED]'>
                                    <button type='button' onClick={() => router.push ('/pages/login')}>innovative</button> 
                                    </span></p>

                                    <p className='text-start'><span className='bg-[#EBEDED]'>
                                    <button type='button' onClick={() => router.push ('/pages/login')}>healthcare</button> 
                                    </span></p>
                            </div>
                </div>

                
            </div>



          </div>

        </div> 

         </div>
    );
  }

