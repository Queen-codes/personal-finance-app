"use client";
import { useState } from "react";
import SideNav from "../ui/overview/SideNav";
import BottomNav from "../ui/overview/BottomNav";

export default function Layout({ children }) {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <SideNav isMinimized={isMinimized} setIsMinimized={setIsMinimized} />

      <main
        className={` transition-all duration-500 lg:p-8 ${
          isMinimized ? "lg:ml-32" : "lg:ml-[300px]"
        }`}
      >
        {children}
      </main>

      <BottomNav />
    </div>
  );
}
