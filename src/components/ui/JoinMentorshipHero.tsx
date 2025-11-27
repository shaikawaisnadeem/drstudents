
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function JoinMentorshipHero() {
  return (
    <section className="w-full bg-black text-white py-20 font-poppins">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Join Our Mentorship <br /> Program
          </h1>

          <p className="text-gray-300 mt-4 max-w-md">
            Get personalized guidance from experts who've been where you are.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-green-400 mt-1" size={22} />
              <p className="text-gray-200">
                Personalized one-on-one mentorship
              </p>
            </div>

            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-green-400 mt-1" size={22} />
              <p className="text-gray-200">
                Guidance on top colleges and cutoffs
              </p>
            </div>

            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-green-400 mt-1" size={22} />
              <p className="text-gray-200">Full admission support</p>
            </div>

            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-green-400 mt-1" size={22} />
              <p className="text-gray-200">
                Direct chat access to verified mentors
              </p>
            </div>
          </div>

          <Link
            href="/join-our-mentorship"
            className="inline-block mt-8 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-all"
          >
            Join Mentorship Now
          </Link>
        </div>

        <div className="flex justify-center">
          <Image
            src="/recruitement.png"
            width={550}
            height={550}
            alt="Mentorship Illustration"
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
}
