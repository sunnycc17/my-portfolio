"use client";

import React, { FC } from "react";

const AnimatedFlowers: FC = () => {
  return (
    <div className="relative flex justify-center items-center w-full max-w-[300px] h-[200px] md:h-[520px] md:[700px] mx-auto pointer-events-none overflow-visible">
      {/* Top-right */}
      <img
        src="/flower2.svg"
        alt=""
        className="absolute w-56 h-56 md:w-80 md:h-80 -top-20 -right-10 md:top-0 md:right-0 animate-blob drop-shadow-sm drop-shadow-black"
      />

      {/* Bottom-left */}
      <img
        src="/flower2.svg"
        alt=""
        className="absolute w-28 h-28 bottom-8 -right-4 md:w-60 md:h-60 md:bottom-15 md:right-60 animate-blob animation-delay-1500 drop-shadow-sm drop-shadow-black"
      />

      {/* Mid-right */}
      <img
        src="/flower2.svg"
        alt=""
        className="absolute w-36 h-36 top-15 left-4 md:w-40 md:h-40 md:top-6/12 md:left-12 animate-blob animation-delay-3000 drop-shadow-sm drop-shadow-black"
      />

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(14px, -20px) scale(1.05);
          }
          66% {
            transform: translate(-10px, 12px) scale(0.95);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }
        .animate-blob {
          animation: blob 18s infinite;
          will-change: transform;
        }
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </div>
  );
};

export default AnimatedFlowers;
