export default function ProjectsSection() {
  return (
    <section
      data-aos="fade-up"
      id="Projects"
      className="my-20 flex flex-col items-center px-5"
    >
      <div className="mx-auto w-full max-w-4xl px-4">
        <h2
          data-aos="fade-up"
          className="mt-16 mb-12 w-fit border-l-4 border-purple-400 pl-4 text-start text-3xl font-semibold text-white/90 transition duration-300 ease-in-out hover:text-purple-300 sm:text-4xl lg:text-5xl"
        >
          Projects
        </h2>

        <div className="text-left text-white/90">
          <h3
            data-aos="fade-up"
            className="mb-8 text-4xl font-bold text-blue-200"
          >
            I bring ideas to life with code, creativity, and snacks.
          </h3>

          <p data-aos="fade-up" className="mb-6 text-lg leading-loose">
            Every project you’ll see below? It's the result of late nights, big
            dreams, and a borderline obsessive attention to detail.
          </p>

          <p data-aos="fade-up" className="mb-6 text-lg leading-loose">
            Whether it's a responsive landing page, a slick UI component, or a
            fully-functioning app, I build with users in mind and polish till it
            shines.
          </p>

          <p
            data-aos="fade-up"
            className="text-lg font-semibold text-purple-200"
          >
            These are my proof of growth, grit, and good taste.
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="projects my-16 grid grid-cols-1 place-items-center gap-10 sm:grid-cols-2 lg:grid-cols-2"
        >
          {/* Project cards go here */}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            data-aos="fade-up"
            target="_blank"
            href="https://github.com/sunnycc17?tab=repositories"
            className="text-xl font-semibold text-purple-300 transition hover:underline flex items-center gap-1"
          >
            Show All
            <i data-lucide="arrow-right" className="w-6 h-4"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
