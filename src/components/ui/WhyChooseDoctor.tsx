import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  title: string;
  subtitle: string;
}

export default function WhyChooseDoctor({ icon: Icon, title, subtitle }: Props) {
  return (
    <div className="bg-black text-white p-6 rounded-2xl shadow-md min-w-[250px] flex flex-col items-center text-center hover:scale-[1.02] transition">
      
      {/* Icon */}
      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4">
        <Icon size={34} className="text-white" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold">{title}</h3>

      {/* Subtitle */}
      <p className="text-gray-300 text-sm mt-2 max-w-[220px]">
        {subtitle}
      </p>
    </div>
  );
}
