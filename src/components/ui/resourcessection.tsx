import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function ResourcesSection() {
  return (
    <section className="py-16 bg-white font-poppins">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-semibold">Blog & Resources</h2>
        <p className="text-gray-600 mt-2">
          Read our latest articles, guides, and updates on medical and engineering admissions.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="bg-white shadow-md rounded-xl border overflow-hidden">
            <div className="bg-[#d7ddf3] p-10 flex justify-center">
              <Image src="/bookopen.png" alt="notes" priority width={150} height={150} />
            </div>

            <div className="p-5 text-left">
              <h3 className="font-semibold text-lg">
                How to Choose the Right Medical College
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Learn key factors to consider when selecting your dream MBBS college.
              </p>

              <button className="mt-5 w-full border rounded-full py-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition">
                Read More <FiArrowRight />
              </button>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-xl border overflow-hidden">
            <div className="bg-[#c2e9e8] p-10 flex justify-center">
              <Image src="/flask.png" alt="planner" priority width={150} height={150} />
            </div>

            <div className="p-5 text-left">
              <h3 className="font-semibold text-lg">
                NEET Exam Preparation Tips
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Discover effective strategies to boost your NEET performance.
              </p>

              <button className="mt-5 w-full border rounded-full py-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition">
                Read More <FiArrowRight />
              </button>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-xl border overflow-hidden">
            <div className="bg-[#f6e9ae] p-10 flex justify-center">
              <Image src="/bulb.png" alt="idea" priority width={150} height={150} />
            </div>

            <div className="p-5 text-left">
              <h3 className="font-semibold text-lg">
                Top Study Habits for Success
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Build habits that help you stay ahead in your academic journey.
              </p>

              <button className="mt-5 w-full border rounded-full py-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition">
                Read More <FiArrowRight />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
