import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { FiUser, FiCalendar, FiPlayCircle } from "react-icons/fi";
import oneshotsData from "@/data/oneshots.json";

async function getOneShot(slug: string) {
    const oneshots = oneshotsData;
    return oneshots.find((s: any) => s.slug === slug);
}

export async function generateMetadata({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}): Promise<Metadata> {
    const resolvedSearchParams = await searchParams;
    const slug = typeof resolvedSearchParams.slug === 'string' ? resolvedSearchParams.slug : "";

    if (!slug) return { title: "One Shot Not Found | DRStudents" };

    const oneshot = await getOneShot(slug);

    if (!oneshot) return { title: "One Shot Not Found | DRStudents" };

    return {
        title: `${oneshot.title} | DRStudents`,
        description: oneshot.description || `Watch ${oneshot.title} One Shot by ${oneshot.teacher}.`,
        keywords: ["neet", "oneshot", "video", "drstudents", oneshot.title, oneshot.teacher],
    };
}

export default async function OneShotPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const resolvedSearchParams = await searchParams;
    const slug = typeof resolvedSearchParams.slug === 'string' ? resolvedSearchParams.slug : "";

    if (!slug) {
        notFound();
    }

    const oneshot = await getOneShot(slug);

    if (!oneshot) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white font-poppins pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "VideoObject",
                        "name": oneshot.title,
                        "description": oneshot.description,
                        "thumbnailUrl": [`https://drstudents.com${oneshot.image}`],
                        "uploadDate": new Date().toISOString(), // Should be oneshot.startDate ideally formatted
                        "author": {
                            "@type": "Person",
                            "name": oneshot.teacher
                        }
                    }),
                }}
            />
            {/* Video Hero Section */}
            <div className="bg-black text-white py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="aspect-video w-full bg-gray-900 rounded-2xl overflow-hidden relative shadow-2xl border border-gray-800 mb-8 flex items-center justify-center group cursor-pointer">
                        {/* Placeholder for Video Player */}
                        <Image
                            src={oneshot.image}
                            alt={oneshot.title}
                            fill
                            className="object-cover opacity-60 group-hover:opacity-40 transition"
                            priority
                        />
                        <FiPlayCircle className="absolute text-white w-20 h-20 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition" />
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{oneshot.title}</h1>

                    <div className="flex flex-wrap gap-6 text-sm text-gray-300 mb-6">
                        <div className="flex items-center gap-2">
                            <FiUser className="text-yellow-400" size={18} />
                            <span>Teacher: {oneshot.teacher}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className={`px-2 py-0.5 rounded text-xs font-bold ${oneshot.teacherStatus === 'LIVE' ? 'bg-red-600 text-white' : 'bg-blue-600 text-white'}`}>
                                {oneshot.teacherStatus}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FiCalendar className="text-yellow-400" size={18} />
                            <span>Published: {oneshot.startDate}</span>
                        </div>
                    </div>

                    <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">
                        {oneshot.description}
                    </p>
                </div>
            </div>

            {/* Additional Content / Related Videos could go here */}
            <div className="max-w-6xl mx-auto px-6 py-12">
                <h2 className="text-2xl font-bold mb-6">Session Details</h2>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <p className="text-gray-700">
                        This One Shot session covers the complete chapter of <strong>{oneshot.title}</strong>.
                        Perfect for quick revision and concept strengthening before your exams.
                        Make sure to take notes and solve the practice problems provided at the end of the session.
                    </p>
                </div>
            </div>
        </div>
    );
}
