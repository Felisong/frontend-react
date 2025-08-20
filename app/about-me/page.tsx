"use client";
import { useEffect, useState } from "react";
import AboutMeSvg from "../components/general/AboutMeSvg";
import ArrowDown from "../components/general/ArrowDown";
import BackDrop from "../components/general/BackDrop";
import Button from "../components/general/Button";
// import SkillAboutMe from "../components/home-section/skills/SkillsAboutMe";

export default function AboutMe() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const determineDesktop = () => {
      if (window) {
        const windowWidth = window.innerWidth;
        setIsDesktop(windowWidth > 1024);
      }
    };
    determineDesktop();
    window.addEventListener("resize", determineDesktop);
    return () => {
      window.removeEventListener("resize", determineDesktop);
    };
  }, []);

  return (
    <>
      <section>
        <h1 className="font-header text-center mx-8 my-4 xl:text-5xl xl:mt-16">
          About Me
        </h1>
        <div className="flex flex-col items-center xl:w-full xl:h-[80vh] xl:flex-row xl:justify-center">
          <div className="w-[80%] h-auto my-8 rounded-full bg-bright-yellow xl:h-[600px] xl:w-[600px] 2xl:h-[700px] 2xl:w-[700px]">
            <AboutMeSvg />
          </div>
          <div className="xl:w-1/3">
            <BackDrop
              description="As a former 2D animator, I absolutely love colors and design - skills
          that naturally translated into web development. What started as a
          fascination with frontend has grown into a genuine passion for
          fullstack development. The procedural thinking, puzzle solving, and
          optimizations you can achieve across the entire stack truly excite me!"
            />
            {isDesktop && (
              <div className="flex justify-center my-8">
                <Button
                  props={{
                    label: "View Resume",
                    link: "/documents/Resume-Carolina-HS.pdf",
                  }}
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <ArrowDown />
        </div>
        {!isDesktop && (
          <div className="flex justify-center my-8">
            <Button
              props={{
                label: "View Resume",
                link: "/documents/Resume-Carolina-HS.pdf",
              }}
            />
          </div>
        )}
        <h1 className="font-header text-center mx-8 my-4">
          Portfolio Blurb - Fullstack Developer
        </h1>
        <p className="text-center mx-8 lg:mx-96">
          <br />
          <br />
          While I initially gravitated towards frontend in school, I&apos;ve
          discovered I&apos;m just as fascinated by backend development after
          getting hands-on experience. I&apos;m comfortable building responsive
          interfaces and equally enjoy working with databases, APIs, and
          server-side logic. There&apos;s something really satisfying about
          seeing how all the pieces connect from database to user interface.
          <br />
          <br />I believe I&apos;d be a great fit for any team because I&apos;m
          communicative, clear about expectations, and provide realistic
          timelines. My creative background helps me think outside the box, and
          any new technologies I need to learn? I have full confidence in my
          ability to pick them up quickly.
        </p>
        <div className="flex justify-center my-8">
          <Button props={{ label: "Projects", link: "/prior-works" }} />
        </div>
        {/* <h1>Skills</h1>
        <SkillAboutMe /> */}
      </section>
    </>
  );
}
