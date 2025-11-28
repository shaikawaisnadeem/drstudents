"use client";

import { useEffect, useState } from "react";
import LoginPopup from "../ui/loginpopup";

export default function ScrollPopupWrapper() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (totalHeight > 0) {
        const percentage = (scrolled / totalHeight) * 100;

        // Show after 40%
        if (percentage >= 40 && !showPopup) {
          setShowPopup(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [showPopup]);

  if (!showPopup) return null;

  return <LoginPopup onClose={() => setShowPopup(false)} />;
}
