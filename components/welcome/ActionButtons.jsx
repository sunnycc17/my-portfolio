"use client";

import Link from "next/link";

export default function ActionButtons() {
  return (
    <div className="flex gap-6 mt-6">
      <Link
        href="/resume.pdf"
        type="application/pdf"
        prefetch={false}
        id="btn1"
        className="px-8 md:px-12 py-3 md:py-4 rounded-2xl
        font-semibold tracking-wide transform transition-transform duration-150
        active:translate-y-[3px] hover:brightness-110 focus:outline-none
        focus-visible:ring-2 focus-visible:ring-offset-2"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open resume (PDF) in a new tab"
        title="Open resume (PDF)"
      >
        {" "}
        Resume (PDF)
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
