"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("");

  const navItems = ["Welcome", "About", "Skills", "Projects", "Contact"];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: offset, behavior: "smooth" });
    setOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + window.innerHeight / 2;

      const current = navItems.find((id) => {
        const el = document.getElementById(id);
        return (
          el && el.offsetTop <= pos && pos < el.offsetTop + el.offsetHeight
        );
      });

      setCurrentSection(current || "");
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const Hamburger = ({ active }) => (
    <div className="relative w-5 h-5">
      <span
        className={clsx(
          "absolute left-0 top-1/2 w-5 h-0.5 bg-white origin-center transition-transform duration-300",
          active ? "rotate-45" : "-translate-y-1.5"
        )}
      />
      <span
        className={clsx(
          "absolute left-0 top-1/2 w-5 h-0.5 bg-white transition-opacity duration-200",
          active ? "opacity-0" : "opacity-100"
        )}
      />
      <span
        className={clsx(
          "absolute left-0 top-1/2 w-5 h-0.5 bg-white origin-center transition-transform duration-300",
          active ? "-rotate-45" : "translate-y-1.5"
        )}
      />
    </div>
  );

  return (
    <header className="fixed top-0 z-20 w-full">
      <div className="backdrop-blur-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-center p-6 sm:p-4">
          {/* Mobile toggle */}
          <div className="absolute right-0 flex p-2 lg:hidden">
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex items-center justify-center rounded-md p-3 mt-2"
              onClick={() => setOpen(!open)}
            >
              <Hamburger active={open} />
            </button>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex lg:gap-x-4">
            {navItems.map((item) => {
              const active = currentSection === item;

              return (
                <button
                  key={item}
                  onClick={() => handleScroll(item)}
                  className={clsx(
                    "relative rounded-xl px-5 py-2 text-xl transition-all duration-300",
                    "hover:scale-110 hover:opacity-80",
                    active && "highlight-primary scale-110",
                    active &&
                      "after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-current"
                  )}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Mobile sidebar */}
      <div
        className={clsx(
          "lg:hidden sidebar fixed inset-y-0 right-0 z-10 w-64 overflow-hidden px-6 py-6 sm:max-w-sm transform transition-all duration-700 ease-in-out border-l",
          open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        )}
      >
        <div className="flex items-center justify-end mb-4">
          <button
            type="button"
            aria-label="Close menu"
            className="rounded-md"
            onClick={() => setOpen(false)}
          >
            <Hamburger active={open} />
          </button>
        </div>

        <div className="flow-root">
          <div className="divide-y divide-[#FF9F1C] text-left">
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
