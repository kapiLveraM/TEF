"use client";
import React, { useRef } from "react";
import NavBar from "./navBar/NavBar";
import { HeroSlider } from "./common/Helper";
import Image from "next/image";
import Slider from "react-slick";
import ButtonMain from "./common/button/ButtonMain";
import ButtonWhite from "./common/button/ButtonWhite";
import { HeroArrow } from "./common/Icons";
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
    <div className=" relative ">
      <div className=" fixed w-full z-50">
        <NavBar />
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
        <div className="!absolute z-50 bottom-[303px] xl:bottom-[137px] w-full  container max-w-[1376px] px-4 !mx-auto xl:px-0">
          <div className=" hidden sm:flex justify-between">
            <div className=" flex gap-[10px]">
              <ButtonMain type="submit" title="Jetzt Anfragen" />
              <ButtonWhite type="submit" title="PDF DOWNLOAD" />
            </div>
            <div className=" pr-11 xl:pr-0">
              <HeroArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
