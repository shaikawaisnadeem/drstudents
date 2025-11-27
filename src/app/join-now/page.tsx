"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function JoinOurMentorshipForm({ onClose }: { onClose?: () => void }) {
  return (
    <div className="min-h-[70vh] bg-gray-100 grid grid-cols-1 lg:grid-cols-2 rounded-lg overflow-hidden">
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
            <select id="student-caste" className="px-3 py-3 border rounded-lg font-outfit">
              <option disabled >Select Your Caste Category</option>
              <option value="general">General</option>
              <option value="obc">OBC</option>
              <option value="sc">SC</option>
              <option value="st">ST</option>
            </select>
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
            <select
              className="px-3 py-3 border rounded-lg font-outfit max-h-48 overflow-y-auto"
              id="student-state"
            >
              <option disabled selected>Select Your State</option>
              <option>Andhra Pradesh</option>
              <option>Arunachal Pradesh</option>
              <option>Assam</option>
              <option>Bihar</option>
              <option>Chhattisgarh</option>
              <option>Goa</option>
              <option>Gujarat</option>
              <option>Haryana</option>
              <option>Himachal Pradesh</option>
              <option>Jharkhand</option>
              <option>Karnataka</option>
              <option>Kerala</option>
              <option>Madhya Pradesh</option>
              <option>Maharashtra</option>
              <option>Manipur</option>
              <option>Meghalaya</option>
              <option>Mizoram</option>
              <option>Nagaland</option>
              <option>Odisha</option>
              <option>Punjab</option>
              <option>Rajasthan</option>
              <option>Sikkim</option>
              <option>Tamil Nadu</option>
              <option>Telangana</option>
              <option>Tripura</option>
              <option>Uttar Pradesh</option>
              <option>Uttarakhand</option>
              <option>West Bengal</option>
              <option>Andaman & Nicobar Islands</option>
              <option>Chandigarh</option>
              <option>Dadra & Nagar Haveli</option>
              <option>Daman & Diu</option>
              <option>Delhi</option>
              <option>Jammu & Kashmir</option>
              <option>Ladakh</option>
              <option>Puducherry</option>
            </select>
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
                /* optional close after submit:
                   if (onClose) onClose();
                */
              }}
            >
              Submit
            </Button>

            <button
              onClick={() => onClose && onClose()}
              className="py-4 px-5 border rounded-full ml-2"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      <div className="hidden lg:block relative w-full h-full">
        <Image
          src="/joinmentorship.jpg"
          alt="join mentorship logo"
          fill
          className="object-cover object-center rounded-l-3xl"
          placeholder="blur"
          blurDataURL="/joinmentorship.jpg"
        />
        <div className="flex items-center justify-center absolute top-4 right-6">
          <Image src="/drstudents.png" width={100} height={120} alt="dr-students-png" />
          <h1 className="font-poppins text-2xl font-semibold ml-[-22px] text-white">Drstudents</h1>
        </div>
      </div>
    </div>
  );
}
