import CollegeDetails from "@/components/ui/clgDetails";
import path from "path";
import { promises as fs } from "fs";
import { notFound } from "next/navigation";

async function getCollege(id: string) {
    const filePath = path.join(process.cwd(), "src", "data", "colleges.json");
    const fileContents = await fs.readFile(filePath, "utf8");
    const colleges = JSON.parse(fileContents);
    return colleges.find((c: any) => c.id === id);
}

export default async function CollegeDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const college = await getCollege(resolvedParams.id);

    if (!college) {
        notFound();
    }

    return (
        <div className="font-poppins bg-gray-100 min-h-screen">
            <CollegeDetails data={college} />
        </div>
    );
}
