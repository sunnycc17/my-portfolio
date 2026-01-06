"use client";

import React, { FC } from "react";
import Masonry from "react-masonry-css";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  width: number;
  height: number;
  link: string;
}

const projects: Project[] = [
  {
    title: "Piano Lessons",
    description: "• NextJs • Tailwind • CSS • React • Vercel",
    image: "/cooli.webp",
    width: 800,
    height: 450,
    link: "https://cooli-eight.vercel.app/",
  },
  {
    title: "Botany Book",
    description: "• React • TypeScript • Algolia API",
    image: "/project-moon.webp",
    width: 800,
    height: 450,
    link: "https://sunnycc17.github.io/Magical-Botany-Guide/",
  },
  {
    title: "Bodybuilding Coach",
    description: "• NextJs • Tailwind • React • TypeScript • Vercel",
    image: "/arne.webp",
    width: 800,
    height: 450,
    link: "https://arne-kappa.vercel.app/",
  },
];

const breakpointColumnsObj = {
  default: 2,
  1024: 2,
  640: 1,
};

const ProjectsSection: FC = () => {
  return (
    <section id="Projects" className="py-24 md:py-32 lg:py-40">
      <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl relative mb-4">
        <span className="relative inline-block ml-4">
          <span className="absolute -left-5 top-1/2 -translate-y-1/2 h-12 w-1 border-colour" />
          Projects
        </span>
      </h2>

      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-4 highlight-secondary">
        These sites showcase design and experience with clients.
      </h3>

      <div className="text-xl md:text-2xl leading-relaxed space-y-2 mb-12">
        <p>
          I actively experiment with new ideas and implement based on feedback.
        </p>
        <p>
          They are built with{" "}
          <span className="highlight-primary">reusable </span>components and{" "}
          <span className="highlight-primary">scalable </span>
          front-end architecture.
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
              alt=""
              aria-hidden="true"
              width={project.width}
              height={project.height}
              className="w-full h-auto object-cover transition-opacity duration-200 group-hover:opacity-70 rounded-lg"
              priority={index < 2}
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
};

export default ProjectsSection;
