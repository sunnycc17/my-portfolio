export default function ProjectsSection() {
  return (
    <section
      id="Projects"
      className="relative min-h-screen flex flex-col md:flex-row items-start justify-start px-6 md:px-16 py-24 overflow-hidden"
    >
      <div className="relative z-10 flex-1 flex flex-col items-start justify-start space-y-6 md:pr-12 max-w-4xl text-left">
        <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl relative mb-4">
          <span className="relative inline-block ml-4">
            {" "}
            {/* moved 1rem to the right */}
            <span className="absolute -left-5 top-1/2 -translate-y-1/2 h-12 w-1 border-colour" />
            Projects
          </span>
        </h2>

        <h3
          data-aos="fade-up"
          className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-5"
        >
          Focused builds shaped by clarity and structure.
        </h3>

        <div className="text-xl md:text-2xl leading-relaxed space-y-2">
          <p data-aos="fade-up">
            Projects emerge from disciplined iteration and structured execution.
          </p>

          <p data-aos="fade-up">
            Solutions are refined through direct testing and reduction of
            friction.
          </p>

          <p data-aos="fade-up" className="highlight-primary font-semibold">
            Each build reflects progression, precision, and deliberate design.
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="projects my-16 grid grid-cols-1 place-items-start gap-10 sm:grid-cols-2 lg:grid-cols-2"
        ></div>

        <div className="mt-8 flex justify-start">
          <a
            data-aos="fade-up"
            target="_blank"
            href="https://github.com/sunnycc17?tab=repositories"
            className="text-xl font-semibold hover:underline flex items-center gap-1"
          >
            Show All
            <i data-lucide="arrow-right" className="w-6 h-4"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
