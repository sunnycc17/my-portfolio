export default function SkillsSection() {
  return (
    <section
      id="Skills"
      className="relative min-h-screen flex flex-col md:flex-row items-start justify-start px-6 md:px-16 py-24 overflow-hidden"
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
        <h3 className="highlight-primary text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-5">
          Core languages, tools, and frameworks shaping each build.
        </h3>

        {/* Body text */}
        <div className="text-xl md:text-2xl leading-relaxed space-y-2">
          <p>Tailwind enables fast, structured styling within the markup, keeping the flow efficient across projects.</p>
          <p>The stack expands as needed. New tools are added based on project demands.</p>
          <p className="font-medium">
            These tools aren’t just familiar—they are <span className="highlight-secondary">embedded in the workflow</span>.
          </p>
        </div>

        {/* SKILLS */}
        <div className="w-full space-y-16 md:space-y-20 mt-10">
          {/* FRONTEND */}
          <div className="space-y-6">
            <h4 className="font-bold text-2xl sm:text-3xl md:text-4xl">Front-End</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 pl-10 md:pl-24">
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
          <div className="space-y-6">
            <h4 className="font-bold text-2xl sm:text-3xl md:text-4xl">Back-End</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 pl-10 md:pl-24">
              <SkillItem logo="node.svg" label="Node.js" />
              <SkillItem logo="docker.svg" label="Docker" />
              <SkillItem logo="rest.svg" label="REST API" />
            </div>
          </div>

          {/* TOOLS */}
          <div className="space-y-6">
            <h4 className="font-bold text-2xl sm:text-3xl md:text-4xl">Tools</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 pl-10 md:pl-24">
              <SkillItem logo="git.svg" label="Git" />
              <SkillItem logo="github.svg" label="GitHub" />
              <SkillItem logo="vercel.svg" label="Vercel" />
              <SkillItem logo="linux.svg" label="Linux" />
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
      <span className={`text-xl md:text-2xl font-semibold ${highlight ? "highlight-primary" : ""}`}>{label}</span>
    </div>
  );
}
