import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="w-full bg-linear-to-br p-4 text-center text-[0.9rem] sm:text-base font-light tracking-wide">
      <span className="block">
        &copy;{" "}
        <span id="year" className="mr-1">
          2025
        </span>
        Sunny | All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
