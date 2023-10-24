import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const DropdownUser = () => {
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
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >

        <span className="h-12 w-12 rounded-full">
          <Image
            width={112}
            height={112}
            src={"/images/user/user-01.png"}
            alt="User"
          />
        </span>

        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            Mercy Kalu
          </span>
          <span className="block text-xs">Patient</span>
        </span>
      </Link>
    </div>
  );
};

export default DropdownUser;
