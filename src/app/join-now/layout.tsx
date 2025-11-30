import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Join Mentorship Program | DrStudents",
    description: "Join our expert mentorship program to guide you through your medical or engineering journey.",
    openGraph: {
        title: "Join Mentorship Program | DrStudents",
        description: "Get expert guidance for your career.",
        type: "website",
    },
};

export default function JoinNowLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
