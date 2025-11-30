import Image from "next/image";
import { notFound } from "next/navigation";
import path from "path";
import { promises as fs } from "fs";
import { Metadata } from "next";

async function getCategory(slug: string) {
    const filePath = path.join(process.cwd(), "src", "data", "examCategories.json");
    const fileContents = await fs.readFile(filePath, "utf8");
    const categories = JSON.parse(fileContents);
    return categories.find((c: any) => c.slug === slug);
}

export async function generateMetadata({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}): Promise<Metadata> {
    const resolvedSearchParams = await searchParams;
    const slug = typeof resolvedSearchParams.cat === 'string' ? resolvedSearchParams.cat : "";

    if (!slug) {
        return {
            title: "Exam Categories | DrStudents",
            description: "Explore various exam categories and resources.",
        };
    }

    const category = await getCategory(slug);

    if (!category) {
        return {
            title: "Category Not Found | DrStudents",
        };
    }

    return {
        title: `${category.title} | DrStudents`,
        description: category.description,
        keywords: [...category.classes, category.title],
    };
}

export default async function ExamPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const resolvedSearchParams = await searchParams;
    const slug = typeof resolvedSearchParams.cat === 'string' ? resolvedSearchParams.cat : "";

    if (!slug) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center font-poppins">
                <h1 className="text-2xl font-semibold text-gray-600">Please select a category to explore.</h1>
            </div>
        );
    }

    const category = await getCategory(slug);

    if (!category) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center font-poppins">
                <h1 className="text-2xl font-semibold text-gray-600">Category not found.</h1>
            </div>
        );
    }

    return (
        <div className="font-poppins min-h-screen bg-gray-50 py-16 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <div className="bg-white rounded-2xl shadow-sm border p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">
                    <div className="flex-1">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            {category.title}
                        </h1>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            {category.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {category.classes.map((cls: string) => (
                                <span key={cls} className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
                                    {cls}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="w-full md:w-[400px] h-[300px] relative rounded-xl overflow-hidden shadow-md">
                        <Image
                            src={category.image}
                            alt={category.title}
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Resources Section */}
                <div className="mt-12">
                    <h2 className="text-2xl font-semibold mb-6">Study Resources</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.resources.map((resource: any) => (
                            <div key={resource.id} className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
                                <div className="h-48 bg-gray-100 relative flex items-center justify-center">
                                    <div className="w-20 h-20 relative">
                                        <Image
                                            src={resource.thumbnail}
                                            alt={resource.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className="absolute top-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                        {resource.type}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-semibold text-lg mb-2 line-clamp-1">{resource.title}</h3>
                                    <p className="text-gray-600 text-sm line-clamp-3">
                                        {resource.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
