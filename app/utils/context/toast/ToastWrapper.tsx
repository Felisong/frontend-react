"use client";

import Toast from "@/app/components/general/Toast";
import { useToast } from "./toastContext";
// controls the visibility of the toast
const ToastWrapper = () => {
  const { showToast, toastData } = useToast();
  console.log(`show toast?: `, showToast);
  return showToast ? <Toast {...toastData} /> : null;
};

export default ToastWrapper;
