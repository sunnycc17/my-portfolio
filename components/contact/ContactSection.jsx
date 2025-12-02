import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      id="Contact"
      className="relative h-screen flex flex-col items-start justify-center py-24"
    >
      <div className="relative z-10 flex flex-col items-start justify-center max-w-3xl">
        <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl relative mb-4">
          <span className="relative inline-block ml-4">
            <span className="absolute -left-5 top-1/2 -translate-y-1/2 h-12 w-1 border-colour" />
            Contact
          </span>
        </h2>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight md:leading-snug highlight-secondary">
          Let’s work together.
        </h1>

        <p className="text-lg md:text-2xl leading-relaxed">
          I’d love to hear about your favourite sandwich.
        </p>

        <div className="flex flex-col sm:flex-row sm:gap-10 gap-6 pt-6">
          <Link
            href="https://www.linkedin.com/in/kristina-vogli-9227042a6/"
            target="_blank"
            className="flex items-center gap-2 text-2xl font-bold text-orange-400 group"
          >
            <span className="transform transition-all group-hover:translate-x-2">→</span>
            LinkedIn
          </Link>

          <Link
            href="https://github.com/sunnycc17"
            target="_blank"
            className="flex items-center gap-2 text-2xl font-bold text-orange-400 group"
          >
            <span className="transform transition-all group-hover:translate-x-2">→</span>
            GitHub
          </Link>

          <Link
            href="mailto:vogkristina@gmail.com"
            className="flex items-center gap-2 text-2xl font-bold text-orange-400 group"
          >
            <span className="transform transition-all group-hover:translate-x-2">→</span>
            Email
          </Link>
        </div>

        <h3 className="text-xl md:text-2xl font-medium pt-8">
          So reach out to me, maybe?
        </h3>
      </div>
    </section>
  );
}
