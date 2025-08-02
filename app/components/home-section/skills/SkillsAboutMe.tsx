"use client";
import useSkills from "@/app/hook/useSkills";
import type { Skills } from "@/types";
import { useEffect, useState } from "react";

export default function SkillAboutMe() {
  const { skills, loading } = useSkills();
  // i will for each section, to the same component which will do the sliding
  const [allSections, setAllSections] = useState<Skills[][]>([[], [], []]);
  const sortSkills = (skillsArr: Skills[]) => {
    const dividedBy = Math.ceil(skillsArr.length / 3);
    let currentSection: number = 0;
    let tempTotal: number = 0;
    const allArrays: Skills[][] = [[], [], []];
    for (let i = 0; i < skillsArr.length; i++) {
      if (tempTotal === (currentSection === 1 ? dividedBy - 1 : dividedBy)) {
        currentSection += 1;
        tempTotal = 0;
      }
      allArrays[currentSection].push(skillsArr[i]);
      tempTotal++;
    }
    setAllSections(allArrays);
  };
  useEffect(() => {
    sortSkills(skills);
  }, [loading]);
  // = = = = = = =
  //  = = = = = =
  // = = = = = = =

  // each row can be moveed independently of eachother, and otherwise will have a mild hover effect
  // cut the array into 3 groups, make the middle group the center with -1 the others
  // git a div that is 100% width, fit-content height. Position relative. Hidden overflow
  // 3 divs inside , each will probably be their own component
  // have each one be like 150% width, and span accross
  // do a pop shift offscreen of the items and keep looping through them as the user moves through them
  return (
    <div>
      <p>Meow Skills go here</p>
    </div>
  );
}
