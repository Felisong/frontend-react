"use client";

import { useState } from "react";
import NavList from "./NavList";
import SpaceSheepStatic from "../../hero/SpaceSheepStatic";

export default function Hamburger({
  navigationSelect,
}: {
  navigationSelect: { name: string; url: string; currentPage: boolean }[];
}) {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = (value: boolean) => {
    setShowMenu(value);
  };

  return (
    <nav className="relative z-10">
      <button onClick={handleClick}>
        <svg
          width="48"
          height="40"
          viewBox="0 0 38 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 4.09091H34"
            stroke="#FFFAE1"
            strokeWidth="6.36364"
            strokeLinecap="round"
          />
          <path
            d="M4 15H34"
            stroke="#FFFAE1"
            strokeWidth="6.36364"
            strokeLinecap="round"
          />
          <path
            d="M4 25.9091H34"
            stroke="#FFFAE1"
            strokeWidth="6.36364"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <div
        className={`block w-full h-full z-10 ${
          showMenu ? "relative" : "hidden"
        }`}
      >
        <button
          className="fixed right-8 top-6 text-3xl"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          X
        </button>
      </div>
      <aside
        className={`${
          showMenu ? "fixed" : "hidden"
        } left-0 top-0 w-full h-fit p-4 bg-vibrant-red pb-6 flex flex-col`}
      >
        <div className="absolute bg-vibrant-red top-2 left-2">
          <SpaceSheepStatic width="75px" height="75px" />
        </div>
        <div className="pt-20">
          <NavList
            isMobile={true}
            navigationSelect={navigationSelect}
            closeMenu={closeMenu}
          ></NavList>
        </div>
      </aside>
    </nav>
  );
}
