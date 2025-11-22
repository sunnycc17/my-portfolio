export default function AboutSection() {
  return (
    <section
      id="About"
      className="relative min-h-screen flex flex-col md:flex-row items-start justify-start px-6 md:px-16 py-24 overflow-hidden"
    >
      <div className="relative z-10 flex-1 flex flex-col items-start justify-start space-y-6 md:pr-12 max-w-4xl text-left">
        {/* Heading */}
        <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl relative mb-4">
          <span className="relative inline-block ml-4">
            {" "}
            {/* moved 1rem to the right */}
            <span className="absolute -left-5 top-1/2 -translate-y-1/2 h-12 w-1 border-colour" />
            About
          </span>
        </h2>

        {/* Subheading */}
        <h3
          data-aos="fade-up"
          className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-5"
        >
          Every build is shaped around clear structure and purposeful design.
        </h3>

        {/* Body text */}
        <div className="text-xl md:text-2xl leading-relaxed space-y-2">
          <p data-aos="fade-up">
            I design projects that are visually clear and structurally
            efficient.
          </p>

          <p data-aos="fade-up">
            Curiosity drives my process. I dig into how things work and refine
            solutions through direct experimentation.
          </p>

          <p data-aos="fade-up">
            My strongest traits:
            <span className="highlight-primary font-semibold">
              {" "}
              persistent execution
            </span>{" "}
            and
            <span className="highlight-secondary font-semibold">
              {" "}
              adaptive problem-solving
            </span>
            .
          </p>

          <p data-aos="fade-up" className="font-medium">
            Resilience and steady iteration shape my work.
          </p>
        </div>
      </div>
    </section>
  );
}
