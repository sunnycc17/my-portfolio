"use client";

import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { Sling as Hamburger } from "hamburger-react";

const navItems: string[] = ["Welcome", "About", "Skills", "Projects", "Contact"];

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [currentSection, setCurrentSection] = useState<string>("");

  const handleScroll = (id: string) => {
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
        return el ? el.offsetTop <= pos && pos < el.offsetTop + el.offsetHeight : false;
      });

      setCurrentSection(current || "");
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Shared position for hamburger toggles
  const hamburgerPosition = "absolute top-6 right-4";

  return (
    <header className="fixed top-0 z-30 w-full">
      <div className="backdrop-blur-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-center p-6 sm:p-4 relative">
          {/* Mobile toggle (navbar) */}
          <div className={`lg:hidden ${hamburgerPosition}`}>
            <Hamburger
              toggled={open}
              toggle={setOpen}
              size={24}
              duration={0.5}
              label={open ? "Close menu" : "Open menu"}
            />
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
                    "relative cursor-pointer rounded-xl px-5 py-2 text-xl transition-all duration-300",
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

      {/* Overlay */}
      <div
        className={clsx(
          "fixed inset-0 bg-black/40 z-20 transition-opacity duration-500 lg:hidden",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={() => setOpen(false)}
      />

      {/* Mobile sidebar sliding from right */}
      <div
        className={clsx(
          "lg:hidden fixed top-0 right-0 h-full z-30 w-64 overflow-hidden px-6 py-6 sm:max-w-sm sidebar shadow-lg transition-transform duration-500 ease-in-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Hamburger inside sidebar (aligned same as navbar toggle) */}
        <div className={hamburgerPosition}>
          <Hamburger
            toggled={open}
            toggle={setOpen}
            size={24}
            duration={0.5}
            label="Close menu"
          />
        </div>

        <div className="flow-root mt-16">
          <div className="divide-y divide-[#FF9F1C] text-left">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => handleScroll(item)}
                className={clsx(
                  "block w-full px-4 py-6 text-lg font-semibold text-white text-left transform transition duration-500",
                  open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
                )}
                style={{
                  transitionDelay: `${index * 100}ms`, // stagger items
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
