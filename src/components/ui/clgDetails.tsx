import React from "react";

export default function CollegeDetails() {
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

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { title: "Founded", value: "1835" },
              { title: "Type", value: "Government" },
              { title: "Courses", value: "MBBS, BDS" },
              { title: "Affiliation", value: "WBUHS" },
              { title: "Contact", value: "033-2265-xxxx" },
            ].map((item, i) => (
              <div key={i} className="border rounded-lg p-4 text-center">
                <p className="text-sm text-gray-500">{item.title}</p>
                <p className="font-semibold mt-1">{item.value}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-semibold mt-10 mb-3">About This College</h2>
          <p className="text-gray-700 leading-[26px] max-w-[90%]">
            Medical College Kolkata is one of India’s oldest and most prestigious
            government medical institutions, offering MBBS, BDS, and postgraduate
            programs. The college provides excellent faculty, facilities, and clinical
            exposure to students.
          </p>

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
                {[
                  { c: "MBBS", d: "5.5 Years", e: "NEET UG" },
                  { c: "BDS", d: "5 Years", e: "NEET UG" },
                  { c: "Nursing", d: "4 Years", e: "State Entrance" },
                ].map((row, i) => (
                  <tr key={i} className="border-b">
                    <td className="py-3 px-5">{row.c}</td>
                    <td className="py-3 px-5">{row.d}</td>
                    <td className="py-3 px-5">{row.e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

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
                {[
                  { c: "General", d: "5.5 Years", r: "NEET UG", m: "674" },
                  { c: "BDS", d: "5 Years", r: "NEET UG", m: "658" },
                ].map((row, i) => (
                  <tr key={i} className="border-b">
                    <td className="py-3 px-5">{row.c}</td>
                    <td className="py-3 px-5">{row.d}</td>
                    <td className="py-3 px-5">{row.r}</td>
                    <td className="py-3 px-5">{row.m}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

        <div className="hidden lg:flex items-center justify-center border rounded-xl bg-gray-100 text-gray-500">
          ADS/COLLEGE’S
        </div>

      </div>
    </div>
  );
}
