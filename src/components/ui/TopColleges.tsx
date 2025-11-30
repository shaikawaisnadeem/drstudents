"use client";

import ClgCard from "@/components/ui/clgcard";
import PaginationControls from "@/components/ui/PaginationControls";
import { useReveal } from "@/hooks/useReveal";

interface College {
  id: string;
  name: string;
  location: string;
  type: string;
  rating: string;
  views: string;
  [key: string]: any;
}

export default function TopColleges({
  colleges,
  currentPage,
  totalPages,
  title,
}: {
  colleges: College[];
  currentPage: number;
  totalPages: number;
  title: string;
}) {
  const revealRef = useReveal();

  return (
    <div className="w-full py-16 px-6 md:px-16 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <h1 className="text-3xl md:text-4xl font-poppins font-semibold text-center md:text-left">
          {title}
        </h1>

        <PaginationControls currentPage={currentPage} totalPages={totalPages} />
      </div>

      <div ref={revealRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center sm:place-items-stretch reveal-group">
        {colleges.map((college) => (
          <ClgCard key={college.id} data={college} />
        ))}
      </div>
    </div>
  );
}