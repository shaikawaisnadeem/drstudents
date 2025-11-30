"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { useReveal } from "@/hooks/useReveal";

export default function ResourcesSection() {
  const revealRef = useReveal();

  return (
    <section className="py-16 bg-white font-poppins">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-semibold">Blog & Resources</h2>
        <p className="text-gray-600 mt-2">
          Read our latest articles, guides, and updates on medical and engineering admissions.
        </p>

        <div ref={revealRef} className="grid md:grid-cols-3 gap-8 mt-12 reveal-group">

          <div className="bg-white shadow-md rounded-xl border overflow-hidden">
            <div className="bg-[#d7ddf3] p-10 flex justify-center">
              <Image
                src="/bookopen.png"
                alt="notes"
                width={150}
                height={150}
                className="next-image-fade"
                loading="lazy"
                placeholder="blur"
                blurDataURL="/placeholder-blur.jpg"
                onLoadingComplete={(img) => img.classList.add("loaded")}
              />
            </div>

            <div className="p-5 text-left">
              <h3 className="font-semibold text-lg">
                How to Choose the Right Medical College
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Learn key factors to consider when selecting your dream MBBS college.
              </p>

              <Link
                href="/blog?post=how-to-choose-medical-college"
                aria-label="Read more about How to Choose the Right Medical College"
                className="mt-5 w-full border rounded-full py-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition text-black"
              >
                Read More <FiArrowRight />
              </Link>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-xl border overflow-hidden">
            <div className="bg-[#c2e9e8] p-10 flex justify-center">
              <Image
                src="/flask.png"
                alt="planner"
                width={150}
                height={150}
                className="next-image-fade"
                loading="lazy"
                placeholder="blur"
                blurDataURL="/placeholder-blur.jpg"
                onLoadingComplete={(img) => img.classList.add("loaded")}
              />
            </div>

            <div className="p-5 text-left">
              <h3 className="font-semibold text-lg">
                NEET Exam Preparation Tips
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Discover effective strategies to boost your NEET performance.
              </p>

              <Link
                href="/blog?post=neet-exam-preparation-tips"
                aria-label="Read more about NEET Exam Preparation Tips"
                className="mt-5 w-full border rounded-full py-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition text-black"
              >
                Read More <FiArrowRight />
              </Link>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-xl border overflow-hidden">
            <div className="bg-[#f6e9ae] p-10 flex justify-center">
              <Image
                src="/bulb.png"
                alt="idea"
                width={150}
                height={150}
                className="next-image-fade"
                loading="lazy"
                placeholder="blur"
                blurDataURL="/placeholder-blur.jpg"
                onLoadingComplete={(img) => img.classList.add("loaded")}
              />
            </div>

            <div className="p-5 text-left">
              <h3 className="font-semibold text-lg">
                Top Study Habits for Success
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Build habits that help you stay ahead in your academic journey.
              </p>

              <Link
                href="/blog?post=top-study-habits-for-success"
                aria-label="Read more about Top Study Habits for Success"
                className="mt-5 w-full border rounded-full py-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition text-black"
              >
                Read More <FiArrowRight />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
