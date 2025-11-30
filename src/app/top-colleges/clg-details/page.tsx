import CollegeDetails from "@/components/ui/clgDetails";
import { notFound } from "next/navigation";
import path from "path";
import { promises as fs } from "fs";

async function getCollege(id: string) {
  const filePath = path.join(process.cwd(), "src", "data", "colleges.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  const colleges = JSON.parse(fileContents);
  return colleges.find((c: any) => c.id.toString() === id);
}

export default async function CollegeDetailsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const id = typeof resolvedSearchParams.id === 'string' ? resolvedSearchParams.id : "";

  if (!id) {
    notFound();
  }

  const college = await getCollege(id);

  if (!college) {
    notFound();
  }

  // Map the new JSON structure to the old structure expected by CollegeDetails component
  const mappedData = {
    ...college,
    founded: String(college.details.founded), // Ensure string
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
