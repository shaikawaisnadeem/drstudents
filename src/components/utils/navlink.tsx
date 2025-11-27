"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Joincommunitybtn from "../ui/joincommunitybtn";

const navlinks = [
  { name: "Home", href: "/" },
  { name: "Top Colleges", href: "/top-colleges" },
  // { name: "Medical", href: "/medical" },
  { name: "Study With Us", href: "/study-with-us" },
  { name: "Test Series", href: "/test-series" },
  { name: "Abroad", href: "/abroad" },
];

export function NavLinks({ vertical = false, compact = false }: { vertical?: boolean; compact?: boolean }) {
  const router = useRouter();
  // When vertical is true we stack links for mobile drawers
  const baseClasses = `text-[18px] font-medium bg-transparent border-0 p-0 cursor-pointer`;
  const containerClasses = vertical
    ? `flex flex-col gap-4 w-full items-start ${compact ? 'text-sm' : 'text-base'}`
    : `flex gap-6 items-center ${compact ? 'text-sm' : 'text-lg'}`;

  return (
    <div className={containerClasses}>
      {navlinks.map((link) => (
        <button
          key={link.name}
          onClick={() => router.push(link.href)}
          className={baseClasses}
        >
          {link.name}
        </button>
      ))}
      {/* keep CTA button responsive */}
      <div className={vertical ? 'w-full mt-2' : ''}>
        <Joincommunitybtn />
      </div>
    </div>
  );
}

export function QuickLinks() {
  const router = useRouter();

  const quick = [
    { name: "Home", href: "/" },
    { name: "Top Colleges", href: "/top-colleges" },
    // { name: "Medical", href: "/medical" },
    { name: "Engineering", href: "/engineering" },
    { name: "Abroad", href: "/abroad" },
    { name: "Exams", href: "/exams" },
    { name: "Blogs", href: "/blogs" },
  ];

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-lg font-semibold mb-2">Quick Links</h3>

      {quick.map((item) => (
        <button
          key={item.name}
          onClick={() => router.push(item.href)}
          className="text-gray-300 hover:text-white text-md text-left cursor-pointer p-0 bg-transparent border-0 font-outfit"
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export function MentorshipLinks() {
  const router = useRouter();

  const items = [
    { name: "Join Mentorship", href: "/join-our-mentorship" },
    { name: "Our Consultancy", href: "/consultancy" },
    { name: "Study With Us", href: "/study-with-us" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-lg font-semibold mb-2">Mentorship & Services</h3>

      {items.map((item) => (
        <button
          key={item.name}
          onClick={() => router.push(item.href)}
          className="text-gray-300 hover:text-white text-md text-left cursor-pointer p-0 bg-transparent border-0 font-outfit"
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export function SupportLinks() {
  const router = useRouter();

  const support = [
    { name: "support@drstudents.com", href: "mailto:support@drstudents.com" },
    { name: "+91 98765 43210", href: "tel:+919876543210" },
    { name: "Hyderabad, India", href: "#" },
  ];

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-lg font-semibold mb-2">Support</h3>

      {support.map((s) => (
        <button
          key={s.name}
          onClick={() => s.href !== "#" && router.push(s.href)}
          className="text-gray-300 hover:text-white text-md text-left cursor-pointer p-0 bg-transparent border-0 font-outfit"
        >
          {s.name}
        </button>
      ))}
    </div>
  );
}
