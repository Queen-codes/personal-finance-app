"use client";

import Image from "next/image";
import NavLinks from "./navLinks";
//import BottomNav from "./BottomNav";
import { useState } from "react";
const SideNav = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  function handleMinimize() {
    setIsMinimized((prev) => !prev);
  }

  return (
    <nav
      className={`bg-grey-900 flex-col h-full fixed rounded-r-2xl px-10 transition-[width] duration-600 ease-in hidden lg:flex ${
        isMinimized ? `w-32` : `w-xs`
      }`}
    >
      <div className="mt-8 mb-6">
        {isMinimized ? (
          <Image
            src="/images/logo-small.svg"
            width={22}
            height={22}
            alt="logo"
          />
        ) : (
          <Image
            src="/images/logo-large.svg"
            width={122}
            height={22}
            alt="logo"
          />
        )}
      </div>

      <div className="flex-grow">
        <NavLinks isMinimized={isMinimized} />
      </div>

      <div className="flex gap-3.5 mb-28" onClick={handleMinimize}>
        <div>
          <Image
            src="/images/icon-minimize-menu.svg"
            width={20}
            height={20}
            alt="arrow"
          />
        </div>

        <p className="text-grey-300">Minimize Menu</p>
      </div>
    </nav>
  );
};

export default SideNav;
