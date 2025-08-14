// "use client";
// import useSkills from "@/app/hook/useSkills";
// import type { Skills } from "@/types";
// import { useEffect, useState } from "react";
// import SkillsCarouselThin from "./SkillsCarouselThin";
// import { v4 as uuidv4 } from "uuid";

// export default function SkillAboutMe() {
//   const itemWidth = 96;
//   const { skills, loading } = useSkills();
//   const [allSections, setAllSections] = useState<Skills[][]>([[], [], []]);
//   const [initialized, setInitialized] = useState<boolean>(false);
//   const [offset, SetOffSet] = useState<number[]>([0, 0, 0]);
//   const [shouldTransition, setShouldTransition] = useState<boolean[]>([
//     true,
//     true,
//     true,
//   ]);

//   // sorts skills into 3 pieces
//   const sortSkills = (skillsArr: Skills[]) => {
//     if (skillsArr.length < 1) return;
//     const dividedBy = Math.ceil(skillsArr.length / 3);
//     let currentSection: number = 0;
//     let tempTotal: number = 0;
//     let allArrays: Skills[][] = [[], [], []];

//     // sorts into three sections
//     for (let i = 0; i < skillsArr.length; i++) {
//       if (tempTotal === (currentSection === 1 ? dividedBy - 1 : dividedBy)) {
//         currentSection += 1;
//         tempTotal = 0;
//       }
//       allArrays[currentSection].push(skillsArr[i]);
//       tempTotal++;
//     }

//     allArrays = allArrays.map((array: Skills[], i) => {
//       return [array[array.length - 1], ...array, ...array, array[0]];
//     });

//     setAllSections(allArrays);
//   };
//   // handles the new offset
//   const slide = (dir: "left" | "right", arr: Skills[], ind: number) => {
//     const direction = dir === "left" ? -1 : 1;
//     // offset is zero, but then we move the direction (1, or -1) * the width of the item
//     let newOffset = offset[ind] + direction * itemWidth;
//     // getting rid of the two duplicates for smooth transition
//     const totalItems = arr.length - 2;
//     // start is 80px while end is all the way to the last item, so * totalItems
//     const startPosition = 0;
//     const endPosition = -(itemWidth * (totalItems / 2));
//     // if its more negative than the end position, reset to start position. Else ifs greater than the start position, reset to the end position
//     const needsReset = newOffset < endPosition || newOffset > startPosition;

//     if (needsReset) {
//       setShouldTransition((prev) => {
//         const updated = [...prev];
//         updated[ind] = false;
//         return updated;
//       });
//       if (newOffset < endPosition) {
//         newOffset = startPosition;
//       } else if (newOffset > startPosition) {
//         newOffset = endPosition;
//       }
//       SetOffSet((prev) => {
//         const updated = [...prev];
//         updated[ind] = newOffset;
//         return updated;
//       });

//       requestAnimationFrame(() => {
//         setShouldTransition((prev) => {
//           const updated = [...prev];
//           updated[ind] = true;
//           return updated;
//         });
//       });
//       newOffset = newOffset + direction * itemWidth;
//     }
//     SetOffSet((prev) => {
//       const updated = [...prev];
//       updated[ind] = newOffset;
//       return updated;
//     });
//   };
//   console.log(`offsets: `, offset[0]);
//   useEffect(() => {
//     if (!loading) {
//       sortSkills(skills);
//       !initialized && setInitialized(true);
//     }
//   }, [loading, skills]);

//   if (loading) return <p> Loading... </p>;
//   return (
//     <div className="flex flex-col w-full ">
//       {allSections.map((skillsArr, i) => {
//         // 3 vertically laid components, displaying a carousel of skills
//         return (
//           <div className="relative my-4" key={uuidv4()}>
//             <div className="absolute flex w-full justify-between text-3xl font-bold items-center h-full">
//               <button
//                 className="bg-gray-950 p-2 rounded-full w-10 h-10 flex items-center justify-center z-1"
//                 id="left-btn"
//                 onClick={() => {
//                   slide("left", skillsArr, i);
//                 }}
//               >{`<`}</button>
//               <button
//                 className="bg-gray-950 p-2 rounded-full w-10 h-10 flex items-center justify-center z-1"
//                 id="right-btn"
//                 onClick={() => {
//                   slide("right", skillsArr, i);
//                 }}
//               >{`>`}</button>
//             </div>
//             <div className="w-full overflow-hidden">
//               <SkillsCarouselThin
//                 skillsArr={skillsArr}
//                 offset={offset[i]}
//                 shouldTransition={shouldTransition[i]}
//               />
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
