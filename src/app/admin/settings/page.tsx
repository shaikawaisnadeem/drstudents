"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function AdminSettings() {
    const [settings, setSettings] = useState({
        adminName: "Ajay",
        supportEmail: "support@drstudents.com",
        whatsappNumber: "+91 98765 43210",
    });

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Updated Settings:", settings);
        toast.success("Settings Saved");
    };

    return (
        <div className="max-w-2xl">
            <h1 className="text-2xl font-bold text-white mb-6">Settings</h1>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <form onSubmit={handleSave} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400">Admin Name</label>
                        <input
                            type="text"
                            value={settings.adminName}
                            onChange={(e) => setSettings({ ...settings, adminName: e.target.value })}
                            className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-gray-400">Support Email</label>
                        <input
                            type="email"
                            value={settings.supportEmail}
                            onChange={(e) => setSettings({ ...settings, supportEmail: e.target.value })}
                            className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-gray-400">WhatsApp Number</label>
                        <input
                            type="text"
                            value={settings.whatsappNumber}
                            onChange={(e) => setSettings({ ...settings, whatsappNumber: e.target.value })}
                            className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        />
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium w-full sm:w-auto"
                        >
                            Save Settings
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
