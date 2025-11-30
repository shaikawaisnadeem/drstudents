"use client";

import { useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef<any>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
          } else {
            entry.target.classList.remove("reveal-active");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return ref;
}
