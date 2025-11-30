"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
    "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
    "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
    "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman & Nicobar Islands",
    "Chandigarh", "Dadra & Nagar Haveli", "Daman & Diu", "Delhi", "Jammu & Kashmir",
    "Ladakh", "Puducherry"
];

const castes = ["General", "OBC", "SC", "ST"];

function CustomSelect({
    options,
    value,
    onChange,
    placeholder,
    id
}: {
    options: string[];
    value: string;
    onChange: (val: string) => void;
    placeholder: string;
    id?: string;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative w-full" ref={ref} id={id}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="px-3 py-3 w-full border rounded-lg font-outfit bg-white text-black cursor-pointer flex justify-between items-center select-none"
            >
                <span className={`truncate ${!value ? "text-gray-500" : ""}`}>
                    {value || placeholder}
                </span>
                <FiChevronDown className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </div>

            {isOpen && (
                <div className="absolute top-full left-0 w-full mt-1 bg-white border rounded-lg shadow-lg z-50 max-h-48 overflow-y-auto custom-scrollbar">
                    <div
                        className="px-3 py-2 hover:bg-gray-50 cursor-pointer text-gray-400 text-sm border-b border-gray-50 font-outfit"
                        onClick={() => {
                            onChange("");
                            setIsOpen(false);
                        }}
                    >
                        {placeholder}
                    </div>
                    {options.map((opt) => (
                        <div
                            key={opt}
                            className={`px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm transition-colors font-outfit ${value === opt ? "bg-gray-50 font-semibold text-black" : "text-gray-700"
                                }`}
                            onClick={() => {
                                onChange(opt);
                                setIsOpen(false);
                            }}
                        >
                            {opt}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function JoinForm({ onClose }: { onClose?: () => void }) {
    const router = useRouter();
    const [caste, setCaste] = useState("");
    const [studentState, setStudentState] = useState("");

    const handleCancel = () => {
        if (onClose) {
            onClose();
        } else {
            router.back();
        }
    };

    return (
        <>
            <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #9ca3af;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }
      `}</style>

            <div className="flex flex-col justify-center items-center py-10 px-5">
                <h1 className="text-poppins font-semibold text-4xl text-center tracking-[1px] mb-5">
                    Enter Your Details
                </h1>

                <div className="w-full max-w-[450px] flex flex-col gap-5">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="student-id" className="font-poppins font-medium text-lg px-1">
                            Student Name
                        </label>
                        <input placeholder="Enter Your Name" id="student-id"
                            className="px-3 py-3 border rounded-lg font-outfit"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="student-caste" className="font-poppins font-medium text-lg px-1">
                            Caste Category
                        </label>
                        <CustomSelect
                            id="student-caste"
                            options={castes}
                            value={caste}
                            onChange={setCaste}
                            placeholder="Select Your Caste Category"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="student-rank" className="font-poppins font-medium text-lg px-1">
                            All India Rank
                        </label>
                        <input placeholder="Enter Your Rank" id="student-rank"
                            className="px-3 py-3 border rounded-lg font-outfit"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="student-marks" className="font-poppins font-medium text-lg px-1">
                            Marks
                        </label>
                        <input placeholder="Enter Your Marks" id="student-marks"
                            className="px-3 py-3 border rounded-lg font-outfit"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="student-state" className="font-poppins font-medium text-lg px-1">
                            State
                        </label>
                        <CustomSelect
                            id="student-state"
                            options={states}
                            value={studentState}
                            onChange={setStudentState}
                            placeholder="Select Your State"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="student-number" className="font-poppins font-medium text-lg px-1">
                            Contact Number
                        </label>
                        <input placeholder="Enter Your Contact Number" id="student-number"
                            className="px-3 py-3 border rounded-lg font-outfit"
                        />
                    </div>

                    <div className="flex gap-3 items-center">
                        <Button
                            className="w-full py-4 bg-black text-white rounded-full font-outfit font-medium shadow-sm hover:shadow-md hover:bg-black/90 transition-all"
                            onClick={() => {
                                // TODO: submit behavior (API call)
                            }}
                        >
                            Submit
                        </Button>

                        <button
                            onClick={handleCancel}
                            className="py-4 px-5 border rounded-full ml-2"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
