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
        <span
          id="element"
          className="inline h-1 text-lg sm:text-xl md:text-2xl tracking-wide text-purple-300"
        >
          &nbsp;
        </span>
      </div>

      <div
        className="relative flex flex-wrap justify-center gap-6 md:gap-10 pt-7 mt-12"
        data-aos="fade-up"
      >
        <a
          href="/pages/resume"
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          className="inline-block bg-linear-to-r from-purple-600 via-purple-700 to-purple-800 text-white px-10 md:px-14 py-3 md:py-4 rounded-2xl font-semibold tracking-wide transition-all duration-500 ease-in-out hover:from-purple-500 hover:via-purple-600 hover:to-purple-700 active:scale-95 cursor-pointer text-center shadow-[0_6px_0_#4b0082] hover:shadow-[0_4px_0_#4b0082] active:shadow-[0_0_0_#4b0082] active:translate-y-1.5 transform perspective-1000"
        >
          Resume
        </a>

        <a
          href="#Projects"
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          className="inline-block bg-linear-to-rfrom-purple-600 via-purple-700 to-purple-800 text-white px-10 md:px-14 py-3 md:py-4 rounded-2xl font-semibold tracking-wide transition-all duration-500 ease-in-out hover:from-purple-500 hover:via-purple-600 hover:to-purple-700 active:scale-95 cursor-pointer text-center shadow-[0_6px_0_#4b0082] hover:shadow-[0_4px_0_#4b0082] active:shadow-[0_0_0_#4b0082] active:translate-y-1.5 transform perspective-1000"
        >
          Projects
        </a>
      </div>
    </section>
  );
}
