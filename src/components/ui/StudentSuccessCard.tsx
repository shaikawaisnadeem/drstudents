import { IconType } from "react-icons";
import { FaStar } from "react-icons/fa";

interface Props {
  name: string;
  course: string;
  message: string;
}

export default function StudentSuccessCard({ name, course, message }: Props) {
  return (
    <div className="relative bg-[#F7F5F5] p-6 rounded-2xl shadow-md flex flex-col items-center text-center w-full">
      
      <FaStar className="absolute -top-3 right-[-13] text-yellow-400" size={46} />

      <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center text-white text-4xl font-bold">
        <span>👤</span>
      </div>

      {/* Name + Course */}
      <h3 className="mt-4 text-lg font-semibold">{name}</h3>
      <p className="text-gray-600 text-sm">{course}</p>

      {/* Message */}
      <p className="text-gray-700 mt-4 text-sm leading-relaxed max-w-[240px]">
        {message}
      </p>
    </div>
  );
}
