"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense, useRef, useEffect } from "react";
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

const streams = ["Medical", "BDS", "Nursing", "Engineering"];

function CustomSelect({
  options,
  value,
  onChange,
  placeholder
}: {
  options: string[];
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
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
    <div className="relative w-[200px]" ref={ref}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-3 w-full rounded-lg bg-white text-black font-medium cursor-pointer flex justify-between items-center select-none shadow-sm"
      >
        <span className={`truncate ${!value ? "text-gray-500" : ""}`}>
          {value || placeholder}
        </span>
        <FiChevronDown className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-lg shadow-xl z-50 max-h-48 overflow-y-auto custom-scrollbar border border-gray-100">
          <div
            className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-gray-400 text-sm border-b border-gray-50"
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
              className={`px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm transition-colors ${value === opt ? "bg-gray-50 font-semibold text-black" : "text-gray-700"
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

function SelectStateContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [state, setState] = useState(searchParams.get("state") || "");
  const [stream, setStream] = useState(searchParams.get("stream") || "");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (state && state !== "Select State") params.set("state", state);
    if (stream && stream !== "Select Stream") params.set("stream", stream);
    router.push(`/search?${params.toString()}`);
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

      <div className="flex flex-col md:flex-row items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20">
        <CustomSelect
          options={states}
          value={state}
          onChange={setState}
          placeholder="Select State"
        />

        <CustomSelect
          options={streams}
          value={stream}
          onChange={setStream}
          placeholder="Select Stream"
        />

        <button
          onClick={handleSearch}
          className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-black/90 transition shadow-md w-[200px] md:w-auto"
        >
          Search
        </button>
      </div>
    </>
  );
}

export default function SelectState() {
  return (
    <Suspense fallback={<div className="h-20 w-full bg-white/10 rounded-xl animate-pulse" />}>
      <SelectStateContent />
    </Suspense>
  );
}