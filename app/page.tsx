"use client";

import HeroSection from "./components/hero/HeroSection";
import HomeSection from "./components/home-section/HomeSection";
import useWorks from "./hook/useWorks";

export default function Home() {
  const { works, loading } = useWorks();
  return (
    <div>
      <HeroSection></HeroSection>
      <HomeSection works={works} loading={loading}></HomeSection>
      <a target="_blank" href="https://icons8.com/icon/cHBUT9SmrD2V/typescript">
        TypeScript
      </a>{" "}
      icon by{" "}
      <a target="_blank" href="https://icons8.com">
        Icons8
      </a>
    </div>
  );
}
