export default function AboutSection() {
  return (
    <section
      id="About"
      className="relative min-h-screen flex flex-col md:flex-row items-start justify-start py-24"
    >
      <div className="relative z-10 flex-1 flex flex-col items-start justify-start space-y-6 md:pr-12 max-w-4xl text-left">
        <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl relative mb-4">
          <span className="relative inline-block ml-4">
            <span className="absolute -left-5 top-1/2 -translate-y-1/2 h-12 w-1 border-colour" />
            About
          </span>
        </h2>

        <h3
          data-aos="fade-up"
          className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-5 highlight-secondary"
        >
          I like building things and solving problems.
        </h3>

        <div className="text-xl md:text-2xl leading-relaxed space-y-2">
          <p>
            Performance, efficiency and aesthetics drive the way I
            approach every project.
          </p>

          <p>
            I’m naturally curious and always digging into how systems work. When
            I was younger, that curiosity pointed me toward biology. Now it’s
            directed at software and machines.
          </p>

          <p>
            My core strengths:
            <span className="highlight-primary font-semibold">
              {" "}
              persistence{" "}
            </span>
            and
            <span className="highlight-primary font-semibold">
              {" "}
              methodical problem-solving{" "}
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
