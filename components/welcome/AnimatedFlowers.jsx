"use client";

export default function AnimatedFlowers() {
  return (
    <div className="relative flex justify-center items-center w-full max-w-[700px] h-[150px] md:h-[520px] mx-auto pointer-events-none overflow-visible">
      {/* Top-right */}
      <img
        src="/flower2.svg"
        alt=""
        className="absolute w-40 h-40 md:w-80 md:h-80 -top-3 -right-6 md:top-0 md:right-0 animate-blob drop-shadow-sm drop-shadow-black"
      />

      {/* Bottom-left */}
      <img
        src="/flower2.svg"
        alt=""
        className="absolute w-20 h-20 bottom-8 -right-4 md:w-60 md:h-60 md:bottom-15 md:left-40 animate-blob animation-delay-1500 drop-shadow-sm drop-shadow-black"
      />

      {/* Mid-right */}
      <img
        src="/flower2.svg"
        alt=""
        className="absolute w-32 h-32 top-15 left-16 md:w-40 md:h-40 md:top-6/12 md:left-2/3 animate-blob animation-delay-3000 drop-shadow-sm drop-shadow-black"
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
}
