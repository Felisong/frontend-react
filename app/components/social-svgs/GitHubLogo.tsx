"use client";

import Link from "next/link";

export default function GitHubLogo({
  width = "40",
  height = "40",
  className = "fill-supplement-white hover:fill-vibrant-red",
}: {
  width?: string;
  height?: string;
  className?: string;
}) {
  return (
    <Link href="https://github.com/Felisong">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 256 256"
        className={`cursor-pointer ${className}`}
      >
        <path
          className="transition-colors duration-200"
          strokeMiterlimit="10"
          d="M17.791 46.836A2 2 0 0 0 19 45v-5.4q.002-.297.041-.61L19 39h-3.6c-1.5 0-2.8-.6-3.4-1.8-.7-1.3-1-3.5-2.8-4.7-.3-.2-.1-.5.5-.5.6.1 1.9.9 2.7 2 .9 1.1 1.8 2 3.4 2 2.487 0 3.82-.125 4.622-.555C21.356 34.056 22.649 33 24 33v-.025c-5.668-.182-9.289-2.066-10.975-4.975-3.665.042-6.856.405-8.677.707a22 22 0 0 1-.151-.987c1.797-.296 4.843-.647 8.345-.714a8 8 0 0 1-.291-.849c-3.511-.178-6.541-.039-8.187.097-.02-.332-.047-.663-.051-.999 1.649-.135 4.597-.27 8.018-.111a10 10 0 0 1-.13-1.543c0-1.7.6-3.5 1.7-5-.5-1.7-1.2-5.3.2-6.6 2.7 0 4.6 1.3 5.5 2.1C21 13.4 22.9 13 25 13s4 .4 5.6 1.1c.9-.8 2.8-2.1 5.5-2.1 1.5 1.4.7 5 .2 6.6 1.1 1.5 1.7 3.2 1.6 5 0 .484-.045.951-.11 1.409 3.499-.172 6.527-.034 8.204.102-.002.337-.033.666-.051.999-1.671-.138-4.775-.28-8.359-.089a8 8 0 0 1-.325.98c3.546.046 6.665.389 8.548.689q-.064.498-.151.987c-1.912-.306-5.171-.664-8.879-.682-1.665 2.878-5.22 4.755-10.777 4.974V33c2.6 0 5 3.9 5 6.6V45c0 .823.498 1.53 1.209 1.836C41.37 43.804 48 35.164 48 25 48 12.318 37.683 2 25 2S2 12.318 2 25c0 10.164 6.63 18.804 15.791 21.836"
          fontFamily="none"
          fontSize="none"
          fontWeight="none"
          style={{ mixBlendMode: "normal" }}
          textAnchor="none"
          transform="scale(5.12)"
        ></path>
      </svg>
    </Link>
  );
}
