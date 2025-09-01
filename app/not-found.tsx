"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();
  function reroute() {
    setTimeout(() => {
      router.push("/");
    }, 1500);
  }
  useEffect(() => {
    reroute();
  }, []);

  return (
    <>
      <h1>Page Not Found</h1>
      <p>
        The route you are trying to access does not exist. Will reroute you home
        shortly...
      </p>
    </>
  );
}
