import Image from "next/image";
import SelectState from "@/components/ui/SelectState";
import TopColleges from "@/components/ui/TopColleges";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import collegesData from "@/data/colleges.json";

export const metadata: Metadata = {
  title: "Study Abroad Colleges | DRStudents",
  description: "Find top medical and engineering colleges abroad. Verified data, fees, and admission details.",
};

async function getColleges(searchParams: { [key: string]: string | string[] | undefined }) {
  const colleges = collegesData;

  const state = typeof searchParams.state === 'string' ? searchParams.state : undefined;
  const stream = typeof searchParams.stream === 'string' ? searchParams.stream : undefined;
  const page = typeof searchParams.page === 'string' ? parseInt(searchParams.page) : 1;
  const pageSize = 8;

  let filtered = colleges;

  // Filter logic:
  // If state is selected, filter by that state (even if it's an Indian state, as per current SelectState behavior).
  // If NO state is selected, default to showing "Abroad" type colleges OR just all colleges?
  // Given this is the "Abroad" page, it makes sense to show "Abroad" colleges by default if no specific filter is applied.
  // However, the SelectState component has Indian states. If the user selects "Maharashtra", they expect Maharashtra colleges.
  // But if they are on the "Abroad" page, maybe they expect Abroad colleges?
  // The user request was "add pagination in abroad thing as well".
  // I will implement standard filtering. If state is present, use it.
  // If NO state is present, I will filter by `type === "Abroad"` to make the page relevant.

  if (state && state !== "Select State") {
    filtered = filtered.filter((c: any) => c.state === state);
  } else if (!state || state === "Select State") {
    // Default to Abroad colleges if no state selected
    filtered = filtered.filter((c: any) => c.type === "Abroad");
  }

  if (stream && stream !== "Select Stream") {
    filtered = filtered.filter((c: any) => c.stream === stream);
  }

  const totalColleges = filtered.length;
  const totalPages = Math.ceil(totalColleges / pageSize);

  // Ensure page is within valid range
  // If no results (e.g. filtered list is empty), page 1 is valid (empty list).
  if (page < 1) return { paginatedColleges: [], totalPages, currentPage: 1 };
  if (page > totalPages && totalPages > 0) notFound();

  const startIndex = (page - 1) * pageSize;
  const paginatedColleges = filtered.slice(startIndex, startIndex + pageSize);

  return { paginatedColleges, totalPages, currentPage: page };
}

export default async function AbroadHero({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const { paginatedColleges, totalPages, currentPage } = await getColleges(resolvedSearchParams);

  const state = typeof resolvedSearchParams.state === 'string' ? resolvedSearchParams.state : undefined;
  const title = state && state !== "Select State" ? `Top Colleges In ${state}` : "Top Colleges Abroad";

  return (
    <section className="relative w-full min-h-screen bg-white font-poppins">
      <div
        className="relative w-full min-h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/abroad-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 text-white">

          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Ready to Apply Aboard <br /> Colleges?
            </h1>

            <p className="mt-4 text-gray-200 max-w-md">
              Explore verified medical and engineering colleges by state and stream.
            </p>

            <div className="mt-8">
              <SelectState />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <Image
              src="/earth.png"
              width={350}
              height={350}
              alt="Globe"
              priority
              className="drop-shadow-xl"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <TopColleges
          colleges={paginatedColleges}
          currentPage={currentPage}
          totalPages={totalPages}
          title={title}
        />
      </div>
    </section>
  );
}
