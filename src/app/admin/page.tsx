import colleges from "@/data/admin/mock-colleges.json";
import testSeries from "@/data/admin/mock-test-series.json";
import blogs from "@/data/blogs.json";
import { FiBook, FiFileText, FiCheckSquare } from "react-icons/fi";

export default function AdminDashboard() {
    const stats = [
        {
            title: "Total Colleges",
            count: colleges.length,
            icon: FiBook,
            color: "bg-blue-600",
        },
        {
            title: "Total Blogs",
            count: blogs.length,
            icon: FiFileText,
            color: "bg-purple-600",
        },
        {
            title: "Total Test Series",
            count: testSeries.length,
            icon: FiCheckSquare,
            color: "bg-green-600",
        },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-white mb-2">Dashboard</h1>
                <p className="text-gray-400">Welcome to DRStudents Ajay Panel</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-center gap-4 hover:bg-white/10 transition-colors"
                    >
                        <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center text-white text-xl`}>
                            <stat.icon />
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm font-medium">{stat.title}</p>
                            <h3 className="text-3xl font-bold text-white">{stat.count}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
