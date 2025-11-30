import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { FiUser, FiCalendar, FiClock, FiCheckCircle } from "react-icons/fi";
import HelpActions from "@/components/ui/help-actions";
import coursesData from "@/data/courses.json";

async function getCourse(slug: string) {
    const courses = coursesData;
    return courses.find((c: any) => c.slug === slug);
}

export async function generateMetadata({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}): Promise<Metadata> {
    const resolvedSearchParams = await searchParams;
    const slug = typeof resolvedSearchParams.slug === 'string' ? resolvedSearchParams.slug : "";

    if (!slug) return { title: "Course Not Found | DRStudents" };

    const course = await getCourse(slug);

    if (!course) return { title: "Course Not Found | DRStudents" };

    return {
        title: `${course.title} | DRStudents`,
        description: `Join ${course.title}. Starts ${course.startDate}. ${course.description}`,
        keywords: ["neet", "jee", "courses", "drstudents", course.title, course.category],
    };
}

export default async function CoursePage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const resolvedSearchParams = await searchParams;
    const slug = typeof resolvedSearchParams.slug === 'string' ? resolvedSearchParams.slug : "";

    if (!slug) {
        notFound();
    }

    const course = await getCourse(slug);

    if (!course) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white font-poppins pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Course",
                        "name": course.title,
                        "description": course.description,
                        "provider": {
                            "@type": "Organization",
                            "name": "Dr Students",
                            "sameAs": "https://drstudents.com"
                        },
                        "offers": {
                            "@type": "Offer",
                            "price": course.price,
                            "priceCurrency": "INR",
                            "availability": "https://schema.org/InStock"
                        }
                    }),
                }}
            />
            {/* Hero Section */}
            <div className="bg-black text-white py-16 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <span className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            {course.batchType}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">{course.title}</h1>
                        <p className="text-gray-300 text-lg mb-8 max-w-xl">
                            {course.description}
                        </p>

                        <div className="flex flex-wrap gap-6 text-sm text-gray-300 mb-8">
                            <div className="flex items-center gap-2">
                                <FiUser className="text-yellow-400" size={18} />
                                <span>For: {course.for}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FiCalendar className="text-yellow-400" size={18} />
                                <span>Starts: {course.startDate}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FiClock className="text-yellow-400" size={18} />
                                <span>Ends: {course.endDate}</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="text-3xl font-bold">₹{course.price.toLocaleString()}</span>
                            <span className="text-xl text-gray-500 line-through">₹{course.oldPrice.toLocaleString()}</span>
                            <span className="text-green-400 text-sm font-medium">
                                {Math.round(((course.oldPrice - course.price) / course.oldPrice) * 100)}% OFF
                            </span>
                        </div>

                        <button className="mt-8 bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition w-full md:w-auto">
                            Enroll Now
                        </button>
                    </div>

                    <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                        <Image
                            src={course.image}
                            alt={course.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Course Details */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
                <div className="md:col-span-2 space-y-10">

                    <section>
                        <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                        <p className="text-gray-600 leading-relaxed">
                            This comprehensive course is designed to help students excel in their exams.
                            With a structured curriculum, expert faculty, and regular assessments,
                            we ensure that every student gets the attention they need to succeed.
                            The course covers the entire syllabus in depth, with a focus on concept clarity and problem-solving skills.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">What You'll Get</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                "Live Interactive Classes",
                                "Recorded Video Lectures",
                                "Daily Practice Problems (DPP)",
                                "Weekly & Monthly Tests",
                                "Doubt Solving Sessions",
                                "Comprehensive Study Material"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <FiCheckCircle className="text-green-500 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">Course Schedule</h2>
                        <div className="border rounded-xl overflow-hidden">
                            <div className="bg-gray-100 px-6 py-3 font-semibold border-b">Weekly Plan</div>
                            <div className="divide-y">
                                {[
                                    { day: "Monday - Friday", activity: "Live Classes (4:00 PM - 8:00 PM)" },
                                    { day: "Saturday", activity: "Doubt Clearing & Revision" },
                                    { day: "Sunday", activity: "Weekly Test & Analysis" }
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between px-6 py-4">
                                        <span className="font-medium text-gray-800">{item.day}</span>
                                        <span className="text-gray-600">{item.activity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-xl border sticky top-24">
                        <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                        <p className="text-gray-600 text-sm mb-6">
                            Have questions about the course? Our academic counselors are here to help you.
                        </p>
                        <HelpActions />
                    </div>
                </div>
            </div>
        </div>
    );
}
