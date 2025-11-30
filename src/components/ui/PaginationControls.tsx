"use client";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useRouter, useSearchParams } from "next/navigation";

export default function PaginationControls({
    currentPage,
    totalPages,
}: {
    currentPage: number;
    totalPages: number;
}) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handlePageChange = (newPage: number) => {
        if (newPage < 1 || newPage > totalPages) return;

        const params = new URLSearchParams(searchParams.toString());
        params.set("page", newPage.toString());
        router.push(`?${params.toString()}`);
    };

    return (
        <div className="flex gap-3 items-center text-black">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage <= 1}
                className={`w-10 h-10 flex items-center justify-center border rounded-full shadow transition ${currentPage <= 1
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white hover:bg-gray-100 cursor-pointer"
                    }`}
            >
                <FiChevronLeft size={20} />
            </button>

            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
                className={`w-10 h-10 flex items-center justify-center rounded-full shadow transition ${currentPage >= totalPages
                        ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                        : "bg-black text-white hover:bg-black/80 cursor-pointer"
                    }`}
            >
                <FiChevronRight size={20} />
            </button>
        </div>
    );
}
