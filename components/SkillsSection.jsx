export default function SkillsSection() {
  return (
    <section
      id="Skills"
      className="m-5 flex flex-col items-center justify-center p-5"
    >
      <div className="mx-auto max-w-4xl px-4">
        <h2
          data-aos="fade-up"
          className="mt-16 mb-12 border-l-4 border-purple-400 pl-4 text-start text-3xl font-semibold text-white/90 transition duration-300 ease-in-out hover:text-purple-300 sm:text-4xl lg:text-5xl"
        >
          Toolbox
        </h2>

        <div className="text-left text-white/90">
          <h3
            data-aos="fade-up"
            className="mb-8 text-4xl font-bold text-blue-200"
          >
            My go-to languages, tools, and frameworks.
          </h3>

          <p data-aos="fade-up" className="mb-6 text-lg leading-loose">
            I’m a huge fan of Tailwind. It lets me style up to ten times faster
            than regular CSS, and everything lives right in the HTML, unless I
            want to customize even more, which makes working on projects super
            convenient.
          </p>

          <p data-aos="fade-up" className="mb-6 text-lg leading-loose">
            There are plenty more tools and languages I want to master, and I’m
            always ready to learn whatever’s needed.
          </p>

          <p
            data-aos="fade-up"
            className="text-lg font-semibold text-purple-200"
          >
            I don’t just know these tools, I fully integrate them into my work.
          </p>
        </div>

        <div className="relative mt-24 flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-center">
          {/* Map skills here */}
        </div>
      </div>
    </section>
  );
}
