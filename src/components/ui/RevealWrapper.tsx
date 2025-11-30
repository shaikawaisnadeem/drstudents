"use client";
import { useReveal } from "@/hooks/useReveal";
import { ReactNode } from "react";

interface RevealWrapperProps {
    children: ReactNode;
    className?: string;
    animation?: "fade-up" | "fade-in" | "scale-in" | "blur-out";
    stagger?: boolean;
}

export default function RevealWrapper({
    children,
    className = "",
    animation = "fade-up",
    stagger = false,
}: RevealWrapperProps) {
    const ref = useReveal();

    return (
        <div
            ref={ref}
            className={`${stagger ? "reveal-group" : `reveal ${animation}`} ${className}`}
        >
            {children}
        </div>
    );
}
