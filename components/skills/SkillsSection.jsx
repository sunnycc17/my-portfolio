export default function SkillsSection() {
  return (
    <section
      id="Skills"
      className="relative min-h-screen flex flex-col md:flex-row items-start justify-start py-24 mb-32"
    >
      <div className="relative z-10 flex-1 flex flex-col items-start justify-start space-y-6 md:pr-12 max-w-4xl text-left">
        {/* Heading */}
        <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl relative mb-4">
          <span className="relative inline-block ml-4">
            <span className="absolute -left-5 top-1/2 -translate-y-1/2 h-12 w-1 border-colour" />
            Toolbox
          </span>
        </h2>

        {/* Subheading */}
        <h3 className="highlight-secondary text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-5">
          I love using Tailwind, React, Next and Vercel.
        </h3>

        {/* Body text */}
        <div className="text-xl md:text-2xl leading-relaxed space-y-2">
          <p>Tailwind enables fast, structured styling within the markup.</p>
          <p>
            React is great for scaling projects and DRY with its components.
          </p>
          <p className="font-medium">
            Next and Vercel are just amazing. They provide so many cool features
            and insights.
          </p>
        </div>
        {/* SKILLS */}
        <div className="w-full space-y-6 my-10">
          {/* FRONTEND */}
          <div className="space-y-4">
            <h4 className="font-bold text-2xl sm:text-3xl md:text-4xl">
              Front-End
            </h4>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-10 pl-28 md:pl-36 pt-6">
              <SkillItem logo="html.svg" label="HTML" />
              <SkillItem logo="css.svg" label="CSS" />
              <SkillItem logo="javascript.svg" label="Javascript" />
              <SkillItem logo="typescript.svg" label="Typescript" />
              <SkillItem logo="tailwind.svg" label="Tailwind" />
              <SkillItem logo="react.svg" label="React" />
              <SkillItem logo="nextjs.svg" label="Next.js" />
            </div>
          </div>

          {/* BACKEND */}
          <div className="space-y-4">
            <h4 className="font-bold text-2xl sm:text-3xl md:text-4xl">
              Back-End
            </h4>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-10 pl-28 md:pl-36 pt-6">
              <SkillItem logo="node.svg" label="Node.js" />
              <SkillItem logo="docker.svg" label="Docker" />
              <SkillItem logo="rest.svg" label="REST API" />
            </div>
          </div>

          {/* TOOLS */}
          <div className="space-y-4">
            <h4 className="font-bold text-2xl sm:text-3xl md:text-4xl">
              Tools
            </h4>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-10 pl-28 md:pl-36 pt-6">
              <SkillItem logo="git.svg" label="Git" />
              <SkillItem logo="github.svg" label="GitHub" />
              <SkillItem logo="vercel.svg" label="Vercel" />
              <SkillItem logo="linux.svg" label="Linux" />
              <SkillItem logo="figma.svg" label="Figma" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillItem({ logo, label, highlight }) {
  return (
    <div className="flex items-center gap-4">
      <img src={logo} alt={label} className="h-14 w-14" />
      <span
        className={`text-xl md:text-2xl font-semibold ${
          highlight ? "highlight-primary" : ""
        }`}
      >
        {label}
      </span>
    </div>
  );
}
