import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const CreditsSection: FC = () => {
  return (
    <section
      id="Credits"
      className="relative flex w-full flex-col md:flex-row items-center justify-between overflow-x-hidden min-h-dvh py-24"
    >
      {/* LEFT — TEXT */}
      <div className="relative z-10 flex-1 flex flex-col items-start justify-start space-y-6 md:pr-12 text-left max-w-4xl px-14 md:px-20">
        <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl relative mb-4">
          <span className="relative inline-block ml-4">
            <span className="absolute -left-5 top-1/2 -translate-y-1/2 h-12 w-1 border-colour" />
            Credits
          </span>
        </h2>

        <h3
          data-aos="fade-up"
          className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-5 highlight-secondary"
        >
          My gratitude to people and tools that always have my back.
        </h3>

        <div className="text-xl md:text-2xl leading-relaxed space-y-2">
          <p>
            First and foremost my dear friend and{" "}
            <span className="highlight-primary">mentor</span>{" "}
            <Link
              href="https://www.linkedin.com/in/victor-c-2b249414a/"
              target="_blank"
              className="font-semibold italic hover:underline underline-offset-4"
            >
              Victor Cooper
            </Link>
            . An outstanding full-stack dev with over 10 years of experience.
          </p>

          <p>
            Thanks to my friends who constantly give feedback and push me to improve.
          </p>

          <p>
            And to AI for at least twenty redesign cycles.
          </p>

          <div className="pt-8">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold text-orange-400 group"
            >
              <span className="transform transition-all group-hover:translate-x-2">
                →
              </span>
              Back home
            </Link>
          </div>
        </div>
      </div>

      {/* RIGHT — IMAGE + CAPTION */}
      <div className="flex-1 flex flex-col items-center justify-center mt-16 md:mt-0 px-10">
        <div className="relative w-72 h-72 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/toast.webp"   // replace with your image
            alt="Credits illustration"
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="mt-4 text-base md:text-lg text-center opacity-70 max-w-xs">
          Buttered_Toast approved (Victor).
        </p>
      </div>
    </section>
  );
};

export default CreditsSection;
