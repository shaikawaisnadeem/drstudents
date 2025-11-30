import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Top Medical & Engineering Colleges | DrStudents",
    description: "Explore top rated medical and engineering colleges in India. Filter by state and stream to find your dream college.",
    keywords: ["medical colleges", "engineering colleges", "NEET", "JEE", "top colleges india"],
    openGraph: {
        title: "Top Medical & Engineering Colleges | DrStudents",
        description: "Find the best colleges for your career.",
        type: "website",
    },
};

export default function TopCollegesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
