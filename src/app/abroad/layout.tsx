import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Study Abroad | DrStudents",
    description: "Explore opportunities to study medicine and engineering abroad with expert guidance.",
    openGraph: {
        title: "Study Abroad | DrStudents",
        description: "Your gateway to international education.",
        type: "website",
    },
};

export default function AbroadLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
