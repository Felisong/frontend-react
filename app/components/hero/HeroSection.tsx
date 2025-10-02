"use client";

import { useEffect, useState } from "react";
import ArrowDown from "../general/ArrowDown";
import BackDrop from "../general/BackDrop";
import StarSparkle from "../general/StarSparkle";
import SpaceSheepLogo from "./SpaceSheepLogo";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    let ticking = false;

    const updateScrollY = () => {
      setScrollY(window.scrollY);
      ticking = false;
    };
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollY);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // now with the animation frame i have everything in order
  const cycle = scrollY % 100;
  const cycleVal = cycle / 100;
  const scale = 0.75 + cycleVal * 0.25;
  const opacity = 0.6 + cycleVal * 0.4;
  return (
    <div className="relative">
      <h1 className="font-header text-center mx-8 my-4 2xl:text-5xl 2xl:my-16">
        I am Carolina Henriquez Silva!
      </h1>
      <div className="h-fit w-full xl:h-[80vh] xl:relative">
        <div className="w-[90%] mx-auto md:w-1/3 xl:absolute xl:h-full xl:w-1/2 xl:left-24 ">
          <SpaceSheepLogo width="100%" height="100%"></SpaceSheepLogo>
        </div>
        <section className="flex flex-col justify-center items-center mb-8 xl:absolute xl:right-24  xl:z-10 xl:w-1/2 xl:h-full">
          <BackDrop
            hasTitle={true}
            description="Passionate Full Stack Web Developer. Combining my love for creative arts, and logical puzzles."
            title="Hello!"
            isHeroBox={true}
          ></BackDrop>
          <ArrowDown></ArrowDown>
        </section>
      </div>
    </div>
  );
}
