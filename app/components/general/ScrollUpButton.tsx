"use client";

import { useEffect, useState } from "react";

export default function ScrollUpButton() {
  const [arrowVisible, setArrowVisible] = useState(false);

  useEffect(() => {
    const handleArrowDisplay = () => {
      setArrowVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleArrowDisplay);

    return () => {
      window.removeEventListener("scroll", handleArrowDisplay);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="z-20 fixed bottom-1/15 w-full flex justify-center">
      <button
        onClick={() => {
          arrowVisible && goToTop();
        }}
        className={`p-2 bg-primary-white rounded-full w-14 h-14 text-dark-blue flex items-center justify-center text-3xl ${
          arrowVisible ? "opacity-80" : "opacity-0"
        } transition-opacity duration-300`}
      >
        &#8679;
      </button>
    </div>
  );
}
