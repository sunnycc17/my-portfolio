"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("");

  const navItems = ["Welcome", "About", "Skills", "Projects", "Contact"];

  // Scroll to section smoothly
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80; // set this to your header height
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setOpen(false); // close mobile menu
  };

  // Update active section on scroll
  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2; // middle of viewport
      const current = navItems.find((id) => {
        const el = document.getElementById(id);
        return (
          el &&
          el.offsetTop <= scrollPos &&
          scrollPos < el.offsetTop + el.offsetHeight
        );
      });
      setCurrentSection(current || "");
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // initial check
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
            {navItems.map((item) => {
              const isActive = currentSection === item;
              return (
                <button
                  key={item}
                  onClick={() => handleScroll(item)}
                  className={clsx(
                    "group relative rounded-xl px-5 py-2 text-xl font-light text-white/90 ease-in-out transition-all duration-300 hover:scale-105 hover:bg-purple-900/70",
                    isActive && "bg-purple-900/70 scale-105"
                  )}
                >
                  {item}
                  <span className="absolute inset-0 rounded-xl bg-purple-800/20 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100"></span>
                </button>
              );
            })}
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
              {navItems.map((item) => {
                const isActive = currentSection === item;
                return (
                  <button
                    key={item}
                    onClick={() => handleScroll(item)}
                    className={clsx(
                      "block px-4 py-4 text-lg font-semibold text-white border-purple-500 border-b",
                      isActive && "bg-purple-900/70"
                    )}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
