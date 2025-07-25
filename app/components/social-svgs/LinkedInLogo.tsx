"use client";

import Link from "next/link";

export default function LinkedInLogo({
  width = "40",
  height = "40",
  className = "fill-supplement-white hover:fill-vibrant-red",
}: {
  width?: string;
  height?: string;
  className?: string;
}) {
  return (
    <Link href="wwww.linkedin.com/in/carolina-henriquez-silva">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 256 256"
        className={`cursor-pointer ${className}`}
      >
        <g
          stroke="none"
          strokeWidth="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          style={{ mixBlendMode: "normal" }}
        >
          <g transform="scale(8.53333)">
            <path
              className="transition-colors duration-200"
              d="M24,4h-18c-1.105,0 -2,0.895 -2,2v18c0,1.105 0.895,2 2,2h18c1.105,0 2,-0.895 2,-2v-18c0,-1.105 -0.895,-2 -2,-2zM10.954,22h-2.95v-9.492h2.95zM9.449,11.151c-0.951,0 -1.72,-0.771 -1.72,-1.72c0,-0.949 0.77,-1.719 1.72,-1.719c0.948,0 1.719,0.771 1.719,1.719c0,0.949 -0.771,1.72 -1.719,1.72zM22.004,22h-2.948v-4.616c0,-1.101 -0.02,-2.517 -1.533,-2.517c-1.535,0 -1.771,1.199 -1.771,2.437v4.696h-2.948v-9.492h2.83v1.297h0.04c0.394,-0.746 1.356,-1.533 2.791,-1.533c2.987,0 3.539,1.966 3.539,4.522z"
            />
          </g>
        </g>
      </svg>
    </Link>
  );
}
