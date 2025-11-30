"use client";

export default function HelpActions() {
    const handleWhatsApp = () => {
        window.open(
            "https://api.whatsapp.com/send?phone=+919876543210&text=Hello%2C%20I%20need%20help%20with%20a%20course.",
            "_blank"
        );
    };

    const handleCallBack = () => {
        const section = document.getElementById("call-section");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <button
                onClick={handleCallBack}
                className="w-full border border-black text-black py-3 rounded-lg font-medium hover:bg-black hover:text-white transition mb-3"
            >
                Request Call Back
            </button>
            <button
                onClick={handleWhatsApp}
                className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition"
            >
                Chat on WhatsApp
            </button>
        </>
    );
}
