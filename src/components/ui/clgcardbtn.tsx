'use client'
import { useRouter } from "next/navigation";
import {FiArrowUpRight} from "react-icons/fi";
export default function ClgCardBtn() {
    const router = useRouter();
    return (
        <button
        onClick={()=> router.push('/top-colleges/clg-details')}
        className="flex items-center gap-2 bg-black text-white px-4 py-[6px] rounded-lg text-sm font-medium hover:bg-black/80 transition">
          View
          <FiArrowUpRight size={16} />
        </button>
    )

}