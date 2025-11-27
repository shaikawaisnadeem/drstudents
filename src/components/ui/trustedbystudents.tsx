import Image from "next/image";

export default function TrustedByStudents() {
  const items = [
    {
      value: "15 Millions+",
      label: "Happy Students",
      bg: "bg-[#FFF8C5]",
      img: "/reading.png", 
    },
    {
      value: "24000+",
      label: "Mock Tests",
      bg: "bg-[#FFE1E1]",
      img: "/paperpen.png",
    },
    {
      value: "14000+",
      label: "Video Lectures",
      bg: "bg-[#D9EEFF]",
      img: "/readingcomputer.png",
    },
    {
      value: "80000+",
      label: "Practice Papers",
      bg: "bg-[#E6DDFF]",
      img: "/note.png",
    },
  ];

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold">
          A Platform Trusted by Students
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Drstudents aims to transform not just through words, but provide 
          results with numbers!
        </p>

        {/* Big Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className={`${item.bg} rounded-2xl p-6 h-[220px] shadow-md flex flex-col justify-between`}
            >
              <div>
                <h3 className="text-[28px] font-bold">{item.value}</h3>
                <p className="text-gray-700 mt-1">{item.label}</p>
              </div>

              <div className="w-full h-[90px] relative">
                <Image
                  src={item.img}
                  alt={item.label}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <button className="mt-10 px-10 py-3 bg-black text-white rounded-full font-medium hover:bg-black/90 transition">
          Get Started
        </button>

      </div>
    </section>
  );
}
