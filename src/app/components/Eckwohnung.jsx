"use client";
import React, { useState } from "react";
import ButtonMain from "./common/button/ButtonMain";
import { Minus, Plus } from "./common/Icons";
import { accordionContent } from "./common/Helper";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
function Icon({ id, open }) {
  return (
    <div className="relative">
      {/* Minus icon */}
      <Minus id={id} open={open} />
      {/* Plus icon */}
      <Plus />
    </div>
  );
}
const Eckwohnung = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(-1); // State to track open accordion index

  // Function to handle accordion click
  const accordionHandler = (index) => {
    setIsAccordionOpen(isAccordionOpen === index ? -1 : index);
  };
  return (
    <div className=" mt-[33px] sm:mt-10 pb-[101px] lg:pb-[134px]">
      <div className="container xl:max-w-[1356px] mx-auto px-4 2xl:px-0">
        <div className=" flex flex-wrap items-center">
          <div
            data-aos="fade-right"
            data-aos-duration="500"
            className=" lg:w-full xl:w-6/12"
          >
            <h2 className=" font-Inter font-bold text-4xl leading-[48px] md:text-7xl md:leading-[64px]">
              Eckwohnung 1OG
            </h2>
            <p className=" font-Inter font-normal leading-[26px] mt-6 sm:mt-[38px] text-2xl xl:max-w-[649px]">
              Lernen sie uns und das Projekt kennen, Bei einem persönlichen
              Gespräch werden wir alle möglichketine sowie die Detailierten
              Pläne Besprechen.Lernen sie uns und das Projekt kennen, Bei einem
              persönlichen Gespräch werden wir alle möglichketine sowie die
              Detailierten Pläne Besprechen.Lernen sie uns und das Projekt
              kennen, Bei einem persönlichen Gespräch werden wir alle
              möglichketine sowie die Detailierten persönlichen Gespräch werden
              wir alle möglichketine sowie die Detailierten persönlichen
              Gespräch werden wir alle möglichketine sowie die Detailierten
            </p>
            <div className=" mt-8">
              <ButtonMain type="submit" title="PDF DOWNLOAD" />
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="500"
            className=" lg:w-full xl:w-6/12 mt-[51px] xl:mt-0"
          >
            <h2 className=" font-Inter font-bold text-4xl leading-[48px] md:text-7xl md:leading-[64px]">
              Mehr Details
            </h2>
            <div className="relative mt" id="faq">
              <div className="max-w-[970px] mx-auto mt-[67px] xl:mt-10">
                {/* Accordion items */}
                {accordionContent.map((value, index) => (
                  <Accordion
                    key={index}
                    className="flex flex-col justify-between border-b border-[#171717] pr-4 overflow-hidden ease-out transition-all duration-300 relative"
                    open={isAccordionOpen === index}
                    icon={<Icon id={index} open={isAccordionOpen} />}
                  >
                    {/* Accordion header */}
                    <AccordionHeader
                      onClick={() => accordionHandler(index)}
                      className={`py-[31px] border-none ${
                        isAccordionOpen === index ? "pb-2" : ""
                      }`}
                    >
                      {/* Accordion title */}
                      <h2 className=" text-black font-Inter font-medium text-xl">
                        {value.title}
                      </h2>
                    </AccordionHeader>
                    {/* Accordion body */}
                    <AccordionBody className="pb-4 pt-0">
                      {/* Accordion description */}
                      <p className=" text-black text-base font-Inter">
                        {value.description}
                      </p>
                    </AccordionBody>
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eckwohnung;
