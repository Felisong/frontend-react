import AboutMeSvg from "../components/general/AboutMeSvg";
import ArrowDown from "../components/general/ArrowDown";
import BackDrop from "../components/general/BackDrop";
// import SkillAboutMe from "../components/home-section/skills/SkillsAboutMe";

export default function AboutMe() {
  return (
    <>
      <section>
        <h1 className="font-header text-center mx-8 my-4"> About Me</h1>
        <div className="flex flex-col items-center">
          <div className="w-[80%] h-auto my-8 rounded-full bg-bright-yellow">
            <AboutMeSvg />
          </div>
          <BackDrop description="I am a friendly woman with a multitude of skills to offer. Passionate, driven and friendly. I do my best, and am always striving to improve myself. I have found a love for coding, and hope my site shows that too!" />
        </div>
        <div className="flex justify-center">
          <ArrowDown />
        </div>

        <h1 className="font-header text-center mx-8 my-4">
          Portfolio Blurb - Fullstack Developer
        </h1>
        <p>
          As a former 2D animator, I absolutely love colors and design - skills
          that naturally translated into web development. What started as a
          fascination with frontend has grown into a genuine passion for
          fullstack development. The procedural thinking, puzzle solving, and
          optimizations you can achieve across the entire stack truly excite me.
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
        {/* <SkillAboutMe /> */}
        <button>Projects</button>
      </section>
    </>
  );
}
