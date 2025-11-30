"use client";

export default function AdminTopbar() {
    return (
        <header className="h-16 bg-black border-b border-white/10 flex items-center justify-between px-8 sticky top-0 z-40 ml-64">
            <h2 className="text-lg font-medium text-gray-300">Welcome back, Ajay</h2>
            <div className="flex items-center gap-4">
                <button className="text-sm text-gray-400 hover:text-white transition-colors">
                    Logout
                </button>
            </div>
        </header>
    );
}
