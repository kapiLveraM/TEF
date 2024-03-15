import Image from "next/image";
import React from "react";

const Bildungsangebote = () => {
  return (
    <div className=" mb-[61px] lg:mb-[131px]">
      <Image
        sizes="100vw"
        loading="lazy"
        width={1512}
        height={1336}
        src="/assets/images/bildungsangebote/bildschirmfoto-map.webp"
        alt="hero"
        className=" hidden sm:block xl:min-h-[928px] w-full"
      />
      <Image
        sizes="100vw"
        loading="lazy"
        width={1512}
        height={1336}
        src="/assets/images/bildungsangebote/bildschirmfoto-map-sm.webp"
        alt="hero"
        className=" sm:hidden "
      />
      <div className=" container xl:max-w-[1440px] 2xl:max-w-[1356px] mx-auto px-4 2xl:px-0">
        <div className=" flex flex-wrap justify-between mt-[52px] lg:mt-[74px]">
          <div className=" lg:w-6/12">
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              className=" flex"
            >
              <h3 className="font-bold font-Inter text-black text-[29px] leading-[25px] 2xl:text-6xl 2xl:leading-[60px]">
                500m
              </h3>
              <div className=" ms-9 max-w-[414px]">
                <p className=" font-bold text-black font-Inter text-2xl 2xl:text-xl 2xl:leading-[25px]">
                  Bildungsangebote
                </p>
                <p className=" font-Inter font-normal text-black text-base 2xl:text-2xl 2xl:leading-[26px]">
                  Dailierten Pläne Besprechen.Lernen sie uns und das Projekt
                  kennen, Bei einem persönlichen Gespräch werden wir alle
                  möglichketine so
                </p>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="700"
              className="flex mt-[19px] sm:mt-12 lg:mt-[67px]"
            >
              <h3 className="font-bold font-Inter text-black text-[29px] leading-[25px] 2xl:text-6xl 2xl:leading-[60px]">
                500m
              </h3>
              <div className=" ms-9 max-w-[414px]">
                <p className=" font-bold text-black font-Inter text-2xl 2xl:text-xl 2xl:leading-[25px]">
                  Bildungsangebote
                </p>
                <p className=" font-Inter font-normal text-black text-base 2xl:text-2xl 2xl:leading-[26px]">
                  Dailierten Pläne Besprechen.Lernen sie uns und das Projekt
                  kennen, Bei einem persönlichen Gespräch werden wir alle
                  möglichketine so
                </p>
              </div>
            </div>
          </div>

          <div className=" lg:w-6/12 mt-[19px] sm:mt-12 lg:mt-0">
            <div data-aos="fade-left" data-aos-duration="500" className=" flex">
              <h3 className="font-bold font-Inter text-black text-[29px] leading-[25px] 2xl:text-6xl 2xl:leading-[60px]">
                500m
              </h3>
              <div className=" ms-9 max-w-[414px]">
                <p className=" font-bold text-black font-Inter text-2xl 2xl:text-xl 2xl:leading-[25px]">
                  Bildungsangebote
                </p>
                <p className=" font-Inter font-normal text-black text-base 2xl:text-2xl 2xl:leading-[26px]">
                  Dailierten Pläne Besprechen.Lernen sie uns und das Projekt
                  kennen, Bei einem persönlichen Gespräch werden wir alle
                  möglichketine so
                </p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="700"
              className="flex mt-[19px] sm:mt-12 lg:mt-[67px]"
            >
              <h3 className="font-bold font-Inter text-black text-[29px] leading-[25px] 2xl:text-6xl 2xl:leading-[60px]">
                500m
              </h3>
              <div className=" ms-9 max-w-[414px]">
                <p className=" font-bold text-black font-Inter text-2xl 2xl:text-xl 2xl:leading-[25px]">
                  Bildungsangebote
                </p>
                <p className=" font-Inter font-normal text-black text-base 2xl:text-2xl 2xl:leading-[26px]">
                  Dailierten Pläne Besprechen.Lernen sie uns und das Projekt
                  kennen, Bei einem persönlichen Gespräch werden wir alle
                  möglichketine so
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bildungsangebote;
