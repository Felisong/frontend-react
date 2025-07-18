"use client";

import Toast from "@/app/components/general/Toast";
import { useToast } from "./toastContext";

const ToastWrapper = () => {
  const { showToast, toastData } = useToast();
  return showToast ? <Toast {...toastData} /> : null;
};

export default ToastWrapper;
