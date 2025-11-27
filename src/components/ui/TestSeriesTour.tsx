import { FiEdit3, FiYoutube, FiMessageCircle } from "react-icons/fi";
import TestSeriesCard from "./TestSeriesCard";

export default function TestSeriesTour() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">Explore Our Learning Tools</h2>
        <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
          Tools and resources to help you prepare effectively.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          <TestSeriesCard
            title="Test-Series"
            subtitle="Access to Our Top Notch Test-Series"
            icon={FiEdit3}
            bg="bg-[#B4F5EA]"
          />

          <TestSeriesCard
            title="YouTube"
            subtitle="Access to Our YouTube Channel"
            icon={FiYoutube}
            bg="bg-[#FDC5C5]"
          />

          <TestSeriesCard
            title="Live Doubts"
            subtitle="Clear Your Doubts Within Seconds"
            icon={FiMessageCircle}
            bg="bg-[#B7F7C1]"
          />
        </div>
      </div>
    </section>
  );
}
