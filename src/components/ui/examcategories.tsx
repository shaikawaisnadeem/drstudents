"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { useReveal } from "@/hooks/useReveal";

export default function ExamCategories() {
  const revealRef = useReveal();

  const categories = [
    {
      title: "NEET",
      slug: "neet",
      img: "/doctorques.jpg",
      classes: ["Class 11", "Class 12", "Dropper"],
    },
    {
      title: "IIT JEE",
      slug: "iit-jee",
      img: "/iit.jpg",
      classes: ["Class 11", "Class 12", "Dropper"],
    },
    {
      title: "UPSC",
      slug: "upsc",
      img: "/upsc.jpg",
      classes: ["Class 11", "Class 12", "Dropper"],
    },
  ];

  return (
    <section className="py-20 bg-black text-white font-poppins">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Exam Categories
        </h2>
        <p className="text-gray-300 text-center mt-2">
          Scroll down to find the one you are preparing for
        </p>

        <div ref={revealRef} className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center reveal-group">

          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-2xl shadow-lg w-[340px] h-[260px] p-6 flex gap-4"
            >
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">{cat.title}</h3>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {cat.classes.map((cls) => (
                      <button
                        key={cls}
                        className="px-4 py-1 border rounded-full text-sm hover:bg-gray-100"
                      >
                        {cls}
                      </button>
                    ))}
                  </div>
                </div>
                <Link
                  href={`/exam?cat=${cat.slug}`}
                  className="flex items-center gap-2 text-sm mt-2 hover:underline"
                >
                  Explore Category <FiArrowRight size={16} />
                </Link>
              </div>

              <div className="w-[130px] h-full relative rounded-xl overflow-hidden">
                <Image
                  src={cat.img}
                  alt={cat.title}
                  fill
                  className="object-cover next-image-fade"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="/placeholder-blur.jpg"
                  onLoadingComplete={(img) => img.classList.add("loaded")}
                />
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
