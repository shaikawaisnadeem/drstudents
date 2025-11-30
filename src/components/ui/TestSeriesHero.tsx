"use client";

import TestSeriesCardBox from "./TestSeriesCardBox";
import { useReveal } from "@/hooks/useReveal";

export default function TestSeriesHero() {
  const revealRef = useReveal();

  return (
    <section className="w-full bg-black text-white py-20 font-poppins">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Test Series</h1>
        <p className="text-gray-300 mt-3 text-lg">
          Practice smarter with curated tests for JEE Mains & MBBS aspirants
        </p>

        <div ref={revealRef} className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 justify-center reveal-group">

          <div className="scale-up">
            <TestSeriesCardBox
              title="MBBS/NEET"
              highlight={true}
              points={[
                "NEET-pattern tests",
                "50+ Full-length mock tests",
                "Chapter-wise practice",
                "Instant analytics",
                "Detailed explanations",
              ]}
            />
          </div>

          <div className="scale-up">
            <TestSeriesCardBox
              title="JEE MAINS/ADV"
              points={[
                "JEE-pattern tests",
                "50+ Full-length mock tests",
                "Chapter-wise practice",
                "Instant analytics",
                "Detailed explanations",
              ]}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
