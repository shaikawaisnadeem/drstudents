import VideoCard from "./VideoCard";
import path from "path";
import { promises as fs } from "fs";

async function getOneShots() {
  const filePath = path.join(process.cwd(), "src", "data", "oneshots.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  const oneshots = JSON.parse(fileContents);
  return oneshots.slice(0, 6); // Show up to 6 items
}

export default async function OneShots() {
  const oneshots = await getOneShots();

  return (
    <section className="max-w-7xl mx-auto my-16 px-6">
      <h2 className="text-3xl font-semibold mb-8 text-center md:text-left">
        Class 11 NEET One Shot’s
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
        {oneshots.map((shot: any) => (
          <VideoCard key={shot.id} data={shot} />
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition">
          View All
        </button>
      </div>
    </section>
  );
}
