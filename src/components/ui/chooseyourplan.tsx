'use client'
import { useRouter } from "next/navigation";
export default function ChooseYourPlan() {
  const router = useRouter();
  return (
    <div className="py-16 font-poppins">
      <h1 className="text-center text-4xl font-semibold mb-14">
        Choose Your Plan
      </h1>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

        <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-1">Starter</h2>
          <p className="text-3xl font-bold mb-5">₹499</p>

          <ul className="text-gray-700 space-y-2 mb-8">
            <li>• Access core guides</li>
            <li>• Monthly mentor calls</li>
            <li>• Community forum access</li>
            <li>• Email support</li>
          </ul>

          <button
          onClick={()=> router.push('/join-now')
          }
          className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-black/90 transition">
            Join Now
          </button>
        </div>

        <div className="rounded-xl bg-black text-white p-8 shadow-lg scale-105">
          <h2 className="text-2xl font-semibold mb-1">Pro</h2>
          <p className="text-3xl font-bold mb-5">₹999</p>

          <ul className="text-gray-200 space-y-2 mb-8">
            <li>• All Starter features</li>
            <li>• Weekly mentorship sessions</li>
            <li>• Personalized insights</li>
            <li>• Direct chat with mentors</li>
          </ul>

          <button
          onClick={()=> router.push('/join-now')
          }
          className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-white/90 transition">
            Join Now
          </button>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-1">Elite</h2>
          <p className="text-3xl font-bold mb-5">₹1499</p>

          <ul className="text-gray-700 space-y-2 mb-8">
            <li>• All Pro features</li>
            <li>• Priority call scheduling</li>
            <li>• Admission tracking dashboard</li>
            <li>• 1-on-1 expert strategy</li>
          </ul>

          <button
          onClick={()=> router.push('/join-now')
          }
          className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-black/90 transition">
            Join Now
          </button>
        </div>

      </div>
    </div>
  );
}
