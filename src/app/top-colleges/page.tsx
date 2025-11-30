import SelectState from "@/components/ui/SelectState";
import TopColleges from "@/components/ui/TopColleges";
import Image from "next/image";
import path from "path";
import { promises as fs } from "fs";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const state = typeof resolvedSearchParams.state === 'string' ? resolvedSearchParams.state : undefined;
  const stream = typeof resolvedSearchParams.stream === 'string' ? resolvedSearchParams.stream : undefined;

  if (state) {
    return {
      title: `Top Colleges in ${state} – DRStudents`,
      description: `Explore top ${stream || ''} colleges in ${state}. Verified data, insights, cutoffs.`,
    };
  }

  return {
    title: "Top Colleges – DRStudents",
    description: "Explore top colleges with verified data, cutoffs, and insights.",
  };
}

async function getColleges(searchParams: { [key: string]: string | string[] | undefined }) {
  const filePath = path.join(process.cwd(), "src", "data", "colleges.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  const colleges = JSON.parse(fileContents);

  const state = typeof searchParams.state === 'string' ? searchParams.state : undefined;
  const stream = typeof searchParams.stream === 'string' ? searchParams.stream : undefined;
  const page = typeof searchParams.page === 'string' ? parseInt(searchParams.page) : 1;
  const pageSize = 8;

  let filtered = colleges;

  if (state && state !== "Select State") {
    filtered = filtered.filter((c: any) => c.state === state);
  }

  if (stream && stream !== "Select Stream") {
    filtered = filtered.filter((c: any) => c.stream === stream);
  }

  const totalColleges = filtered.length;
  const totalPages = Math.ceil(totalColleges / pageSize);

  // Ensure page is within valid range
  if (page < 1) return { paginatedColleges: [], totalPages, currentPage: 1 };
  if (page > totalPages && totalPages > 0) notFound();

  const startIndex = (page - 1) * pageSize;
  const paginatedColleges = filtered.slice(startIndex, startIndex + pageSize);

  return { paginatedColleges, totalPages, currentPage: page };
}

export default async function TopCollege({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const { paginatedColleges, totalPages, currentPage } = await getColleges(resolvedSearchParams);

  const state = typeof resolvedSearchParams.state === 'string' ? resolvedSearchParams.state : undefined;
  const title = state && state !== "Select State" ? `Top College’s In ${state}` : "Top College’s In Your Location";

  return (
    <div className="font-poppins">

      <div className="w-full h-[80vh] bg-black relative">

        <div className="absolute inset-0">
          <Image
            src="/topcolleges-bg.png"
            alt="college-bg"
            fill
            priority
            className="w-full h-full object-cover opacity-40"
            placeholder="blur"
            blurDataURL="/topcolleges-bg.png"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-semibold mb-4">
            Find Top Colleges Across India
          </h1>

          <p className="text-gray-200 text-sm md:text-[17px] mb-10 max-w-[600px]">
            Explore verified medical and engineering colleges by state and stream.
          </p>

          <SelectState />
        </div>
      </div>

      <TopColleges
        colleges={paginatedColleges}
        currentPage={currentPage}
        totalPages={totalPages}
        title={title}
      />
    </div>
  );
}
