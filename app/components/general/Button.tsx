"use client";

import { useRouter } from "next/navigation";

export default function Button({
  props = { label: "Click Here", link: "" },
}: {
  props: { label: string; link: string };
}) {
  const router = useRouter();
  const handleClick = (ref: string) => {
    if (!ref) return;
    router.push(ref);
  };
  return (
    <button
      className="p-[5px] rounded-xl bg-gradient-to-b from-[#AE1B55] to-[#FFCE74] hover:scale-110 transition-all"
      onClick={() => {
        handleClick(props.link);
      }}
    >
      <div className="p-6 rounded-xl bg-dark-blue relative text-center text-xl font-header">
        {props.label}
      </div>
    </button>
  );
}
