"use client";
import React from "react";

const ButtonWhite = (props) => {
  const { title } = props;
  return (
    <div className=" relative group z-50 ">
      <button
        className={`font-Inter font-black text-3xl border-2 border-black p-[13px_21px] leading-[29px] hover:bg-black hover:text-white transition-all duration-300 ease-in-out`}
      >
        {title}
      </button>
    </div>
  );
};
export default ButtonWhite;
