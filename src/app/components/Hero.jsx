"use client";
import React, { useRef } from "react";
import { HeroSlider } from "./common/Helper";
import Image from "next/image";
import Slider from "react-slick";
import ButtonMain from "./common/button/ButtonMain";
import ButtonWhite from "./common/button/ButtonWhite";
import { HeroArrow } from "./common/Icons";
import NavBar from "./common/NavBar";
const Hero = () => {
  const sliderRef = useRef(null);
  var imagesSlider = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 1000,
    cssEase: "linear",
  };

  return (
    <div className="relative">
      <div className="relative container max-w-[1376px] px-4 !mx-auto xl:px-0">
        <div className=" absolute w-full z-50">
          <NavBar />
        </div>
      </div>
      <div className="!absolute z-20 bottom-[70px] w-full px-4">
        <div className=" relative container max-w-[1376px] px-4 !mx-auto xl:px-0">
          <div className=" hidden sm:flex justify-between">
            <div className=" flex gap-[10px]">
              <ButtonMain type="submit" title="Jetzt Anfragen" />
              <ButtonWhite type="submit" title="PDF DOWNLOAD" />
            </div>
            <div className=" absolute right-0 top-[-60px] pr-11 xl:pr-0 back_to_top">
              <HeroArrow />
            </div>
          </div>
        </div>
      </div>
      <div className=" relative">
        <Slider {...imagesSlider} ref={sliderRef} className="image_slider ">
          {HeroSlider.map((image, index) => (
            <div key={index}>
              <Image
                sizes="100%"
                loading="lazy"
                width={1512}
                height={918}
                src={image}
                alt="hero"
                className=" w-full h-screen  object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
