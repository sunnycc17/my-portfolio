import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex flex-col px-4 md:px-6 items-center justify-center py-24 md:py-32 lg:py-40">
      <div className="relative z-10 flex flex-col items-start justify-center max-w-3xl">
        
        {/* Title */}
        <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl relative mb-4">
          <span className="relative inline-block ml-4">
            <span className="absolute -left-5 top-1/2 -translate-y-1/2 h-12 w-1 border-colour" />
            404
          </span>
        </h2>

        {/* Main message */}
        <h3 className="text-2xl md:text-4xl font-extrabold leading-tight md:leading-snug highlight-secondary">
          Page not found.
        </h3>

        {/* Subtext */}
        <p className="text-base md:text-lg leading-relaxed max-w-xl">
          The page you’re looking for doesn’t exist, was moved, or never should
          have existed in the first place.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row sm:gap-10 gap-6 pt-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-orange-400 group"
          >
            <span className="transform transition-all group-hover:translate-x-2">
              →
            </span>
            Back home
          </Link>

          <Link
            href="/#Contact"
            className="flex items-center gap-2 text-xl font-bold text-orange-400 group"
          >
            <span className="transform transition-all group-hover:translate-x-2">
              →
            </span>
            Contact me
          </Link>
        </div>

        {/* Footer line */}
        <p className="text-lg md:text-xl font-medium pt-10">
          Let’s get you somewhere useful.
        </p>
      </div>
    </section>
  );
}
