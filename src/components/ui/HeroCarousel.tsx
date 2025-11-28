"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Slide {
  title: string;
  subtitle: string;
  image: string;
}

const slides: Slide[] = [
  {
    title: "Learn Smarter, Grow Faster",
    subtitle: "Your learning, your pace — guided by experts who care about your success.",
    image: "/study-hero-1.jpg",
  },
  {
    title: "Master Every Subject With Confidence",
    subtitle: "Structured courses & expert-led mentoring for all exam categories.",
    image: "/study-hero-2.jpg",
  },
  {
    title: "India’s Most Trusted Study Companion",
    subtitle: "Join millions of students learning smarter every day.",
    image: "/study-hero-3.jpg",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((index + 1) % slides.length);
  const prevSlide = () =>
    setIndex((index - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden font-poppins">

      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === i ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* <Image
            src={slide.image}
            alt="hero"
            fill
            priority
            className="object-cover scale-105 brightness-[0.65] mix-blend-overlay"
          /> */}

          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
        </div>
      ))}

      <div className="relative z-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          {slides[index].title}
        </h1>
        <p className="text-lg md:text-xl mt-3 text-white/90 drop-shadow">
          {slides[index].subtitle}
        </p>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-6 z-30 p-3 bg-black/40 backdrop-blur-md rounded-full hover:bg-black/70 transition"
      >
        <FiChevronLeft size={28} className="text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 z-30 p-3 bg-black/40 backdrop-blur-md rounded-full hover:bg-black/70 transition"
      >
        <FiChevronRight size={28} className="text-white" />
      </button>

      <div className="absolute bottom-6 z-30 flex gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full cursor-pointer transition ${
              index === i ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
