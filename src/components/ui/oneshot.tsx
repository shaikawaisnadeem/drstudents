import VideoCard from "./VideoCard";

export default function OneShots() {
  return (
    <section className="my-16 px-6">
      <h2 className="text-3xl font-semibold mb-6">
        Class 11 NEET One Shot’s
      </h2>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>

      <div className="text-center mt-6">
        <button className="bg-black text-white px-8 py-2 rounded-lg">
          View All
        </button>
      </div>
    </section>
  );
}
