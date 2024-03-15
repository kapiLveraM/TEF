"use client";
// Import necessary modules
import React, { useState } from "react";
import Link from "next/link";
import { sidebarLink } from "../common/Helper";
import { RxCross2 } from "react-icons/rx";
import { SideBarClose } from "./Icons";

// Define NavBar component
const NavBar = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {/* Navigation bar */}
      <nav className=" pt-[25px] md:pt-16">
        <div className="container max-w-[100%] pr-10 2xl:max-w-[1375px] mx-auto px-4 2xl:px-0">
          <div className="relative flex">
            <div className="mt-0">
              <Link
                href="#"
                className=" hidden md:inline-block font-bold font-Inter text-5xl leading-[122%] lg:leading-[59px] text-black"
              >
                True Equity Fund AG
              </Link>
              <div className=" block md:hidden">
                <button className=" font-black text-3xl leading-[29px] bg-black text-white pt-[14px] pb-2 px-[10px]">
                  Kontakt
                </button>
              </div>
            </div>
            {/* Overlay */}
            {isSidebarOpen && (
              <div
                className="fixed inset-0 bg-black opacity-70 z-10"
                onClick={closeSidebar}
              ></div>
            )}

            {/* Sidebar */}
            <div
              className={`sidebar bg-white end-0 fixed top-0 w-full sm:max-w-[400px] h-full transition-all ease-linear duration-500 transform z-50 ${
                isSidebarOpen
                  ? "translate-x-0 translate-y-0 side_bar_show"
                  : "translate-x-[100%] translate-y-[-100%] sidebar_close"
              }`}
            >
              <div className="min-h-screen flex flex-col justify-center items-center">
                {/* Your sidebar content goes here */}
                <button
                  onClick={closeSidebar}
                  aria-label="close Sidebar"
                  className="absolute top-3 left-3 text-tia-maria"
                >
                  <RxCross2 className="w-[43px] h-[43px]" />
                </button>
                <ul className="flex flex-col gap-5">
                  {sidebarLink.map((value, index) => {
                    return (
                      <li
                        key={index}
                        onClick={closeSidebar}
                        className="text-center"
                      >
                        <Link
                          aria-label={value.title}
                          className="font-inter font-medium text-xl transition-all ease-in-out duration-300 hover:opacity-70"
                          key={index}
                          href={value.path}
                        >
                          {value.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1">{children}</div>

            {/* Toggle button */}
            <button
              aria-label="Open Sidebar"
              className=" text-tia-maria relative z-10"
              onClick={openSidebar}
            >
              <SideBarClose />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

// Export NavBar component
export default NavBar;
