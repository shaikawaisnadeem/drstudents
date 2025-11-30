"use client";
import { useReveal } from "@/hooks/useReveal";

export default function MembershipPromoCTA() {
  const revealRef = useReveal();

  return (
    <div ref={revealRef} className="bg-white text-black text-center py-16 px-6 reveal fade-up">
      <h3 className="text-xl md:text-2xl font-semibold mb-2">
        Start Your Journey with DrStudents Membership.
      </h3>
      <p className="text-gray-700 text-sm md:text-[15px] mb-6 font-outfit">
        Join now and connect with verified mentors.
      </p>

      <button className="px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-black/90 transition">
        Get Membership
      </button>
    </div>
  )
}
