"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = ["Welcome", "About", "Skills", "Projects", "Contact"];

  return (
    <header className="fixed top-0 z-20 w-full">
      <div className="bg-black/60 backdrop-blur-sm">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-center p-6 sm:p-4"
          aria-label="Global"
        >
          {/* Mobile menu button */}
          <div className="absolute right-0 ml-auto flex p-2 lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:gap-x-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="group relative rounded-xl px-5 py-2 text-xl font-light text-white/90 ease-in-out transition-all duration-300 hover:scale-105 hover:bg-purple-900/70"
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute inset-0 rounded-xl bg-purple-800/20 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100"></span>
              </a>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden fixed inset-y-0 right-0 z-10 w-64 overflow-hidden border-l border-white/20 bg-black/60 px-6 py-8 backdrop-blur-sm sm:max-w-sm sm:ring-1 sm:ring-white/20 transform transition-transform duration-500 ease-in-out">
          {/* Close button */}
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile links */}
          <div className="mt-10 flow-root">
            <div className="space-y-6 text-left">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="block px-4 py-4 text-lg font-semibold text-white border-purple-500 border-b"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
