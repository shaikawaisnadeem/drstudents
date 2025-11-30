import CollegeDetails from "@/components/ui/clgDetails";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import collegesData from "@/data/colleges.json";

async function getCollege(id: string) {
    const colleges = collegesData;
    return colleges.find((c: any) => c.id === id);
}

export async function generateMetadata({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}): Promise<Metadata> {
    const resolvedSearchParams = await searchParams;
    const id = typeof resolvedSearchParams.clg === 'string' ? resolvedSearchParams.clg : "";

    if (!id) return { title: "College Not Found | DRStudents" };

    const college = await getCollege(id);

    if (!college) return { title: "College Not Found | DRStudents" };

    return {
        title: `${college.name} | DRStudents`,
        description: college.description,
        keywords: [college.name, college.location, college.stream, "Colleges", "Admission", "Cutoff"],
    };
}

export default async function CollegePage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const resolvedSearchParams = await searchParams;
    const id = typeof resolvedSearchParams.clg === 'string' ? resolvedSearchParams.clg : "";

    if (!id) {
        notFound();
    }

    const college = await getCollege(id);

    if (!college) {
        notFound();
    }

    // Map the JSON structure to the structure expected by CollegeDetails component
    const mappedData = {
        ...college,
        founded: String(college.details.founded),
        courses: college.details.courses.map((c: string) => ({
            name: c,
            duration: c === "MBBS" ? "5.5 Years" : (c === "BDS" ? "5 Years" : "4 Years"),
            exam: college.stream === "Engineering" ? "JEE/BITSAT" : "NEET"
        })),
        cutoff: college.details.cutoff || [],
        description: college.description,
        contact: college.details.contact,
        affiliation: college.details.affiliation
    };

    return <CollegeDetails data={mappedData} />;
}
