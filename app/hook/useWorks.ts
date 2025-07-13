// hooks/useSkills.ts
import { useEffect, useState } from "react";
const baseURL =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_BASE_URL_LOCAL
    : process.env.NEXT_PUBLIC_BASE_URL_PROD;

export default function useWorks() {
  //TODO: change to work set type
  const [works, setWorks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getWorks() {
      try {
        const res = await fetch(`${baseURL}/priorWorks`);
        if (!res.ok) throw new Error("Unable to fetch skills.");
        const data = await res.json();
        setWorks(data.works);
      } catch (err: any) {
        console.error("Fetch error:", err.message);
        setWorks([]);
      } finally {
        setLoading(false);
      }
    }

    getWorks();
  }, [baseURL]);

  return { works, loading };
}
