import Image from "next/image";
import { FiUser, FiCalendar } from "react-icons/fi";

export default function CourseCard() {
  return (
    <div className="bg-[#F2F2F2] rounded-xl p-3 shadow relative w-full max-w-[330px]">

      {/* Star Badge */}
      <div className="absolute -top-3 -right-3 text-yellow-400 text-3xl">
        ⭐
      </div>

      {/* Thumbnail */}
      <div className="w-full h-[160px] overflow-hidden rounded-lg">
        <Image
          src="/clg-frnd.jpg"
          alt="course"
          width={300}
          height={160}
          className="object-cover w-full h-full"
        />
      </div>

      <h3 className="font-semibold text-lg mt-3">Course Title</h3>

      <div className="mt-2 text-sm text-gray-600 space-y-1">
        <p className="flex items-center gap-2">
          <FiUser /> For: NEET Aspirants
        </p>
        <p className="flex items-center gap-2">
          <FiCalendar /> Starts 10 Nov, 2025 – Ends 30 Jan, 2027
        </p>
      </div>

      <div className="mt-3 flex justify-between">
        <p className="font-bold text-lg">₹3,500</p>
        <span className="text-sm text-gray-500 line-through">₹4,800</span>
      </div>

      <p className="text-sm mt-1">FULL BATCH • New Batch</p>

      {/* Buttons */}
      <div className="flex gap-3 mt-4">
        <button className="flex-1 bg-white border py-2 rounded-lg hover:bg-gray-100">
          Explore
        </button>
        <button className="flex-1 bg-black text-white py-2 rounded-lg hover:bg-black/90">
          Buy Now
        </button>
      </div>

    </div>
  );
}
