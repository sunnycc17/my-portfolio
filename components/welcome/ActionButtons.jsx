"use client";

import Link from "next/link";

export default function ActionButtons() {
  return (
    <div className="flex gap-6 mt-6">
      <Link
        href="/resume"
        id="btn1"
        className="
           px-8 md:px-12 py-3 md:py-4 rounded-2xl font-semibold tracking-wide
           transform transition-transform duration-150
          active:translate-y-[3px] 
          hover:brightness-110
        "
      >
        Resume
      </Link>

      <Link
        href="#Projects"
        id="btn2"
        className="
          px-8 md:px-12 py-3 md:py-4 rounded-2xl font-semibold tracking-wide
          transform transition-transform duration-150
          active:translate-y-[3px]
          hover:brightness-110
        "
      >
        Projects
      </Link>
    </div>
  );
}
