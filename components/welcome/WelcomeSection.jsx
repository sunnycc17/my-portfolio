import TypedText from "./TypedText";
import ActionButtons from "./ActionButtons";
import AnimatedFlowers from "./AnimatedFlowers";

export default function WelcomeSection() {
  return (
    <section
      id="Welcome"
      className="relative h-screen flex flex-col md:flex-row items-center justify-center overflow-visible"
    >
      <div className="absolute inset-0 pointer-events-none select-none"></div>

      <div className="relative z-10 flex-1 flex flex-col items-start justify-center space-y-6 md:pr-12">
        <h2
          id="hw"
          className=" font-bold uppercase tracking-wide text-sm md:text-base"
        >
          Hello & Welcome
        </h2>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight md:leading-snug">
          I'm Krista, <br /> building{" "}
          <span className="highlight-secondary"> dynamic web experiences</span>.
        </h1>

        <kbd className="text-lg md:text-2xl h-10 flex items-center ">
          <TypedText
            strings={[
              "Front-End Developer.",
              "Linux Enthusiast.",
              "Problem Solver.",
            ]}
          />
        </kbd>

        <ActionButtons />
      </div>

      <AnimatedFlowers />
    </section>
  );
}
