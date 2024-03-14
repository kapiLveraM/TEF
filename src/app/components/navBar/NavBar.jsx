"use client";
// Import necessary modules
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HeaderCross, OpenNav } from "../common/Icons";
import MobileNav from "./MobileNav";
import ButtonMain from "../common/button/ButtonMain";

// Define NavBar component
const NavBar = () => {
  // State variables for managing navigation overlay and toggle icon visibility
  const [activeNavOverlay, setActiveNavOverlay] = useState(false);
  const [isToggleIconVisible, setIsToggleIconVisible] = useState(true);

  // Effect to handle body overflow and toggle icon visibility
  useEffect(() => {
    if (activeNavOverlay) {
      document.body.classList.add("overflow-y-hidden"); // Disable vertical scroll when navigation overlay is active
      setIsToggleIconVisible(false); // Hide toggle icon when navigation overlay is active
    } else {
      document.body.classList.remove("overflow-y-hidden"); // Enable vertical scroll when navigation overlay is inactive
      setIsToggleIconVisible(true); // Show toggle icon when navigation overlay is inactive
    }
  }, [activeNavOverlay]);

  // Return JSX for NavBar component
  return (
    <>
      {/* Mobile navigation overlay */}
      <MobileNav
        activeNavOverlay={activeNavOverlay}
        setActiveNavOverlay={setActiveNavOverlay}
      />

      {/* Navigation bar */}
      <nav className=" pt-[25px] md:pt-16">
        <div className="container xl:max-w-[1375px] mx-auto px-4 ">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="mt-0">
              <Link
                href="#"
                className=" hidden md:inline-block font-bold font-Inter text-5xl leading-[122%] lg:leading-[59px] text-black"
              >
                True Equity Fund AG
              </Link>
              <div className=" block md:hidden">
                <ButtonMain type="submit" title="Jetzt Anfragen" />
              </div>
            </div>
            {/* Navigation links */}

            {/* Button */}
            {/* Toggle button for mobile */}
            <div className="flex items-center  relative z-[200] sm:me-0 ">
              <div className="border_gradient h-[27px] mx-6 lg:mx-3"></div>
              <button
                onClick={() => setActiveNavOverlay(!activeNavOverlay)}
                type="button"
                className="inline-flex items-center justify-center rounded-md w-[33px]"
                aria-label="toggle-button"
              >
                {isToggleIconVisible ? <HeaderCross /> : <OpenNav />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

// Export NavBar component
export default NavBar;
