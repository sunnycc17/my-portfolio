export default function () {
  return (
    <section
      id="Contact"
      className="mx-auto mt-40 mb-48 max-w-5xl px-6 sm:px-12 lg:px-24 text-left"
    >
      <h2
        data-aos="fade-up"
        className="mb-10 text-5xl font-extrabold tracking-tight text-purple-100 sm:text-6xl lg:text-7xl leading-tight"
      >
        Let’s work together.
      </h2>

      <p
        data-aos="fade-up"
        className="mb-8 text-2xl font-medium text-purple-300 sm:text-3xl leading-relaxed"
      >
        But first—what’s your favorite sandwich?
      </p>

      <p
        data-aos="fade-up"
        className="mb-16 text-lg font-light leading-relaxed text-white/80 sm:text-xl"
      >
        Whether it’s a job offer, a quirky project idea, or a questionable
        sandwich combo— I’m always down for great code and great conversation.
      </p>

      <div className="mb-20 flex flex-wrap items-center gap-2 sm:gap-6">
        <a
          href="https://www.linkedin.com/in/kristina-vogli-9227042a6/"
          target="_blank"
          title="LinkedIn"
          aria-label="LinkedIn"
          data-aos="zoom-in"
          className="group flex items-center justify-center rounded-full border-2 border-white p-4 transition-all duration-300 ease-in-out hover:scale-110 hover:border-purple-400 hover:bg-purple-400/10 hover:shadow-[0_0_15px_5px_rgba(192,132,252,0.4)]"
        >
          <i
            data-lucide="linkedin"
            className="lucide h-5 w-5 sm:h-4 sm:w-4 md:h-6 md:w-6 text-white group-hover:text-purple-400 group-hover:animate-bounce"
          ></i>
        </a>

        <a
          href="https://github.com/sunnycc17"
          target="_blank"
          title="GitHub"
          aria-label="GitHub"
          data-aos="zoom-in"
          className="group flex items-center justify-center rounded-full border-2 border-white p-4 transition-all duration-300 ease-in-out hover:scale-110 hover:border-yellow-400 hover:bg-yellow-400/10 hover:shadow-[0_0_15px_#facc15]"
        >
          <i
            data-lucide="github"
            className="lucide h-5 w-5 sm:h-4 sm:w-4 md:h-6 md:w-6 text-white group-hover:text-yellow-400 group-hover:animate-bounce"
          ></i>
        </a>

        <a
          href="mailto:vogkristina@gmail.com"
          title="Email"
          aria-label="Email"
          data-aos="zoom-in"
          className="group flex items-center justify-center rounded-full border-2 border-white p-4 transition-all duration-300 ease-in-out hover:scale-110 hover:border-orange-500 hover:bg-orange-500/10 hover:shadow-[0_0_15px_#f97316]"
        >
          <i
            data-lucide="mail"
            className="lucide h-5 w-5 sm:h-4 sm:w-4 md:h-6 md:w-6 text-white group-hover:text-orange-500 group-hover:animate-bounce"
          ></i>
        </a>

        <a
          href="/pages/resume"
          title="Resume"
          aria-label="Resume"
          data-aos="zoom-in"
          className="group flex items-center justify-center rounded-full border-2 border-white p-4 transition-all duration-300 ease-in-out hover:scale-110 hover:border-green-400 hover:bg-green-400/10 hover:shadow-[0_0_15px_#4ade80]"
        >
          <i
            data-lucide="file-text"
            className="lucide h-5 w-5 sm:h-4 sm:w-4 md:h-6 md:w-6 text-white group-hover:text-green-400 group-hover:animate-bounce"
          ></i>
        </a>
      </div>

      <h3
        data-aos="fade-up"
        className="text-xl font-medium text-gray-100 sm:text-2xl"
      >
        So text me{" "}
        <em className="bg-linear-to-r from-purple-400 via-pink-400 to-yellow-300 bg-clip-text font-bold text-transparent">
          maybe?
        </em>
      </h3>
    </section>
  );
}
