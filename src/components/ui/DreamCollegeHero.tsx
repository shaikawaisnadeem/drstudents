"use client";

import Image from "next/image";
import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";

export default function CollegeHeroSection() {
  const bgRef = useReveal();
  const textRef = useReveal();
  const imgRef = useReveal();

  return (
    <section className="relative w-full overflow-hidden bg-[#0E1521] text-white font-poppins">

      <div ref={bgRef} className="absolute inset-0 reveal fade-in">
        <Image
          src="/topcolleges-bg.png"
          alt="bg"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-36 grid grid-cols-1 md:grid-cols-2 gap-10">

        <div ref={textRef} className="reveal-group">
          <span className="bg-white text-black font-semibold px-4 py-1 rounded-full text-sm inline-block mb-4">
            #1 TRUSTED SITE
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Find Your Dream <br />
            Medical & Engineering <br />
            College
          </h1>

          <p className="text-gray-200 mt-4 max-w-md leading-relaxed">
            State-wise Guidance, Verified Colleges & Expert Mentorship
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/top-colleges"
              className="bg-white text-black px-6 py-3 rounded-full font-medium shadow-md hover:bg-gray-200 transition"
            >
              Explore Colleges
            </Link>
          </div>
        </div>
        <div ref={imgRef} className="flex justify-center md:justify-end md:items-start pt-4 reveal scale-in">
          <Image
            src="/degreecap.png"
            alt="graduation"
            width={600}
            priority
            height={400}
            className="opacity-90 object-contain w-full max-w-xs md:max-w-sm"
          />
        </div>
      </div>
      <div
        className="absolute bottom-[-90px] left-0 w-full h-[180px] bg-white rounded-t-[50%] shadow-inner"
      >
      </div>

    </section>
  );
}