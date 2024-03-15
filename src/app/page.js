"use client"
import Hero from "./components/Hero";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoremIpsum from "./components/LoremIpsum";
import Eckwohnung from "./components/Eckwohnung";
import Bildungsangebote from "./components/Bildungsangebote";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import BackToTop from "./components/common/BackToTop";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";
export default function Home() {
      // Initialize AOS once when component mounts
    useEffect(() => {
    AOS.init({
      once: true, // Set once to true to trigger animation only once
      // Other options...
    });
  }, []);
  return (
    <div className=" overflow-hidden">
      <BackToTop/>
      <Hero />
      <LoremIpsum />
      <Eckwohnung />
      <Bildungsangebote />
      <Roadmap />
      <Footer/>
    </div>
  );
}
