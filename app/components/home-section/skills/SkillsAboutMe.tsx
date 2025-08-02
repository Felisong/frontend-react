"use client";
import useSkills from "@/app/hook/useSkills";
import type { Skills } from "@/types";
import { useEffect, useState } from "react";
import SkillsCarouselThin from "./SkillsCarouselThin";
import { init } from "next/dist/compiled/webpack/webpack";

export default function SkillAboutMe() {
  const { skills, loading } = useSkills();
  const [allSections, setAllSections] = useState<Skills[][]>([[], [], []]);
  const [initialized, setInitialized] = useState<boolean>(false);
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
    if (!loading && skills.length) {
      sortSkills(skills);
      !initialized && setInitialized(true);
    }
  }, [loading]);
  console.log(`initialized: `, loading);
  if (!initialized) return <p> Loading... </p>;

  return (
    <div className="flex flex-col w-full">
      {allSections.map((skillsArr) => {
        return (
          <div key={skillsArr[0].skill} className="m-4 overflow-hidden w-[90%]">
            <SkillsCarouselThin skillsArr={skillsArr} />
          </div>
        );
      })}
    </div>
  );
}
