"use client";

import { useToast } from "./toastContext";

const ToastWrapper = () => {
  const { showToast, toastData } = useToast();
  return showToast ? <div> Toast here, feed toast data to display </div> : null;
};

export default ToastWrapper;
