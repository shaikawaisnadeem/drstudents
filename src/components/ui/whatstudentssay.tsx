export default function WhatStudentsSay() {
  const testimonials = [
    {
      text: "“DrStudents guided me from confusion to confidence in my career decisions.”",
      name: "Aarav S.",
    },
    {
      text: "“The mentor calls and data insights gave me a real edge during admissions.”",
      name: "Sneha K.",
    },
    {
      text: "“I felt fully supported—expert strategies and instant help when I needed it most.”",
      name: "Rohan M.",
    },
  ];

  return (
    <div className="py-16 font-poppins">
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-12">
        What Our Students Say
      </h2>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">

        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm text-center flex flex-col items-center"
          >
            <div className="w-12 h-12 rounded-full bg-gray-300 mb-4"></div>

            <p className="text-gray-700 text-[15px] leading-6 mb-4 max-w-[230px]">
              {item.text}
            </p>

            <span className="font-semibold text-[14px]">{item.name}</span>
          </div>
        ))}

      </div>
    </div>
  );
}
