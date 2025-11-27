import { FiChevronRight } from "react-icons/fi";
import { IconType } from "react-icons";

interface Props {
  title: string;
  subtitle: string;
  icon: IconType;
  bg?: string;
}

export default function TestSeriesCard({ title, subtitle, icon: Icon, bg = "bg-white" }: Props) {
  return (
    <div
      className={`${bg} w-full max-w-[340px] p-6 rounded-2xl shadow-md transition-transform duration-200 hover:scale-[1.03]`}
    >
      <div className="flex items-start justify-between">
        <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow">
          <Icon size={22} className="text-gray-700" />
        </div>

        <div className="text-gray-700 mt-1">
          <FiChevronRight />
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-2xl font-semibold leading-tight">{title}</h3>
        <p className="text-gray-700 mt-2">{subtitle}</p>
      </div>
    </div>
  );
}
