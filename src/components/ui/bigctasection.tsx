import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function BigCtaSection() {
  return (
    <section className="py-16 bg-white font-poppins">
      <div className="max-w-6xl mx-auto px-6">

        <div className="w-full bg-gradient-to-r from-[#2A2A2A] to-[#141414] text-white rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-10 shadow-lg">

          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Join 15 Million students on the app today!
            </h2>

            <ul className="mt-5 space-y-3 text-gray-200">
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-green-400 text-xl" />
                Live & recorded classes available at ease
              </li>

              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-green-400 text-xl" />
                Lakhs of practice questions
              </li>

              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-green-400 text-xl" />
                Dashboard for progress tracking
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-4">
              <button className="px-6 py-3 bg-white text-black rounded-full font-medium shadow hover:bg-gray-200 transition">
                Download Now
              </button>

              <button className="px-6 py-3 border border-white rounded-full font-medium hover:bg-white hover:text-black transition">
                Join Mentorship Now
              </button>
            </div>
          </div>

          <div className="relative w-[180px] h-[180px] md:w-[230px] md:h-[230px]">
            <Image
              src="/earphones.png" 
              alt="student"
              fill
              priority
              className="object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
