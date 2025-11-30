import Image from "next/image";
import { FiMessageCircle } from "react-icons/fi";

export default function NeetIntroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14 font-poppins">

      <div className="text-left">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">NEET 2026</h1>

        <p className="text-lg leading-relaxed text-gray-700 max-w-[1100px] mb-10 underline-offset-2 decoration-gray-400 underline">
          Preparing for the NEET 2026 exam is a crucial step for students aiming to pursue a
          career in the medical field. This national-level exam demands focused preparation
          and smart planning. With proper guidance, online courses, study resources, and a
          clear understanding of the syllabus and pattern, students can move forward
          confidently. Here, we provide a detailed overview of NEET UG 2026, including
          eligibility, syllabus, exam pattern, and preparation tips.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

        <div className="bg-[#B9F6E9] p-6 rounded-xl flex flex-col relative shadow-md h-full">
          <div className="flex items-center justify-between">
            <Image src="/paperpen.png" width={50} height={50} priority alt="test" className="rounded-full" />
            <span className="text-xl font-light">›</span>
          </div>

          <h3 className="text-xl font-semibold mt-4">Test-Series</h3>
          <p className="text-gray-600 text-sm mt-1">
            Access to Our Top Notch Test-Series
          </p>
        </div>

        <div className="bg-[#FEC8C8] p-6 rounded-xl flex flex-col relative shadow-md h-full">
          <div className="flex items-center justify-between">
            <Image src="/learning.png" width={100} height={100} priority alt="youtube" className="rounded-full" />
            <span className="text-xl font-light">›</span>
          </div>

          <h3 className="text-xl font-semibold mt-4">Youtube</h3>
          <p className="text-gray-600 text-sm mt-1">
            Access to Our Youtube Channel
          </p>
        </div>

        <div className="bg-[#B7F7C1] p-6 rounded-xl flex flex-col relative shadow-md h-full">
          <div className="flex items-center justify-between">

            <div className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center shadow">
              <FiMessageCircle size={28} className="text-black" />
            </div>

            <span className="text-xl font-light">›</span>
          </div>

          <h3 className="text-xl font-semibold mt-4">Live Doubts</h3>

          <p className="text-gray-600 text-sm mt-1">
            Clear Your Doubts Within Seconds
          </p>
        </div>

      </div>

      <div className="flex gap-4 flex-wrap">
        <button className="px-6 py-2 border rounded-xl text-gray-700 bg-white shadow hover:bg-gray-100 transition">
          Chemistry
        </button>

        <button className="px-6 py-2 border rounded-xl text-gray-700 bg-white shadow hover:bg-gray-100 transition">
          Physics
        </button>

        <button className="px-6 py-2 border rounded-xl text-gray-700 bg-white shadow flex items-center gap-1 transition">
          Biology <span className="ml-1">⌄</span>
        </button>
      </div>
    </section>
  );
}
