"use client";

import Link from "next/link";
import { ArrowLeft } from "../shared/icons/arrow";
import { usePathname } from "next/navigation";
import useScroll from "@/lib/hooks/use-scroll";

export default function NavBar() {
  const pathname = usePathname();
  const scrolled = useScroll(50);

  return (
    <>
      <div
        className={`fixed top-0 z-30 border${
          scrolled
            ? "border-zinc-800 bg-zinc-900 backdrop-blur-xl"
            : "border-transparent"
        } flex h-12 w-screen animate-fade-up items-center px-8 transition-all md:h-16`}
      >
        <Link href=".">
          <ArrowLeft
            className={`${
              pathname.endsWith("/") ? "opacity-0" : ""
            } h-6 w-6 text-stone-500 hover:text-stone-400 md:h-8 md:w-8`}
          />
        </Link>
        <div className="flex w-full items-center justify-center space-x-5 md:space-x-10">
          <Link
            href="/projects"
            className="font-display text-stone-500 hover:text-stone-400 md:text-xl"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="font-display text-stone-500 hover:text-stone-400 md:text-xl"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="font-display text-stone-500 hover:text-stone-400 md:text-xl"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
