"use client";

import React from "react";
import { useReveal } from "@/hooks/useReveal";

interface CollegeData {
  id: string;
  name: string;
  location: string;
  type: string;
  rating: string;
  views: string;
  founded: string;
  affiliation: string;
  contact: string;
  description: string;
  courses: Array<{ name: string; duration: string; exam: string }>;
  cutoff: Array<{ category: string; duration: string; round: string; marks: string }>;
  [key: string]: any;
}

export default function CollegeDetails({ data }: { data: CollegeData }) {
  const highlightsRef = useReveal();
  const aboutRef = useReveal();
  const coursesRef = useReveal();
  const cutoffRef = useReveal();
  const sidebarRef = useReveal();

  return (
    <div className="w-full px-6 md:px-16 py-10 font-poppins">

      <div className="flex gap-3 overflow-x-auto py-3 sticky top-0 bg-white z-20 border-b pb-4 scrollbar-hide">
        {[
          "Info", "Cut Off", "Courses & Fees", "Admission", "Reviews",
          "Placements", "Results", "Gallery", "Infrastructure",
          "Scholarship", "Ranking"
        ].map((item, i) => (
          <button
            key={i}
            className="px-4 py-2 bg-black text-white text-sm rounded-full whitespace-nowrap hover:bg-gray-800 transition"
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">

        <div className="col-span-2">
          <h2 className="text-3xl font-semibold mb-4">Key Highlights</h2>

          <div ref={highlightsRef} className="grid grid-cols-2 md:grid-cols-5 gap-3 reveal-group">
            {[
              { title: "Founded", value: data.founded },
              { title: "Type", value: data.type },
              { title: "Courses", value: data.courses?.map(c => c.name).join(", ") },
              { title: "Affiliation", value: data.affiliation },
              { title: "Contact", value: data.contact },
            ].map((item, i) => (
              <div key={i} className="border rounded-lg p-4 text-center">
                <p className="text-sm text-gray-500">{item.title}</p>
                <p className="font-semibold mt-1">{item.value}</p>
              </div>
            ))}
          </div>

          <div ref={aboutRef} className="reveal fade-up">
            <h2 className="text-3xl font-semibold mt-10 mb-3">About This College</h2>
            <p className="text-gray-700 leading-[26px] max-w-[90%]">
              {data.description}
            </p>
          </div>

          <div ref={coursesRef} className="reveal fade-up">
            <h2 className="text-3xl font-semibold mt-12 mb-4">Course Offered</h2>

            <div className="w-full border rounded-xl overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-5">Course</th>
                    <th className="py-3 px-5">Duration</th>
                    <th className="py-3 px-5">Entrance Exam</th>
                  </tr>
                </thead>
                <tbody>
                  {data.courses?.map((row, i) => (
                    <tr key={i} className="border-b">
                      <td className="py-3 px-5">{row.name}</td>
                      <td className="py-3 px-5">{row.duration}</td>
                      <td className="py-3 px-5">{row.exam}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div ref={cutoffRef} className="reveal fade-up">
            <h2 className="text-3xl font-semibold mt-12 mb-4">Cutoff</h2>

            <div className="w-full border rounded-xl overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-5">Category</th>
                    <th className="py-3 px-5">Duration</th>
                    <th className="py-3 px-5">Round 2</th>
                    <th className="py-3 px-5">Mop-Up</th>
                  </tr>
                </thead>
                <tbody>
                  {data.cutoff?.map((row, i) => (
                    <tr key={i} className="border-b">
                      <td className="py-3 px-5">{row.category}</td>
                      <td className="py-3 px-5">{row.duration}</td>
                      <td className="py-3 px-5">{row.round}</td>
                      <td className="py-3 px-5">{row.marks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        <div ref={sidebarRef} className="hidden lg:flex items-center justify-center border rounded-xl bg-gray-100 text-gray-500 reveal fade-in">
          ADS/COLLEGE’S
        </div>

      </div>
    </div>
  );
}
