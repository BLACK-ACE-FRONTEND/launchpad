import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const DropdownMessage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <li className="relative">
      <Link
        ref={trigger}
        onClick={() => {
          setNotifying(false);
          setDropdownOpen(!dropdownOpen);
        }}
        className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
        href="#"
      >
        <span
          className={`absolute -top-0.5 -right-0.5 z-1 h-2 w-2 rounded-full bg-meta-1 ${
            notifying === false ? "hidden" : "inline"
          }`}
        >
          <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"></span>
            </span>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                  width="18" height="18" viewBox="0 0 1280.000000 821.000000"   
                  preserveAspectRatio="xMidYMid meet">
                  <metadata>
                  Created by potrace 1.15, written by Peter Selinger 2001-2017
                  </metadata>
                  <g transform="translate(0.000000,821.000000) scale(0.100000,-0.100000)"
                  fill="#000000" stroke="none">
                  <path d="M615 8204 c-129 -27 -208 -67 -284 -143 -31 -31 -72 -83 -90 -114
                  -17 -30 -59 -83 -92 -118 -72 -73 -122 -170 -138 -267 -8 -48 -11 -1050 -9
                  -3612 3 -3474 3 -3546 22 -3595 63 -162 179 -276 336 -331 54 -19 184 -19
                  5945 -19 5037 0 5897 2 5940 14 129 37 248 129 314 244 17 30 59 83 92 118 72
                  73 122 170 138 267 8 48 11 1050 9 3612 -3 3472 -3 3546 -22 3595 -62 159
                  -172 269 -331 331 -49 19 -148 19 -5930 20 -3234 1 -5889 0 -5900 -2z m10595
                  -704 c-1 -8 -4713 -2863 -4724 -2863 -10 1 -4703 2846 -4718 2861 -4 4 2119 7
                  4718 7 2598 0 4724 -2 4724 -5z m928 -4886 l-3 -1556 -850 767 c-467 422
                  -1394 1258 -2058 1858 -1024 925 -1205 1092 -1190 1101 85 47 4072 2471 4083
                  2482 13 13 15 -158 18 -1541 1 -855 1 -2255 0 -3111z m-9373 3276 c1144 -694
                  2081 -1263 2083 -1265 1 -1 -84 -81 -190 -177 -395 -357 -3964 -3581 -3980
                  -3596 -17 -14 -18 137 -18 3153 0 2533 3 3165 13 3157 6 -5 948 -578 2092
                  -1272z m5356 -1497 c157 -142 791 -715 1409 -1273 618 -558 1457 -1316 1865
                  -1683 673 -608 740 -672 743 -702 3 -31 1 -33 -21 -27 -14 4 -436 378 -938
                  832 -1618 1461 -3090 2790 -3251 2934 -154 139 -156 141 -136 159 11 9 25 17
                  32 17 6 0 140 -116 297 -257z m282 -636 c452 -408 1382 -1248 2067 -1866 685
                  -618 1260 -1137 1277 -1155 l33 -31 -5430 0 c-2987 0 -5429 3 -5427 7 2 6 899
                  818 3062 2772 572 516 1054 952 1071 968 l31 29 509 -309 c280 -170 525 -317
                  544 -327 55 -29 249 -33 321 -7 30 11 290 164 579 340 289 176 528 321 533
                  321 4 1 377 -333 830 -742z"/>
                  </g>
            </svg>
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute -right-16 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80 ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <div className="px-4.5 py-3">
          <h5 className="text-sm font-medium text-bodydark2">Messages</h5>
        </div>

        <ul className="flex h-auto flex-col overflow-y-auto">
          <li>
            <Link
              className="flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
              href="/messages"
            >
              <div className="h-12.5 w-12.5 rounded-full">
                <Image
                  width={112}
                  height={112}
                  src={"/images/user/user-02.png"}
                  alt="User"
                />
              </div>

              <div>
                <h6 className="text-sm font-medium text-black dark:text-white">
                  Mariya Desoja
                </h6>
                <p className="text-sm">I like your confidence 💪</p>
                <p className="text-xs">2min ago</p>
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
              href="/messages"
            >
              <div className="h-12.5 w-12.5 rounded-full">
                <Image
                  width={112}
                  height={112}
                  src={"/images/user/user-01.png"}
                  alt="User"
                />
              </div>

              <div>
                <h6 className="text-sm font-medium text-black dark:text-white">
                  Robert Jhon
                </h6>
                <p className="text-sm">Can you share your offer?</p>
                <p className="text-xs">10min ago</p>
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
              href="/messages"
            >
              <div className="h-12.5 w-12.5 rounded-full">
                <Image
                  width={112}
                  height={112}
                  src={"/images/user/user-03.png"}
                  alt="User"
                />
              </div>

              <div>
                <h6 className="text-sm font-medium text-black dark:text-white">
                  Henry Dholi
                </h6>
                <p className="text-sm">I cam across your profile and...</p>
                <p className="text-xs">1day ago</p>
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
              href="/messages"
            >
              <div className="h-12.5 w-12.5 rounded-full">
                <Image
                  width={112}
                  height={112}
                  src={"/images/user/user-04.png"}
                  alt="User"
                />
              </div>

              <div>
                <h6 className="text-sm font-medium text-black dark:text-white">
                  Cody Fisher
                </h6>
                <p className="text-sm">I’m waiting for you response!</p>
                <p className="text-xs">5days ago</p>
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
              href="/messages"
            >
              <div className="h-12.5 w-12.5 rounded-full">
                <Image
                  width={112}
                  height={112}
                  src={"/images/user/user-02.png"}
                  alt="User"
                />
              </div>

              <div>
                <h6 className="text-sm font-medium text-black dark:text-white">
                  Mariya Desoja
                </h6>
                <p className="text-sm">I like your confidence 💪</p>
                <p className="text-xs">2min ago</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      {/* <!-- Dropdown End --> */}
    </li>
  );
};

export default DropdownMessage;
