import { FiEye, FiArrowUpRight } from "react-icons/fi";
import ClgCardBtn from "./clgcardbtn";

export default function ClgCard() {
  return (
    <div className="w-[320px] bg-white rounded-xl border border-gray-200 shadow-sm p-5 font-poppins relative">

      <div className="flex justify-between items-center mb-4">

        <span className="bg-black text-white text-[12px] px-3 py-[4px] rounded-md font-medium">
          TOP RATED
        </span>

        <span className="flex items-center gap-1 bg-black text-white text-[12px] px-3 py-[4px] rounded-full">
          <FiEye size={14} />
          2K
        </span>
      </div>

      <h2 className="text-2xl font-semibold">College Name</h2>
      <p className="text-gray-500 text-[15px] mt-1">Location</p>

      <div className="flex justify-between items-center mt-6">
        <span className="flex items-center gap-2 text-gray-700 text-[15px]">
          <span className="w-2 h-2 bg-black rounded-full block"></span>
          Government
        </span>

        <ClgCardBtn/>
      </div>

    </div>
  );
}
