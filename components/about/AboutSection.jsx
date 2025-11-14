export default function AboutSection() {
  return (
    <section
      id="About"
      className="my-20 flex flex-col items-center justify-center gap-5 px-10 text-center"
    >
      <div className="mx-auto max-w-4xl px-4">
        <h2
          data-aos="fade-up"
          className="mt-16 mb-12 border-l-4 border-purple-400 pl-4 text-start text-3xl font-semibold text-white/90 transition duration-300 ease-in-out hover:text-purple-300 sm:text-4xl lg:text-5xl"
        >
          About Me
        </h2>

        <div className="text-left text-white/90">
          <h3
            data-aos="fade-up"
            className="mb-8 text-4xl font-bold text-blue-200"
          >
            I don’t <span className="italic">just</span> build websites.
          </h3>

          <p data-aos="fade-up" className="mb-6 text-lg leading-loose">
            I focus on efficiency and aesthetics, crafting projects that are
            easy on the eyes and flow seamlessly.
          </p>

          <p data-aos="fade-up" className="mb-6 text-lg leading-loose">
            I’ve always been fascinated by how things work. I’d open up old
            electronics and tinker around, sometimes making things explode in my
            face (don’t try this at home).
          </p>

          <p data-aos="fade-up" className="mb-6 text-lg leading-loose">
            I’m not a pro engineer, but I’m <strong>stubborn as a mule</strong>{" "}
            and <strong>resourceful as MacGyver</strong>. Those qualities set me
            apart. I’ll use any means at my disposal to tackle a problem,
            whether it’s opening my old $200 coding laptop because it wouldn’t
            charge or spending three days trying to install Arch Linux on a 10
            Mbps connection with constant installation failures and no IPv4 from
            my router.
          </p>

          <p
            data-aos="fade-up"
            className="text-lg font-semibold text-purple-200"
          >
            Resilience, curiosity, and an insatiable urge to grow. Those are my
            values.
          </p>
        </div>
      </div>
    </section>
  );
}
