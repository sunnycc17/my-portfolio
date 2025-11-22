"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("");

  const navItems = ["Welcome", "About", "Skills", "Projects", "Contact"];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      const current = navItems.find((id) => {
        const el = document.getElementById(id);
        return el && el.offsetTop <= scrollPos && scrollPos < el.offsetTop + el.offsetHeight;
      });
      setCurrentSection(current || "");
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 z-20 w-full">
      <div className="backdrop-blur-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-center p-6 sm:p-4">
          {/* Mobile menu button */}
          <div className="absolute right-0 flex p-2 lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Toggle menu</span>
              <div className="relative w-4 h-4">
                <span
                  className={clsx(
                    "absolute left-0 top-1/2 w-4 h-0.5 bg-white transform transition-all duration-300 ease-in-out",
                    open ? "rotate-45 -translate-y-0.5" : "-translate-y-1"
                  )}
                />
                <span
                  className={clsx(
                    "absolute left-0 top-1/2 w-4 h-0.5 bg-white transform transition-all duration-300 ease-in-out",
                    open ? "opacity-0" : "translate-y-0"
                  )}
                />
                <span
                  className={clsx(
                    "absolute left-0 top-1/2 w-4 h-0.5 bg-white transform transition-all duration-300 ease-in-out",
                    open ? "-rotate-45 translate-y-0.5" : "translate-y-1"
                  )}
                />
              </div>
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
                    "group relative rounded-xl px-5 py-2 text-xl transition-all duration-300 hover:scale-105",
                    isActive && "scale-105"
                  )}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={clsx(
          "lg:hidden fixed inset-y-0 right-0 z-10 w-64 overflow-hidden bg-[#222222] px-6 py-6 sm:max-w-sm transform transition-all duration-700 ease-in-out border-l border-[#1a1a1a]",
          open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        )}
      >
        <div className="flex items-center justify-end mb-4">
          <button type="button" className="-m-2.5 rounded-md p-2.5" onClick={() => setOpen(false)}>
            <span className="sr-only">Close menu</span>
            <div className="relative w-4 h-4">
              <span
                className={clsx(
                  "absolute left-0 top-1/2 w-4 h-0.5 bg-white transform transition-all duration-300 ease-in-out",
                  open ? "rotate-45 -translate-y-0.5" : "-translate-y-1"
                )}
              />
              <span
                className={clsx(
                  "absolute left-0 top-1/2 w-4 h-0.5 bg-white transform transition-all duration-300 ease-in-out",
                  open ? "opacity-0" : "translate-y-0"
                )}
              />
              <span
                className={clsx(
                  "absolute left-0 top-1/2 w-4 h-0.5 bg-white transform transition-all duration-300 ease-in-out",
                  open ? "-rotate-45 translate-y-0.5" : "translate-y-1"
                )}
              />
            </div>
          </button>
        </div>

        <div className="flow-root">
          <div className="divide-y divide-[#f7f751] text-left">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleScroll(item)}
                className="block w-full px-4 py-6 text-lg font-semibold text-white text-left"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
