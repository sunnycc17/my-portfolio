export default function Skills() {
  return (
    <section data-aos="fade-up" className="my-20 text-left text-white/90">
      <h2 className="mb-8 border-l-4 border-purple-400 pl-4 text-3xl font-semibold sm:text-4xl lg:text-5xl hover:text-purple-300 transition">
        Skills
      </h2>
      <div className="space-y-4">
        {[
          "HTML – Creating the structure of web pages with semantic markup.",
          "CSS – Styling web pages to look good with layouts, colors, and animations.",
          "JavaScript – Building interactivity and logic into websites.",
          "React – Developing user interfaces with reusable components.",
          "TypeScript – Adding static typing to JavaScript for better scalability.",
          "Tailwind CSS – Utilizing utility-first CSS for fast UI development.",
          "Bootstrap – Styling responsive websites with pre-built components.",
          "Vite – Speeding up development with this next-gen build tool.",
          "Git – Version control for tracking changes and collaborating on projects.",
        ].map((skill, i) => (
          <p key={i}>
            <strong className="text-blue-200">{skill.split(" – ")[0]}</strong> –{" "}
            {skill.split(" – ")[1]}
          </p>
        ))}
      </div>
    </section>
  );
}
