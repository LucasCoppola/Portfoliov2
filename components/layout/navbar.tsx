"use client";

import Link from "next/link";
import Arrow from "../shared/icons/arrow";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <>
      <div className="fixed top-0 z-30 mt-10 flex h-16 w-screen animate-fade-up items-center bg-white/0 px-8 transition-all">
        <Link href="..">
          <Arrow
            className={`${
              pathname.endsWith("/") ? "opacity-0" : ""
            } h-8 w-8 text-stone-500 hover:text-stone-400`}
          />
        </Link>
        <div className="flex w-full items-center justify-center space-x-10">
          <Link
            href="/projects"
            className="font-display text-2xl text-stone-500 hover:text-stone-400"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="font-display text-2xl text-stone-500 hover:text-stone-400"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="font-display text-2xl text-stone-500 hover:text-stone-400"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
