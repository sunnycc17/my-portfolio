"use client";

import Masonry from "react-masonry-css";
import Image from "next/image";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Fitness Trainer SPA",
      description: "• HTML • Tailwind • CSS",
      image: "/project.webp",
      width: 800,
      height: 450, // horizontal
      link: "https://sunnycc17.github.io/arne-drinovec-coaching/#home",
    },
    {
      title: "Botany Book",
      description: "• React • TypeScript • Algolia API",
      image: "/project-moon.webp",
      width: 800,
      height: 450, // horizontal
      link: "https://sunnycc17.github.io/Magical-Botany-Guide/",
    },
    {
      title: "Sunny Delights",
      description: "• React • TypeScript • Algolia API",
      image: "/sunny-delight.webp",
      width: 800,
      height: 450, // horizontal
      link: "https://sunnycc17.github.io/E-commerce-site/",
    },
  ];

  const breakpointColumnsObj = {
    default: 2,
    1024: 2,
    640: 1,
  };

  return (
    <section id="Projects" className="min-h-screen px-6 md:px-16 py-24">
      <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl relative mb-4">
        <span className="relative inline-block ml-4">
          {" "}
          {/* moved 1rem to the right */}
          <span className="absolute -left-5 top-1/2 -translate-y-1/2 h-12 w-1 border-colour" />
          Projects
        </span>
      </h2>

      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-6 highlight-secondary">
        Focused builds shaped by clarity and structure.
      </h3>

      <div className="text-xl md:text-2xl leading-relaxed space-y-2 mb-12">
        <p>
          Projects emerge from disciplined iteration and structured execution.
        </p>
        <p>
          Solutions are refined through direct testing and reduction of
          friction.
        </p>
        <p className="font-semibold">
          Each build reflects{" "}
          <span className="highlight-primary">progression</span> , precision,
          and <span className="highlight-primary">deliberate</span> design.
        </p>
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-6"
        columnClassName="flex flex-col gap-6"
      >
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={project.width}
              height={project.height}
              className="w-full h-auto object-cover transition-opacity duration-200 group-hover:opacity-70 rounded-lg"
              priority={index < 2} // optionally preload first 2 images
            />
            <div className="mt-2">
              <div className="space-y-1">
                <h4 className="text-lg font-medium uppercase text-gray-300 tracking-wide">
                  {project.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </Masonry>

      <div className="mt-12">
        <a
          href="https://github.com/sunnycc17?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-semibold hover:underline flex items-center gap-2"
        >
          Show All
          <i data-lucide="arrow-right" className="w-6 h-4"></i>
        </a>
      </div>
    </section>
  );
}
