"use client";

import ArrowDown from "../general/ArrowDown";
import BackDrop from "../general/BackDrop";
import SpaceSheepLogo from "./SpaceSheepLogo";

export default function HeroSection() {
  return (
    <>
      <h1 className="font-header text-center mx-8 my-4">
        I am Carolina Henriquez Silva!
      </h1>
      <div className="h-fit w-full xl:h-[80vh] xl:relative">
        <div className="w-[90%] mx-auto md:w-1/3 xl:absolute xl:h-full xl:w-1/2 xl:left-24 ">
          <SpaceSheepLogo width="w-full" height="h-full"></SpaceSheepLogo>
        </div>
        <section className="flex flex-col justify-center items-center mb-8 xl:absolute xl:right-24  xl:z-10 xl:w-1/2 xl:h-full">
          <BackDrop
            hasTitle={true}
            description="I am a woman with a love for web development and design. An aspiring
          Full Stack Developer."
            title="Hello!"
            isHeroBox={true}
          ></BackDrop>
          <ArrowDown></ArrowDown>
        </section>
      </div>
    </>
  );
}
