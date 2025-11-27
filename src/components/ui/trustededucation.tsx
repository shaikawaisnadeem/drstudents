import Image from "next/image";
import { FiVideo, FiFileText, FiMessageCircle, FiMapPin } from "react-icons/fi";

export default function TrustedEducation() {
  return (
    <section className="py-16 bg-white font-poppins">
      <div className="max-w-6xl mx-auto px-6">

        {/* -------- TOP SECTION -------- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* LEFT SIDE TEXT */}
          <div className="max-w-lg">
            <h2 className="text-4xl font-semibold leading-snug">
              Bharat’s Trusted & <br /> Affordable Educational <br /> Platform
            </h2>

            <p className="text-gray-600 mt-4 leading-relaxed">
              Unlock your potential by signing up with <br />
              Physics Wallah – The most affordable learning solution.
            </p>

            <button className="mt-6 px-8 py-3 bg-black text-white rounded-xl font-medium hover:bg-black/90 transition">
              Get Started
            </button>
          </div>

          {/* RIGHT CIRCLE IMAGE */}
          <div className="relative">
            <Image
              src="/study-hero.png"
              alt="Profile Graphic"
              width={260}
              height={260}
              className="object-contain"
            />

            {/* Colored dots around circle */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-green-500 rounded-full" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-yellow-400 rounded-full" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-red-500 rounded-full" />
          </div>

        </div>

        {/* -------- BOTTOM STAT BAR -------- */}
        <div className="mt-12 bg-gradient-to-b from-[#2C2C2C] to-black rounded-2xl px-6 py-6 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 text-center text-white gap-8">

            <div className="flex flex-col items-center">
              <FiVideo size={28} />
              <h4 className="mt-2 font-semibold">Daily Live</h4>
              <p className="text-xs text-gray-300">Interactive classes</p>
            </div>

            <div className="flex flex-col items-center">
              <FiFileText size={28} />
              <h4 className="mt-2 font-semibold">10 Million +</h4>
              <p className="text-xs text-gray-300">Tests, sample papers & notes</p>
            </div>

            <div className="flex flex-col items-center">
              <FiMessageCircle size={28} />
              <h4 className="mt-2 font-semibold">24 x 7</h4>
              <p className="text-xs text-gray-300">Doubt solving sessions</p>
            </div>

            <div className="flex flex-col items-center">
              <FiMapPin size={28} />
              <h4 className="mt-2 font-semibold">100 +</h4>
              <p className="text-xs text-gray-300">Offline centres</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
