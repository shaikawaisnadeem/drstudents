import { FaStar } from "react-icons/fa";

interface Props {
  title: string;
  points: string[];
  highlight?: boolean;
}

export default function TestSeriesCardBox({ title, points, highlight }: Props) {
  return (
    <div className="relative bg-[#d9d9d9] p-6 rounded-2xl w-full max-w-sm mx-auto shadow-md text-center">

      {highlight && (
        <FaStar
          className="absolute -top-3 right-[-13] text-yellow-400"
          size={46}
        />
      )}

      <h3 className="text-lg font-semibold tracking-wide">
        <span className="border-b-2 border-black pb-[2px]">{title}</span>
      </h3>

      <ul className="mt-4 space-y-2 text-gray-800 text-sm">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <button className="mt-6 bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-black/90 transition">
        Start Now
      </button>
    </div>
  );
}
