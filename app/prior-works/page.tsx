"use client";
import { PriorWorksModel } from "@/types";
import useWorks from "../hook/useWorks";
import WorkCard from "../components/home-section/WorkCard";

export default function PriorWorks() {
  const { works, loading } = useWorks();

  return (
    <main>
      <h1 className="font-header text-center mx-8 my-4"> All Projects</h1>
      <p className="text-center p-8">
        {`I'm going to be trying to have the three most featured projects in the
        home page, but thought it'd be nice to have somewhere to see everything
        I've done!`}
      </p>
      {loading ? (
        <p className="text-center p-8"> Loading...</p>
      ) : (
        <div className="grid items-center text-center  md:grid-cols-3 gap-4 px-4">
          {works.map((work: PriorWorksModel, id: number) => (
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
