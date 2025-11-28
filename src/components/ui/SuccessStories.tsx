import StudentSuccessCard from "./StudentSuccessCard";

export default function SuccessStories() {
  const stories = [
    {
      name: "Akash",
      course: "MBBS, Telangana",
      message: "DrStudents helped me achieve my medical college dream.",
    },
    {
      name: "Shruti",
      course: "BDS, Maharashtra",
      message: "The mentorship was invaluable in my preparation.",
    },
    {
      name: "Rahul",
      course: "B.Tech, Karnataka",
      message: "Thanks to their guidance, I aced my entrance exam!",
    },
  ];

  return (
    <section className="w-full py-16 bg-white font-poppins">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold">
          Success Stories From Our Students
        </h2>
        <p className="text-gray-600 mt-2 mb-12">
          Real students, real results – guided by DrStudents mentors.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {stories.map((story, i) => (
            <StudentSuccessCard
              key={i}
              name={story.name}
              course={story.course}
              message={story.message}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
