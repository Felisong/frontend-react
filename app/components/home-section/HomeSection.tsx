"use client";
import useSkills from "@/app/hook/useSkills";
import SkillsCarousel from "./skills/SkillsCarousel";
import { PriorWorksModel } from "../../../types";
import WorkCard from "./WorkCard";
import { useEffect, useRef, useState } from "react";

export default function HomeSection({
  works,
  loading,
}: {
  works: PriorWorksModel[];
  loading: boolean;
}) {
  const { skills } = useSkills();
  const [keyInputSlide, setKeyInputSlide] = useState<number>(0);
  const filtered = works.filter(
    (work: PriorWorksModel) =>
      work.title !== "Portfolio Site" && work.title !== "Travel Blog"
  );
  // This will be so you can use your keyboard to navigate
  useEffect(() => {
    const handleChange = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setKeyInputSlide((prev) => Math.max(0, prev - 1));
      } else if (e.key === "ArrowRight") {
        setKeyInputSlide((prev) => Math.min(2, prev + 1));
      }
    };
    window.addEventListener("keydown", handleChange);

    return () => {
      window.removeEventListener("keydown", handleChange);
    };
  }, []);
  return (
    <main className="text-center">
      <h1>My Skills</h1>
      <div className="max-w-full relative h-fit my-20">
        <div className="z-10">
          <SkillsCarousel skills={skills} keyInputSlide={keyInputSlide} />
        </div>
        <div className="bg"></div>
      </div>
      <h1 className="pt-16">Prior Works</h1>
      <hr />
      {loading ? (
        <p> loading works...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
          {filtered.map((work: PriorWorksModel, id: number) => (
            <WorkCard
              key={work.title ? String(work.title) : String(id)}
              work={work}
            />
          ))}
        </div>
      )}
    </main>
  );
}
