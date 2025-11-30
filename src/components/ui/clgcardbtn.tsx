import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function ClgCardBtn({ id }: { id: string }) {
  return (
    <Link href={`/top-colleges/clg-details?id=${id}`} className="w-full">
      <button className="mt-4 w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition">
        View Details
      </button>
    </Link>
  )
}