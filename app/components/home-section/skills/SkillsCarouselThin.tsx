// "use client";

// import { Skills } from "@/types";
// import DisplaySvg from "./DisplaySvg";
// import { v4 as uuidv4 } from "uuid";

// export default function SkillsCarouselThin({
//   skillsArr,
//   offset = 0,
//   shouldTransition = true,
// }: {
//   skillsArr: Skills[];
//   offset: number;
//   shouldTransition: boolean;
// }) {
//   return (
//     <div
//       className={`flex w-max ${
//         shouldTransition ? " transition-transform duration-300 ease-in-out" : ""
//       }`}
//       style={{
//         transform: `translateX(${offset}px)`,
//       }}
//     >
//       {skillsArr.map((skill) => {
//         return (
//           <div
//             key={uuidv4()}
//             className="mx-2 w-[80px] shrink-0 h-[80px] transition-transform"
//           >
//             <DisplaySvg
//               svgStr={skill.logo_svg}
//               size={80}
//               color=""
//               className="hover:fill-bright-yellow fill-bright-yellow"
//             />
//           </div>
//         );
//       })}
//     </div>
//   );
// }
