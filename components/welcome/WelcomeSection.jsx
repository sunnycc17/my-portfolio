import Link from "next/link";
import TypedText from "./TypedText";

export default function WelcomeSection() {
  return (
    <section
      id="Welcome"
      className="relative flex h-screen flex-col items-center justify-center px-4 space-y-3"
    >
      <h1
        data-aos="zoom-in"
        className="xsm:text-lg relative border-b text-center py-4 text-4xl font-light tracking-wide sm:text-3xl md:text-5xl xl:text-6xl"
      >
        Hello, I'm Krista.
      </h1>

      <div data-aos="zoom-in" className="flex flex-row p-2 mt-7">
        <div className="relative h-8">
          <TypedText
            strings={[
              "A Front-End Developer. ",
              "A Linux Enthusiast. ",
              "A Problem Solver. ",
            ]}
          />
        </div>
      </div>

      <div
        className="relative flex flex-wrap justify-center gap-6 md:gap-10 pt-7 mt-12"
        data-aos="fade-up"
      >
        <Link
          href="/resume"
          className="inline-block bg-linear-to-r from-purple-600 via-purple-700 to-purple-800 text-white px-10 md:px-14 py-3 md:py-4 rounded-2xl font-semibold tracking-wide"
        >
          Resume
        </Link>

        <Link
          href="#Projects"
          className="inline-block bg-linear-to-r from-purple-600 via-purple-700 to-purple-800 text-white px-10 md:px-14 py-3 md:py-4 rounded-2xl font-semibold tracking-wide"
        >
          Projects
        </Link>
      </div>
    </section>
  );
}
