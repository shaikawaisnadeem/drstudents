import Image from "next/image";
import { FiUser, FiCalendar } from "react-icons/fi";
import Link from "next/link";

interface CourseProps {
  id: string;
  slug: string;
  title: string;
  image: string;
  for: string;
  startDate: string;
  endDate: string;
  price: number;
  oldPrice: number;
  batchType: string;
  label: string;
}

export default function CourseCard({ data }: { data: CourseProps }) {
  return (
    <div className="bg-[#F2F2F2] rounded-xl p-3 shadow relative w-full max-w-[330px]">

      <div className="absolute -top-3 -right-3 text-yellow-400 text-3xl">
        ⭐
      </div>

      <div className="w-full h-[160px] overflow-hidden rounded-lg">
        <Image
          src={data.image}
          alt={data.title}
          width={300}
          height={160}
          priority
          className="object-cover w-full h-full"
        />
      </div>

      <h3 className="font-semibold text-lg mt-3 truncate">{data.title}</h3>

      <div className="mt-2 text-sm text-gray-600 space-y-1">
        <p className="flex items-center gap-2">
          <FiUser /> For: {data.for}
        </p>
        <p className="flex items-center gap-2">
          <FiCalendar /> Starts {data.startDate} – Ends {data.endDate}
        </p>
      </div>

      <div className="mt-3 flex justify-between">
        <p className="font-bold text-lg">₹{data.price.toLocaleString()}</p>
        <span className="text-sm text-gray-500 line-through">₹{data.oldPrice.toLocaleString()}</span>
      </div>

      <p className="text-sm mt-1">{data.batchType} • {data.label}</p>

      <div className="flex gap-3 mt-4">
        <Link href={`/course?slug=${data.slug}`} className="flex-1">
          <button className="w-full bg-white border py-2 rounded-lg hover:bg-gray-100 transition">
            Explore
          </button>
        </Link>
        <button className="flex-1 bg-black text-white py-2 rounded-lg hover:bg-black/90 transition">
          Buy Now
        </button>
      </div>

    </div>
  );
}
