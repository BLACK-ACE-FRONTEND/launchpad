"use client"

import Link from "next/link";
import logo from '../../assets/img/feed-pic1.svg';
import video from '../../assets/img/feed-video.svg';
import keyIcon from '../../assets/img/eclipse.svg';
import ecliseIcon from '../../assets/img/eclipse1.svg';
import ecliseIcon1 from '../../assets/img/eclipse2.svg';
import ecliseIcon2 from '../../assets/img/eclipse3.svg';
import lauchpadxx from '../../assets/img/launcpadxx.svg';
import teragtIcon from '../../assets/img/tera-gt.svg';
import eclipseIcon3 from '../../assets/img/eclipse4.svg';
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Feed() {
    const router = useRouter()

    return (
      // <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden"> 
      <div className="relative flex flex-1 flex-col h-auto overflow-y-auto overflow-x-hidden"> 
        <div  className="lg:flex lg:gap-x-4 justify-around items-start my-5 mx-2">

         <div className="flex flex-col"> 
         <nav className="flex justify-between mx-2 text-lg font-normal">
            <ul className="flex gap-5">
              <li>For you</li>
              <li>Following</li>
            </ul>

            <ul>
              <li>
              Filter
              <select id="cat">
                <option value="otherCat"></option>
                {/* <option value="WordPress">WordPress</option> */}
              </select>

              <p id="result" /></li>

            </ul>
          </nav>

{/* <svg width="531" height="1" viewBox="0 0 531 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="531" height="1" rx="0.5" fill="#D0D6D6"/>
</svg> */}



          <div className="lg:max-w-xl w-full mb-5">
          <div className="flex justify-between mr-10 items-center">
            <div className="flex gap-2 my-5">
              <Image
                    className="w-auto h-auto rounded-md"
                    src={lauchpadxx} 
                    width={96}
                    height={96}
                    alt="sign up with image"
                />
              <div className="flex flex-col">
                <h1 className="text-sm font-bold text-start text-gray-700">
                    LAUCH PAD XX
                </h1>
                <p>5 hours ago . oct 29, 2023</p>
                </div>
                </div>
                
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.5 10.5C5.67157 10.5 5 11.1716 5 12C5 12.8284 5.67157 13.5 6.5 13.5C7.32843 13.5 8 12.8284 8 12C8 11.1716 7.32843 10.5 6.5 10.5Z" fill="black"/>
                <path d="M11 12C11 11.1716 11.6716 10.5 12.5 10.5C13.3284 10.5 14 11.1716 14 12C14 12.8284 13.3284 13.5 12.5 13.5C11.6716 13.5 11 12.8284 11 12Z" fill="black"/>
                <path d="M17 12C17 11.1716 17.6716 10.5 18.5 10.5C19.3284 10.5 20 11.1716 20 12C20 12.8284 19.3284 13.5 18.5 13.5C17.6716 13.5 17 12.8284 17 12Z" fill="black"/>
                </svg>
                

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
              <div className="flex justify-between mr-10 items-center">
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
                
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.5 10.5C5.67157 10.5 5 11.1716 5 12C5 12.8284 5.67157 13.5 6.5 13.5C7.32843 13.5 8 12.8284 8 12C8 11.1716 7.32843 10.5 6.5 10.5Z" fill="black"/>
                <path d="M11 12C11 11.1716 11.6716 10.5 12.5 10.5C13.3284 10.5 14 11.1716 14 12C14 12.8284 13.3284 13.5 12.5 13.5C11.6716 13.5 11 12.8284 11 12Z" fill="black"/>
                <path d="M17 12C17 11.1716 17.6716 10.5 18.5 10.5C19.3284 10.5 20 11.1716 20 12C20 12.8284 19.3284 13.5 18.5 13.5C17.6716 13.5 17 12.8284 17 12Z" fill="black"/>
                </svg>
                

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
        <div className="flex justify-between mr-10 items-center">
            <div className="flex gap-2 my-5">
                <Image
                  className="w-auto h-auto rounded-md"
                  src={eclipseIcon3} 
                  width={96}
                  height={96}
                  alt="sign up with image"
              />
              <div className="flex flex-col">
                        <h1 className="text-sm font-bold text-start text-gray-700">
                      Pentile
                  </h1>
                  <p>11:09 AM . oct 19, 2023</p>
                </div>
                </div>
                
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.5 10.5C5.67157 10.5 5 11.1716 5 12C5 12.8284 5.67157 13.5 6.5 13.5C7.32843 13.5 8 12.8284 8 12C8 11.1716 7.32843 10.5 6.5 10.5Z" fill="black"/>
                <path d="M11 12C11 11.1716 11.6716 10.5 12.5 10.5C13.3284 10.5 14 11.1716 14 12C14 12.8284 13.3284 13.5 12.5 13.5C11.6716 13.5 11 12.8284 11 12Z" fill="black"/>
                <path d="M17 12C17 11.1716 17.6716 10.5 18.5 10.5C19.3284 10.5 20 11.1716 20 12C20 12.8284 19.3284 13.5 18.5 13.5C17.6716 13.5 17 12.8284 17 12Z" fill="black"/>
                </svg>
                

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

      </div>  

      

          <div className="w-auto bg-white rounded-md lg:max-w-xl">
          
            <div className="w-auto p-6  bg-white rounded-md shadow-md lg:max-w-xl"> 
                <div className="flex flex-col justify-center items-start gap-5 ">
                  
                        <h1 className="text-3xl font-bold text-gray-700">
                            FEATURED
                            </h1>
                            <div className="flex gap-5">
                              <Image
                                // className="object-cover rounded-md"
                                className="rounded-md"
                                src={keyIcon} 
                                width={43}
                                height={43}
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
                                className="rounded-md"
                                src={ecliseIcon} 
                                width={43}
                                height={43}
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
                                className="rounded-md"
                                src={ecliseIcon1} 
                                width={43}
                                height={43}
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
                                className="rounded-md"
                                src={ecliseIcon2} 
                                width={43}
                                height={43}
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

