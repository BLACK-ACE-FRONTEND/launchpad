import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/navigation'

const DropdownUser = () => {
  const router = useRouter()
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
    <div className="relative">
       <div className="mt-2">
        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform 
              bg-[#0F9D58] rounded-md hover:bg-[#0F9D58] focus:outline-none focus:bg-gray-600"
                type='button' onClick={() => router.push ('/pages/reset-password')}>
                  Connect Wallet
                </button>
          </div>
                      
    </div>
  );
};

export default DropdownUser;
