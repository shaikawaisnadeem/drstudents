"use client";

import { useState } from "react";
import mockColleges from "@/data/admin/mock-colleges.json";
import { FiEdit2, FiTrash2, FiPlus, FiX } from "react-icons/fi";
import toast from "react-hot-toast";

type Course = {
    courseName: string;
    duration: string;
    exam: string;
};

type College = {
    id: number;
    name: string;
    location: string;
    type: string;
    established: string;
    affiliation: string;
    contact: string;
    courses: Course[];
};

export default function ManageColleges() {
    const [colleges, setColleges] = useState<College[]>(mockColleges);
    const [editingCollege, setEditingCollege] = useState<College | null>(null);

    const handleDelete = (id: number) => {
        console.log("Delete college with ID:", id);
        // In a real app, we would delete from backend here
        setColleges(colleges.filter((c) => c.id !== id));
        toast.success("College Deleted");
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingCollege) {
            console.log("Updated College Object:", editingCollege);
            setColleges(colleges.map((c) => (c.id === editingCollege.id ? editingCollege : c)));
            setEditingCollege(null);
            toast.success("College Updated");
        }
    };

    const updateCourse = (index: number, field: keyof Course, value: string) => {
        if (!editingCollege) return;
        const updatedCourses = [...editingCollege.courses];
        updatedCourses[index] = { ...updatedCourses[index], [field]: value };
        setEditingCollege({ ...editingCollege, courses: updatedCourses });
    };

    const addCourse = () => {
        if (!editingCollege) return;
        setEditingCollege({
            ...editingCollege,
            courses: [...editingCollege.courses, { courseName: "", duration: "", exam: "" }],
        });
    };

    const removeCourse = (index: number) => {
        if (!editingCollege) return;
        const updatedCourses = editingCollege.courses.filter((_, i) => i !== index);
        setEditingCollege({ ...editingCollege, courses: updatedCourses });
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-white">Manage Colleges</h1>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    Add New College
                </button>
            </div>

            {/* College Table */}
            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-white/5 text-gray-400 text-sm border-b border-white/10">
                            <th className="p-4 font-medium">College Name</th>
                            <th className="p-4 font-medium">Location</th>
                            <th className="p-4 font-medium">Type</th>
                            <th className="p-4 font-medium">Contact</th>
                            <th className="p-4 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                        {colleges.map((college) => (
                            <tr key={college.id} className="hover:bg-white/5 transition-colors">
                                <td className="p-4 text-white font-medium">{college.name}</td>
                                <td className="p-4 text-gray-300">{college.location}</td>
                                <td className="p-4">
                                    <span
                                        className={`px-2 py-1 rounded text-xs font-medium ${college.type === "Government"
                                                ? "bg-green-500/20 text-green-400"
                                                : "bg-purple-500/20 text-purple-400"
                                            }`}
                                    >
                                        {college.type}
                                    </span>
                                </td>
                                <td className="p-4 text-gray-300">{college.contact}</td>
                                <td className="p-4 text-right space-x-2">
                                    <button
                                        onClick={() => setEditingCollege(college)}
                                        className="p-2 text-blue-400 hover:bg-blue-400/10 rounded-lg transition-colors"
                                        title="Edit"
                                    >
                                        <FiEdit2 />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(college.id)}
                                        className="p-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                                        title="Delete"
                                    >
                                        <FiTrash2 />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Edit Modal */}
            {editingCollege && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="bg-[#111] border border-white/10 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
                        <div className="p-6 border-b border-white/10 flex items-center justify-between sticky top-0 bg-[#111] z-10">
                            <h2 className="text-xl font-bold text-white">Edit College</h2>
                            <button
                                onClick={() => setEditingCollege(null)}
                                className="text-gray-400 hover:text-white"
                            >
                                <FiX className="text-xl" />
                            </button>
                        </div>

                        <form onSubmit={handleSave} className="p-6 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">College Name</label>
                                    <input
                                        type="text"
                                        value={editingCollege.name}
                                        onChange={(e) => setEditingCollege({ ...editingCollege, name: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">Location</label>
                                    <input
                                        type="text"
                                        value={editingCollege.location}
                                        onChange={(e) => setEditingCollege({ ...editingCollege, location: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">Established</label>
                                    <input
                                        type="text"
                                        value={editingCollege.established}
                                        onChange={(e) => setEditingCollege({ ...editingCollege, established: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">Affiliation</label>
                                    <input
                                        type="text"
                                        value={editingCollege.affiliation}
                                        onChange={(e) => setEditingCollege({ ...editingCollege, affiliation: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">Contact</label>
                                    <input
                                        type="text"
                                        value={editingCollege.contact}
                                        onChange={(e) => setEditingCollege({ ...editingCollege, contact: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-white">Courses Offered</h3>
                                    <button
                                        type="button"
                                        onClick={addCourse}
                                        className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1"
                                    >
                                        <FiPlus /> Add Course
                                    </button>
                                </div>

                                <div className="space-y-3">
                                    {editingCollege.courses.map((course, index) => (
                                        <div key={index} className="flex gap-3 items-start bg-white/5 p-3 rounded-lg">
                                            <div className="flex-1 space-y-2">
                                                <input
                                                    placeholder="Course Name"
                                                    value={course.courseName}
                                                    onChange={(e) => updateCourse(index, "courseName", e.target.value)}
                                                    className="w-full bg-black border border-white/10 rounded px-3 py-1.5 text-sm text-white focus:border-blue-500 outline-none"
                                                />
                                            </div>
                                            <div className="w-32 space-y-2">
                                                <input
                                                    placeholder="Duration"
                                                    value={course.duration}
                                                    onChange={(e) => updateCourse(index, "duration", e.target.value)}
                                                    className="w-full bg-black border border-white/10 rounded px-3 py-1.5 text-sm text-white focus:border-blue-500 outline-none"
                                                />
                                            </div>
                                            <div className="w-32 space-y-2">
                                                <input
                                                    placeholder="Exam"
                                                    value={course.exam}
                                                    onChange={(e) => updateCourse(index, "exam", e.target.value)}
                                                    className="w-full bg-black border border-white/10 rounded px-3 py-1.5 text-sm text-white focus:border-blue-500 outline-none"
                                                />
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => removeCourse(index)}
                                                className="p-2 text-red-400 hover:bg-red-400/10 rounded transition-colors mt-0.5"
                                            >
                                                <FiTrash2 size={16} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={() => setEditingCollege(null)}
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
