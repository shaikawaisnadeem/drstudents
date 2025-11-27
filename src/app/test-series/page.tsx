import NeetIntroSection from "@/components/ui/NeetIntroSection";
import OneShots from "@/components/ui/oneshot";
import CoursesSection from "@/components/ui/coursesSection";
import TestSeriesTour from "@/components/ui/TestSeriesTour";

export default function TestSeriesPage() {
  return (
    <div className="font-poppins text-gray-900">
      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-6 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold">Test Series</h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Practice with top-quality test-series designed to boost your performance.
        </p>
      </div>

      {/* CONTENT SECTIONS (all use same centered container internally) */}
      <NeetIntroSection />
      <OneShots />
      <CoursesSection />
      <TestSeriesTour />
    </div>
  );
}
