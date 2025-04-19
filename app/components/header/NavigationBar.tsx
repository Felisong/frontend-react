"use client";

import Hamburger from "./header-components/Hamburger";
import NavList from "./header-components/NavList";

export default function NavigationBar() {
  const navigationSelect = [
    { name: "Home", url: "" },
    { name: "About Me", url: "/about-me" },
    { name: "Prior Works", url: "/prior-works" },
    { name: "Resume", url: "/resume" },
  ];

  return (
    <header className="bg-vibrant-red px-10 py-3 h-fi font-header">
      <ul className="hidden md:flex justify-start">
        <NavList navigationSelect={navigationSelect}></NavList>
      </ul>
      <div className="flex justify-end md:hidden">
        <Hamburger navigationSelect={navigationSelect}></Hamburger>
      </div>
    </header>
  );
}
