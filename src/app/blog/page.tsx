import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import blogsData from "@/data/blogs.json";

async function getBlogPost(slug: string) {
    const blogs = blogsData;
    return blogs.find((b: any) => b.slug === slug);
}

export async function generateMetadata({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}): Promise<Metadata> {
    const resolvedSearchParams = await searchParams;
    const slug = typeof resolvedSearchParams.post === 'string' ? resolvedSearchParams.post : "";

    if (!slug) {
        return {
            title: "Blog | DrStudents",
            description: "Read our latest articles and guides.",
        };
    }

    const post = await getBlogPost(slug);

    if (!post) {
        return {
            title: "Blog Not Found | DrStudents",
        };
    }

    return {
        title: `${post.title} | DrStudents Blog`,
        description: post.seoDescription || post.excerpt,
        openGraph: {
            title: post.title,
            description: post.seoDescription || post.excerpt,
            type: "article",
        },
    };
}

export default async function BlogPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const resolvedSearchParams = await searchParams;
    const slug = typeof resolvedSearchParams.post === 'string' ? resolvedSearchParams.post : "";

    if (!slug) {
        notFound();
    }

    const post = await getBlogPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="font-poppins min-h-screen bg-gray-50 py-16 px-6">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": post.title,
                        "image": [`https://drstudents.com${post.image}`],
                        "datePublished": new Date().toISOString(), // Ideally this should come from the post data
                        "author": {
                            "@type": "Organization",
                            "name": "Dr Students"
                        },
                        "description": post.seoDescription || post.excerpt,
                    }),
                }}
            />
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border overflow-hidden">

                <div className={`w-full h-64 md:h-80 relative flex items-center justify-center`} style={{ backgroundColor: post.imageBg || '#f0f0f0' }}>
                    <Image
                        src={post.image}
                        alt={post.title}
                        width={200}
                        height={200}
                        priority
                        className="object-contain"
                    />
                </div>

                <div className="p-8 md:p-12">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                        {post.category}
                    </span>

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                        {post.content.map((paragraph: string, index: number) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    <div className="mt-12 pt-8 border-t">
                        <p className="text-sm text-gray-500">
                            Share this article with your friends who are preparing for medical or engineering exams.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
