export default function ContactSection() {
  return (
    <section
      id="Contact"
      className="relative h-screen flex flex-col items-start justify-center px-6 md:px-16 pt-24 overflow-hidden"
    >
      <div className="relative z-10 flex flex-col items-start justify-center space-y-8 max-w-3xl">
        {/* Heading */}
        <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl relative mb-4">
          <span className="relative inline-block ml-4">
            {" "}
            {/* moved 1rem to the right */}
            <span className="absolute -left-5 top-1/2 -translate-y-1/2 h-12 w-1 border-colour" />
            Contact
          </span>
        </h2>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight md:leading-snug">
          Let’s work together.
        </h1>

        <p className="text-lg md:text-2xl leading-relaxed">
          I’d love to hear about your favourite sandwich.
        </p>

        {/* Contact links with SVG + text */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 pt-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/kristina-vogli-9227042a6/"
            target="_blank"
            aria-label="LinkedIn"
            className="flex items-center gap-3 rounded-full border-2 border-white px-4 py-3 transition-transform duration-300 hover:scale-105 active:scale-95 highlight-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.5S3.34 9.5 4.98 9.5 7.96 8.16 7.96 6.5 6.62 3.5 4.98 3.5zM2.4 21h5.16V10.5H2.4V21zM9.84 10.5v10.5h5.16v-5.7c0-3.04 3.96-3.28 3.96 0V21h5.16v-6.48c0-5.22-5.64-5.03-6.72-2.46V10.5H9.84z" />
            </svg>
            <span className="text-lg font-medium">LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/sunnycc17"
            target="_blank"
            aria-label="GitHub"
            className="flex items-center gap-3 rounded-full border-2 border-white px-4 py-3 transition-transform duration-300 hover:scale-105 active:scale-95 highlight-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.49v-1.73c-2.78.61-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.26.1-2.63 0 0 .84-.27 2.75 1.02A9.57 9.57 0 0112 6.8c.85.004 1.7.11 2.5.32 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.38.1 2.63.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.76c0 .27.16.58.67.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z" />
            </svg>
            <span className="text-lg font-medium">GitHub</span>
          </a>

          {/* Email */}
          <a
            href="mailto:vogkristina@gmail.com"
            aria-label="Email"
            className="flex items-center gap-3 rounded-full border-2 border-white px-4 py-3 transition-transform duration-300 hover:scale-105 active:scale-95 highlight-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <span className="text-lg font-medium">Email</span>
          </a>
        </div>

        <h3 className="text-xl md:text-2xl font-medium pt-8">
          So reach out to me, maybe?
        </h3>
      </div>
    </section>
  );
}
