export default function Resume() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-24 mt-8">
      {/* EDUCATION */}
      <section
        data-aos="fade-up"
        id="Education"
        className="my-20 text-left text-white/90"
      >
        <h2 className="mb-8 border-l-4 border-purple-400 pl-4 text-3xl font-semibold sm:text-4xl lg:text-5xl hover:text-purple-300 transition">
          Education
        </h2>
        <div className="space-y-4">
          <p>
            <strong className="text-blue-200">Coding Bootcamps:</strong> The
            Odin Project & FreeCodeCamp
          </p>
          <p>
            <strong className="text-blue-200">Academic Background:</strong>{" "}
            Pharmaceutical Studies at IEK Zografou
          </p>
          <p className="font-semibold text-purple-200">
            Self-taught, always learning, always leveling up.
          </p>
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section
        data-aos="fade-up"
        id="Work"
        className="my-20 text-left text-white/90"
      >
        <h2 className="mb-8 border-l-4 border-purple-400 pl-4 text-3xl font-semibold sm:text-4xl lg:text-5xl hover:text-purple-300 transition">
          Work Experience
        </h2>
        <div className="space-y-4">
          <p>
            <strong className="text-blue-200">Freelancer:</strong> Offering
            custom websites and digital marketing services to clients.
          </p>
          <p>
            <strong className="text-blue-200">Web Dev & Marketing:</strong>{" "}
            Providing design, SEO, and brand strategy for small businesses and
            creatives.
          </p>
          <p>
            <strong className="text-blue-200">Pharmacy Work:</strong> Part-time
            position applying precision and care in a medical setting.
          </p>
          <p className="font-semibold text-purple-200">
            Tech-savvy, detail-driven, and always client-focused.
          </p>
        </div>
      </section>

      {/* SKILLS */}
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
              <strong className="text-blue-200">{skill.split(" – ")[0]}</strong>{" "}
              – {skill.split(" – ")[1]}
            </p>
          ))}
        </div>
      </section>

      {/* QUALIFICATIONS */}
      <section data-aos="fade-up" className="my-20 text-left text-white/90">
        <h2 className="mb-8 border-l-4 border-purple-400 pl-4 text-3xl font-semibold sm:text-4xl lg:text-5xl hover:text-purple-300 transition">
          Qualifications
        </h2>
        <div className="space-y-4">
          <p>
            <strong className="text-blue-200">Google Certificates:</strong>{" "}
            Completed Google Analytics, Ads, and Marketing courses.
          </p>
          <p>
            <strong className="text-blue-200">FreeCodeCamp:</strong> Earned a
            Responsive Web Design Certificate.
          </p>
        </div>
      </section>

      {/* ASPIRATIONS */}
      <section data-aos="fade-up" className="my-20 text-left text-white/90">
        <h2 className="mb-8 border-l-4 border-purple-400 pl-4 text-3xl font-semibold sm:text-4xl lg:text-5xl hover:text-purple-300 transition">
          Aspirations
        </h2>
        <div className="space-y-4">
          <p>
            <strong className="text-blue-200">JavaScript/TypeScript:</strong>{" "}
            Improve proficiency in both for building scalable apps.
          </p>
          <p>
            <strong className="text-blue-200">React:</strong> Master React’s
            advanced features and patterns.
          </p>
          <p>
            <strong className="text-blue-200">Backend Development:</strong>{" "}
            Learn about backend technologies like MongoDB, Django, and Express.
          </p>
          <p>
            <strong className="text-blue-200">Full-Stack Development:</strong>{" "}
            Eventually, become a proficient full-stack developer.
          </p>
        </div>
      </section>

      {/* BACK BUTTON */}
      <div className="flex items-center justify-start mt-12">
        <a
          href="../index.html"
          className="text-sm sm:text-base text-white/80 hover:text-white border border-purple-500 px-4 py-1 rounded transition-colors duration-200"
        >
          ← Back to Portfolio
        </a>
      </div>
    </div>
  );
}
