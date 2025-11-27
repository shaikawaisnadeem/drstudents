

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import ClgCard from "@/components/ui/clgcard";
export default function TopColleges () {
    return (
        <div className="w-full py-16 px-6 md:px-16 bg-white">

        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-poppins font-semibold">
            Top College’s In Location
          </h1>

          <div className="flex gap-3 items-center text-black">
            <div className="w-10 h-10 flex items-center justify-center bg-white border rounded-full shadow hover:bg-gray-100 cursor-pointer">
              <FiChevronLeft size={20} />
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full shadow hover:bg-black/80 cursor-pointer">
              <FiChevronRight size={20} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {Array.from({ length: 12 }).map((_, i) => (
            <ClgCard key={i} />
          ))}
        </div>

      </div>
    )
}