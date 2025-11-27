import { PiBrainBold } from "react-icons/pi";
import { FiBarChart2, FiTrendingUp, FiPhoneCall } from "react-icons/fi";

export default function WhyMembership() {
  return (
    <div className="w-full bg-black text-white py-16 font-poppins">

      <h1 className="text-center text-3xl md:text-4xl font-semibold mb-14">
        Why Membership?
      </h1>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 px-6">

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4">
            <PiBrainBold size={40} className="text-black" />
          </div>
          <h3 className="text-lg font-semibold mb-1">Mentorship</h3>
          <p className="text-gray-300 text-sm max-w-[180px]">
            Connect with seasoned mentors for direct guidance.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4">
            <FiBarChart2 size={38} className="text-black" />
          </div>
          <h3 className="text-lg font-semibold mb-1">Data Insights</h3>
          <p className="text-gray-300 text-sm max-w-[180px]">
            Access verified analytics to inform your strategy.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4">
            <FiTrendingUp size={38} className="text-black" />
          </div>
          <h3 className="text-lg font-semibold mb-1">Admission Tracking</h3>
          <p className="text-gray-300 text-sm max-w-[180px]">
            Monitor your application status and progress anytime.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4">
            <FiPhoneCall size={36} className="text-black" />
          </div>
          <h3 className="text-lg font-semibold mb-1">Priority Calls</h3>
          <p className="text-gray-300 text-sm max-w-[180px]">
            Skip the queue for exclusive support calls.
          </p>
        </div>

      </div>
    </div>
  );
}
