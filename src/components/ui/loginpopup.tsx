export default function LoginPopup() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-xs z-50">

      <div className="
        bg-white 
        p-8 
        rounded-2xl 
        shadow-xl 
        w-[90%] 
        max-w-md 
        flex 
        flex-col 
        items-center 
        gap-6
      ">

        <h1 className="font-poppins text-3xl font-semibold text-center">
          Join Our Community
        </h1>

        <input
          placeholder="Enter Your Email"
          className="
            w-full 
            px-4 
            py-3 
            border 
            rounded-lg 
            outline-none 
            font-outfit 
            text-[16px]
            focus:border-black
            transition
          "
        />

        <button
          className="
            w-full 
            py-3 
            bg-black 
            text-white 
            rounded-full 
            font-outfit 
            text-[16px]
            font-medium
            hover:bg-black/90
            transition-all
            shadow-sm 
            hover:shadow-md
          "
        >
          Login
        </button>
    <p className="text-center text-sm text-black/60">
        Get exclusive updates, free mentorship resources, and early access to test series.
    </p>
      </div>

    </div>
  );
}
