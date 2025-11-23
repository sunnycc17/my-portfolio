export default function ProjectsSection() {
  const projects = [
    {
      title: "Fitness Trainer SPA",
      description: "A simple html tailwind SPA with parallax images.",
      image: "/project1.webp",
      link: "#",
    },
    {
      title: "Botany Book",
      description: "A react typescript project with Algolia API for search.",
      image: "/project2.webp",
      link: "#",
    },
  ];

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
          className="projects my-16 grid grid-cols-1 sm:grid-cols-2 gap-10"
        >
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              className="relative group w-full overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <h4 className="font-semibold text-lg">{project.title}</h4>
                <p className="text-sm">{project.description}</p>
              </div>
            </a>
          ))}
        </div>

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
