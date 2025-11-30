"use client";
import { useReveal } from "@/hooks/useReveal";

export default function FAQ() {
  const revealRef = useReveal();

  const faqs = [
    {
      q: "How long is the membership valid?",
      a: "One admission cycle (NEET/JEE 2025).",
    },
    {
      q: "Can I upgrade my plan?",
      a: "Yes, you can upgrade at any time for added features.",
    },
    {
      q: "Are mentors qualified?",
      a: "All mentors are verified experts with proven track records.",
    },
    {
      q: "Is there a refund policy?",
      a: "Refunds are available within 7 days of purchase—no questions asked.",
    },
  ];

  return (
    <div className="w-full font-poppins">

      <div className="bg-black text-white py-16 px-6">
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-10">
          Frequently Asked Questions
        </h2>

        <div ref={revealRef} className="max-w-[900px] mx-auto space-y-8 reveal-group">
          {faqs.map((item, i) => (
            <div key={i} className="border-b border-gray-700 pb-5">
              <h3 className="text-lg font-semibold mb-1">{item.q}</h3>
              <p className="text-gray-300 text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </div>



    </div>
  );
}
