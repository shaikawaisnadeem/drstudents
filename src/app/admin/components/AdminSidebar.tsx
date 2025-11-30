"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiBook, FiFileText, FiCheckSquare, FiSettings } from "react-icons/fi";

const menuItems = [
    { name: "Dashboard", href: "/admin", icon: FiHome },
    { name: "Manage Colleges", href: "/admin/colleges", icon: FiBook },
    { name: "Manage Blogs", href: "/admin/blogs", icon: FiFileText },
    { name: "Manage Test-Series", href: "/admin/test-series", icon: FiCheckSquare },
    { name: "Settings", href: "/admin/settings", icon: FiSettings },
];

export default function AdminSidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 bg-black border-r border-white/10 h-screen fixed left-0 top-0 flex flex-col z-50">
            <div className="h-16 flex items-center px-6 border-b border-white/10">
                <h1 className="text-xl font-bold text-white tracking-wide">Ajay Panel</h1>
            </div>

            <nav className="flex-1 py-6 px-3 space-y-1">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors duration-200 ${isActive
                                ? "bg-white/10 text-white"
                                : "text-gray-400 hover:bg-white/5 hover:text-white"
                                }`}
                        >
                            <item.icon className="text-xl" />
                            <span className="font-medium">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-white/10">
                <div className="flex items-center gap-3 px-3 py-2">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                        A
                    </div>
                    <div>
                        <p className="text-sm font-medium text-white">Ajay</p>
                        <p className="text-xs text-gray-500">admin@drstudents.com</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
