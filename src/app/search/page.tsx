import TopColleges from "@/components/ui/TopColleges";
import path from "path";
import { promises as fs } from "fs";
import { Metadata } from "next";

async function getColleges(searchParams: { [key: string]: string | string[] | undefined }) {
    const filePath = path.join(process.cwd(), "src", "data", "colleges.json");
    const fileContents = await fs.readFile(filePath, "utf8");
    const colleges = JSON.parse(fileContents);

    const state = typeof searchParams.state === 'string' ? searchParams.state : undefined;
    const stream = typeof searchParams.stream === 'string' ? searchParams.stream : undefined;

    let filtered = colleges;

    if (state && state !== "Select State") {
        filtered = filtered.filter((c: any) => c.state === state);
    }

    if (stream && stream !== "Select Stream") {
        filtered = filtered.filter((c: any) => c.stream === stream);
    }

    return filtered;
}

export async function generateMetadata({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}): Promise<Metadata> {
    const resolvedSearchParams = await searchParams;
    const state = typeof resolvedSearchParams.state === 'string' ? resolvedSearchParams.state : "";
    const stream = typeof resolvedSearchParams.stream === 'string' ? resolvedSearchParams.stream : "";

    if (state && stream) {
        return {
            title: `${state} ${stream} Colleges | DrStudents`,
            description: `Search results for ${stream} colleges in ${state}.`,
        };
    }

    return {
        title: "Search Colleges | DrStudents",
        description: "Find the best medical and engineering colleges in India.",
    };
}

export default async function SearchPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const resolvedSearchParams = await searchParams;
    const colleges = await getColleges(resolvedSearchParams);

    return (
        <div className="min-h-screen bg-white font-poppins py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">Search Results</h1>

                {colleges.length > 0 ? (
                    <TopColleges colleges={colleges} />
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                        <p className="text-xl text-gray-500 font-medium">No colleges found for this selection.</p>
                        <p className="text-gray-400 mt-2">Try adjusting your filters.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
