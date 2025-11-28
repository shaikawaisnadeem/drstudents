import ChooseYourPlan from "@/components/ui/chooseyourplan";
import WhyMembership from "@/components/ui/whymembership";
import WhatStudentsSay from "@/components/ui/whatstudentssay";
import FAQ from "@/components/ui/faq";
import StudentAbroad from "@/components/ui/studentsabroad";
import Link from "next/link";
import MembershipPromoCTA from "@/components/ui/membershipPromoCTA";

export default function MembershipPage() {
  return (
    <div className="font-poppins">

      <div className="relative w-full h-[65vh] md:h-[70vh] flex items-center justify-center text-white font-poppins">


        <div className="absolute inset-0 bg-black/90"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl md:text-5xl font-bold">
            Join Our Membership
          </h1>

          <p className="text-lg md:text-xl mt-3 opacity-90">
            Meet the Premium
          </p>

          <Link
            href="/join-our-mentorship"
            className="inline-block mt-6 px-8 py-3 text-white border border-white rounded-full font-medium hover:bg-white hover:text-black transition"
          >
            Join Mentorship Now
          </Link>
        </div>
      </div>

      <ChooseYourPlan />
      <WhyMembership />
      <WhatStudentsSay />
      <StudentAbroad />
      <FAQ />
      <MembershipPromoCTA />
    </div>
  );
}
