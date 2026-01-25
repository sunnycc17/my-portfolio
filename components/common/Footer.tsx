import React, { FC } from "react";

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-linear-to-br py-4 text-center text-[0.9rem] sm:text-base font-light tracking-wide">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between  mx-auto">
        {/* Left: copyright */}
        <span>© {year} Sunny | All rights reserved.</span>

        {/* Right: links */}
        <nav className="flex gap-4 justify-center">
          <a
            href="/blog"
            className="hover:text-orange-400 hover:opacity-80 transition"
          >
            Blog
          </a>

          <a
            href="/credits"
            className="hover:text-orange-400 hover:opacity-80 transition"
          >
            Credits
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
