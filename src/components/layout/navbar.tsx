"use client";

import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLinks } from "../utils/navlink";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="w-full bg-black text-white font-poppins relative z-40">

      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 lg:h-20">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/drstudents.png"
              alt="Logo"
              width={85}
              priority
              height={85}
              className="rounded-md object-cover w-10 h-10 sm:w-12 sm:h-12 lg:w-[85px] lg:h-[85px]"
            />
            <h1 className="cursor-pointer text-lg sm:text-xl lg:text-2xl font-semibold tracking-wide -ml-2 lg:ml-[-10px]">
              Drstudents
            </h1>
          </Link>
        </div>


        <div className="hidden lg:flex items-center lg:gap-6 lg:flex-wrap lg:overflow-x-auto">
          <NavLinks compact={false} activePath={pathname} />
        </div>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="lg:hidden text-2xl p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/30"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>


      {open && (
        <div className="lg:hidden">

          <div className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm" onClick={() => setOpen(false)} />

          <div
            id="mobile-menu"
            className="nav-drawer fixed z-40 left-0 right-0 top-[64px] bg-black py-6 px-4 flex flex-col gap-4 border-t border-white/10 shadow-lg max-h-[calc(100vh-64px)] overflow-auto transition-transform duration-200 ease-in-out"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src="/drstudents.png"
                  priority
                  alt="Logo"
                  width={48}
                  height={48}
                  className="rounded-md object-cover w-10 h-10"
                />
                <h2 className="text-base font-semibold">Drstudents</h2>
              </div>

              <button
                aria-label="Close menu"
                className="text-2xl p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/30"
                onClick={() => setOpen(false)}
              >
                <FiX />
              </button>
            </div>

            <NavLinks vertical activePath={pathname} />
          </div>
        </div>
      )}
    </nav>
  );
};
