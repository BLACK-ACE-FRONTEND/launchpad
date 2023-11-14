import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SidebarLinkGroup from "./SidebarLinkGroup";
import Image from "next/image";

// styling
import styles from './style.module.css';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    // <aside
    //   ref={sidebar}
    //   className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-white duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
    //     sidebarOpen ? "translate-x-0" : "-translate-x-full"
    //   }`}
    // >

    <aside
    ref={sidebar}
    className={`absolute left-0 top-0 z-9999 flex h-[240] w-[960] flex-col overflow-y-hidden bg-[#F6F6F6] duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
      sidebarOpen ? "translate-x-0" : "-translate-x-full"
    }`}
  >
      {/* <!-- SIDEBAR HEADER --> */}
      {/* <div className="flex items-center justify-between gap-2 pt-1 px-6 py-5.5 lg:py-6.5"> */}
      <div className="flex items-center justify-between gap-0 pt-0 px-0 py-0 lg:py-0">
        <Link href="/">
           {/* <Image
            width={176}
            height={32}
            src={"/images/logo/logo.svg"}
            alt="Logo"
          />  */}
          {/* background: #0F9D58; */}
          <h2 className={styles.nav_log}>LaunchPad Logo</h2>
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      {/* <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear"> */}
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        {/* <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6"> */}
        <nav className="gap-2 py-0 px-4 lg:mt-0 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div className="pb-5">
            <h3 className="mb-0 ml-4 text-lg font-medium text-bodydark2">
              Menu
            </h3>

            {/* <ul className="mb-6 flex flex-col gap-1.5"> */}
            <ul className="mb-0 flex flex-col gap-0">
              {/* <!-- Menu Item Dashboard --> */}
             

            <li>
                <Link
                  // href="/pages/feed"
                  href="/"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-normal text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("pages") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.25 17.1431H3.75002C3.15706 17.1432 2.58657 16.9163 2.15557 16.5091C1.72457 16.1019 1.46573 15.5451 1.43216 14.9531L1.42859 14.8217V4.46456C1.42854 4.05733 1.58309 3.66526 1.861 3.3676C2.13891 3.06993 2.51945 2.88887 2.92573 2.86099L3.03573 2.85742H14.1072C14.5144 2.85737 14.9065 3.01192 15.2041 3.28983C15.5018 3.56774 15.6829 3.94829 15.7107 4.35456L15.7143 4.46456V5.00028H16.9643C17.3715 5.00023 17.7636 5.15478 18.0613 5.43269C18.3589 5.7106 18.54 6.09114 18.5679 6.49742L18.5714 6.60742V14.8217C18.5715 15.4147 18.3446 15.9852 17.9374 16.4162C17.5302 16.8472 16.9734 17.106 16.3814 17.1396L16.25 17.1431ZM3.75002 16.0717H16.25C16.5638 16.0717 16.8662 15.9536 17.097 15.741C17.3277 15.5283 17.4701 15.2366 17.4957 14.9239L17.5 14.8217V6.60742C17.5 6.47797 17.4531 6.35289 17.368 6.25533C17.283 6.15777 17.1654 6.09431 17.0372 6.07671L16.9643 6.07171H15.7143V13.7503C15.7143 13.8797 15.6674 14.0048 15.5823 14.1024C15.4972 14.1999 15.3797 14.2634 15.2514 14.281L15.1786 14.286C15.0491 14.286 14.9241 14.2391 14.8265 14.154C14.7289 14.0689 14.6655 13.9514 14.6479 13.8231L14.6429 13.7503V4.46456C14.6429 4.33511 14.596 4.21003 14.5109 4.11247C14.4258 4.01491 14.3083 3.95146 14.18 3.93385L14.1072 3.92885H3.03573C2.90628 3.92886 2.7812 3.97574 2.68364 4.06083C2.58608 4.14592 2.52262 4.26345 2.50502 4.39171L2.50002 4.46456V14.8217C2.50003 15.1354 2.618 15.4376 2.8305 15.6684C3.04301 15.8992 3.33452 16.0416 3.64716 16.0674L3.75002 16.0717ZM7.31859 9.28885C7.81145 9.28885 8.21145 9.68885 8.21145 10.1817V12.6789C8.21145 13.1717 7.81145 13.5717 7.31859 13.5717H4.82145C4.32859 13.5717 3.92859 13.1717 3.92859 12.6789V10.1817C3.92859 9.68885 4.32859 9.28885 4.82145 9.28885H7.31859ZM10.1786 12.5003H12.6757C12.8115 12.5003 12.9421 12.5519 13.0413 12.6445C13.1405 12.7372 13.2008 12.8641 13.21 12.9995C13.2193 13.1349 13.1768 13.2688 13.0911 13.3741C13.0055 13.4794 12.8831 13.5482 12.7486 13.5667L12.6757 13.5717H10.1786C10.0429 13.5717 9.9122 13.5201 9.81302 13.4274C9.71384 13.3348 9.65354 13.2079 9.64428 13.0725C9.63503 12.9371 9.67753 12.8032 9.76318 12.6979C9.84884 12.5926 9.97127 12.5238 10.1057 12.5053L10.1786 12.5003ZM7.14073 10.3603H5.00002V12.5003H7.14073V10.3603ZM10.1786 9.28885H12.6757C12.8115 9.28889 12.9421 9.34045 13.0413 9.43312C13.1405 9.52578 13.2008 9.65264 13.21 9.78805C13.2193 9.92347 13.1768 10.0573 13.0911 10.1626C13.0055 10.2679 12.8831 10.3368 12.7486 10.3553L12.6757 10.3603H10.1786C10.0419 10.3617 9.90983 10.3107 9.80946 10.2179C9.70908 10.1251 9.64798 9.99747 9.63867 9.86108C9.62936 9.7247 9.67254 9.58991 9.75937 9.48432C9.8462 9.37874 9.97011 9.31034 10.1057 9.29314L10.1786 9.28885ZM4.46145 6.06956H12.6757C12.8115 6.06961 12.9421 6.12117 13.0413 6.21383C13.1405 6.30649 13.2008 6.43335 13.21 6.56876C13.2193 6.70418 13.1768 6.83806 13.0911 6.94335C13.0055 7.04864 12.8831 7.11749 12.7486 7.13599L12.6757 7.14099H4.46145C4.32578 7.14077 4.19524 7.08908 4.0962 6.99636C3.99716 6.90364 3.93698 6.7768 3.92783 6.64144C3.91867 6.50608 3.96121 6.37228 4.04686 6.26707C4.13252 6.16185 4.2549 6.09306 4.3893 6.07456L4.46145 6.06956Z" fill="#0F9D58"/>
                        </svg>
                    Feed
                </Link>
              </li>
              {/* <!-- Menu Item Dashboard --> */}

              {/* <!-- Menu Item Calendar --> */}
              <li>
                <Link
                  href="/calendar"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-normal text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("calendar") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.854047" y="11.1763" width="3.11949" height="7.96933" rx="0.854047" stroke="#637576" stroke-width="1.70809"/>
                  <rect x="8.44023" y="0.854047" width="3.11949" height="18.2919" rx="0.854047" stroke="#637576" stroke-width="1.70809"/>
                  <rect x="16.0265" y="4.72514" width="3.11949" height="14.4209" rx="0.854047" stroke="#637576" stroke-width="1.70809"/>
                  </svg>

                  Analysis
                </Link>
              </li>
              
              <li>
                <Link
                  href="/pages/events"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-normal text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("pages") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.2269 3.4161H14.5188V2.56205C14.5188 2.33555 14.4289 2.11832 14.2687 1.95815C14.1085 1.79799 13.8913 1.70801 13.6648 1.70801C13.4383 1.70801 13.221 1.79799 13.0609 1.95815C12.9007 2.11832 12.8107 2.33555 12.8107 2.56205V3.4161H7.68646V2.56205C7.68646 2.33555 7.59648 2.11832 7.43631 1.95815C7.27615 1.79799 7.05892 1.70801 6.83241 1.70801C6.6059 1.70801 6.38867 1.79799 6.22851 1.95815C6.06834 2.11832 5.97836 2.33555 5.97836 2.56205V3.4161H4.27027C3.59075 3.4161 2.93906 3.68604 2.45856 4.16653C1.97807 4.64703 1.70813 5.29872 1.70813 5.97824V16.2268C1.70813 16.9063 1.97807 17.558 2.45856 18.0385C2.93906 18.519 3.59075 18.7889 4.27027 18.7889H16.2269C16.9064 18.7889 17.5581 18.519 18.0386 18.0385C18.5191 17.558 18.7891 16.9063 18.7891 16.2268V5.97824C18.7891 5.29872 18.5191 4.64703 18.0386 4.16653C17.5581 3.68604 16.9064 3.4161 16.2269 3.4161ZM17.081 16.2268C17.081 16.4533 16.991 16.6705 16.8308 16.8307C16.6707 16.9909 16.4534 17.0808 16.2269 17.0808H4.27027C4.04376 17.0808 3.82653 16.9909 3.66637 16.8307C3.5062 16.6705 3.41622 16.4533 3.41622 16.2268V10.2485H17.081V16.2268ZM17.081 8.54038H3.41622V5.97824C3.41622 5.75173 3.5062 5.5345 3.66637 5.37434C3.82653 5.21417 4.04376 5.12419 4.27027 5.12419H5.97836V5.97824C5.97836 6.20475 6.06834 6.42198 6.22851 6.58214C6.38867 6.74231 6.6059 6.83229 6.83241 6.83229C7.05892 6.83229 7.27615 6.74231 7.43631 6.58214C7.59648 6.42198 7.68646 6.20475 7.68646 5.97824V5.12419H12.8107V5.97824C12.8107 6.20475 12.9007 6.42198 13.0609 6.58214C13.221 6.74231 13.4383 6.83229 13.6648 6.83229C13.8913 6.83229 14.1085 6.74231 14.2687 6.58214C14.4289 6.42198 14.5188 6.20475 14.5188 5.97824V5.12419H16.2269C16.4534 5.12419 16.6707 5.21417 16.8308 5.37434C16.991 5.5345 17.081 5.75173 17.081 5.97824V8.54038Z" fill="#637576"/>
                  </svg>
                  Events
                </Link>
              </li>

              <li>
                <Link
                  href="/pages/about"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-normal text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("pages") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                   <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.125 11.1221V17.9971H1.875V11.1221M10 14.2471V11.7471M12.5 5.49707C12.5 5.49707 12.5 2.99707 10 2.99707C7.5 2.99707 7.5 5.49707 7.5 5.49707M1.25 5.49707H18.75V10.4971C18.75 10.4971 15 12.9971 10 12.9971C5 12.9971 1.25 10.4971 1.25 10.4971V5.49707Z" stroke="#637576" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                        Projects
                </Link>
              </li>
             
              <li>
                <Link
                  href="/tables"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-normal text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("tables") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.63338 9.55573C7.55005 9.5474 7.45005 9.5474 7.35838 9.55573C5.37505 9.48906 3.80005 7.86406 3.80005 5.86406C3.80005 3.8224 5.45005 2.16406 7.50005 2.16406C9.54172 2.16406 11.2 3.8224 11.2 5.86406C11.1917 7.86406 9.61671 9.48906 7.63338 9.55573Z" stroke="#637576" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M13.675 3.83008C15.2916 3.83008 16.5917 5.13841 16.5917 6.74675C16.5917 8.32175 15.3417 9.60508 13.7833 9.66341C13.7167 9.65508 13.6417 9.65508 13.5667 9.66341" stroke="#637576" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3.46672 12.6301C1.45006 13.9801 1.45006 16.1801 3.46672 17.5217C5.75839 19.0551 9.51672 19.0551 11.8084 17.5217C13.8251 16.1717 13.8251 13.9717 11.8084 12.6301C9.52506 11.1051 5.76672 11.1051 3.46672 12.6301Z" stroke="#637576" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M15.2833 17.1641C15.8833 17.0391 16.45 16.7974 16.9167 16.4391C18.2167 15.4641 18.2167 13.8557 16.9167 12.8807C16.4583 12.5307 15.9 12.2974 15.3083 12.1641" stroke="#637576" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Team
                </Link>
              </li>
            
              <li>
                <Link
                  href="/settings"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-normal text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("settings") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
               <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_705_1183)">
                <path d="M0.22886 20.3555C0.0950349 20.3034 0 20.1911 0 20.0576V0.822591C0 0.643555 0.172614 0.49707 0.387898 0.49707H4.1505H19.6121C19.8254 0.49707 20 0.641927 20 0.822591V18.3568C20 18.3747 19.9981 18.3909 19.9961 18.4072C19.9418 19.0469 19.6936 19.5449 19.2475 19.903C18.8014 20.2578 18.1749 20.4564 17.3623 20.4954C17.3448 20.4971 17.3293 20.4987 17.3119 20.4987H0.548875C0.41699 20.4971 0.298681 20.4401 0.22886 20.3555ZM8.80915 6.85775C9.28821 7.69434 10.737 7.72363 11.1947 6.86263C11.0706 6.75684 10.9775 6.6429 10.8844 6.5306C10.8689 6.51269 10.8534 6.49316 10.8398 6.47526C10.6187 6.62174 10.351 6.71615 10.0019 6.71615C9.62568 6.71615 9.34057 6.59408 9.10783 6.41504C9.09426 6.40365 9.08068 6.39388 9.06711 6.38249C9.03413 6.46061 8.99147 6.55339 8.94686 6.63965C8.90031 6.72266 8.85376 6.80078 8.80915 6.85775ZM11.3285 6.76986C11.8386 7.07259 13.0799 7.14583 13.557 7.36881C13.7161 7.44206 13.8576 7.53646 13.974 7.66504C14.2145 7.93034 14.7033 8.89551 13.9081 8.94596H12.4127L12.597 7.21745C12.1955 7.15234 11.7708 7.10026 11.3266 6.88542C11.0531 7.89616 9.19317 8.04101 8.65787 6.91309C8.26028 7.08073 7.87238 7.17838 7.40884 7.23698L7.69783 8.94434H6.09193C5.29674 8.89388 5.78743 7.92871 6.02599 7.66341C6.14042 7.53646 6.28394 7.44206 6.44298 7.36719C6.91815 7.14421 8.15361 7.07096 8.66757 6.77148C8.70442 6.72428 8.74515 6.6543 8.78394 6.57943C8.84213 6.46712 8.89643 6.34342 8.93134 6.25879C8.78782 6.11719 8.66563 5.95768 8.54732 5.7998L8.15943 5.2806C8.01784 5.10319 7.94414 4.94043 7.93832 4.80697C7.93638 4.74349 7.94802 4.68652 7.97711 4.6377C8.00621 4.58561 8.05081 4.54167 8.11094 4.50749C8.13809 4.49121 8.17106 4.47819 8.20597 4.4668C8.18076 4.18522 8.17106 3.8304 8.18852 3.53418C8.19628 3.46419 8.21373 3.39258 8.23701 3.32259C8.33592 3.02474 8.58611 2.78548 8.89449 2.61947C9.06517 2.52832 9.25136 2.45996 9.44531 2.41439C9.56749 2.38509 9.42785 2.15234 9.55586 2.14095C10.1726 2.08724 11.0842 2.46322 11.5147 2.85384C11.73 3.04915 11.8658 3.30957 11.8949 3.65299L11.8697 4.49935C11.9783 4.52702 12.0462 4.58398 12.0753 4.67676C12.1063 4.7793 12.0733 4.92415 11.9686 5.12272C11.9666 5.12598 11.9647 5.12923 11.9628 5.13411L11.5206 5.74609C11.3576 5.9707 11.1928 6.19694 10.9775 6.37435C10.9969 6.39714 11.0163 6.42155 11.0357 6.44596C11.123 6.55338 11.2122 6.66243 11.3247 6.75846C11.3227 6.76335 11.3266 6.7666 11.3285 6.76986ZM8.42708 4.61816C8.34174 4.62142 8.27579 4.63607 8.23119 4.66048C8.20597 4.67513 8.18658 4.69303 8.17494 4.71419C8.16137 4.73861 8.15555 4.7679 8.15749 4.80208C8.16137 4.90137 8.22343 5.03158 8.34174 5.18131L8.34368 5.18294L8.73158 5.70215C8.88673 5.91048 9.05159 6.12207 9.2533 6.27832C9.44918 6.42806 9.6858 6.52897 9.99806 6.5306C10.3375 6.5306 10.5857 6.42643 10.7874 6.26693C10.9969 6.10254 11.1618 5.8763 11.3247 5.65169L11.763 5.04622C11.8445 4.88997 11.8735 4.78581 11.8561 4.72396C11.8445 4.68815 11.7979 4.67025 11.7145 4.66536C11.6971 4.66536 11.6796 4.66374 11.6621 4.66536C11.6427 4.66536 11.6214 4.66699 11.6001 4.66862C11.5884 4.67025 11.5768 4.66862 11.5671 4.66699C11.5283 4.66862 11.4876 4.66699 11.4469 4.66211L11.5962 4.10547C10.4829 4.25195 9.65089 3.55859 8.47362 3.96712L8.55896 4.62305C8.51435 4.62467 8.46974 4.62305 8.42708 4.61816ZM13.6676 18.1045C13.4562 18.1045 13.2836 17.9596 13.2836 17.779C13.2836 17.5999 13.4542 17.4534 13.6676 17.4534H16.9026C17.114 17.4534 17.2867 17.5983 17.2867 17.779C17.2867 17.958 17.116 18.1045 16.9026 18.1045H13.6676ZM3.26222 15.7347C3.05081 15.7347 2.8782 15.5898 2.8782 15.4092C2.8782 15.2301 3.04887 15.0837 3.26222 15.0837H16.9356C17.147 15.0837 17.3196 15.2285 17.3196 15.4092C17.3196 15.5882 17.149 15.7347 16.9356 15.7347H3.26222ZM3.32428 13.3649C3.11288 13.3649 2.94026 13.2201 2.94026 13.0394C2.94026 12.8604 3.11094 12.7139 3.32428 12.7139H16.9007C17.1121 12.7139 17.2847 12.8587 17.2847 13.0394C17.2847 13.2184 17.114 13.3649 16.9007 13.3649H3.32428ZM3.26222 10.9951C3.05081 10.9951 2.8782 10.8503 2.8782 10.6696C2.8782 10.4906 3.04887 10.3441 3.26222 10.3441H9.1059C9.3173 10.3441 9.48991 10.4889 9.48991 10.6696C9.48991 10.8486 9.31924 10.9951 9.1059 10.9951H3.26222ZM10.5974 10.9951C10.386 10.9951 10.2133 10.8503 10.2133 10.6696C10.2133 10.4906 10.384 10.3441 10.5974 10.3441H16.9007C17.1121 10.3441 17.2847 10.4889 17.2847 10.6696C17.2847 10.8486 17.114 10.9951 16.9007 10.9951H10.5974ZM19.2261 18.3486V1.14648H4.1505H0.773856V19.8477H17.3099H17.3177C17.9403 19.8184 18.4057 19.6784 18.7141 19.4326C19.0186 19.1901 19.1874 18.8271 19.2261 18.3486Z" fill="#637576"/>
                </g>
                <defs>
                <clipPath id="clip0_705_1183">
                <rect width="20" height="20" fill="white" transform="translate(0 0.49707)"/>
                </clipPath>
                </defs>
                </svg>
                  Portfolio
                </Link>
              </li>
              {/* <!-- Menu Item Settings --> */}
            </ul>
          </div>

          <svg width="192" height="2" viewBox="0 0 192 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.498047" width="192" height="1" rx="0.5" fill="#EAEAEA"/>
            </svg>

          {/* <!-- Others Group --> */}
          <div className="pt-5">
            <h3 className="mb-0 ml-4 text-lg font-medium text-bodydark2">
              General
            </h3>

            <ul className="mb-5 flex flex-col gap-0">
              {/* <!-- Menu Item Chart --> */}
              <li>
                <Link
                  href="/chart"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-normal text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("chart") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.49996 18.8298H12.5C16.6666 18.8298 18.3333 17.1631 18.3333 12.9964V7.99642C18.3333 3.82975 16.6666 2.16309 12.5 2.16309H7.49996C3.33329 2.16309 1.66663 3.82975 1.66663 7.99642V12.9964C1.66663 17.1631 3.33329 18.8298 7.49996 18.8298Z" stroke="#637576" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.1667 2.5293V10.846C14.1667 12.4876 12.9917 13.1293 11.55 12.2626L10.45 11.6043C10.2 11.4543 9.80004 11.4543 9.55004 11.6043L8.45004 12.2626C7.00837 13.121 5.83337 12.4876 5.83337 10.846V2.5293" stroke="#637576" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M7.49996 18.8298H12.5C16.6666 18.8298 18.3333 17.1631 18.3333 12.9964V7.99642C18.3333 3.82975 16.6666 2.16309 12.5 2.16309H7.49996C3.33329 2.16309 1.66663 3.82975 1.66663 7.99642V12.9964C1.66663 17.1631 3.33329 18.8298 7.49996 18.8298Z" stroke="#637576" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.1667 2.5293V10.846C14.1667 12.4876 12.9917 13.1293 11.55 12.2626L10.45 11.6043C10.2 11.4543 9.80004 11.4543 9.55004 11.6043L8.45004 12.2626C7.00837 13.121 5.83337 12.4876 5.83337 10.846V2.5293" stroke="#637576" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Bookmark
                </Link>
              </li>
              {/* <!-- Menu Item Chart --> */}

              {/* <!-- Menu Item Ui Elements --> */}
              <SidebarLinkGroup
                activeCondition={pathname === "/ui" || pathname.includes("ui")}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-normal text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          (pathname === "/ui" || pathname.includes("ui")) &&
                          "bg-graydark dark:bg-meta-4"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 16.2125H14.3667C13.7 16.2125 13.0667 16.4709 12.6 16.9375L11.175 18.3459C10.525 18.9876 9.46667 18.9876 8.81667 18.3459L7.39166 16.9375C6.925 16.4709 6.28333 16.2125 5.625 16.2125H5C3.61667 16.2125 2.5 15.1042 2.5 13.7376V4.64587C2.5 3.27921 3.61667 2.1709 5 2.1709H15C16.3833 2.1709 17.5 3.27921 17.5 4.64587V13.7376C17.5 15.0959 16.3833 16.2125 15 16.2125Z" stroke="#637576" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.83337 8.13007C5.83337 7.35507 6.46671 6.72168 7.24171 6.72168C8.01671 6.72168 8.65004 7.35507 8.65004 8.13007C8.65004 9.69673 6.42504 9.8634 5.93337 11.3551C5.83337 11.6634 6.0917 11.9717 6.4167 11.9717H8.65004" stroke="#637576" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.3667 11.9631V7.20484C13.3667 6.98817 13.225 6.79646 13.0167 6.73812C12.8084 6.67979 12.5834 6.76312 12.4667 6.94646C11.8667 7.91312 11.2167 9.01313 10.65 9.9798C10.5584 10.1381 10.5584 10.3465 10.65 10.5048C10.7417 10.6631 10.9167 10.7631 11.1084 10.7631H14.1667" stroke="#637576" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Support
                      </Link>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Ui Elements --> */}

              {/* <!-- Menu Item Auth Pages --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/auth" || pathname.includes("auth")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-normal text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          (pathname === "/auth" || pathname.includes("auth")) &&
                          "bg-graydark dark:bg-meta-4"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 12.9961C11.3807 12.9961 12.5 11.8768 12.5 10.4961C12.5 9.11538 11.3807 7.99609 10 7.99609C8.61929 7.99609 7.5 9.11538 7.5 10.4961C7.5 11.8768 8.61929 12.9961 10 12.9961Z" stroke="#637576" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.66663 11.229V9.7623C1.66663 8.89563 2.37496 8.17897 3.24996 8.17897C4.75829 8.17897 5.37496 7.1123 4.61663 5.80397C4.18329 5.05397 4.44163 4.07897 5.19996 3.64563L6.64163 2.82063C7.29996 2.42897 8.14996 2.6623 8.54163 3.32063L8.63329 3.47897C9.38329 4.7873 10.6166 4.7873 11.375 3.47897L11.4666 3.32063C11.8583 2.6623 12.7083 2.42897 13.3666 2.82063L14.8083 3.64563C15.5666 4.07897 15.825 5.05397 15.3916 5.80397C14.6333 7.1123 15.25 8.17897 16.7583 8.17897C17.625 8.17897 18.3416 8.8873 18.3416 9.7623V11.229C18.3416 12.0956 17.6333 12.8123 16.7583 12.8123C15.25 12.8123 14.6333 13.879 15.3916 15.1873C15.825 15.9456 15.5666 16.9123 14.8083 17.3456L13.3666 18.1706C12.7083 18.5623 11.8583 18.329 11.4666 17.6706L11.375 17.5123C10.625 16.204 9.39163 16.204 8.63329 17.5123L8.54163 17.6706C8.14996 18.329 7.29996 18.5623 6.64163 18.1706L5.19996 17.3456C4.44163 16.9123 4.18329 15.9373 4.61663 15.1873C5.37496 13.879 4.75829 12.8123 3.24996 12.8123C2.37496 12.8123 1.66663 12.0956 1.66663 11.229Z" stroke="#637576" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Settings
                      </Link>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Auth Pages --> */}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>

      <button

        className=  {`group relative flex bg-transparent border border-[#0F9D58] ... text-[#0F9D58] 
        items-center gap-2.5 rounded-sm py-2 m-5 px-4 font-semibold 
        text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
          (pathname === "/ui" || pathname.includes("ui")) &&
          "bg-graydark dark:bg-meta-4"
        }`}
        onClick={(e) => {
          e.preventDefault();
          sidebarExpanded
            // ? handleClick()
            : setSidebarExpanded(true);
        }}
      >
      Get Verified
    
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.38 12.0001L10.79 14.4201L15.62 9.58008" stroke="#0F9D58" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10.75 2.45031C11.44 1.86031 12.57 1.86031 13.27 2.45031L14.85 3.81031C15.15 4.07031 15.71 4.28031 16.11 4.28031H17.81C18.87 4.28031 19.74 5.15031 19.74 6.21031V7.91031C19.74 8.30031 19.95 8.87031 20.21 9.17031L21.57 10.7503C22.16 11.4403 22.16 12.5703 21.57 13.2703L20.21 14.8503C19.95 15.1503 19.74 15.7103 19.74 16.1103V17.8103C19.74 18.8703 18.87 19.7403 17.81 19.7403H16.11C15.72 19.7403 15.15 19.9503 14.85 20.2103L13.27 21.5703C12.58 22.1603 11.45 22.1603 10.75 21.5703L9.17 20.2103C8.87 19.9503 8.31 19.7403 7.91 19.7403H6.18C5.12 19.7403 4.25 18.8703 4.25 17.8103V16.1003C4.25 15.7103 4.04 15.1503 3.79 14.8503L2.44 13.2603C1.86 12.5703 1.86 11.4503 2.44 10.7603L3.79 9.17031C4.04 8.87031 4.25 8.31031 4.25 7.92031V6.20031C4.25 5.14031 5.12 4.27031 6.18 4.27031H7.91C8.3 4.27031 8.87 4.06031 9.17 3.80031L10.75 2.45031Z" stroke="#0F9D58" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>


      </button>

    </aside>
  );
};

export default Sidebar;
