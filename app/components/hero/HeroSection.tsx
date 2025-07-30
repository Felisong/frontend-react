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
      <SpaceSheepLogo></SpaceSheepLogo>
      <section className="flex flex-col justify-center items-center mb-8">
        <BackDrop
          hasTitle={true}
          description="I am a woman with a love for web development and design. An aspiring
          Full Stack Developer."
          title="Hello!"
          isHeroBox={true}
        ></BackDrop>
        <ArrowDown></ArrowDown>
      </section>
    </>
  );
}
