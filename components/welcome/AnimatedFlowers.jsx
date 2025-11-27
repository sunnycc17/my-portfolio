"use client";

export default function AnimatedFlowers() {
  return (
    <div className="flex-1 relative w-full h-96 md:h-full mt-12 md:mt-0 pointer-events-none overflow-visible">
      {/* Top-right flower */}
      <img
        src="/flower2.svg"
        alt=""
        className="absolute w-60 h-60 -top-4 -right-8 md:w-80 md:h-80 md:top-16 md:right-10 animate-blob hover:scale-105 transition-transform duration-500 drop-shadow-sm drop-shadow-gray-700 "
      />

      {/* Bottom-left flower */}
      <img
        src="/flower2.svg"
        alt=""
        className="absolute w-28 h-28 bottom-1 -right-4 md:w-64 md:h-64 md:bottom-28 md:left-1/4 animate-blob animation-delay-1500 hover:scale-105 transition-transform duration-500 drop-shadow-sm drop-shadow-gray-700"
      />

      {/* Center-right flower */}
      <img
        src="/flower2.svg"
        alt=""
        className="absolute w-36 h-36 top-28 right-1/2 md:w-40 md:h-40 md:top-5/12 md:left-2/3 animate-blob animation-delay-3000 hover:scale-105 transition-transform duration-500 drop-shadow-sm drop-shadow-gray-700"
      />

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(15px, -25px) scale(1.05);
          }
          66% {
            transform: translate(-10px, 10px) scale(0.95);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 20s infinite;
          will-change: transform;
        }

        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }

        @media (hover: hover) {
          .animate-blob:hover {
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}
