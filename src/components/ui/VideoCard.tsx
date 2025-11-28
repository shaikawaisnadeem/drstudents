import Image from "next/image";
import { FiUser, FiCalendar } from "react-icons/fi";

export default function VideoCard() {
  return (
    <div className="bg-[#F2F2F2] rounded-xl p-3 shadow relative w-full max-w-[330px]">
      
      <div className="absolute -top-3 -right-3 text-yellow-400 text-3xl">
        ⭐
      </div>

      <div className="w-full h-[160px] overflow-hidden rounded-lg">
        <Image
          src="/job-ready-program.jpg"
          alt="video"
          width={300}
          height={160}
          priority
          className="object-cover w-full h-full"
        />
      </div>

      <h3 className="font-semibold text-lg mt-3">Chapter Name</h3>

      <div className="mt-2 text-sm text-gray-600 space-y-1">
        <p className="flex items-center gap-2">
          <FiUser /> For: NEET Aspirants
        </p>
        <p className="flex items-center gap-2">
          <FiCalendar /> Starts 10 Nov, 2025 – Ends 30 Jan, 2027
        </p>
      </div>

      <p className="text-sm text-gray-700 mt-2">SHAILM SIR •🔴</p>

      <button className="w-full mt-4 bg-white border py-2 rounded-lg font-medium hover:bg-gray-100">
        Watch Now!
      </button>
    </div>
  );
}
