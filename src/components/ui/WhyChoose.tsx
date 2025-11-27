import { FaGraduationCap, FaUniversity, FaPlane, FaComments } from "react-icons/fa";
import WhyChooseDoctor from "./WhyChooseDoctor";
export default function WhyChoose() {
  return (
    <section className="py-16 font-poppins">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h1 className="text-3xl md:text-4xl font-semibold mb-3">
          Why Choose DrStudents?
        </h1>

        <p className="text-gray-600 mb-12 text-lg">
          Trusted mentors and verified resources for your academic success.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-6">

          <WhyChooseDoctor
            icon={FaGraduationCap}
            title="Counselling"
            subtitle="Learn from experienced mentors who've guided 100+ students."
          />

          <WhyChooseDoctor
            icon={FaUniversity}
            title="Verified Colleges"
            subtitle="Access authentic college data with transparent details."
          />

          <WhyChooseDoctor
            icon={FaPlane}
            title="Abroad Consultancy"
            subtitle="Get personalized insights for your region and course."
          />

          <WhyChooseDoctor
            icon={FaComments}
            title="Online Test-Series"
            subtitle="We’re here for your queries—anytime, anywhere."
          />

        </div>

      </div>
    </section>
  );
}
