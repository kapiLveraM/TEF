import Image from "next/image";
import Hero from "./components/Hero";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoremIpsum from "./components/LoremIpsum";
import Eckwohnung from "./components/Eckwohnung";
export default function Home() {
  return (
    <div  className=" overflow-hidden">
      <Hero />
      <LoremIpsum />
      <Eckwohnung/>
    </div>
  );
}
