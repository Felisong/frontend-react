"use client";

import { Skills } from "@/types";
import DisplaySvg from "./DisplaySvg";

export default function SkillsCarouselThin({
  skillsArr,
}: {
  skillsArr: Skills[];
}) {
  // = = = = = = =
  //  = = = = = =
  // = = = = = = =

  // each row can be moveed independently of eachother, and otherwise will have a mild hover effect
  // git a div that is 100% width, fit-content height. Position relative. Hidden overflow
  // 3 divs inside , each will probably be their own component
  // have each one be like 150% width, and span accross
  // do a pop shift offscreen of the items and keep looping through them as the user moves through them
  return (
    <div className="flex w-[200%]">
      {skillsArr.map((skill) => {
        return (
          <div key={skill.skill} className="mx-2">
            <DisplaySvg
              svgStr={skill.logo_svg}
              size={80}
              color=""
              className="hover:fill-bright-yellow fill-bright-yellow"
            />
          </div>
        );
      })}
    </div>
  );
}
