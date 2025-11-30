import AdminSidebar from "./components/AdminSidebar";
import AdminTopbar from "./components/AdminTopbar";
import { Toaster } from "react-hot-toast";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-black text-white font-poppins flex">
            <Toaster position="top-right" toastOptions={{
                style: {
                    background: '#333',
                    color: '#fff',
                },
            }} />
            <AdminSidebar />
            <div className="flex-1 ml-64 flex flex-col">
                <AdminTopbar />
                <main className="flex-1 p-8 overflow-y-auto bg-black">
                    {children}
                </main>
            </div>
        </div>
    );
}
