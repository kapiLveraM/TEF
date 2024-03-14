import React from "react";
import ButtonWhite from "./common/button/ButtonWhite";
import ButtonMain from "./common/button/ButtonMain";

const Eckwohnung = () => {
  return (
    <div className=" mt-10 pb-[101px] lg:pb-[134px]">
      <div className="container xl:max-w-[1356px] mx-auto px-8 xl:px-0">
        <div className=" flex flex-wrap items-center">
          <div className=" lg:w-6/12">
            <h2 className=" font-Inter font-bold text-4xl leading-[48px] md:text-7xl md:leading-[64px]">
              Eckwohnung 1OG
            </h2>
            <p className=" font-Inter font-normal leading-[26px] mt-[38px] text-2xl max-w-[649px]">
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
          <div className="lg:w-6/12">
            <h2 className=" font-Inter font-bold text-4xl leading-[48px] md:text-7xl md:leading-[64px]">
              Mehr Details
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eckwohnung;
