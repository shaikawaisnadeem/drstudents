import CourseCard from "./CourseCard";
import path from "path";
import { promises as fs } from "fs";

async function getCourses() {
  const filePath = path.join(process.cwd(), "src", "data", "courses.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  const courses = JSON.parse(fileContents);
  return courses.filter((c: any) => c.category === "neet-class-11").slice(0, 6);
}

export default async function CoursesSection() {
  const courses = await getCourses();

  return (
    <section className="max-w-7xl mx-auto my-16 px-6">
      <h2 className="text-3xl font-semibold mb-8 text-center md:text-left">
        Class 11 NEET Courses
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
        {courses.map((course: any) => (
          <CourseCard key={course.id} data={course} />
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
