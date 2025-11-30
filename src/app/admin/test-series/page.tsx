"use client";

import { useState } from "react";
import mockTestSeries from "@/data/admin/mock-test-series.json";
import { FiEdit2, FiTrash2, FiX, FiEdit3, FiYoutube, FiMessageCircle } from "react-icons/fi";
import toast from "react-hot-toast";

const iconMap: { [key: string]: any } = {
    FiEdit3: FiEdit3,
    FiYoutube: FiYoutube,
    FiMessageCircle: FiMessageCircle,
};

type TestSeriesItem = {
    id: number;
    title: string;
    subtitle: string;
    icon: string;
    bgColor: string;
};

export default function ManageTestSeries() {
    const [items, setItems] = useState<TestSeriesItem[]>(mockTestSeries);
    const [editingItem, setEditingItem] = useState<TestSeriesItem | null>(null);

    const handleDelete = (id: number) => {
        console.log("Delete test series item with ID:", id);
        setItems(items.filter((i) => i.id !== id));
        toast.success("Item Deleted");
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingItem) {
            console.log("Updated Test Series Item:", editingItem);
            setItems(items.map((i) => (i.id === editingItem.id ? editingItem : i)));
            setEditingItem(null);
            toast.success("Updated");
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-white">Manage Test Series</h1>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    Add New Item
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => {
                    const IconComponent = iconMap[item.icon] || FiEdit3;
                    return (
                        <div
                            key={item.id}
                            className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-4 group relative"
                        >
                            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={() => setEditingItem(item)}
                                    className="p-2 bg-black/50 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg transition-colors"
                                >
                                    <FiEdit2 />
                                </button>
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="p-2 bg-black/50 text-red-400 hover:bg-red-500 hover:text-white rounded-lg transition-colors"
                                >
                                    <FiTrash2 />
                                </button>
                            </div>

                            <div className={`w-12 h-12 rounded-lg ${item.bgColor} flex items-center justify-center text-white text-xl`}>
                                <IconComponent />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.subtitle}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {editingItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="bg-[#111] border border-white/10 rounded-xl w-full max-w-md shadow-2xl">
                        <div className="p-6 border-b border-white/10 flex items-center justify-between">
                            <h2 className="text-xl font-bold text-white">Edit Item</h2>
                            <button
                                onClick={() => setEditingItem(null)}
                                className="text-gray-400 hover:text-white"
                            >
                                <FiX className="text-xl" />
                            </button>
                        </div>

                        <form onSubmit={handleSave} className="p-6 space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Title</label>
                                <input
                                    type="text"
                                    value={editingItem.title}
                                    onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Subtitle</label>
                                <input
                                    type="text"
                                    value={editingItem.subtitle}
                                    onChange={(e) => setEditingItem({ ...editingItem, subtitle: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Icon</label>
                                <select
                                    value={editingItem.icon}
                                    onChange={(e) => setEditingItem({ ...editingItem, icon: e.target.value })}
                                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                                >
                                    <option value="FiEdit3">Edit Icon (FiEdit3)</option>
                                    <option value="FiYoutube">YouTube Icon (FiYoutube)</option>
                                    <option value="FiMessageCircle">Message Icon (FiMessageCircle)</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Background Color (Tailwind Class)</label>
                                <input
                                    type="text"
                                    value={editingItem.bgColor}
                                    onChange={(e) => setEditingItem({ ...editingItem, bgColor: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                                />
                            </div>

                            <div className="pt-4 flex justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={() => setEditingItem(null)}
                                    className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
