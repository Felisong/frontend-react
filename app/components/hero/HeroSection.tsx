"use client";

import BackDrop from "../general/BackDrop";
import SpaceSheepLogo from "./SpaceSheepLogo";

export default function HeroSection() {
  return (
    <>
      <h1 className="font-header text-center mx-4 my-8">
        I am Carolina Henriquez Silva!
      </h1>
      <SpaceSheepLogo></SpaceSheepLogo>
      <section className="text-center">
        <BackDrop></BackDrop>
      </section>
    </>
  );
}
