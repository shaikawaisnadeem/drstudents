import React from "react";
import Link from "next/link";
import Joincommunitybtn from "../ui/joincommunitybtn";

const navlinks = [
  { name: "Home", href: "/" },
  { name: "Top Colleges", href: "/top-colleges" },
  { name: "Study With Us", href: "/study-with-us" },
  { name: "Test Series", href: "/test-series" },
  { name: "Abroad", href: "/abroad" },
];

export function NavLinks({ vertical = false, compact = false, activePath = "", onLinkClick }: { vertical?: boolean; compact?: boolean; activePath?: string; onLinkClick?: () => void }) {
  const baseClasses = `text-[18px] font-medium bg-transparent border-0 p-0 cursor-pointer block transition-colors`;
  const containerClasses = vertical
    ? `flex flex-col gap-4 w-full items-start ${compact ? 'text-sm' : 'text-base'}`
    : `flex gap-6 items-center ${compact ? 'text-sm' : 'text-lg'}`;

  return (
    <div className={containerClasses}>
      {navlinks.map((link) => {
        const isActive = activePath === link.href || (link.href !== "/" && activePath.startsWith(link.href));
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`${baseClasses} ${isActive ? "text-gray-400" : "text-white hover:text-gray-300"}`}
            onClick={onLinkClick}
          >
            {link.name}
          </Link>
        );
      })}
      <div className={vertical ? 'w-full mt-2' : ''} onClick={onLinkClick}>
        <Joincommunitybtn />
      </div>
    </div>
  );
}

export function QuickLinks() {
  const quick = [
    { name: "Home", href: "/" },
    { name: "Top Colleges", href: "/top-colleges" },
    { name: "Test Series", href: "/test-series" },
    { name: "Study With Us", href: "/study-with-us" },
    { name: "Abroad", href: "/abroad" },
  ];

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-lg font-semibold mb-2">Quick Links</h3>

      {quick.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-gray-300 hover:text-white text-md text-left cursor-pointer p-0 bg-transparent border-0 font-outfit block"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export function MentorshipLinks() {
  const items = [
    { name: "Join Mentorship", href: "/join-our-mentorship" },
    { name: "Study With Us", href: "/study-with-us" },
  ];

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-lg font-semibold mb-2">Mentorship & Services</h3>

      {items.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-gray-300 hover:text-white text-md text-left cursor-pointer p-0 bg-transparent border-0 font-outfit block"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export function SupportLinks() {
  const support = [
    { name: "support@drstudents.com", href: "mailto:support@drstudents.com" },
    { name: "+91 98765 43210", href: "tel:+919876543210" },
    { name: "Hyderabad, India", href: "#" },
  ];

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-lg font-semibold mb-2">Support</h3>

      {support.map((s) => (
        <Link
          key={s.name}
          href={s.href}
          className="text-gray-300 hover:text-white text-md text-left cursor-pointer p-0 bg-transparent border-0 font-outfit block"
        >
          {s.name}
        </Link>
      ))}
    </div>
  );
}
