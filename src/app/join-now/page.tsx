import JoinForm from "@/components/join-now/JoinForm";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Now | DrStudents",
  description: "Sign up for DrStudents mentorship and guidance program.",
};

export default function JoinOurMentorshipPage() {
  return (
    <div className="min-h-screen bg-white grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side: Form */}
      <div className="w-full h-full flex items-center justify-center bg-white">
        <JoinForm />
      </div>

      {/* Right Side: Banner Image */}
      <div className="hidden lg:block relative w-full h-full min-h-screen">
        <Image
          src="/joinmentorship.jpg"
          alt="join mentorship logo"
          priority
          fill
          className="object-cover object-center"
          placeholder="blur"
          blurDataURL="/joinmentorship.jpg"
        />
        <div className="flex items-center justify-center absolute top-10 right-10 z-10">
          <Image src="/drstudents.png" width={100} height={120} priority alt="dr-students-png" className="drop-shadow-lg" />
          <h1 className="font-poppins text-2xl font-semibold ml-[-22px] text-white drop-shadow-md">Drstudents</h1>
        </div>
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </div>
    </div>
  );
}
