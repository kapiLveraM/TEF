"use client";
import React from "react";
const ButtonMain = (props) => {
  const { title, customStyles } = props;
  return (
    <div className=" relative ">
      <button
        className={`${
          customStyles && customStyles
        }  font-Inter   font-black text-3xl border-2 border-black p-[13px_21px] leading-[29px] bg-black text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out`}
      >
        {title}
      </button>
    </div>
  );
};

export default ButtonMain;
