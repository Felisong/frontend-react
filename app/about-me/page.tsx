import ArrowDown from "../components/general/ArrowDown";
import BackDrop from "../components/general/BackDrop";
import SkillsCarousel from "../components/home-section/skills/SkillsCarousel";

export default function AboutMe() {
  return (
    <>
      <section>
        <h1 className="font-header text-center mx-8 my-4"> About Me</h1>
        <div className="flex flex-col items-center">
          <div className="w-[300px] h-[300px] my-8 rounded-full bg-bright-yellow" />
          <BackDrop description="I am a friendly woman with a multitude of skills to offer. Passionate, driven and friendly. I do my best, and am always striving to improve myself. I have found a love for coding, and hope my site shows that too!" />
        </div>
        <div className="flex justify-center">
          <ArrowDown />
        </div>

        <h1 className="font-header text-center mx-8 my-4"> Skills</h1>
        <p>I wanted to have fun with a different way to display these</p>
        <SkillsCarousel skills={[]} />
        <button>Projects</button>
      </section>
    </>
  );
}
