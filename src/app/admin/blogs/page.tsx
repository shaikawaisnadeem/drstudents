"use client";

import { useState } from "react";
import mockBlogs from "@/data/blogs.json";
import { FiEdit2, FiTrash2, FiX } from "react-icons/fi";
import toast from "react-hot-toast";

type Blog = {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string[];
    image: string;
    imageBg: string;
    category: string;
    seoDescription: string;
};

export default function ManageBlogs() {
    const [blogs, setBlogs] = useState<Blog[]>(mockBlogs);
    const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

    const handleDelete = (id: string) => {
        console.log("Delete blog with ID:", id);
        setBlogs(blogs.filter((b) => b.id !== id));
        toast.success("Blog Deleted");
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingBlog) {
            console.log("Updated Blog Object:", editingBlog);
            setBlogs(blogs.map((b) => (b.id === editingBlog.id ? editingBlog : b)));
            setEditingBlog(null);
            toast.success("Blog Updated");
        }
    };

    const handleContentChange = (value: string) => {
        if (!editingBlog) return;
        // Split by newlines to maintain array structure for mock data
        setEditingBlog({ ...editingBlog, content: value.split("\n\n") });
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-white">Manage Blogs</h1>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    Add New Blog
                </button>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-white/5 text-gray-400 text-sm border-b border-white/10">
                            <th className="p-4 font-medium">Title</th>
                            <th className="p-4 font-medium">Slug</th>
                            <th className="p-4 font-medium">Category</th>
                            <th className="p-4 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                        {blogs.map((blog) => (
                            <tr key={blog.id} className="hover:bg-white/5 transition-colors">
                                <td className="p-4 text-white font-medium">{blog.title}</td>
                                <td className="p-4 text-gray-300">{blog.slug}</td>
                                <td className="p-4">
                                    <span className="px-2 py-1 rounded text-xs font-medium bg-blue-500/20 text-blue-400">
                                        {blog.category}
                                    </span>
                                </td>
                                <td className="p-4 text-right space-x-2">
                                    <button
                                        onClick={() => setEditingBlog(blog)}
                                        className="p-2 text-blue-400 hover:bg-blue-400/10 rounded-lg transition-colors"
                                        title="Edit"
                                    >
                                        <FiEdit2 />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(blog.id)}
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

            {editingBlog && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="bg-[#111] border border-white/10 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
                        <div className="p-6 border-b border-white/10 flex items-center justify-between sticky top-0 bg-[#111] z-10">
                            <h2 className="text-xl font-bold text-white">Edit Blog</h2>
                            <button
                                onClick={() => setEditingBlog(null)}
                                className="text-gray-400 hover:text-white"
                            >
                                <FiX className="text-xl" />
                            </button>
                        </div>

                        <form onSubmit={handleSave} className="p-6 space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Title</label>
                                <input
                                    type="text"
                                    value={editingBlog.title}
                                    onChange={(e) => setEditingBlog({ ...editingBlog, title: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">Slug</label>
                                    <input
                                        type="text"
                                        value={editingBlog.slug}
                                        onChange={(e) => setEditingBlog({ ...editingBlog, slug: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">Category</label>
                                    <input
                                        type="text"
                                        value={editingBlog.category}
                                        onChange={(e) => setEditingBlog({ ...editingBlog, category: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">SEO Description</label>
                                <input
                                    type="text"
                                    value={editingBlog.seoDescription}
                                    onChange={(e) => setEditingBlog({ ...editingBlog, seoDescription: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Cover Image URL</label>
                                <input
                                    type="text"
                                    value={editingBlog.image}
                                    onChange={(e) => setEditingBlog({ ...editingBlog, image: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Content (Paragraphs separated by double newline)</label>
                                <textarea
                                    rows={8}
                                    value={editingBlog.content.join("\n\n")}
                                    onChange={(e) => handleContentChange(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 resize-y"
                                />
                            </div>

                            <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={() => setEditingBlog(null)}
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
