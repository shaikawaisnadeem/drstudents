import SelectState from "@/components/ui/SelectState";
import TopColleges from "@/components/ui/TopColleges";
import Image from "next/image";

export default function TopCollege() {
  return (
    <div className="font-poppins">

      <div className="w-full h-[80vh] bg-black relative">

        <div className="absolute inset-0">
          <Image
            src="/topcolleges-bg.png"
            alt="college-bg"
            fill
            priority
            className="w-full h-full object-cover opacity-40"
            placeholder="blur"
            blurDataURL="/topcolleges-bg.png"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-semibold mb-4">
            Find Top Colleges Across India
          </h1>

          <p className="text-gray-200 text-sm md:text-[17px] mb-10 max-w-[600px]">
            Explore verified medical and engineering colleges by state and stream.
          </p>

          <SelectState/>
        </div>
      </div>

      <TopColleges/>
    </div>
  );
}
