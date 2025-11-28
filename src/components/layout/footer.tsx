import Image from "next/image";
import { QuickLinks, MentorshipLinks, SupportLinks } from "../utils/navlink";

export const Footer = () => {
  return (
    <footer className="bg-[#272728] text-white font-poppins pt-16 pb-10">

      <div className="max-w-[1350px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-12">

        <div className="flex flex-col gap-3">
          <div className="flex items-center">
            <Image src="/drstudents.png" width={70} priority  height={70} alt="drstudents-logo" />
            <h2 className="text-2xl font-semibold ml-3">Drstudents</h2>
          </div>

          <p className="text-gray-300 text-[15px] max-w-[240px] leading-6 font-outfit  mt-[-22px] ml-[12px]">
            Guiding students beyond exams.
          </p>
        </div>

        <QuickLinks />

        <MentorshipLinks />

        <SupportLinks />

      </div>

      <div className="mt-12 border-t border-white/40 pt-6 text-center w-[90%] mx-auto">
        <p className="text-white text-md font-outfit">
          © {new Date().getFullYear()} DrStudents EduServices. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
};
