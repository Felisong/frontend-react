"use client";
import { useState } from "react";
import { PriorWorksModel } from "../../../types";
import { useRouter } from "next/navigation";
export default function WorkCard({ work }: { work: PriorWorksModel }) {
  const router = useRouter();
  const [skillsDisplayed, setSkillsDisplayed] = useState<boolean>(false);
  const [touched, setTouched] = useState(false);
  // on hover, transition
  const handleSkillDisplay = () => {
    setSkillsDisplayed(!skillsDisplayed);
  };
  const handleMouseEnter = () => {
    setSkillsDisplayed(true);
  };
  const handleMouseLeave = () => {
    setSkillsDisplayed(false);
  };
  return (
    <article className="pt-16 rounded-full h-fit transition w-full">
      <div
        className={`relative h-fit w-[90%] m-auto rounded-4xl overflow-hidden transition-transform duration-150 ease-in-out ${
          skillsDisplayed ? "scale-110" : "scale-100"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {skillsDisplayed && (
          <div className="w-full h-full flex flex-col justify-around bg-dark-pink absolute p-4 md:text-sm">
            <p
              className=" line-clamp-3 xl:line-clamp-5 2xl:line-clamp-6"
              dangerouslySetInnerHTML={{
                __html: work.description,
              }}
            ></p>
            <button
              className="hover:text-bright-yellow xl:text-xl active:text-white active:scale-1.5"
              onClick={() => {
                router.push(`/${work.title}`);
                setTouched(true);
              }}
            >
              {touched ? (
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 49 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="animate-spin flex- w-full justify-center"
                >
                  <g clipPath="url(#clip0_284_250)">
                    <circle
                      cx="24"
                      cy="24"
                      r="21"
                      stroke="white"
                      strokeWidth="6"
                    />
                    <mask
                      id="mask0_284_250"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="48"
                      height="48"
                    >
                      <circle
                        cx="24"
                        cy="24"
                        r="21"
                        stroke="white"
                        strokeWidth="6"
                      />
                    </mask>
                    <g mask="url(#mask0_284_250)">
                      <path
                        d="M2 5.19753e-05L42.5 0L34 11.5001H12L2 5.19753e-05Z"
                        fill="#001A2E"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_284_250">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                "Click here for details"
              )}
            </button>
          </div>
        )}
        <img className="w-full h-auto" src={work.gif} alt="lorem placeholder" />
      </div>
      <h1 className={`transition-all ${skillsDisplayed ? "mt-6" : "mt-2"}`}>
        {work.title}
      </h1>
      <button className="xl:hidden" onClick={handleSkillDisplay}>
        {skillsDisplayed ? "Hide skills" : "Click here for quick info"}
      </button>
    </article>
  );
}
