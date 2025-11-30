import { FiEye } from "react-icons/fi";
import Link from "next/link";

interface CollegeProps {
  id: string;
  name: string;
  location: string;
  type: string;
  rating: string;
  views: string;
}

export default function ClgCard({ data }: { data: CollegeProps }) {
  return (
    <div className="w-full bg-white rounded-xl border border-gray-200 shadow-sm p-5 font-poppins relative">

      <div className="flex justify-between items-center mb-4">

        <span className="bg-black text-white text-[12px] px-3 py-[4px] rounded-md font-medium">
          TOP RATED
        </span>

        <span className="flex items-center gap-1 bg-black text-white text-[12px] px-3 py-[4px] rounded-full">
          <FiEye size={14} />
          {data.views}
        </span>
      </div>

      <h2 className="text-2xl font-semibold truncate">{data.name}</h2>
      <p className="text-gray-500 text-[15px] mt-1">{data.location}</p>

      <div className="flex items-center justify-between mt-6 w-full">
        <span className="flex items-center gap-2 text-gray-700 text-[15px]">
          <span className="w-2 h-2 bg-black rounded-full block"></span>
          {data.type}
        </span>

        <Link href={`/college?clg=${data.id}`}>
          <button className="bg-black text-white px-5 py-2 rounded-lg font-medium hover:bg-gray-800 transition text-sm">
            View Details
          </button>
        </Link>
      </div>

    </div>
  );
}
