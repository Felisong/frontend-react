"use client";

import SkillsCarousel from "../skills/SkillsCarousel";

export default function HomeSkillsSection() {
  const slides = [
    { name: "Test1 ", link: "https://picsum.photos/200/300", id: 1 },
    { name: "Test2 ", link: "https://picsum.photos/200/300", id: 2 },
    { name: "Test3 ", link: "https://picsum.photos/200/300", id: 3 },
  ];

  return (
    <main className="text-center">
      <h1>My Skills</h1>
      <div className="max-w-lg">
        <SkillsCarousel slides={slides} />
      </div>

      <p>svg here as an absolute behind</p>
    </main>
  );
}
