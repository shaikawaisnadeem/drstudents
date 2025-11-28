import Image from "next/image";
import SelectState from "@/components/ui/SelectState";
import TopColleges from "@/components/ui/TopColleges";

export default function AbroadHero() {
  return (
    <section
      className="relative w-full min-h-[70vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/abroad-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 text-white">

        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready to Apply Aboard <br /> Colleges?
          </h1>

          <p className="mt-4 text-gray-200 max-w-md">
            Explore verified medical and engineering colleges by state and stream.
          </p>

          <div className="mt-8">
            <SelectState />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src="/earth.png"
            width={350}
            height={350}
            alt="Globe"
            priority
            className="drop-shadow-xl"
          />
        </div>
      </div>

      <div className="relative z-10 mt-10">
        <TopColleges />
      </div>
    </section>
  );
}
