"use client";

export default function AnimatedFlowers() {
  return (
    <div className="flex-1 relative w-full h-96 md:h-full mt-12 md:mt-0 pointer-events-none">
      <img
        src="/flower.svg"
        alt=""
        className="absolute w-80 h-80 top-10 right-10 animate-blob hover:scale-105 transition-transform duration-500"
      />

      <img
        src="/flower.svg"
        alt=""
        className="absolute w-64 h-64 bottom-20 left-1/4 animate-blob animation-delay-1500 hover:scale-105 transition-transform duration-500"
      />

      <img
        src="/flower.svg"
        alt=""
        className="absolute w-40 h-40 top-1/3 left-2/3 animate-blob animation-delay-3000 hover:scale-105 transition-transform duration-500"
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
