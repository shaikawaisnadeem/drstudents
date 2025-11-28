import { AiFillYoutube } from "react-icons/ai";

export default function YoutubeCTA() {
  return (
    <section className="py-16 bg-white font-poppins text-center">
      <h2 className="text-2xl md:text-3xl font-semibold">
        Join The DrStudents Family, Today!
      </h2>

      <p className="text-gray-600 mt-2">
        Explore our 130+ YouTube Channels and subscribe to get access to quality education for free.
      </p>

      <div className="flex justify-center mt-10">
        <div className="bg-gradient-to-r from-gray-800 to-gray-600 p-10 rounded-2xl shadow-lg flex flex-col items-center w-[260px] md:w-[320px]">
          <AiFillYoutube className="text-red-600" size={70} />
          <p className="text-white mt-2 text-lg font-semibold tracking-wide">
            Drstudents
          </p>
        </div>
      </div>

      <div className="mt-6">
        <button className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-black/90 transition">
          Get Started
        </button>
      </div>
    </section>
  );
}
