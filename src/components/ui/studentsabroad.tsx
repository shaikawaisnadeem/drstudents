"use client";
import { useReveal } from "@/hooks/useReveal";

export default function StudentAbroad() {
  const revealRef = useReveal();

  const students = [
    {
      text: `"The DrStudents team made my admission process seamless, from application to visa."`,
      name: "Arun R.",
      country: "Russia",
    },
    {
      text: `"The counseling was personalized and honest — I felt in safe hands throughout."`,
      name: "Rahul S.",
      country: "Philippines",
    },
    {
      text: `"Thanks to the scholarships advice, studying in Georgia became financially possible for me."`,
      name: "Fatima B.",
      country: "Georgia",
    },
  ];

  return (
    <div className="w-full bg-black text-white py-16 font-poppins">

      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-14">
        Our Students Abroad.
      </h2>

      <div ref={revealRef} className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 reveal-group">

        {students.map((item, index) => (
          <div
            key={index}
            className="bg-transparent border border-gray-700 rounded-xl p-10 text-center flex flex-col items-center"
          >
            <div className="w-12 h-12 bg-gray-400 rounded-full mb-5"></div>

            <p className="text-gray-200 text-[15px] leading-6 mb-4 max-w-[260px] italic">
              {item.text}
            </p>

            <span className="text-gray-400 text-sm">
              {item.name}, {item.country}
            </span>
          </div>
        ))}

      </div>
    </div>
  );
}
