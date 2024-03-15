import Image from "next/image";
import React from "react";

const LoremIpsum = () => {
  return (
    <div className=" pt-11 md:pt-[63px] ">
      <div className=" container max-w-[1371px] mx-auto px-4 xl:px-0">
        <h1
          data-aos="fade-right"
          data-aos-duration="500"
          className=" font-Inter font-black text-6xl md:text-[70px]
          md:leading-[80px] leading-[60px] lg:leading-[105px] lg:text-8xl
          max-w-[835px]"
        >
          {" "}
          Lorem ipsum dolor sit amet
        </h1>
      </div>
      <div className="xl:max-w-[1371px] mx-auto xl:px-0 mt-14 sm:mt-[39px]">
        <Image
          sizes="100vw"
          loading="lazy"
          width={1371}
          height={918}
          src="/assets/images/hero/bildschirmfotot.webp"
          alt="hero"
          className=" w-full hidden sm:inline-block xl:min-h-[706px] object-cover"
        />
        <Image
          sizes="100vw"
          loading="lazy"
          width={1512}
          height={706}
          src="/assets/images/hero/bildschirmfotot.webp"
          alt="hero"
          className=" w-full min-h-[706px] h-full object-cover sm:hidden "
        />
      </div>
    </div>
  );
};

export default LoremIpsum;
