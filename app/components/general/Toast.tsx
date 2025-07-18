"use client";

import { toastData } from "@/app/utils/context/toast/toastContext";

export default function Toast(toastData: toastData) {
  return (
    <div
      className={`${toastData.isError ? `bg-dark-pink` : `bg-bright-yellow`}`}
    >
      <p>{toastData.message}</p>
    </div>
  );
}
