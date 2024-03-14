"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { NavLinks } from "../common/Helper";
import { DropDwonArrow } from "../common/Icons";

// Define MobileNav component
const MobileNav = ({ activeNavOverlay, setActiveNavOverlay }) => {
  // Effect to handle overflow and remove listener when component unmounts
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023.98px)");

    // Function to handle screen size change
    function handleScreenSizeChange(event) {
      if (event.matches) {
        if (activeNavOverlay) {
          document.body.classList.add("overflow-y-hidden");
        } else {
          document.body.classList.remove("overflow-y-hidden");
        }
      } else {
        document.body.classList.remove("overflow-y-hidden");
      }
    }

    // Add listener and call handler
    mediaQuery.addListener(handleScreenSizeChange);
    handleScreenSizeChange(mediaQuery);

    // Cleanup function to remove listener
    return () => {
      mediaQuery.removeListener(handleScreenSizeChange);
    };
  }, [activeNavOverlay]);

  // State for controlling open/close state of mobile nav items
  const [open, setOpen] = useState();

  // Function to handle opening/closing of mobile nav items
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  // Return JSX for MobileNav component
  return (
    <>
      {/* Mobile navigation overlay */}
      <div
        className={`mobile-nav-overlay md:pt-[7.5rem] ${
          activeNavOverlay ? "left-0" : "-left-full"
        }`}
      >
        <div className=" flex justify-center">
          <div className="flex flex-col text-white gap-9 xl:gap-5 justify-center items-start w-full">
            <div className=" relative">
              <Link
                href="#"
                className="font-bold font-Inter text-5xl leading-[122%] lg:leading-[59px]"
              >
                True Equity Fund AG
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Background overlay */}
      <div
        className={`absolute lg:hidden top-0 left-0 w-full h-full bg-black lg:bg-transparent backdrop-sepia-[12px z-50 ${
          activeNavOverlay
            ? "pointer-events-auto opacity-1"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setActiveNavOverlay(false)}
      ></div>
    </>
  );
};

// Export MobileNav component
export default MobileNav;
