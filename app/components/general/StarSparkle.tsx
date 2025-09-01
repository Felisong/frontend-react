"use client";

export default function StarSparkle({
  width = "30",
  height = "40",
}: {
  width?: string;
  height?: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 0L18.0759 15.8988L30 20L18.0759 24.1012L15 40L11.9241 24.1012L0 20L11.9241 15.8988L15 0Z"
        fill="#FFCE74"
      />
    </svg>
  );
}
