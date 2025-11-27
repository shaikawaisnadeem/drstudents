'use client'
import { Button } from "./button";
import { useRouter } from "next/navigation";
export default function Joincommunitybtn() {
    const router = useRouter();
    const handleJoinMentorship = ()=> {
        router.push('/join-our-mentorship');
    }
    return (
        <Button
        onClick={handleJoinMentorship}
                className="rounded-full bg-white text-black px-6 py-4 text-[14px] shadow-sm
             hover:bg-neutral-100 transition-all duration-200 cursor-pointer font-medium">
                Join Our Mentorship
            </Button>
    )
}